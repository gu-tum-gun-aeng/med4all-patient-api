import dotenv from 'dotenv';
import 'reflect-metadata';
import App from '@/app';
import { IndexController } from '@controllers/index.controller';
import validateEnv from '@utils/validateEnv';
import { PatientController } from '@controllers/patient.controller';

dotenv.config();
validateEnv();

const app = new App([IndexController, PatientController]);
app.initializeKafka().then(() => app.listen());
