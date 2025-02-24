import jwt from 'jsonwebtoken';
import { createError, H3Event } from 'h3';

const SECRET_KEY = process.env.JWT_SECRET;

export function verifyToken(event: H3Event) {
  const token = getCookie(event, 'auth_token');
  if (!token) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }

  try {
    event.context.user = jwt.verify(token, SECRET_KEY);
  } catch {
    throw createError({ statusCode: 401, statusMessage: "Invalid token" });
  }
}