import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export abstract class AbstractService {
  protected constructor(protected readonly repository: Repository<any>) {}

  async create(data: any): Promise<any> {
    const create = await this.repository.create(data);
    return await this.repository.save(create);
  }

  async findAll(): Promise<any[]> {
    return await this.repository.find();
  }

  async findOne(id: number | any): Promise<any> {
    return await this.repository.findOne(id);
  }

  async update(id: number, data: any): Promise<any> {
    return await this.repository.update(id, data);
  }

  async delete(id: number): Promise<any> {
    return await this.repository.delete(id);
  }
}
