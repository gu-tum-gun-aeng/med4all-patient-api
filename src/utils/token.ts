import jwt from 'jsonwebtoken';
import config from 'config';
import { currentSecondsSinceEpoch } from './date';

const ISSUER_CLAIM: string = config.get('app.name');
const SECRET_KEY: string = process.env.SECRET_KEY || config.get('secretKey');

export type TokenInfo = {
  id: string;
  ttlSeconds: number;
  hashAlgorithm: HashAlgorithm;
};

export type JwtPayload = {
  jti: string;
  iss: string;
  ist: number;
  exp: number;
};

export const createToken = (tokenInfo: TokenInfo): string => {
  const issueDateTime = currentSecondsSinceEpoch();

  const payload: JwtPayload = {
    jti: tokenInfo.id,
    iss: ISSUER_CLAIM,
    ist: issueDateTime,
    exp: issueDateTime + tokenInfo.ttlSeconds,
  };

  return jwt.sign(payload, SECRET_KEY, { algorithm: tokenInfo.hashAlgorithm });
};

export const isValid = (idToVerify: string, payload: JwtPayload): boolean => {
  try {
    return isIssuerValid(payload) && isNotExpired(payload) && isJtiMatch(payload, idToVerify);
  } catch (_) {
    return false;
  }

  function isIssuerValid(payload: JwtPayload): boolean {
    return payload.iss !== null && payload.iss === ISSUER_CLAIM;
  }

  function isNotExpired(payload: JwtPayload): boolean {
    return payload.exp !== null && payload.exp >= currentSecondsSinceEpoch();
  }

  function isJtiMatch(payload: JwtPayload, idToVerify: string): boolean {
    return payload.jti !== null && payload.jti === idToVerify;
  }
};

export const verify = (token: string, hashAlgorithm: HashAlgorithm): JwtPayload => {
  return jwt.verify(token, SECRET_KEY, {
    algorithms: [hashAlgorithm],
  }) as JwtPayload;
};

export const getNumericDateFrom = (dateTimeMillisecs: number): number => dateTimeMillisecs / 1000;

export const currentNumericDate = (): number => getNumericDateFrom(new Date().getTime());

export enum HashAlgorithm {
  None = 'none',
  HS256 = 'HS256',
  HS512 = 'HS512',
  RS256 = 'RS256',
  RS512 = 'RS512',
  PS256 = 'PS256',
  PS512 = 'PS512',
}
