import request from 'supertest';
import App from '@/app';
import sinon from 'sinon';
import * as patientMock from '@/tests/mock/patient.mock';
import { PatientController } from '@controllers/patient.controller';
import kafkaUtil from '@/utils/kafka';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

afterEach(async () => {
  sinon.restore();
});

describe('Testing Patient', () => {
  describe('[POST] /patient', () => {
    it('without any auhorization header should response 404', async () => {
      const app = new App([PatientController]);
      sinon.stub(kafkaUtil, 'send').returns(Promise.resolve([]));
      const response = await request(app.getServer()).post('/patient').send(patientMock.validPatientRequestWithPersonIDMock);
      expect(response.status).toBe(404);
    });

    it('with invalid auhorization header should response 401', async () => {
      const app = new App([PatientController]);
      sinon.stub(kafkaUtil, 'send').returns(Promise.resolve([]));
      const response = await request(app.getServer())
        .post('/patient')
        .set(
          'Authorization',
          'Basic MTIzNDpleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcWRHa2lPaUl4TWpNaUxDSnBjM01pT2lKdFpXUTBZV3hzTFhCaGRHbGxiblF0WVhCcElpd2lhWE4wSWpveE5qSTRPVEV6TmpNM0xqa3hOQ3dpWlhod0lqb3hOemcyTlRrek5qTTNMamt4TkN3aWFXRjBJam94TmpJNE9URXpOak0zZlEuczRPWFpPRFI3RWNwcjdDSFRkNzlyZTFnMjFTYjlFcE0xS1djNjdqanVUaw==',
        )
        .send(patientMock.validPatientRequestWithPersonIDMock);
      expect(response.status).toBe(401);
    });

    it('using valid request with PersonID should response statusCode 200', async () => {
      const app = new App([PatientController]);
      sinon.stub(kafkaUtil, 'send').returns(Promise.resolve([]));
      const response = await request(app.getServer())
        .post('/patient')
        .set(
          'Authorization',
          'Basic MTIzOmV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpxZEdraU9pSXhNak1pTENKcGMzTWlPaUp0WldRMFlXeHNMWEJoZEdsbGJuUXRZWEJwSWl3aWFYTjBJam94TmpJNE9URXpOak0zTGpreE5Dd2laWGh3SWpveE56ZzJOVGt6TmpNM0xqa3hOQ3dpYVdGMElqb3hOakk0T1RFek5qTTNmUS5zNE9YWk9EUjdFY3ByN0NIVGQ3OXJlMWcyMVNiOUVwTTFLV2M2N2pqdVRr',
        )
        .send(patientMock.validPatientRequestWithPersonIDMock);
      expect(response.status).toBe(200);
    });

    it('using valid request with ForeignID should response statusCode 200', async () => {
      const app = new App([PatientController]);
      sinon.stub(kafkaUtil, 'send').returns(Promise.resolve([]));
      const response = await request(app.getServer())
        .post('/patient')
        .set(
          'Authorization',
          'Basic MTIzOmV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpxZEdraU9pSXhNak1pTENKcGMzTWlPaUp0WldRMFlXeHNMWEJoZEdsbGJuUXRZWEJwSWl3aWFYTjBJam94TmpJNE9URXpOak0zTGpreE5Dd2laWGh3SWpveE56ZzJOVGt6TmpNM0xqa3hOQ3dpYVdGMElqb3hOakk0T1RFek5qTTNmUS5zNE9YWk9EUjdFY3ByN0NIVGQ3OXJlMWcyMVNiOUVwTTFLV2M2N2pqdVRr',
        )
        .send(patientMock.validPatientRequestWithPersonForeignIDMock);
      expect(response.status).toBe(200);
    });

    it('using valid request with PassportID should response statusCode 200', async () => {
      const app = new App([PatientController]);
      sinon.stub(kafkaUtil, 'send').returns(Promise.resolve([]));
      const response = await request(app.getServer())
        .post('/patient')
        .set(
          'Authorization',
          'Basic MTIzOmV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpxZEdraU9pSXhNak1pTENKcGMzTWlPaUp0WldRMFlXeHNMWEJoZEdsbGJuUXRZWEJwSWl3aWFYTjBJam94TmpJNE9URXpOak0zTGpreE5Dd2laWGh3SWpveE56ZzJOVGt6TmpNM0xqa3hOQ3dpYVdGMElqb3hOakk0T1RFek5qTTNmUS5zNE9YWk9EUjdFY3ByN0NIVGQ3OXJlMWcyMVNiOUVwTTFLV2M2N2pqdVRr',
        )
        .send(patientMock.validPatientRequestWithPersonPassportIDMock);
      expect(response.status).toBe(200);
    });

    it('using invalid request without any ID should response statusCode 400', async () => {
      const app = new App([PatientController]);
      sinon.stub(kafkaUtil, 'send').returns(Promise.resolve([]));
      const response = await request(app.getServer())
        .post('/patient')
        .set(
          'Authorization',
          'Basic MTIzOmV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpxZEdraU9pSXhNak1pTENKcGMzTWlPaUp0WldRMFlXeHNMWEJoZEdsbGJuUXRZWEJwSWl3aWFYTjBJam94TmpJNE9URXpOak0zTGpreE5Dd2laWGh3SWpveE56ZzJOVGt6TmpNM0xqa3hOQ3dpYVdGMElqb3hOakk0T1RFek5qTTNmUS5zNE9YWk9EUjdFY3ByN0NIVGQ3OXJlMWcyMVNiOUVwTTFLV2M2N2pqdVRr',
        )
        .send(patientMock.invalidPatientRequestWithoutAnyIDMock);
      expect(response.status).toBe(400);
      expect(response.body.message).toBe('One of PersonID or PassportID or ForeignID is required');
    });

    it('when patient producer got error should response statusCode 500', async () => {
      const app = new App([PatientController]);
      const error = new Error('This is error message');
      sinon.stub(kafkaUtil, 'send').throws(error);
      const response = await request(app.getServer())
        .post('/patient')
        .set(
          'Authorization',
          'Basic MTIzOmV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpxZEdraU9pSXhNak1pTENKcGMzTWlPaUp0WldRMFlXeHNMWEJoZEdsbGJuUXRZWEJwSWl3aWFYTjBJam94TmpJNE9URXpOak0zTGpreE5Dd2laWGh3SWpveE56ZzJOVGt6TmpNM0xqa3hOQ3dpYVdGMElqb3hOakk0T1RFek5qTTNmUS5zNE9YWk9EUjdFY3ByN0NIVGQ3OXJlMWcyMVNiOUVwTTFLV2M2N2pqdVRr',
        )
        .send(patientMock.validPatientRequestWithPersonIDMock);
      expect(response.status).toBe(500);
      expect(response.body.message).toBe('This is error message');
    });
  });
});
