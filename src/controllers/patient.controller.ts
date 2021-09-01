import { CreatePatientDto } from '@/dtos/patient.dto';
import { producePatient } from '@/services/kafka/patient.producer';
import { Request } from 'express';
import { Body, Controller, HttpCode, Post, Req } from 'routing-controllers';

@Controller()
export class PatientController {
  @Post('/patient')
  @HttpCode(200)
  async create(@Body() patientData: CreatePatientDto, @Req() req: Request) {
    await producePatient(patientData, req);
    return { data: patientData, message: 'success' };
  }
}
