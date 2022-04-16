export default {
  deploymentData: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: test-app
spec:
  replicas: 2
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: techincent/kubernetes:express-angular-fullstack-v1
        resources:
          limits:
            memory: "128Mi"
            cpu: "500m"
        ports:
        - containerPort: 8080

---

apiVersion: v1
kind: Service
metadata:
  name: test-service
spec:
  type: NodePort
  selector:
    app: myapp
  ports:
  - port: 80
    targetPort: 8080`,
  packageJsonData: `{
  "name": "angular-code-editor",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~13.3.0",
    "@angular/common": "~13.3.0",
    "@angular/compiler": "~13.3.0",
    "@angular/core": "~13.3.0",
    "@angular/forms": "~13.3.0",
    "@angular/platform-browser": "~13.3.0",
    "@angular/platform-browser-dynamic": "~13.3.0",
    "@angular/router": "~13.3.0",
    "ace-builds": "^1.4.14",
    "rxjs": "~7.5.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.11.4"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~13.3.1",
    "@angular/cli": "~13.3.1",
    "@angular/compiler-cli": "~13.3.0",
    "@types/jasmine": "~3.10.0",
    "@types/node": "^12.11.1",
    "jasmine-core": "~4.0.0",
    "karma": "~6.3.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage": "~2.1.0",
    "karma-jasmine": "~4.0.0",
    "karma-jasmine-html-reporter": "~1.7.0",
    "typescript": "~4.6.2"
  }
}
  `,
  appModuleTsData: `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorModule } from './editor/editor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`,
  scssData: `.app-table {
  $cellPadding: 5px 10px;
  width: 100%;
  .mat-header-row {
    height: 48px;
  }
  .mat-header-cell {
    $headerCellPadding: 3px 10px;
    font-size: 14px;
    font-weight: 600;
    padding: $headerCellPadding;
    &:first-of-type {
      padding: $headerCellPadding;
    }
  }
  .mat-cell {
    font-weight: 300;
    font-size: 13px;
    padding: $cellPadding;
    &:first-of-type {
      padding: $cellPadding;
    }
  }
}

.theme-light {
  .kc-table {
    .mat-header-cell {
      color: #424445;
    }
  }
}

@media (max-width: 1439px) {
  .ltXxl\:responsive,
  .kc-table--responsive {
    width: 1439px;
  }
}
    @media (max-width: 1199px) {
      .ltXl\:responsive {
        width: 1199px;
      }
    }
    @media (max-width: 991px) {
      .ltLg\:responsive {
        width: 991px;
      }
    }
    @media (max-width: 767px) {
      .ltMd\:responsive {
        width: 767px;
      }
    }
    @media (max-width: 575px) {
      .ltSm\:responsive {
        width: 575px;
      }
    }
  `
}