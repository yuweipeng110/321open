import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
// 用户登录基本信息
export function getLogin(data) {
  return request({
    url: '/api/index/user',
    method: 'post',
    params: data
  })
}
// 申请提现接口

export function withdrawDeposit(data) {
  return request({
    url: '/api/index/tx',
    method: 'post',
    params: data
  })
}
// 需求发布

export function enndPull(data) {

  return request({
    url: '/api/index/request_add',
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    params: data
  })
}
// 需求记录
export function enndRecord(data) {
  // console.log('需求记录',data);
  return request({
    url: '/api/index/request',
    method: 'post',
    params: data
  })
}

// 用户修改资料

export function updataUser(data) {
  // console.log('用户修改资料',data);
  return request({
    url: '/api/index/update_user',
    method: 'post',
    params: data
  })
}
// 提现列表

export function withdrawDepositList(data) {
  // console.log('提现列表',data);
  return request({
    url: '/api/index/my_tx',
    method: 'post',
    params: data
  })
}

// 收益记录
export function YieldLog(data) {
  // console.log('收益记录',data);
  return request({
    url: '/api/index/my_hav',
    method: 'post',
    params: data
  })
}
// 消费记录

export function consumeLog(data) {
  // console.log('消费记录',data);
  return request({
    url: '/api/index/my_order',
    method: 'post',
    params: data
  })
}
//关注
export function addGuanzhu(data) {
  return request({
    url: '/api/index/guanzhu',
    method: 'post',
    params: data
  })

}
// 我的关注

export function attention(data) {
  return request({
    url: '/api/index/my_like',
    method: 'post',
    params: data
  })

}
// 我的收藏

export function collect(data) {
  return request({
    url: '/api/index/my_collect',
    method: 'post',
    params: data
  })
}

// 用户登录验证码发送接口

export function UserEmail(data) {

  // console.log(data);
  return request({
    url: '/api/index/send_code',
    method: 'post',
    params: data
  })
}

// let {res:data}=resad

// 用户验证码登录接口

export function CodeLogin(data) {
  return request({
    url: '/api/index/mobile_login',
    method: 'post',
    params: data
  })
}

// 图片上传

export function imageUpload(data) {
  return request({
    url: '/api/index/upload',
    method: 'post',
    data,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}


export function tenderList(data) {
  return request({
    url: '/api/index/my_toubiao',
    method: 'post',
    params: data
  })
}

// 投标删除
export function deleteTender(data) {
  return request({
    url: '/api/index/toubiao_delete',
    method: 'post',
    params: data
  })
}

// 资源下单

export function xiadan(data) {
  return request({
    url: '/api/index/goumai',
    method: 'post',
    params: data
  })
}

// 交易
export function completeOrder(data) {
  return request({
    url: '/api/index/complete_order',
    method: 'post',
    params: data
  })
}

// 评论
export function orderCommenton(data) {
  return request({
    url: '/api/index/order_pinglun',
    method: 'post',
    params: data
  })
}

// 评论标签
export function orderPltag(data) {
  return request({
    url: '/api/index/pttag',
    method: 'post',
    params: data
  })
}
