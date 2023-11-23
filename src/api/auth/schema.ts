import { z } from "@hono/zod-openapi";

const TokenType = "Bearer";

export const LoginReq = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const LoginResUser = z.object({
  userId: z.string(),
  email: z.string(),
});

export const LoginRes = z.object({
  accessToken: z.string(),
  tokenType: z.literal(TokenType),
  user: LoginResUser,
});

export const ResetPasswordReq = z.object({
  email: z.string().email(),
});

export const UpdatePasswordReq = z.object({
  password: z.string(),
});

export const UpdateEmailReq = z.object({
  email: z.string().email(),
});
