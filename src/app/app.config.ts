import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LoggerService } from './interfaces/logger-service.interface';
import { DevLoggerService } from './services/dev-logger.service';
import { ProdLoggerService } from './services/prod-logger.service';
import { environment } from 'environments/environment';
import { ProjectsProvider } from './interfaces/projects-provider.interface';
import { ProjectsService } from './services/projects.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SkillsProvider } from './interfaces/skills-provider.interface';
import { SkillsService } from './services/skills.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: LoggerService,
      useClass: environment.debug ? DevLoggerService : ProdLoggerService
    },
    { provide: ProjectsProvider, useClass: ProjectsService },
    { provide: SkillsProvider, useClass: SkillsService },
  ]
};
