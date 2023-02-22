import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';

@Injectable()
export class UploadService {
  private s3: AWS.S3;

  constructor(private configService: ConfigService) {
    this.s3 = new AWS.S3({
      accessKeyId: this.configService.get<string>('AWS_ACCESS_KEY'),
      secretAccessKey: this.configService.get<string>('AWS_SECRET_ACCESS_KEY'),
    });
  }

  async uploadFile(userId: number, file: Express.Multer.File): Promise<string> {
    try {
      const result = await this.s3
        .upload({
          Bucket: this.configService.get<string>('AWS_S3_BUCKET'),
          Key: `profile/${userId}${Date.now().toString()}-${file.originalname}`,
          Body: file.buffer,
        })
        .promise();

      return result.Location;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
