import { Body, Controller, Post,Get } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CityDto } from '../city/city.dto';
import { City } from 'src/city/city.model';

@Controller('admin')
export class AdminController {
constructor(private readonly adminservice:AdminService) { }





    @Get("/cities")
    async findAll(): Promise<City[]> {
        return this.adminservice.findAll();
    }

    @Post("/cities")
    async create(@Body() cityDto: CityDto) {
        const val = await this.adminservice.create(cityDto);
        return val;
    }


}
