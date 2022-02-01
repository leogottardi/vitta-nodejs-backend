import { v4 as uuidV4 } from "uuid";

class Client {
  id: string;
  name: string;
  document: number;

  constructor(name: string, document: number) {
    if (!this.id) {
      this.id = uuidV4();
    }

    this.name = name;
    this.document = document;
  }
}

export { Client }