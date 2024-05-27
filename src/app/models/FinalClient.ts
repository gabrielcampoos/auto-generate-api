// import { Base } from "./Base";
// import { Client, ClientJson } from "./Client";
// import { Company, CompanyJson } from "./Company";
// import { Info, InfoJson } from "./Info";
// import { Payment, PaymentJson } from "./Payment";
// import { TotalValue, TotalValueJson } from "./TotalValue";

// export interface FinalClientJson {
//   id: string;
//   client?: ClientJson;
//   company?: CompanyJson;
//   info?: InfoJson;
//   payment?: PaymentJson;
//   totalValue?: TotalValueJson;
// }

// export class FinalClient extends Base {
//   constructor(
//     _id: string,
//     private _client?: Client,
//     private _company?: Company,
//     private _info?: Info,
//     private _payment?: Payment,
//     private _totalValue?: TotalValue
//   ) {
//     super(_id);
//   }

//   toJson(): FinalClientJson {
//     return {
//       id: this._id,
//       client: this._client?.toJson(),
//       company: this._company?.toJson(),
//       info: this._info?.toJson(),
//       payment: this._payment?.toJson(),
//       totalValue: this._totalValue?.toJson(),
//     };
//   }
// }
