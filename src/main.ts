import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_pBLZ2mTpt',
      userPoolClientId: '5n3a86kcqek7tcu053pthscum',
      loginWith: {
        oauth: {
          domain: 'us-east-1pblz2mtpt.auth.us-east-1.amazoncognito.com',
          scopes: ['openid', 'profile', 'biblioteca/libros.leer'],
          redirectSignIn: ['http://localhost:4200/callback'],
          redirectSignOut: ['http://localhost:4200'],
          responseType: 'code',
        },
      },
    },
  },
});

import 'aws-amplify/auth/enable-oauth-listener';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
