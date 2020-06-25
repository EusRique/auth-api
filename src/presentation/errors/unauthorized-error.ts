export class UnauthorizedError extends Error {
  constructor () {
    super('Oops!!! Unauthorized access')
    this.name = 'UnauthorizedError'
  }
}
