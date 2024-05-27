import { Base } from "./Base";

export interface NfeJson {
  id: string;
  nameClient: string;
  cpfClient: string;
  addressClient: string;
  districtClient: string;
  zipCodeClient: string;
  ufClient: string;
  cityClient: string;
  municipalRegistrationClient: string;
  phoneClient: string;
  nameCompany: string;
  socialReasonCompany: string;
  addressCompany: string;
  zipCodeCompany: string;
  cnpjCompany: string;
  numberCompany: string;
  itemInfo: number;
  textInfo: string;
  addressInfo: string;
  valueInfo: number;
  formOfPaymentPayment: string;
  valuePayment: string;
  maturityPayment: string;
  valueTotal: string;
  createdAt: Date;
}

export class Nfe extends Base {
  constructor(
    _id: string,
    private _nameClient: string,
    private _cpfClient: string,
    private _addressClient: string,
    private _districtClient: string,
    private _zipCodeClient: string,
    private _ufClient: string,
    private _cityClient: string,
    private _municipalRegistrationClient: string,
    private _phoneClient: string,
    private _nameCompany: string,
    private _socialReasonCompany: string,
    private _addressCompany: string,
    private _zipCodeCompany: string,
    private _cnpjCompany: string,
    private _numberCompany: string,
    private _itemInfo: number,
    private _textInfo: string,
    private _addressInfo: string,
    private _valueInfo: number,
    private _formOfPaymentPayment: string,
    private _valuePayment: string,
    private _maturityPayment: string,
    private _valueTotal: string,
    _createdAt: Date
  ) {
    super(_id, _createdAt);
  }

  toJson(): NfeJson {
    return {
      id: this._id,
      nameClient: this._nameClient,
      cpfClient: this._cpfClient,
      addressClient: this._addressClient,
      districtClient: this._districtClient,
      zipCodeClient: this._zipCodeClient,
      ufClient: this._ufClient,
      cityClient: this._cityClient,
      municipalRegistrationClient: this._municipalRegistrationClient,
      phoneClient: this._phoneClient,
      nameCompany: this._nameCompany,
      socialReasonCompany: this._socialReasonCompany,
      addressCompany: this._addressCompany,
      zipCodeCompany: this._zipCodeCompany,
      cnpjCompany: this._cnpjCompany,
      numberCompany: this._numberCompany,
      itemInfo: this._itemInfo,
      textInfo: this._textInfo,
      addressInfo: this._addressInfo,
      valueInfo: this._valueInfo,
      formOfPaymentPayment: this._formOfPaymentPayment,
      valuePayment: this._valuePayment,
      maturityPayment: this._maturityPayment,
      valueTotal: this._valueTotal,
      createdAt: this._createdAt,
    };
  }
}
