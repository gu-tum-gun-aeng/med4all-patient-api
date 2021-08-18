import { CreatePatientDto } from '@dtos/patient.dto';

export const validPatientRequestWithPersonIDMock: CreatePatientDto = {
  cdPersonID: '0000000000000',
  cdPersonFirstName: 'John',
  cdPersonLastName: 'Doe',
  cdPersonAge: 30,
  cdPersonPhone1: '0811231234',
  crProvinceCode: '00',
  crAmpurCode: '01',
  emMoveFromLocationCode: '',
};

export const validPatientRequestWithPersonForeignIDMock: CreatePatientDto = {
  cdPersonForeignID: '0000000000000',
  cdPersonFirstName: 'John',
  cdPersonLastName: 'Doe',
  cdPersonAge: 30,
  cdPersonPhone1: '0811231234',
  crProvinceCode: '00',
  crAmpurCode: '01',
  emMoveFromLocationCode: '',
};

export const validPatientRequestWithPersonPassportIDMock: CreatePatientDto = {
  cdPersonPassportID: '0000000000000',
  cdPersonFirstName: 'John',
  cdPersonLastName: 'Doe',
  cdPersonAge: 30,
  cdPersonPhone1: '0811231234',
  crProvinceCode: '00',
  crAmpurCode: '01',
  emMoveFromLocationCode: '',
};

export const invalidPatientRequestWithoutAnyIDMock: CreatePatientDto = {
  cdPersonFirstName: 'John',
  cdPersonLastName: 'Doe',
  cdPersonAge: 30,
  cdPersonPhone1: '0811231234',
  crProvinceCode: '00',
  crAmpurCode: '01',
  emMoveFromLocationCode: '',
};

export const invalidPatientRequestWithInvalidStatusCodeMock: CreatePatientDto = {
  cdPersonPassportID: '0000000000000',
  cdPersonFirstName: 'John',
  cdPersonLastName: 'Doe',
  cdPersonAge: 30,
  cdPersonPhone1: '0811231234',
  crProvinceCode: '00',
  crAmpurCode: '01',
  emMoveFromLocationCode: '',
};
