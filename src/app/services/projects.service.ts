import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map} from "rxjs";

import { Project } from "app/models/project.interface";
import { ProjectsProvider } from "app/interfaces/projects-provider.interface";
import { LoggerService } from "app/interfaces/logger-service.interface";

@Injectable({
	providedIn: 'root'
})
export class ProjectsService implements ProjectsProvider {
	private logger = inject(LoggerService);
	private http = inject(HttpClient);

	getProjects(jsonPath: string): Observable<Project[]> {
		this.logger.log('Getting projects from: ', jsonPath);

		return this.http.get<{projects: Project[]}>(jsonPath).pipe(
			map(data => {
				this.logger.log('Raw data from JSON: ', data);
				return data.projects;
			})
		)
	}
}