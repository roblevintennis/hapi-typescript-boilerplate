import { Server, Request, ResponseObject } from '@hapi/hapi'
import BaseController from './baseController'

export default class HelloController extends BaseController {
  constructor(server: Server) {
    super(server)
  }

  show(request: Request, h: ResponseObject) {
    return 'hello world -- show method w00t w00t!'
  }
}
