export class EmailInUseError extends Error {
  constructor () {
    super('Oops!!! The received email is already in use')
    this.name = 'EmailInUseError'
  }
}
