export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

//const driver: Driver = {
//  database: "",
//  password: "",
//  port: 3000
//}

class PostrgresDriver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number,
  ) {}
  connect(): void {

  }

  disconnect(): void {

  }

  isConnected(name: string): boolean {
    return false;
  }
}

class OracleDriver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: number,
  ) {}
  connect(): void {

  }
  disconnect(): void {

  }

  isConnected(name: string): boolean {
    return true;
  }
}
