import { Observable } from "rxjs";

import { Skill } from "app/models/skill.interface";

export abstract class SkillsProvider {
	abstract getSkills(jsonPath: string): Observable<Skill[]>;
}