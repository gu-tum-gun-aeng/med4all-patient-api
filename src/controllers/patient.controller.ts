import { CreatePatientDto } from '@/dtos/patient.dto';
import { patientValidationMiddleware } from '@/middlewares/patient.validation.middleware';
import { producePatient } from '@/services/kafka/patient.producer';
import { Body, Controller, HttpCode, Post, UseBefore } from 'routing-controllers';

@Controller()
export class PatientController {
  @Post('/patient')
  @UseBefore(patientValidationMiddleware)
  @HttpCode(200)
  async create(@Body() patientData: CreatePatientDto) {
    await producePatient(patientData);
    return { data: patientData, message: 'success' };
  }
}
