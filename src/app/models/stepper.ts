export interface IStepper {
  title: string,
  form: IStepperForm[]
}

export interface IStepperForm {
  label: string,
  name: string,
  type: 'inputText' | 'inputNumber' | 'checkbox' | 'select' | 'radio',
  options?: IStepperOptions[] | string[]
}

export interface IStepperOptions {
  label: string,
  value: string
}
