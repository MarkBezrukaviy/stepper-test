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
  public forms: FormArray;

  constructor(private _fb: FormBuilder) {
    this.forms = this._fb.array([]);
    this.activeStep = 0;
  }

  ngOnInit() {
    this.setupForms();
  }

  setupForms() {
    this.settings.forEach((setting: IStepper) => {
      let formGroup: FormGroup = this._fb.group({});

      setting.form.forEach((item: IStepperForm) => {
        formGroup.addControl(item.name, this._fb.control(null));
      });

      this.forms.push(formGroup);
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
