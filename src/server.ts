process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import 'reflect-metadata';
import App from '@/app';
import { IndexController } from '@controllers/index.controller';
import validateEnv from '@utils/validateEnv';
import { PatientController } from './controllers/patient.controller';

validateEnv();

const app = new App([IndexController, PatientController]);
app.initializeKafka().then(() => app.listen());
