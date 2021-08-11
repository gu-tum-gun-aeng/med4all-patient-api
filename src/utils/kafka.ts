import config from 'config';
import { Kafka, KafkaConfig, ProducerRecord } from 'kafkajs';

const kafkaConfig: KafkaConfig = config.get('kafka');
const kafka = new Kafka(kafkaConfig);

const producer = kafka.producer();

const kafkaUtil = {
  init: async () => {
    await producer.connect();
  },
  send: async (record: ProducerRecord) => {
    return await producer.send(record);
  },
};

export default kafkaUtil;
