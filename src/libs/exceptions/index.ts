import {
  BadRequestException,
  ForbiddenException,
  InternalServerErrorException,
  NotImplementedException,
  UnauthorizedException,
} from '@nestjs/common';

export * from './filter';

type ErrorOption = {
  errorMessage?: string;
};

export const badRequest = (message?: string, option?: ErrorOption) => {
  return new BadRequestException({ message, errorMessage: option?.errorMessage });
};

export const forbidden = (message?: string, option?: ErrorOption) => {
  return new ForbiddenException({ message, errorMessage: option?.errorMessage });
};

export const unauthorized = (message?: string, option?: ErrorOption) => {
  return new UnauthorizedException({ message, errorMessage: option?.errorMessage });
};

export const notImplemented = (message?: string, option?: ErrorOption) => {
  return new NotImplementedException({ message, errorMessage: option?.errorMessage });
};

export const optimisticLockVersionMismatchError = (message?: string, option?: ErrorOption) => {
  return new OptimisticLockVersionMismatchError({ message, errorMessage: option?.errorMessage });
};

export class OptimisticLockVersionMismatchError extends InternalServerErrorException {
  constructor(args: { message?: string } & ErrorOption) {
    super({ message: args.message, errorMessage: args.errorMessage });
  }
}
