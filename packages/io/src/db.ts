import { CollectionReference } from './collection';

export class Db {
  collection(collName: string): CollectionReference {
    if (!collName) {
      throw new Error('Collection name is required');
    }
    return new CollectionReference(this, collName);
  }

  // 服务端 api
  // #addUser
  // #removeUser
}
