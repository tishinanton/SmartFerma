import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

let password = sessionStorage.getItem('smart-farm.password');
if (password !== 'Qwerty123') {
    password = prompt('Введите пароль');
    while (password !== 'Qwerty123') {
        password = prompt('Введите пароль');
    }
    sessionStorage.setItem('smart-farm.password', password);
}

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
