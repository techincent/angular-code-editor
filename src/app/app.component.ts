import { Component } from '@angular/core';
import data from './Data';

import 'ace-builds';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-yaml';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/mode-scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-code-editor';
  jsonInputData = data?.packageJsonData;
  yamlInputData = data?.deploymentData;
  appModuleTsData = data?.appModuleTsData;
  scssData = data?.scssData;
}
