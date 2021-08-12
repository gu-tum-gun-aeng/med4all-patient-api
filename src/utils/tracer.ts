import config from 'config';
import { logger } from './logger';
import rTracer from 'cls-rtracer';
import { IncomingMessage } from 'http';

type Context = 'route' | 'external' | 'log' | 'test';
const logAppName = config.get('app.name');

/**
 * Tracer Wrapper function
 * @param fx (arg?: any) => Promise<any>
 * @param context route | externalApi
 * @param name string
 * @param request Request
 * @returns Promise<void>
 */
export const traceWrapperAsync = async <T>(fx: (arg?: any) => Promise<T>, context: Context, name?: string, request?: IncomingMessage): Promise<T> => {
  const functionName = name ? name : fx.name;
  const message = functionName.toUpperCase();
  const startTime = new Date();
  const requestId = rTracer.id();
  logger.trace({ http: request, request_id: requestId }, `[${message} - START]`, `${logAppName}::${context}::${functionName}`);
  const result = await fx();
  const endTime = new Date();
  logger.trace(
    { http: request, request_id: requestId, elapsed_milliseconds: endTime.getTime() - startTime.getTime() },
    `[${message} - END]`,
    `${logAppName}::${context}::${functionName}`,
  );
  return result;
};
