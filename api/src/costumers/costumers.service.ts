import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateCostumerDto } from './dto/create-costumer.dto';
import { UpdateCostumerDto } from './dto/update-costumer.dto';
import { Costumer, CostumerDocument } from './schemas/costumer.schema';

@Injectable()
export class CostumersService {
  constructor(
    @InjectModel(Costumer.name)
    private readonly costumerModel: Model<CostumerDocument>,
  ) {}

  async create(createCostumerDto: CreateCostumerDto) {
    const newCostumer = await this.costumerModel.create(createCostumerDto);
    return { message: `${newCostumer.name} foi registrado com sucesso!` };
  }

  async findAll() {
    return await this.costumerModel.find();
  }

  async findOne(id: ObjectId) {
    return await this.costumerModel.findById({ _id: id });
  }

  async update(id: ObjectId, updateCostumerDto: UpdateCostumerDto) {
    await this.costumerModel.findOneAndUpdate({ _id: id }, updateCostumerDto);
    return { message: `Usuário de ID ${id} foi atualizado.` };
  }

  async remove(id: ObjectId) {
    await this.costumerModel.remove({ _id: id });
    return { message: `Usuário de ID ${id} foi removido.` };
  }
}
