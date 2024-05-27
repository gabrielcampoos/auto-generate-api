import { Base } from "./Base";

export interface TotalValueJson {
  id: string;
  // idFinalClient: FinalClientJson;
  value: string;
}

export class TotalValue extends Base {
  constructor(
    _id: string,
    private _value: string
  ) // private _idFinalClient: FinalClient
  {
    super(_id);
  }

  public toJson(): TotalValueJson {
    return {
      id: this._id,
      // idFinalClient: this._idFinalClient.toJson(),
      value: this._value,
    };
  }
}
