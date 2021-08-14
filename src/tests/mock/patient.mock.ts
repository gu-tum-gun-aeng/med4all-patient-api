import { CreatePatientDto } from '@dtos/patient.dto';

export const validPatientRequestWithPersonIDMock: CreatePatientDto = {
  id: 1,
  cdPersonID: '0000000000000',
  cdPersonFirstName: 'John',
  cdPersonLastName: 'Doe',
  cdPersonAge: 30,
  cdPersonPhone1: '0811231234',
  emPatientCommitStatusCode: 1,
  crProvinceCode: '00',
  crAmpurCode: '01',
};

export const validPatientRequestWithPersonForeignIDMock: CreatePatientDto = {
  id: 1,
  cdPersonForeignID: '0000000000000',
  cdPersonFirstName: 'John',
  cdPersonLastName: 'Doe',
  cdPersonAge: 30,
  cdPersonPhone1: '0811231234',
  emPatientCommitStatusCode: 1,
  crProvinceCode: '00',
  crAmpurCode: '01',
};

export const validPatientRequestWithPersonPassportIDMock: CreatePatientDto = {
  id: 1,
  cdPersonPassportID: '0000000000000',
  cdPersonFirstName: 'John',
  cdPersonLastName: 'Doe',
  cdPersonAge: 30,
  cdPersonPhone1: '0811231234',
  emPatientCommitStatusCode: 1,
  crProvinceCode: '00',
  crAmpurCode: '01',
};

export const invalidPatientRequestWithoutAnyIDMock: CreatePatientDto = {
  id: 1,
  cdPersonFirstName: 'John',
  cdPersonLastName: 'Doe',
  cdPersonAge: 30,
  cdPersonPhone1: '0811231234',
  emPatientCommitStatusCode: 1,
  crProvinceCode: '00',
  crAmpurCode: '01',
};

export const invalidPatientRequestWithInvalidStatusCodeMock: CreatePatientDto = {
  id: 1,
  cdPersonPassportID: '0000000000000',
  cdPersonFirstName: 'John',
  cdPersonLastName: 'Doe',
  cdPersonAge: 30,
  cdPersonPhone1: '0811231234',
  emPatientCommitStatusCode: 10,
  crProvinceCode: '00',
  crAmpurCode: '01',
};
