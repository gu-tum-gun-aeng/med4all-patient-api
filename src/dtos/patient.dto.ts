import { Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, IsString, IsEnum, ValidateNested, IsDate } from 'class-validator';

export enum CertificateType {
  PersonalId = 0,
  Passport = 1,
  ForeignId = 2,
  NoDoc = 3,
}

export class MedicalInfo {
  @IsNumber()
  @IsOptional()
  public patientCovidClassificationColor?: number;

  @IsBoolean()
  @IsOptional()
  public isAtkPositive?: boolean;

  @IsBoolean()
  @IsOptional()
  public isRtPcrPositive?: boolean;

  @IsString()
  @IsOptional()
  public labTestWhen?: string;

  @IsBoolean()
  @IsOptional()
  public isFavipiravirReceived?: boolean;

  @IsString()
  @IsOptional()
  public receivedFavipiravirWhen?: string;

  @IsNumber()
  @IsOptional()
  public bodyTemperatureCelsius?: number;

  @IsNumber()
  @IsOptional()
  public pulseRateBpm?: number;

  @IsNumber()
  @IsOptional()
  public oxygenSaturation?: number;

  @IsNumber()
  @IsOptional()
  public oxygenSaturationAfterExercise?: number;

  @IsNumber()
  @IsOptional()
  public oxygenSaturationDifference?: number;

  @IsNumber()
  @IsOptional()
  public systolic?: number;

  @IsNumber()
  @IsOptional()
  public diastolic?: number;

  @IsNumber()
  @IsOptional()
  public inspirationRate?: number;

  @IsBoolean()
  @IsOptional()
  public isPregnant?: boolean;

  @IsNumber()
  @IsOptional()
  public pregnancyWeeks?: number;

  @IsBoolean()
  @IsOptional()
  public isBedridden?: boolean;

  @IsString()
  @IsOptional()
  public symptoms?: string;

  @IsString({ each: true })
  @IsOptional()
  public allergyToDrugs?: string[];

  @IsString({ each: true })
  @IsOptional()
  public allergyToFoods?: string[];

  @IsBoolean()
  @IsOptional()
  public isSymptomShortnessOfBreath?: boolean;

  @IsBoolean()
  @IsOptional()
  public isSymptomFever?: boolean;

  @IsBoolean()
  @IsOptional()
  public isSymptomCough?: boolean;

  @IsBoolean()
  @IsOptional()
  public isSymptomRunnyNose?: boolean;

  @IsBoolean()
  @IsOptional()
  public isSymptomSoreThroat?: boolean;

  @IsBoolean()
  @IsOptional()
  public isSymptomFatigue?: boolean;

  @IsBoolean()
  @IsOptional()
  public isSymptomHeadAche?: boolean;

  @IsBoolean()
  @IsOptional()
  public isSymptomDiarrhea?: boolean;

  @IsBoolean()
  @IsOptional()
  public isSymptomLossOfSmell?: boolean;

  @IsBoolean()
  @IsOptional()
  public isSymptomConjunctivitis?: boolean;

  @IsBoolean()
  @IsOptional()
  public isSymptomRash?: boolean;

  @IsBoolean()
  @IsOptional()
  public isSymptomLossOfTaste?: boolean;

  @IsBoolean()
  @IsOptional()
  public isSymptomTiredness?: boolean;

  @IsBoolean()
  @IsOptional()
  public isSymptomChestPain?: boolean;

  @IsBoolean()
  @IsOptional()
  public isDiseaseUncontrolledDm?: boolean;

  @IsBoolean()
  @IsOptional()
  public isDiseaseCancer?: boolean;

  @IsBoolean()
  @IsOptional()
  public isDiseaseCopd?: boolean;

  @IsBoolean()
  @IsOptional()
  public isDiseaseAsthma?: boolean;

  @IsBoolean()
  @IsOptional()
  public isDiseaseObesity?: boolean;

  @IsBoolean()
  @IsOptional()
  public isDiseaseCkdLevelHigherThanFour?: boolean;

  @IsBoolean()
  @IsOptional()
  public isDiseaseStrokeWithinSixMonth?: boolean;

  @IsBoolean()
  @IsOptional()
  public isDiseaseCardioVascularDisease?: boolean;

  @IsBoolean()
  @IsOptional()
  public isDiseaseHiv?: boolean;

