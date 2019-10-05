import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {IStepper, IStepperForm} from '../models/stepper';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  @Input() settings: IStepper[];
  public activeStep: number;
  public form: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({});
    this.activeStep = 0;
  }

  ngOnInit() {
    this.setupForms();
  }

  setupForms() {
    this.settings.forEach((setting: IStepper) => {
      setting.form.forEach((item: IStepperForm) => {
        if (!this.form.contains(item.name)) {
          this.form.addControl(item.name, this._fb.control(null));
        }
      });
    });
  }

  setActiveStep(step: number) {
    this.activeStep = step;
  }

  isActive(step: number): boolean {
    return this.activeStep === step;
  }

  previousStep() {
    this.activeStep -= 1;
  }

  nextStep() {
    this.activeStep += 1;
  }
}
