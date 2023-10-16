import { v4 as uuid } from "uuid";

export class User {
  private _id: string;
  private _token: string;

  constructor(
    private _name: string,
    private _email: string,
    private _username: string,
    private _password: string
  ) {
    this._id = uuid();
    this._token = uuid();
  }

  public get id() {
    return this._id;
  }

  public get token() {
    return this._token;
  }

  public get name() {
    return this._name;
  }
  public get email() {
    return this._email;
  }
  public get username() {
    return this._username;
  }
  public get password() {
    return this._password;
  }
}
