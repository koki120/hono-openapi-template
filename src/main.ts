import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";

import { getUserRoute } from "@api/user/router";
import { injectedUserGetHandler } from "@injection";

const app = new OpenAPIHono();

// The OpenAPI documentation will be available at /doc
app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "API",
  },
});

// Use the middleware to serve Swagger UI at /ui
app.get("/ui", swaggerUI({ url: "/doc" }));

app.openapi(getUserRoute, injectedUserGetHandler);

export default app;
