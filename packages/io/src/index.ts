import { Db } from './db';

export class Client {
  public db() {
    return new Db();
  }
}

export default Client;
