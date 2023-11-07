import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { dayjs } from "@monorepo/dayjs";

const app = new Hono();
app.get("/api/hello", (c) =>
  c.json({
    message: "Hello Hono!" + dayjs().format("YYYY-MM-DD"),
  }),
);

serve(app).listen(3001);
