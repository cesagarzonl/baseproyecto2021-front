# baseproyecto2021-front

# Inicio proyecto
# ng new baseproyectofront
# usuario ng generate user
# crear modulos ng generate component usuario/crear

# ng generate service login

# ng generate service notificaciones



ng generate component negocio/Negocio-crear
ng generate component negocio/Negocio-editar
ng generate component negocio/Negocio-listar

ng generate component contacto


ng generate component contacto
ng generate service adminservice


ng generate component admin/contacto/Contacto-list


ng update @angular/material@10


ng generate service settings


### proyecto requerimiento 
{
  "name": "baseproyectofront",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^11.2.14",
    "@angular/cdk": "^12.0.3",
    "@angular/common": "^11.2.14",
    "@angular/compiler": "^11.2.14",
    "@angular/core": "^11.2.14",
    "@angular/forms": "^11.2.14",
    "@angular/material": "^11.0.3",
    "@angular/platform-browser": "^11.2.14",
    "@angular/platform-browser-dynamic": "^11.2.14",
    "@angular/router": "^11.2.14",
    "rxjs": "^6.6.0",
    "tslib": "^2.0.0",
    "zone.js": "^0.11.3"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^0.1102.14",
    "@angular/cli": "^11.2.14",
    "@angular/compiler-cli": "^11.2.14",
    "@types/jasmine": "^3.7.7",
    "@types/node": "^12.20.15",
    "codelyzer": "^6.0.0",
    "jasmine-core": "^3.7.1",
    "jasmine-spec-reporter": "^5.0.0",
    "karma": "^6.3.3",
    "karma-chrome-launcher": "^3.1.0",
    "karma-coverage": "^2.0.3",
    "karma-jasmine": "^4.0.0",
    "karma-jasmine-html-reporter": "^1.6.0",
    "protractor": "^7.0.0",
    "ts-node": "^8.10.2",
    "tslint": "^6.1.0",
    "typescript": "^4.1.5"
  }
}
