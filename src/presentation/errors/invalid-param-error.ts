export class InvalidParamError extends Error {
  constructor (paramName: string) {
    super(`Oops!!! Invalid param ${paramName}`)
    this.name = 'InvalidParamError'
  }
}
