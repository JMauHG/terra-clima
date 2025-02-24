import { verifyToken } from '../utils/auth';

export default defineEventHandler(async (event) => {
  const path = getRequestURL(event).pathname;

  if (!path.startsWith('/api/')) {
    return;
  }
  
  const publicApiRoutes = ['/api/auth/register', '/api/auth/login'];
  if (publicApiRoutes.includes(event.path)) {
    return;
  }

  verifyToken(event);
});