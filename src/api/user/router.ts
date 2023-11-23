import { createRoute } from "@hono/zod-openapi";

import { UserPathParamsSchema, UserResSchema } from "@api/user/schema";
import { JSON_CONTENT_TYPE } from "@api/util/content-types";

export const getUserRoute = createRoute({
  method: "get",
  path: "/users/{user-id}",
  request: {
    params: UserPathParamsSchema,
  },
  responses: {
    200: {
      content: {
        [JSON_CONTENT_TYPE]: {
          schema: UserResSchema,
        },
      },
      description: "get the user by id",
    },
  },
});
