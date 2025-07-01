import { Component, DestroyRef, effect, inject, input, signal } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { marked } from 'marked';

import { LoggerService } from "app/interfaces/logger-service.interface";

@Component({
	selector: 'markdown-viewer',
	standalone: true,
	imports: [],
	templateUrl: 'markdown-viewer.component.html',
	styleUrl: 'markdown-viewer.component.scss'
})
export class MarkdownViewerComponent {
	src = input.required<string>()
	
	private logger = inject(LoggerService);
	private http = inject(HttpClient);
	private sanitizer = inject(DomSanitizer);
	private destroyRef = inject(DestroyRef);

	renderedHtml = signal<SafeHtml | null>(null);
	error = signal<string | null>(null);

	constructor() {
		effect(() => {
			this.logger.log('Loading markdown file from: ', this.src());
			this.loadMarkdown(this.src());
		})
	}

	private loadMarkdown(path: string): void {
		this.error.set(null);
		this.renderedHtml.set(null);

		if (!path || typeof path !== 'string' || path.trim() === "") {
			this.error.set('Invalid markdown path: path is empty or invalid');
			return;
		}

		try{
			this.http.get(path.trim(), { responseType: 'text'})
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: async (md:string) => {
					try{
						const rawHtml = await marked(md);
						this.renderedHtml.set(this.sanitizer.bypassSecurityTrustHtml(rawHtml));
						this.error.set(null);
					} catch (markdownError) {
						this.error.set('Error parsing markdown content');
						this.renderedHtml.set(null);
						this.logger.error('Markdown parsing error:', markdownError);
					}
				},
				error: (error) => {
					this.error.set(`Could not load file: ${error.statusText || error.message}`);
					this.renderedHtml.set(null);
					this.logger.error('HTTP error loading markdown:', error)
				}
			});
		} catch(error){
			this.error.set('Error loading markdown file');
			this.renderedHtml.set(null);
			this.logger.error('Error loading markdown file:', error);
		}
	
	}
}