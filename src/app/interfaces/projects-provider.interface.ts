import { Observable } from "rxjs";

import { Project } from "app/models/project.interface";

export abstract class ProjectsProvider {
	abstract getProjects(jsonPath: string): Observable<Project[]>;
}