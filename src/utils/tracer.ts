import config from 'config';
import { logger } from './logger';
import rTracer from 'cls-rtracer';
import * as bunyan from 'bunyan';
import { Request } from 'express';
type Context = 'route' | 'external' | 'log' | 'test';
const logAppName = config.get('app.name');

/**
 * Tracer Wrapper function
 * @param fx (arg?: any) => Promise<any>
 * @param context route | externalApi
 * @param name string
 * @returns Promise<void>
 */
export const traceWrapperAsync = async <T>(fx: (arg?: any) => Promise<T>, context: Context, name: string, request: Request): Promise<T> => {
  const functionName = name ? name : fx.name;
  const message = functionName.toUpperCase();
  const startTime = new Date();
  const requestId = rTracer.id();
  const target = `${logAppName}::${context}::${functionName}`;
  const ctx = {
    http: bunyan.stdSerializers.req(request),
    request_id: requestId,
    'http.route': request.url,
    'http.target': request.url,
    target: target,
  };
  logger.trace(ctx, `[${message} - START]`, `${target}`);
  const result = await fx();
  const endTime = new Date();
  logger.trace({ ...ctx, elapsed_milliseconds: endTime.getTime() - startTime.getTime() }, `[${message} - END]`, `${target}`);
  return result;
};
