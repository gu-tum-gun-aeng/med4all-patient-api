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
    it('using valid request with PersonID should response statusCode 200', async () => {
      const app = new App([PatientController]);
      sinon.stub(kafkaUtil, 'send').returns(Promise.resolve([]));
      const response = await request(app.getServer()).post('/patient').send(patientMock.validPatientRequestWithPersonIDMock);
      expect(response.status).toBe(200);
    });

    it('using valid request with ForeignID should response statusCode 200', async () => {
      const app = new App([PatientController]);
      sinon.stub(kafkaUtil, 'send').returns(Promise.resolve([]));
      const response = await request(app.getServer()).post('/patient').send(patientMock.validPatientRequestWithPersonForeignIDMock);
      expect(response.status).toBe(200);
    });

    it('using valid request with PassportID should response statusCode 200', async () => {
      const app = new App([PatientController]);
      sinon.stub(kafkaUtil, 'send').returns(Promise.resolve([]));
      const response = await request(app.getServer()).post('/patient').send(patientMock.validPatientRequestWithPersonPassportIDMock);
      expect(response.status).toBe(200);
    });

    it('when patient producer got error should response statusCode 500', async () => {
      const app = new App([PatientController]);
      const error = new Error('This is error message');
      sinon.stub(kafkaUtil, 'send').throws(error);
      const response = await request(app.getServer()).post('/patient').send(patientMock.validPatientRequestWithPersonIDMock);
      expect(response.status).toBe(500);
      expect(response.body.message).toBe('This is error message');
    });
  });
});
