import { Component, effect, inject, input, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatChipAvatar, MatChipOption, MatChipSelectionChange } from "@angular/material/chips";
import { MatChipListbox } from "@angular/material/chips";
import { MatButtonModule} from '@angular/material/button';
import { FormsModule } from "@angular/forms";

import { LoggerService } from 'app/interfaces/logger-service.interface';
import { SkillsProvider } from 'app/interfaces/skills-provider.interface';
import { Skill } from 'app/models/skill.interface';

@Component({
	selector: 'skills-filter',
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		MatChipListbox,
		MatChipOption,
		MatChipAvatar,
		MatButtonModule
	],
	templateUrl: 'skills-filter.component.html',
	styleUrl: 'skills-filter.component.scss',
})
export class SkillsFilterComponent {
	src = input.required<string>()

	private logger = inject(LoggerService);
	private skillsService = inject(SkillsProvider);
	
	skills: Skill[] = [];
	selectedSkills: Skill[] = [];

	constructor(private cdr: ChangeDetectorRef) {
		this.loadSkills();
	}

	loadSkills() {
		effect(() => {
			this.logger.log('Loading skills from: ', this.src());

			this.skillsService.getSkills(this.src()).subscribe({
				next: (data) => {
					this.skills = data;
					this.logger.log('Loaded skills: ', this.skills)
					this.cdr.detectChanges();
				},
				error: (error) => {
					this.logger.log('Error loading skills: ', error);
				}
			})
		})
	}

	trackByKey(index: number, skill: Skill): string {
		return skill.key;
	}

	onSkillSelectionChange(skill: Skill, event: MatChipSelectionChange): void {
		this.logger.log('Filter selection changed:', skill, event.selected);
		// TODO: to implement later
	}

	clearFilters(): void {
		this.selectedSkills = [];
	}
}