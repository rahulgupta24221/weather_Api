import { Controller,Post } from '@nestjs/common';
import { CityService } from './city.service';
import { Body } from '@nestjs/common';
import { CityDto } from './city.dto';

@Controller('city')
export class CityController {
    constructor(private readonly cityService:CityService){}

    @Post("/cities")
    async create(@Body() cityDto: CityDto) {
        const val = await this.cityService.create(cityDto);
        return val;
    }

}
