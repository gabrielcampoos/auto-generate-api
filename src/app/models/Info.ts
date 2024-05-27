import { Base } from "./Base";

export interface InfoJson {
  id: string;
  // idFinalClient: FinalClientJson;
  item: number;
  text: string;
  address: string;
  value: number;
}

export class Info extends Base {
  constructor(
    _id: string,
    private _item: number,
    private _text: string,
    private _address: string,
    private _value: number
  ) // private _idFinalClient: FinalClient
  {
    super(_id);
  }

  toJson(): InfoJson {
    return {
      id: this._id,
      // idFinalClient: this._idFinalClient.toJson(),
      item: this._item,
      text: this._text,
      address: this._address,
      value: this._value,
    };
  }
}
