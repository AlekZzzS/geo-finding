import axios from 'axios'

export class GeoSDK {
  constructor(private readonly baseUrl: string) {}

  async getGeoInfo(ip: string) {
    try {
      const response = await axios.get(`${this.baseUrl}/?ip=${ip}`)
      return response.data
    } catch (error: any) {
      throw new Error(`Failed to get geo info: ${error.message}`)
    }
  }
}