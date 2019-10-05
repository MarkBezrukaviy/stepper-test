import { Component } from '@angular/core';
import stepper from '../assets/stepper.json';
import {IStepper} from './models/stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public stepperSettings: IStepper[] = stepper;
}
