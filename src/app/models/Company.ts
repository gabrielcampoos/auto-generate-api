import { Base } from "./Base";

export interface CompanyJson {
  id: string;
  // idFinalClient: FinalClientJson;
  name: string;
  socialReason: string;
  address: string;
  zipCode: string;
  cnpj: string;
  number: string;
}

export class Company extends Base {
  constructor(
    _id: string,
    private _name: string,
    private _socialReason: string,
    private _address: string,
    private _zipCode: string,
    private _cnpj: string,
    private _number: string
  ) // private _idFinalClient: FinalClient
  {
    super(_id);
  }

  public toJson(): CompanyJson {
    return {
      id: this._id,
      // idFinalClient: this._idFinalClient.toJson(),
      name: this._name,
      socialReason: this._socialReason,
      address: this._address,
      zipCode: this._zipCode,
      cnpj: this._cnpj,
      number: this._number,
    };
  }
}
