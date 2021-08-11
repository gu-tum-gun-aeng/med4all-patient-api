import { CreatePatientDto } from '@/dtos/patient.dto';
import { Kafka, RecordMetadata } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'med4all-patient-api',
  brokers: [
    'b-2.med4all-msk-clust.kh3jrm.c3.kafka.ap-southeast-1.amazonaws.com:9094',
    'b-3.med4all-msk-clust.kh3jrm.c3.kafka.ap-southeast-1.amazonaws.com:9094',
    'b-1.med4all-msk-clust.kh3jrm.c3.kafka.ap-southeast-1.amazonaws.com:9094',
  ],
  ssl: true,
});

const producer = kafka.producer();

export const producePatient = async (patient: CreatePatientDto): Promise<RecordMetadata[]> => {
  await producer.connect();
  return await producer.send({
    topic: 'patient.raw.main',
    messages: [{ value: JSON.stringify(patient) }],
  });
};
