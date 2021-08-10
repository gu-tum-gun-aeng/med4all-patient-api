import { CreatePatientDto } from '@/dtos/patient.dto';
import { producePatient } from '@/services/kafka/patient.producer';
import { Body, Controller, HttpCode, Post } from 'routing-controllers';

@Controller()
export class PatientController {
  @Post('/patient')
  @HttpCode(200)
  async create(@Body() patientData: CreatePatientDto) {
    await producePatient(patientData);
    return { data: patientData, message: 'success' };
  }
}
