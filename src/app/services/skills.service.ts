import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map} from "rxjs";

import { Skill } from "app/models/skill.interface";
import { SkillsProvider } from "app/interfaces/skills-provider.interface";
import { LoggerService } from "app/interfaces/logger-service.interface";

@Injectable({
	providedIn: 'root'
})
export class SkillsService implements SkillsProvider {
	private logger = inject(LoggerService);
	private http = inject(HttpClient);

	getSkills(jsonPath: string): Observable<Skill[]> {
		this.logger.log('Getting skills from: ', jsonPath);

		return this.http.get<{skills: Skill[]}>(jsonPath).pipe(
			map(data => {
				this.logger.log('Raw data from JSON: ', data);
				return data.skills;
			})
		)
	}
}