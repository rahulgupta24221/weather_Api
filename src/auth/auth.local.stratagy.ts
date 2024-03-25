import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
//import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Admin } from 'src/admin/admin.entity';
import { create } from 'domain';
import { City, CitySchema } from 'src/city/city.model';
import { CityDto } from 'src/city/city.dto';
//import { AuthService } from 'src/admin/admin.service';

@Injectable()
export class passportLocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }



    async validate(username: string, password: string): Promise<City> {
        const user:Admin = await this.authService.getadminbyname(username);
        if(user==undefined) throw new UnauthorizedException();
        
        if(user.password == password)
        {
            return create();
        }
    }
}

