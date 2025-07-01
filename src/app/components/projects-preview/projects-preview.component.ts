import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';

import { LoggerService } from 'app/interfaces/logger-service.interface';
import { ProjectsProvider } from 'app/interfaces/projects-provider.interface';
import { Project } from 'app/models/project.interface';

@Component({
	selector: 'projects-preview',
	standalone: true,
	imports: [
		MatGridListModule,
		CommonModule,
	],
	templateUrl: 'projects-preview.component.html',
	styleUrl: 'projects-preview.component.scss',
})
export class ProjectsPreviewComponent {
	src = input.required<string>()

	private logger = inject(LoggerService);
	private projectsService = inject(ProjectsProvider);
	private router = inject(Router);

	projects: Project[] = [];

	constructor(private cdr: ChangeDetectorRef){
		this.loadProjects();
	}

	loadProjects() {
		effect(() => {
			this.logger.log('Loading projects from: ', this.src());

			this.projectsService.getProjects(this.src()).subscribe({
				next: (projects) => {
					this.logger.log('Loaded projects: ', projects)
					this.projects = projects;
					this.cdr.detectChanges;
				},
				error: (error) => {
					this.logger.log('Error loading projects: ', error);
				}
			})
		})
	}

	trackByKey(index: number, project: Project): string {
		return project.key;
	}

	onProjectClick(project: Project){
		this.logger.log("Not implemented--path: ", project.mdPath);
	}

	getGridConfig(index: number): {cols: number, rows: number} {
		const configs = [
			{cols: 3, rows: 2}, // 1
			{cols: 1, rows: 1}, // 2
			{cols: 1, rows: 1}, // 3

			{cols: 2, rows: 1}, // 4
			{cols: 2, rows: 2}, // 5
			{cols: 2, rows: 2}, // 6
			{cols: 1, rows: 1}, // 7
			{cols: 1, rows: 1}, // 8

			{cols: 1, rows: 1}, // 9
			{cols: 3, rows: 2}, // 10
			{cols: 1, rows: 1}, // 11
		];

		return configs[index % configs.length] || {cols: 1, rows: 1};
	}
}