import {HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';

export const TranslateConfigModule = TranslateModule.forRoot({
  useDefaultLang: true,
  defaultLanguage: navigator.language,
  loader: {
    provide: TranslateLoader,
    useFactory: (http: HttpClient) => new TranslateHttpLoader(http, '../assets/i18n/', '.json'),
    deps: [HttpClient]
  }
});
