import { v4 as uuid } from "uuid";

export class Like {
  private _id: string;
  constructor(private _userId: string, private _tweetId: string) {
    this._id = uuid();
  }

  public get id() {
    return this._id;
  }

  public get userId() {
    return this._userId;
  }

  public get tweetId() {
    return this._tweetId;
  }
}
