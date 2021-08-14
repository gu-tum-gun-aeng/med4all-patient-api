import { Request } from 'express';

export interface RequestWithIdentity extends Request {
  identity?: string;
}
