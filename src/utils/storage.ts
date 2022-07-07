function _getStorageType(type: string) {
  switch (type) {
    case 'local':
      return localStorage
    case 'session':
      return sessionStorage
    default:
      return localStorage
  }
}

function _getItem(key: string, type = 'local') {
  if (!key || typeof key !== 'string') {
    console.error(`参数${key}错误`)
    return
  }
  const data: any = _getStorageType(type).getItem(key)
  try {
    if (data !== '' && data !== undefined) {
      return JSON.parse(data)
    }
    return ''
  } catch (err) {
    console.log(err)
    console.error(`转换JSON失败，key：${key}`)
  }
}

function _setItem(key: string, value: any, type = 'local') {
  // key 必须为字符串
  if (!key || typeof key !== 'string') {
    console.error(`参数${key}错误`)
    return
  }
  let data
  // 统一将数据转换为 json 格式进行存储
  if (value === undefined) {
    data = JSON.stringify('')
  } else if (typeof value === 'object') {
    data = JSON.stringify(value)
  } else {
    data = value
  }
  _getStorageType(type).setItem(key, data)
}

// 获取原始数据
export function getRawItem(key: string, type = 'local') {
  if (!key) {
    return
  }
  const raw = _getStorageType(type).getItem(key)
  return raw || ''
}

// 获取数据
export function getItem(key: string, type = 'local') {
  return _getItem(key, type)
}

// 保存数据
export function setItem(key: string, value: any, type = 'local') {
  _setItem(key, value, type)
}

// 删除数据
export function removeItem(key: string, type = 'local') {
  _getStorageType(type).removeItem(key)
}
