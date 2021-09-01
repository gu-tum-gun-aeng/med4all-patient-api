import { CertificateType, CreatePatientDto } from '@/dtos/patient.dto';

export const validPatientRequestWithPersonIDMock: CreatePatientDto = {
  certificateId: '123456',
  certificateType: CertificateType.PersonalId,
  name: 'Bruno',
  surname: 'Fernandes',
};

export const validPatientRequestWithPersonForeignIDMock: CreatePatientDto = {
  certificateId: '123456',
  certificateType: CertificateType.ForeignId,
  name: 'Bruno',
  surname: 'Fernandes',
};

export const validPatientRequestWithPersonPassportIDMock: CreatePatientDto = {
  certificateId: '123456',
  certificateType: CertificateType.Passport,
  name: 'Bruno',
  surname: 'Fernandes',
};

export const invalidPatientRequestWithoutAnyIDMock: CreatePatientDto = {
  certificateId: 'Bruno Fernandes',
  certificateType: CertificateType.NoDoc,
  name: 'Bruno',
  surname: 'Fernandes',
};
