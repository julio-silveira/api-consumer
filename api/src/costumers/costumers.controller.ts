import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CostumersService } from './costumers.service';
import { CreateCostumerDto } from './dto/create-costumer.dto';
import { UpdateCostumerDto } from './dto/update-costumer.dto';

@UseGuards(JwtAuthGuard)
@Controller('costumers')
export class CostumersController {
  constructor(private readonly costumersService: CostumersService) {}

  @Post()
  create(@Body() createCostumerDto: CreateCostumerDto) {
    return this.costumersService.create(createCostumerDto);
  }

  @Get('/auth')
  checkAuth() {
    return 'Usuário autenticado';
  }

  @Get()
  findAll() {
    return this.costumersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.costumersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: ObjectId,
    @Body() updateCostumerDto: UpdateCostumerDto,
  ) {
    return this.costumersService.update(id, updateCostumerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.costumersService.remove(id);
  }
}
