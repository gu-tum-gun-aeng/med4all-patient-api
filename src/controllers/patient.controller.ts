import { CreatePatientDto } from '@/dtos/patient.dto';
import { dataValidationMiddleware } from '@/middlewares/validation.middleware';
import { producePatient } from '@/services/kafka/patient.producer';
import { Request } from 'express';
import { Body, Controller, HttpCode, Post, Req, UseBefore } from 'routing-controllers';

@Controller()
export class PatientController {
  @Post('/patient')
  @HttpCode(200)
  @UseBefore(dataValidationMiddleware(CreatePatientDto))
  async create(@Body() patientData: CreatePatientDto, @Req() req: Request) {
    await producePatient(patientData, req);
    return { data: patientData, message: 'success' };
  }
}
