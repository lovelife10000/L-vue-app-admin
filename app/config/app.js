export const API_ROOT = (process.env.NODE_ENV === 'production')
  ? 'http://admin.lijun1991.com/'
  :'http://localhost:9002/'

export const CookieDomain = (process.env.NODE_ENV === 'production')
  ? '.lijun1991.com'
  : ''