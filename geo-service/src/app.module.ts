import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GeoService } from './geo.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [GeoService],
})
export class AppModule {}
