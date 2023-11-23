import { RouteHandler } from "@hono/zod-openapi";

import { getUserRoute } from "@api/user/router";

export const useUserGetHandler = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deps: object,
): RouteHandler<typeof getUserRoute> =>
  function userGetHandler(c) {
    const userId = c.req.param("user-id");
    // 何らかの処理
    return c.jsonT({
      id: userId,
      email: "aaa@example.com",
      type: "admin",
    });
  };
