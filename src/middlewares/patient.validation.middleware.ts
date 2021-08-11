import { plainToClass } from 'class-transformer';
import { NextFunction } from 'express';
import { HttpException } from '@exceptions/HttpException';
import { CreatePatientDto } from '@/dtos/patient.dto';
import { RequestWithUser } from '@/interfaces/auth.interface';

export const patientValidationMiddleware = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  const body = plainToClass(CreatePatientDto, req['body']);
  const isValid = body.cdPersonID || body.cdPersonPassportID || body.cdPersonForeignID;
  if (isValid) {
    next();
  } else {
    const message = 'One of PersonID or PassportID or ForeignID is required';
    next(new HttpException(400, message));
  }
};
