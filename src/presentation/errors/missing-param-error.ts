export class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`Oops !!! Check the ${paramName} field`)
    this.name = `Oops !!! Check the ${paramName} field`
  }
}
