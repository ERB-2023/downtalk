import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: 'AKIAU3URT645QPYANW5C',
  secretAccessKey: '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',
});
@Injectable()
export class UploadService {
  uploadFile(userId: number, file: Express.Multer.File) {
    //save to s3
    //return s3 url
    try {
      return s3
        .upload({
          Bucket: `downchat`,
          Key: `profile/${userId}${Date.now().toString()}-${file.originalname}`,
          Body: file.buffer,
        })
        .promise();
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
