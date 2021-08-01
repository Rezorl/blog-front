import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {appLanguages} from '../../../../environments';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarComponent {
  readonly languages = appLanguages;

  get selectedLang(): string {
    return this.translate.currentLang ?? this.translate.defaultLang;
  }

  constructor(private readonly translate: TranslateService) {}

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
