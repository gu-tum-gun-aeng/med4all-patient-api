import request from 'supertest';
import App from '@/app';
import sinon from 'sinon';
import patientModel from '@/tests/mock/patient.mock.test';
import { PatientController } from '@controllers/patient.controller';
import * as patientProducer from '@/services/kafka/patient.producer';

afterAll(async () => {
  await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
});

describe('Testing Patient', () => {
  describe('[POST] /patient', () => {
    it('response statusCode 200', () => {
      const app = new App([PatientController]);
      sinon.stub(patientProducer, 'producePatient').returns(Promise.resolve([]));
      return request(app.getServer()).post('/patient').send(patientModel.pop()).expect(200);
    });
  });
});
