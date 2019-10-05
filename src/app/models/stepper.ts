export interface IStepper {
  title: string,
  form: IStepperForm[]
}

export interface IStepperForm {
  label: string,
  name: string,
  type: 'input' | 'checkbox' | 'select' | 'radio',
  options?: IStepperOptions[]
}

export interface IStepperOptions {
  label: string,
  value: string
}
