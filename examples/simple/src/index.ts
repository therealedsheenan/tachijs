// tslint:disable:no-console
import 'reflect-metadata'
import tachijs from 'tachijs'
import HomePageController from './HomePageController'
import { ServiceTypes, MyService, ChildService } from './services'

interface Container {
  [ServiceTypes.MyService]: typeof MyService
  [ServiceTypes.ChildService]: typeof ChildService
}

const server = tachijs<Container>({
  controllers: [HomePageController],
  container: {
    [ServiceTypes.MyService]: MyService,
    [ServiceTypes.ChildService]: ChildService
  }
})

server.listen(8000, () => console.log("Server listening at http://localhost:8000"))
