import { NextFunction, Response } from 'express';
import { HttpException } from '@exceptions/HttpException';
import { RequestWithIdentity } from '@interfaces/auth.interface';
import { parseBasicAuthenticationForJWT } from '@/utils/auth';

const authMiddleware = async (req: RequestWithIdentity, res: Response, next: NextFunction) => {
  try {
    const Authorization = req.cookies['Authorization'] || req.header('Authorization').split(' ')[1] || null;
    if (Authorization) {
      const payload = parseBasicAuthenticationForJWT(Authorization);
      if (payload) {
        req.identity = payload.jti;
        next();
      } else {
        next(new HttpException(401, 'Wrong authentication token'));
      }
    } else {
      next(new HttpException(404, 'Authentication token missing'));
    }
  } catch (error) {
    next(new HttpException(401, 'Wrong authentication token'));
  }
};

export default authMiddleware;
