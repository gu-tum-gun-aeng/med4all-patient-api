import { parseBasicAuthenticationForJWT } from '@/utils/auth';
import { createToken, HashAlgorithm, TokenInfo } from '@/utils/token';

describe('Testing Authentication Util', () => {
  describe('parseBasicAuthenticationForJWT', () => {
    it('using valid token and identity should return valid payload', async () => {
      const identity = 'this_is_test_id';
      const tokenInfo: TokenInfo = {
        id: identity,
        ttlSeconds: 60,
        hashAlgorithm: HashAlgorithm.HS256,
      };
      const token = createToken(tokenInfo);
      const authentication = Buffer.from(`${identity}:${token}`).toString('base64');
      const result = parseBasicAuthenticationForJWT(authentication);
      expect(result.jti).toBe(identity);
    });

    it('using invalid token and identity should return undefine', async () => {
      const identity = 'this_is_test_id';
      const tokenInfo: TokenInfo = {
        id: 'invalid_identity',
        ttlSeconds: 60,
        hashAlgorithm: HashAlgorithm.HS256,
      };
      const token = createToken(tokenInfo);
      const authentication = Buffer.from(`${identity}:${token}`).toString('base64');
      const result = parseBasicAuthenticationForJWT(authentication);
      expect(result).toBe(undefined);
    });
  });
});
