export class ServerError extends Error {
  constructor () {
    super('Oops!!! Internal server error please try again later')
    this.name = 'ServerError'
  }
}
