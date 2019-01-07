// tslint:disable:no-console
import { inject } from 'tachijs'
import { ServiceTypes } from './types'
import { ChildService } from './ChildService'

export class MyService {
  constructor(@inject(ServiceTypes.ChildService) private child: ChildService) {}

  do() {
    console.log('MyService#do executed!!')
    this.child.do()
  }
}
