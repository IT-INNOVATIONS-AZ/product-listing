import {
  Body,
  Controller,
  Delete,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path, { extname } from 'path';
import * as fs from 'fs';
import { Upload } from './entity/upload.entity';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  async handleUpload(@UploadedFile() file: Express.Multer.File) {
    return await this.uploadService.create({
      name: file?.originalname,
      type: file?.mimetype,
      url: file?.path,
      size: file?.size,
    });
  }

  @Delete(':id')
  async delete(id: number) {
    const file: any = await this.uploadService.findOne({
      where: { id },
    });

    await fs.unlinkSync(file?.url);

    return this.uploadService.delete(id);
  }

  @Put(':id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  async update(id: number, @UploadedFile() file: Express.Multer.File) {
    const fileById: any = await this.uploadService.findOne({
      where: { id },
    });

    await fs.unlinkSync(fileById?.url);

    await fs.writeFileSync(file.toString(), `../${fileById?.url}`);

    return this.uploadService.update(id, {
      name: file?.originalname,
      type: file?.mimetype,
      url: file?.path,
      size: file?.size,
    });
  }
}
