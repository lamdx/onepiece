import Axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'
import router from '../router'
import { Toast } from 'vant'

interface RequestConfig extends AxiosRequestConfig {
  loading?: boolean
  NO_GLOBAL_MSG?: boolean
}
interface Response extends AxiosResponse {
  config: RequestConfig
}
interface Error extends AxiosError {
  config: RequestConfig
}

/**
 * get status code
 * @param {AxiosError} response Axios response object
 */
const getErrorCode2text = (error: AxiosError): string => {
  /** http status code */
  const code = error.status
  /** notice text */
  let message = 'Request Error'
  switch (code) {
    case '400':
      message = 'Request Error'
      break
    case '401':
      message = 'Unauthorized, please login'
      break
    case '403':
      message = '拒绝访问'
      break
    case '404':
      message = '访问资源不存在'
      break
    case '408':
      message = '请求超时'
      break
    case '500':
      message = '位置错误'
      break
    case '501':
      message = '承载服务未实现'
      break
    case '502':
      message = '网关错误'
      break
    case '503':
      message = '服务暂不可用'
      break
    case '504':
      message = '网关超时'
      break
    case '505':
      message = '暂不支持的 HTTP 版本'
      break
    default:
      message = '位置错误'
  }
  return message
}
// const baseURL = 'http://localhost:8080';
/**
 * @returns  {AxiosResponse} result
 * @tutorial see more:https://github.com/onlyling/some-demo/tree/master/typescript-width-axios
 * @example
 * service.get<{data: string; code: number}>('/test').then(({data}) => { console.log(data.code) })
 */
const service = Axios.create({
  baseURL: '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

/**
 * @description 请求发起前的拦截器
 * @returns {AxiosRequestConfig} config
 */
service.interceptors.request.use((config: RequestConfig) => {
  if (config.loading) {
    // Spin.show();
  }
  const { baseURL, url } = config
  if (url && baseURL && url.indexOf(baseURL) < 0) {
    config.url = baseURL + url
  }
  // let headers = { token: window.localStorage.getItem('token') || 'token' };
  // // 业务代码的 headers 优先级高于公共配置的 headers
  // config.headers = Object.assign(headers, config.headers);
  const menuCode = window.localStorage.getItem('menuCode') || 'menuCode'
  // FormData qs 这里还有问题
  if (config.method?.toLowerCase() === 'post') {
    // config.data = qs.stringify(config.data);
    // FormData 不能直接追加参数
    if (config.data instanceof FormData) {
      // 业务代码的 menuCode 优先级高于公共配置的 menuCode
      config.data.append('menuCode', menuCode)
    } else {
      config.data = Object.assign({ menuCode }, config.data)
    }
  }
  // config = { baseURL, data, headers, method, responseType, timeout, url, NO_GLOBAL_MSG };
  return config
})

/**
 * @description 响应收到后的拦截器
 * @returns {}
 */
// [Interceptors | Axios Docs](https://axios-http.com/docs/interceptors)
service.interceptors.response.use(
  // Any status code that lie within the range of 2xx cause this function to trigger
  // 在2xx范围内的任何状态代码都会触发此函数，这里主要用于处理响应数据
  (response: Response) => {
    // response = { config: {}, data: {}, headers: {}, request: {}, status: 200, statusText: 'ok' };
    if (response.config?.loading) {
      // Spin.hide();
    }
    const res = response.data
    if (!res) {
      alert('响应报文未返回数据')
      return Promise.reject(response)
    }
    // 只有当交易正常才进入业务逻辑代码中
    if (res) {
      return Promise.resolve(res)
    } else if (res instanceof ArrayBuffer || res instanceof Blob) {
      // 如果是文件类型
      return Promise.resolve(res)
    } else if (res.errorCode && res.errorCode + '' === '401') {
      if (confirm('抱歉，你的操作超时，请重新登录')) {
        window.localStorage.clear()
        window.sessionStorage.clear()
        window.location.href = 'redirectUrl'
      }
      return Promise.reject(res)
    }
    // 如果与后端约定好状态码 errorCode，需要在业务逻辑中处理，不需要 http 中拦截报错，则需要请求时配置 NO_GLOBAL_MSG
    if (!response.config.NO_GLOBAL_MSG) {
      alert(res.errorMsg || res.errorCode)
      return Promise.reject(res)
    }
  },
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // 任何超出2xx范围的状态代码都会触发此函数
  (error: Error) => {
    console.log('123123123 ===', 123123123)

    // error = { data, status, statusText, headers, config, baseURL }
    // Spin.hide();
    const status = error.response?.status
    const statusMap: { [key: number]: string } = {
      400: '400 Bad Request',
      401: 'login Timeout',
      404: '404 Not Found',
      405: '405 Method Not Allowed',
      500: '500 网络请求无响应！',
      502: '502 Bad Gateway',
      504: '504 Gateway Timeout'
    }
    const msg = status ? statusMap[status] : '网络请求异常！'
    if (!error.config.NO_GLOBAL_MSG) {
      alert(msg)
    }
    // 抛出错误，才不会执行后续代码
    return Promise.reject(error)

    // const _text = getErrorCode2text(error)
    // return Promise.reject(new Error(_text))
  }
)

export default service
