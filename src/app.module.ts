import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CityModule } from './city/city.module';
import { AdminModule } from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
import { City, CitySchema } from './city/city.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/mydb'),
    MongooseModule.forFeature([{ name: City.name, schema: CitySchema }]),
    ConfigModule.forRoot(),
    UserModule, CityModule, AdminModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
