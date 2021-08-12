import { CreatePatientDto } from '@/dtos/patient.dto';
import kafkaUtil from '@/utils/kafka';
import { traceWrapperAsync } from '@/utils/tracer';
import { RecordMetadata } from 'kafkajs';
import { Request } from 'express';

export const producePatient = async (patient: CreatePatientDto, request: Request): Promise<RecordMetadata[]> => {
  return await traceWrapperAsync<RecordMetadata[]>(
    () =>
      kafkaUtil.send({
        topic: 'patient.raw.main',
        messages: [{ value: JSON.stringify(patient) }],
      }),
    'external',
    'producePatient',
    request,
  );
};
