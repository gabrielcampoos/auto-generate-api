import { Express } from "express";
import clientRoutes from "../../app/features/client/client.routes";
import companyRoutes from "../../app/features/company/company.routes";
import infoRoutes from "../../app/features/info/info.routes";
import paymentRoutes from "../../app/features/payment/payment.routes";
import totalValueRoutes from "../../app/features/totalValue/totalValue.routes";
import nfeRoutes from "../../app/features/nfe/nfe.routes";

export const makeRoutes = (app: Express) => {
  app.use(
    clientRoutes(),
    companyRoutes(),
    infoRoutes(),
    paymentRoutes(),
    totalValueRoutes(),
    nfeRoutes()
  );
};
