import { z } from "@hono/zod-openapi";

import { userTypes } from "@domain/user/entity";

export const UserPathParamsSchema = z.object({
  id: z
    .string()
    .uuid()
    .openapi({
      param: {
        name: "id",
        in: "path",
      },
    }),
});

export const UserResSchema = z
  .object({
    id: z.string().uuid(),
    email: z.string().email(),
    type: z.enum(userTypes),
  })
  .openapi("UserRes");
