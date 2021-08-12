import Logger, * as bunyan from 'bunyan';
import config from 'config';
import { IncomingMessage, ServerResponse } from 'http';
import morgan from 'morgan';
import rTracer from 'cls-rtracer';
import * as os from 'os';

export const logger: Logger = bunyan.createLogger({
  level: config.get('log.level'),
  name: config.get('app.name'),
  serializers: {
    http: bunyan.stdSerializers.req,
  },
});

morgan.token('hostname', function getHostname() {
  return os.hostname();
});

morgan.token('pid', function getPid() {
  return process.pid.toString();
});

export const morganJsonFormat: morgan.FormatFn<IncomingMessage, ServerResponse> = (tokens, req, res) => {
  return JSON.stringify({
    v: 0,
    name: config.get('app.name'),
    msg: `[CALL ${tokens.url(req, res)} - END]`,
    level: 30,
    hostname: tokens['hostname'](req, res),
    pid: tokens['pid'](req, res),
    time: tokens['date'](req, res, 'iso'),
    target: `${config.get('app.name')}::route::${tokens['url'](req, res).substr(1)}`,
    request_id: rTracer.id(),
    elapsed_milliseconds: tokens['response-time'](req, res),
    'http.method': tokens.method(req, res),
    'http.user_agent': tokens['user-agent'](req, res),
    'http.target': tokens['url'](req, res),
    'http.client_ip': tokens['remote-addr'](req, res),
    'http.host': tokens['hostname'](req, res),
    'http.route': tokens['url'](req, res),
    'http.flavor': tokens['http-version'](req, res),
  });
};

export const morganStream = {
  write: (message: string) => {
    console.log(message);
  },
};
