import { Server } from '@hapi/hapi'

export default class BaseController {
  protected server: Server

  constructor(server: Server) {
    this.server = server
  }
}
