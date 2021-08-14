import { logger } from './logger';
import { HashAlgorithm, isValid, JwtPayload, verify } from './token';

export const parseBasicAuthenticationForJWT = (auth: string): JwtPayload => {
  const credentials = Buffer.from(auth, 'base64').toString('ascii');
  const [identity, token] = credentials.split(':');
  try {
    const payload = verify(token, HashAlgorithm.HS256);
    return isValid(identity, payload) ? payload : undefined;
  } catch (error) {
    logger.error(error);
    return undefined;
  }
};
