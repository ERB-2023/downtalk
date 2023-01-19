import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    Logger,
  } from '@nestjs/common';
  import { EventTrackerService } from '../event-tracker/event-tracker.service';
  
  @Catch()
  export class AllExceptionsFilter implements ExceptionFilter {
    constructor(private readonly eventTrackerService: EventTrackerService) {}
    catch(exception: any, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const request = ctx.getRequest();
  
      const statusCode = exception.getStatus()
  
      const message =
        typeof exception.message === 'string'
          ? exception.message
          : exception.message.message;
  
      const errorResponse = {
        statusCode: statusCode,
        data: null,
        message: message,
      };

      Logger.error(
        `[${request.method}] ${request.url} - statusCode: ${statusCode}`,
        JSON.stringify(errorResponse),
      );

      response.status(statusCode).json(errorResponse);
    }
  }
  