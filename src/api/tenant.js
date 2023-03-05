import request from '@/utils/request'

// 拍摄资源发布

export function catePull(data) {
  return request({
    url: '/api/index/zy_add',
    method: 'post',
    params: data
  })
}
// 资源记录接口
export function cateLog(data) {
  return request({
    url: '/api/index/zy',
    method: 'post',
    params: data
  })
}
// 资源分类
export function cateClassify(data) {
  return request({
    url: '/api/index/zy_cate',
    method: 'post',
    params: data
  })
}

// 投标下单
export function toubiaoApi(data) {
  return request({
    method: 'post',
    url: '/api/index/toubiao',
    params: data
  })
}
// 企业服务
export function ServeRZApi(data) {
  return request({
    method: 'post',
    url: '/api/index/user_server',
    params: data
  })
}

//  资质办理
export function ServeZZApi(data) {
  // console.log('纸质版里',data);
  return request({
    method: 'post',
    url: '/api/index/user_zz',
    params: data
  })
}
// 活动策划
export function ServeCHApi(data) {
  return request({
    method: 'post',
    url: '/api/index/user_act',
    params: data
  })
}
//  政策咨询
export function ServeZXApi(data) {
  return request({
    method: 'post',
    url: '/api/index/user_zh',
    params: data
  })
}
// 服务进度
export function ServerListLog(data) {
  return request({
    method: 'post',
    url: '/api/index/server_jindu',
    params: data
  })
}
// 商家入驻查询
export function shangjiaruzhuLog(data) {
  return request({
    method: 'post',
    url: '/api/index/user_detail_f',
    params: data
  })
}
