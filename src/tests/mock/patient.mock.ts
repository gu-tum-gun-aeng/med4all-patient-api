import { CreatePatientDto } from '@dtos/patient.dto';

export const validPatientRequestWithPersonIDMock: CreatePatientDto = {
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
  cdPersonFirstName: 'John',
  cdPersonLastName: 'Doe',
  cdPersonAge: 30,
  cdPersonPhone1: '0811231234',
  emPatientCommitStatusCode: 1,
  crProvinceCode: '00',
  crAmpurCode: '01',
};

export const invalidPatientRequestWithInvalidStatusCodeMock: CreatePatientDto = {
  cdPersonPassportID: '0000000000000',
  cdPersonFirstName: 'John',
  cdPersonLastName: 'Doe',
  cdPersonAge: 30,
  cdPersonPhone1: '0811231234',
  emPatientCommitStatusCode: 1,
  crProvinceCode: '00',
  crAmpurCode: '01',
};
