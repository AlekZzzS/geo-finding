import { Injectable } from '@nestjs/common';
import * as geoip from 'geoip-lite';

@Injectable()
export class GeoService {
  async getGeoInfo(ip: string) {
    if (!ip) {
      throw new Error('IP address is required');
    }

    const geo = geoip.lookup(ip);
    if (!geo) {
      throw new Error(`No data found for this ${ip}`);
    }

    return {
      lat: geo.ll[0],
      lng: geo.ll[1],
      country: geo.country,
      city: geo.city,
    };
  }
}