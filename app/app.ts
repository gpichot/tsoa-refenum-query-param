import Koa from "koa";
import { RegisterRoutes } from "./routes";
import Router from "@koa/router";

export const app = new Koa();
const router = new Router();

RegisterRoutes(router);

app.use(router.routes());
