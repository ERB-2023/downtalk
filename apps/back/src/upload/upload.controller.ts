import {
  Controller,
  Post,
  Request,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('profile')
  @UseInterceptors(FileInterceptor('profile'))
  uploadFile(
    @Request() req: { user: { id: number } },
    @UploadedFile() profile: Express.Multer.File,
  ) {
    return this.uploadService.uploadFile(req.user.id, profile);
  }
}
