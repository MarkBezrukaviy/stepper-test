import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {IStepperForm} from '../models/stepper';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  @Input() form: FormGroup | AbstractControl;
  @Input() data: IStepperForm[];

  constructor() {
  }

  ngOnInit() {
  }

}
