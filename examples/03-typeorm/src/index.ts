// tslint:disable:no-console
import 'reflect-metadata'
import tachijs from 'tachijs'
import { createConnection } from 'typeorm';

import HomeController from './controllers/HomeController'

createConnection().then(async () => {
  const server = tachijs({
    controllers: [HomeController],
    container: {}
  })

  server.listen(8000, () => console.log("Server listening at http://localhost:8000"))

}).catch(error => console.error("TypeORM connection error: ", error))
