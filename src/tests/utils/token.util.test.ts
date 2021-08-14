import { currentSecondsSinceEpoch } from '@/utils/date';
import { createToken, HashAlgorithm, isValid, JwtPayload, verify } from '@/utils/token';
import { TokenExpiredError } from 'jsonwebtoken';

describe('Testing Token Util', () => {
  describe('createToken', () => {
    it('should create valid Token with given token id when call', async () => {
      const tokenInfo = {
        id: '123',
        ttlSeconds: 157680000,
        hashAlgorithm: HashAlgorithm.HS256,
      };

      const token = createToken(tokenInfo);
      const payload = verify(token, HashAlgorithm.HS256);

      expect(payload.jti).toBe(tokenInfo.id);
    });
  });

  describe('isValid', () => {
    it('should return true when given token is not expired and issuer cliam is correct', async () => {
      const tokenInfo = {
        id: '123',
        ttlSeconds: 60,
        hashAlgorithm: HashAlgorithm.HS512,
      };

      const token = createToken(tokenInfo);
      const payload = verify(token, HashAlgorithm.HS512);
      const result = isValid('123', payload);

      expect(result).toBeTruthy();
    });

    it('should return false when given token is already expired', async () => {
      const tokenInfo = {
        id: '123',
        ttlSeconds: -10,
        hashAlgorithm: HashAlgorithm.HS512,
      };

      const token = createToken(tokenInfo);
      const t = () => {
        verify(token, HashAlgorithm.HS512);
      };
      expect(t).toThrow(TokenExpiredError);
      expect(t).toThrow('jwt expired');
    });

    it(' should return false when given token issuer claim is incorrect', async () => {
      const issueDateTime = currentSecondsSinceEpoch();
      const payload: JwtPayload = {
        jti: '1',
        iss: 'some other issuer',
        ist: issueDateTime,
        exp: issueDateTime + 60,
      };

      const result = isValid('123', payload);

      expect(result).toBeFalsy();
    });

    it('should return false when given token id to check is not match', async () => {
      const tokenInfo = {
        id: '123',
        ttlSeconds: 60,
        hashAlgorithm: HashAlgorithm.HS512,
      };

      const token = createToken(tokenInfo);
      const payload = verify(token, HashAlgorithm.HS512);
      const result = isValid('234', payload);

      expect(result).toBeFalsy();
    });
  });
});
