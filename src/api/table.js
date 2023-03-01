import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}
// 获取地区列表
export function getAddressList(){
  return request({
    url:"/api/index/area",
    method:"get"
  })
}
// 获取文章分类

export function essayClassify(){
  return request({
    url:"/api/index/art_cate",
    method:"post"
  })
}
// 获取分类下的文章
export function classifyEssay(){
  return request({
    url:"/api/index/art",
    method:"post"
  })
}


// 商家入驻

export function ruzhu(data){
  return request({
    url:"/api/index/add_user_detail",
    method:"post",
    params:data
  })
}
