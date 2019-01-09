import {
  controller,
  httpMethod,
  httpGet,
  handlerParam,
  RedirectResult
} from 'tachijs'

@controller('/')
export default class HomeController {
  constructor() {}

  @httpMethod('get', '/')
  async index(@handlerParam(req => req.query) query: any) {
    return {
      test: 'value',
      query
    }
  }

  @httpGet('/redirect')
  async redirect() {
    return new RedirectResult('/')
  }
}
