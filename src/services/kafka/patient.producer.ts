import { CreatePatientDto } from '@/dtos/patient.dto';
import kafkaUtil from '@/utils/kafka';
import { RecordMetadata } from 'kafkajs';

export const producePatient = async (patient: CreatePatientDto): Promise<RecordMetadata[]> => {
  return kafkaUtil.send({
    topic: 'patient.raw.main',
    messages: [{ value: JSON.stringify(patient) }],
  });
};
