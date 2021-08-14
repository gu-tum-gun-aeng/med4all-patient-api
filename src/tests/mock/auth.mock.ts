import { createToken, HashAlgorithm, TokenInfo } from '@/utils/token';

const mockIdentity = 'mock-identity';
const mockTokenInfo: TokenInfo = {
  id: mockIdentity,
  ttlSeconds: 60,
  hashAlgorithm: HashAlgorithm.HS256,
};

const validTokenMock = createToken(mockTokenInfo);
export const validAuthHeaderMock = `Basic ${Buffer.from(`${mockIdentity}:${validTokenMock}`).toString('base64')}`;
export const invalidAuthHeaderMock = `Basic ${Buffer.from(`${'invalid-mock-identity'}:${validTokenMock}`).toString('base64')}`;