  @IsBoolean()
  @IsOptional()
  public isDiseaseHypertension?: boolean;

  @IsBoolean()
  @IsOptional()
  public isDiseaseHyperlipidemia?: boolean;

  @IsBoolean()
  @IsOptional()
  public isDiseaseCirrhosis?: boolean;

  @IsBoolean()
  @IsOptional()
  public isDiseaseTuberculosis?: boolean;

  @IsString({ each: true })
  @IsOptional()
  public vaccinationRecords?: string[];

  @IsString()
  @IsOptional()
  public firstVaccinatedWhen?: string;

  @IsString()
  @IsOptional()
  public secondVaccinatedWhen?: string;

  @IsString()
  @IsOptional()
  public remark?: string;

  @IsString()
  @IsOptional()
  public firstSymptomWhen?: string;

  @IsBoolean()
  @IsOptional()
  public isSymptomSevereCough?: boolean;

  @IsBoolean()
  @IsOptional()
  public isSymptomPoorAppetite?: boolean;

  @IsBoolean()
  @IsOptional()
  public isSymptomFatique?: boolean;

  @IsBoolean()
  @IsOptional()
  public isDiseaseESRD?: boolean;

  @IsBoolean()
  @IsOptional()
  public isSymptomGI?: boolean;

  @IsBoolean()
  @IsOptional()
  public isMedicineRequested?: boolean;

  @IsBoolean()
  @IsOptional()
  public isBypassScreening?: boolean;
}

export class Address {
  @IsNumber()
  @IsOptional()
  public provinceCode?: number;

  @IsNumber()
  @IsOptional()
  public districtCode?: number;

  @IsNumber()
  @IsOptional()
  public subDistrictCode?: number;

  @IsString()
  @IsOptional()
  public moo?: string;

  @IsString()
  @IsOptional()
  public road?: string;

  @IsString()
  @IsOptional()
  public alley?: string;

  @IsString()
  @IsOptional()
  public soi?: string;

  @IsString()
  @IsOptional()
  public village?: string;

  @IsNumber()
  @IsOptional()
  public bangkokZoneCode?: number;

  @IsNumber()
  @IsOptional()
  public zipCode?: number;

  @IsString()
  @IsOptional()
  public building?: string;

  @IsString()
  @IsOptional()
  public note?: string;
}

export class Riskscore {
  @IsString()
  @IsOptional()
  public inclusionLabel?: string;

  @IsString()
  @IsOptional()
  public inclusionLabelType?: string;

  @IsNumber()
  @IsOptional()
  public triageScore?: number;
}

export class CreatePatientDto {
  @IsString()
  public certificateId: string;

  @IsNumber()
  @IsEnum(CertificateType)
  public certificateType: CertificateType;

  @IsString()
  public name: string;

  @IsString()
  public surname: string;

  @IsNumber()
  @IsOptional()
  public gender?: number;

  @IsNumber()
  @IsOptional()
  public ageYear?: number;

  @IsString()
  @IsOptional()
  public patientPhone?: string;

  @IsString()
  @IsOptional()
  public custodianPhone?: string;

  @IsNumber()
  @IsOptional()
  public weightKg?: number;

  @IsNumber()
  @IsOptional()
  public heightCm?: number;

  @IsOptional()
  @Type(() => MedicalInfo)
  @ValidateNested()
  public medicalInfo?: MedicalInfo;

  @IsDate()
  @IsOptional()
  public checkInWhen?: Date;

  @IsDate()
  @IsOptional()
  public checkOutWhen?: Date;

  @IsOptional()
  @Type(() => Address)
  @ValidateNested()
  public address?: Address;

  @IsNumber()
  @IsOptional()
  public patientDataSource?: number;

  @IsString()
  @IsOptional()
  public admittedTo?: string;

  @IsNumber()
  @IsOptional()
  public healthCoverage?: number;

  @IsString()
  @IsOptional()
  public lineId?: string;

  @IsNumber()
  @IsOptional()
  public homeTown?: number;

  @IsString({ each: true })
  @IsOptional()
  public equipments?: string[];

  @IsOptional()
  public nhsoTicketId?: string;

  @IsString()
  @IsOptional()
  public trustedSource?: string;

  @IsOptional()
  @Type(() => Riskscore)
  @ValidateNested()
  public riskScore?: Riskscore;
}
