import { Base } from "./Base";

export interface ClientJson {
  id: string;
  // idFinalClient: FinalClientJson;
  name: string;
  cpf: string;
  address: string;
  district: string;
  zipCode: string;
  uf: string;
  city: string;
  municipalRegistration: string;
  phone: string;
}

export class Client extends Base {
  constructor(
    _id: string,
    private _name: string,
    private _cpf: string,
    private _address: string,
    private _district: string,
    private _zipCode: string,
    private _uf: string,
    private _city: string,
    private _municipalRegistration: string,
    private _phone: string
  ) // private _idFinalClient: FinalClient
  {
    super(_id);
  }

  toJson(): ClientJson {
    return {
      id: this._id,
      // idFinalClient: this._idFinalClient.toJson(),
      name: this._name,
      cpf: this._cpf,
      address: this._address,
      district: this._district,
      zipCode: this._zipCode,
      uf: this._uf,
      city: this._city,
      municipalRegistration: this._municipalRegistration,
      phone: this._phone,
    };
  }
}
