require('dotenv').config()

export const Config = {
  base_url_api:{
    base: process.env.BASE_URL_API || 'https://backend.ptmultiverse.com'
  }
}
