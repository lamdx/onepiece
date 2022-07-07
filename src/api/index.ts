import service from '@/request'
// 基本返回数据格式
interface BaseResponse {
  success?: boolean
  data?: any
  time?: string
  [key: string | symbol]: any
}

const request = function (config: object = {}): Promise<any> {
  return service.request(config)
}
// const request = function (config: object = {}): Promise<any> {
//   return service.request(config);
// };

/**
 * vite 环境变量
 * {
 *   "BASE_URL": "/",
 *   "MODE": "development",
 *   "DEV": true,
 *   "PROD": false,
 *   "SSR": false
 * }
 */
// console.log('import.meta.env', import.meta.env);
const vvhanBaseURL = import.meta.env.DEV
  ? 'http://localhost:3000/vvhan'
  : 'https://api.vvhan.com'
const uomgBaseURL = import.meta.env.DEV
  ? 'http://localhost:3000/uomg'
  : 'https://api.uomg.com'

export const getwbHotlist = () =>
  request({
    url: '/api/hotlist?type=wbHot',
    method: 'GET',
    baseURL: vvhanBaseURL
  })

export const getZhihuhotlist = () =>
  request({
    url: '/api/hotlist?type=zhihuHot',
    method: 'GET',
    baseURL: vvhanBaseURL
  })

export const get36Kehotlist = () =>
  request({
    url: '/api/hotlist?type=36Ke',
    method: 'GET',
    baseURL: vvhanBaseURL
  })

export const getJokeList = () =>
  request({
    url: '/api/hotlist?type=wxJoke',
    method: 'GET',
    baseURL: vvhanBaseURL
  })

export const getWeiboHot = () =>
  request({
    url: '/api/wbhot',
    method: 'GET',
    baseURL: vvhanBaseURL
  })

export const getLove = () =>
  request({
    url: '/api/love',
    method: 'GET',
    baseURL: vvhanBaseURL
  })

export const getSao = () =>
  request({
    url: '/api/sao',
    method: 'GET',
    baseURL: vvhanBaseURL
  })

export const getMusic = () =>
  request({
    url: '/api/rand.music?sort=热歌榜&format=json',
    method: 'GET',
    baseURL: uomgBaseURL
  })

export const getQinghua = () =>
  request({
    url: '/api/rand.qinghua?format=json',
    method: 'GET',
    baseURL: uomgBaseURL
  })
