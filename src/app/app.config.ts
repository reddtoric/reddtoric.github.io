import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LoggerService } from './interfaces/logger-service.interface';
import { DevLoggerService } from './services/dev-logger.service';
import { ProdLoggerService } from './services/prod-logger.service';
import { environment } from 'environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    {
      provide: LoggerService,
      useClass: environment.debug ? DevLoggerService : ProdLoggerService
    }
  ]
};
