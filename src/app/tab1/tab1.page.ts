import { Component } from '@angular/core';
import { faAngry } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  faAngry = faAngry;

  constructor() { }

}


