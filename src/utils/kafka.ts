import config from 'config';
import { Kafka, KafkaConfig, ProducerRecord } from 'kafkajs';

let producer;

const kafkaUtil = {
  init: async () => {
    const kafkaConfig: KafkaConfig = config.get('kafka');
    const kafka = new Kafka(kafkaConfig);
    producer = kafka.producer();
    await producer.connect();
  },
  send: async (record: ProducerRecord) => {
    return await producer.send(record);
  },
};

export default kafkaUtil;
