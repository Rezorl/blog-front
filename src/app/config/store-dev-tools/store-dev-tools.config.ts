import {environment} from '../../../environments';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

export const StoreDevtoolsConfig = environment.production ? [] :
  [
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true,
    })
  ];
