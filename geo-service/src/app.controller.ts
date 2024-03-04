import { Controller, Get, Query, HttpStatus } from '@nestjs/common';
import { GeoService } from './geo.service';

@Controller()
export class AppController {
  constructor(private readonly geoService: GeoService) {}

  @Get()
  async getGeoInfo(@Query('ip') ip: string) {
    try {
      const geoInfo = await this.geoService.getGeoInfo(ip);
      return { ...geoInfo, statusCode: HttpStatus.OK };
    } catch (error) {
      return { error: error.message, statusCode: HttpStatus.INTERNAL_SERVER_ERROR };
    }
  }
}
