declare namespace Express {
  interface Request {
    client: {
      id: string;
      name: string;
      cpf: string;
      address: string;
      district: string;
      zipCode: string;
      uf: string;
      city: string;
      municipalRegistration: string;
      phone: string;
    };
  }
}

declare namespace Express {
  interface Request {
    nfe: {
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
    };
  }
}

//   company: {
//     id: string;
//     name: string;
//     socialReason: string;
//     address: string;
//     zipCode: string;
//     cnpj: string;
//     number: string;
//   };

//   info: {
//     id: string;
//     item: number;
//     text: string;
//     address: string;
//     value: number;
//   };

//   payment: {
//     id: string;
//     formOfPayment: string;
//     value: string;
//     maturity: string;
//   };

//   totalValue: {
//     id: string;
//     value: string;
//   };

// }
