import { Base } from "./Base";

export interface PaymentJson {
  id: string;
  // idFinalClient: FinalClientJson;
  formOfPayment: string;
  value: string;
  maturity: string;
}

export class Payment extends Base {
  constructor(
    _id: string,
    private _formOfPayment: string,
    private _value: string,
    private _maturity: string
  ) // private _idFinalClient: FinalClient
  {
    super(_id);
  }

  public toJson(): PaymentJson {
    return {
      id: this._id,
      // idFinalClient: this._idFinalClient.toJson(),
      formOfPayment: this._formOfPayment,
      value: this._value,
      maturity: this._maturity,
    };
  }
}
