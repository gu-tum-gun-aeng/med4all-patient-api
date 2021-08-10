import { IsBoolean, IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePatientDto {
  @IsNumber()
  public id: number;

  @IsString()
  @IsOptional()
  public cdPersonID?: string;

  @IsString()
  @IsOptional()
  public cdPersonForeignID?: string;

  @IsString()
  @IsOptional()
  public cdPersonPassportID?: string;

  @IsNumber()
  @IsOptional()
  public cdPersonNationalityCode?: number;

  @IsNumber()
  @IsOptional()
  public cdPersonNameTitleCode?: number;

  @IsString()
  public cdPersonFirstName: string;

  @IsString()
  @IsOptional()
  public cdPersonMiddleName?: string;

  @IsString()
  public cdPersonLastName: string;

  @IsNumber()
  @IsOptional()
  public cdPersonGenderCode?: number;

  @IsNumber()
  @IsOptional()
  public cdPersonAge?: number;

  @IsString()
  @IsOptional()
  public cdPersonBirthDate?: string;

  @IsString()
  public cdPersonPhone1: string;

  @IsString()
  @IsOptional()
  public cdPersonPhone2?: string;

  @IsString()
  @IsOptional()
  public cdPersonCustodialPhone1?: string;

  @IsString()
  @IsOptional()
  public cdPersonCustodialPhone2?: string;

  @IsNumber()
  @IsOptional()
  public cdPersonWeightMeasure?: number;

  @IsNumber()
  @IsOptional()
  public cdPersonHeightMeasure?: number;

  @IsString()
  @IsOptional()
  public cdPersonBMIMeasure?: string;

  @IsBoolean()
  @IsOptional()
  public emLaboratoryTestATK?: boolean;

  @IsBoolean()
  @IsOptional()
  public emLaboratoryTestRTPCR?: boolean;

  @IsDate()
  @IsOptional()
  public emLaboratoryTestDate?: Date;

  @IsBoolean()
  @IsOptional()
  public emPatientGotFavipiravir?: boolean;

  @IsDate()
  @IsOptional()
  public emPatientGotFavipiravirDate?: Date;

  @IsNumber()
  public emPatientCommitStatusCode: number;

  @IsNumber()
  @IsOptional()
  public emPatientCommitTemperature?: number;

  @IsNumber()
  @IsOptional()
  public emPatientCommitPulse?: number;

  @IsNumber()
  @IsOptional()
  public emPatientCommitOxygenSaturation?: number;

  @IsNumber()
  @IsOptional()
  public emPatientCommitOxygenSaturationPost?: number;

  @IsNumber()
  @IsOptional()
  public emPatientCommitOxygenSaturationDiff?: number;

  @IsNumber()
  @IsOptional()
  public emPatientCommitSystolic?: number;

  @IsNumber()
  @IsOptional()
  public emPatientCommitDiastolic?: number;

  @IsNumber()
  @IsOptional()
  public emPatientCommitInspirationRate?: number;

  @IsBoolean()
  @IsOptional()
  public emPatientPregnancyStatus?: boolean;

  @IsNumber()
  @IsOptional()
  public emPatientPregnancyWeeks?: number;

  @IsBoolean()
  @IsOptional()
  public emPatientBedriddenStatus?: boolean;

  @IsString()
  @IsOptional()
  public emPatientSymptomsText?: string;

  @IsString()
  @IsOptional()
  public emPatientAllergyDrug?: string;

  @IsString()
  @IsOptional()
  public emPatientAllergyFood?: string;

  @IsString()
  @IsOptional()
  public emPatientFoodText?: string;

  @IsBoolean()
  @IsOptional()
  public emPatientSymptomsCL1?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientSymptomsCL2?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientSymptomsCL3?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientSymptomsCL4?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientSymptomsCL5?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientSymptomsCL6?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientSymptomsCL7?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientSymptomsCL8?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientSymptomsCL9?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientSymptomsCL10?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientSymptomsCL11?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientSymptomsCL12?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientSymptomsCL13?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientSymptomsCL14?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientDiseaseCD1?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientDiseaseCD2?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientDiseaseCD3?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientDiseaseCD4?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientDiseaseCD5?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientDiseaseCD6?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientDiseaseCD7?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientDiseaseCD8?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientDiseaseCD9?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientDiseaseCD10?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientDiseaseCD11?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientDiseaseCD12?: boolean;

  @IsBoolean()
  @IsOptional()
  public emPatientDiseaseCD13?: boolean;

  @IsNumber()
  @IsOptional()
  public emHICICode?: number;

  @IsNumber()
  @IsOptional()
  public emHICITypeCode?: number;

  @IsString()
  @IsOptional()
  public cdMedicalDoctorCode?: string;

  @IsDate()
  @IsOptional()
  public emPatientCheckInDate?: Date;

  @IsDate()
  @IsOptional()
  public emPatientCheckOutDate?: Date;

  @IsString()
  public crProvinceCode: string;

  @IsString()
  public crAmpurCode: string;

  @IsString()
  @IsOptional()
  public crTumbolCode?: string;

  @IsString()
  @IsOptional()
  public crMooCode?: string;

  @IsString()
  @IsOptional()
  public crRoad?: string;

  @IsString()
  @IsOptional()
  public crTrok?: string;

  @IsString()
  @IsOptional()
  public crSoi?: string;

  @IsString()
  @IsOptional()
  public crVillage?: string;

  @IsNumber()
  @IsOptional()
  public crZoneCode?: number;

  @IsString()
  @IsOptional()
  public crBuildingName?: string;

  @IsString()
  @IsOptional()
  public crAddressText?: string;

  @IsString()
  @IsOptional()
  public crGeographicCoordinateLatitude?: string;

  @IsString()
  @IsOptional()
  public crGeographicCoordinateLongitude?: string;

  @IsDate()
  @IsOptional()
  public emPatientCommitDate?: Date;

  @IsDate()
  @IsOptional()
  public emPatientMovementDate?: Date;

  @IsNumber()
  @IsOptional()
  public emPatientWaitingHours?: number;

  @IsNumber()
  @IsOptional()
  public emSourceNumberCode?: number;

  @IsString()
  @IsOptional()
  public emMoveToLocationCode?: string;

  @IsNumber()
  @IsOptional()
  public emMoveToLocationTypeCode?: number;

  @IsString()
  @IsOptional()
  public emMoveFromLocationCode?: string;

  @IsNumber()
  @IsOptional()
  public emMoveFromLocationTypeCode?: number;

  @IsNumber()
  @IsOptional()
  public emMoveToMethodCode?: number;

  @IsNumber()
  @IsOptional()
  public cdOrganizationMedicalUnit?: number;

  @IsString()
  @IsOptional()
  public hsPatientHospitalNumber?: string;

  @IsString()
  @IsOptional()
  public hsPatientAdmissionNumber?: string;

  @IsNumber()
  @IsOptional()
  public hsPatientHealthCoverage?: number;

  @IsDate()
  @IsOptional()
  public createdAt?: Date;

  @IsDate()
  @IsOptional()
  public updatedAt?: Date;

  @IsDate()
  @IsOptional()
  public deletedAt?: Date;
}
