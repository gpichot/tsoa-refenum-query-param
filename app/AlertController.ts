import { Controller, Get, Query, Route, Request } from "tsoa";
import Koa from "koa";
type Alert = { id: string };

enum AlertTag {
  Foo = "foo",
  Bar = "bar",
}

@Route("alerts")
export class AlertsController extends Controller {
  @Get("/")
  public async getAlerts(
    @Request() request: Koa.Request,
    @Query() alertTags?: AlertTag[]
  ): Promise<Alert[]> {
    void request, alertTags;
    return [];
  }
}
