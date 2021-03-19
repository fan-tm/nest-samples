import { HttpException, HttpStatus } from '@nestjs/common';

export class ApiException extends HttpException {
  constructor(code: string | number, message: string, detail?: object) {
    super({ code, message, detail }, HttpStatus.OK);
  }
}
