import { serve } from "@hono/node-server";
import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import { HTTPException } from "hono/http-exception";
import { StatusCodes } from "http-status-codes";

import {
  createUserRoute,
  deleteUserRoute,
  getMeRoute,
  getUserForAdminRoute,
  getUserRoute,
  searchForUserRoute,
  updateUserRoute,
} from "@/api/user/router";
import {
  createUserHandler,
  deleteUserHandler,
  getMeHandler,
  getUserForAdminHandler,
  getUserHandler,
  searchForUserHandler,
  updateUserHandler,
} from "@/injection";

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

app.openapi(getUserForAdminRoute, getUserForAdminHandler);
app.openapi(getMeRoute, getMeHandler);
app.openapi(getUserRoute, getUserHandler);
app.openapi(searchForUserRoute, searchForUserHandler);
app.openapi(createUserRoute, createUserHandler);
app.openapi(updateUserRoute, updateUserHandler);
app.openapi(deleteUserRoute, deleteUserHandler);

// error handling
app.onError((err, c) => {
  console.error(err);
  if (err instanceof HTTPException) {
    return err.getResponse();
  }
  return c.newResponse(null, StatusCodes.INTERNAL_SERVER_ERROR);
});

serve(app);
