import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class ProfileValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // 검증 혹은 유효성이 필요한 로직을 추가
    return true;
  }
}
