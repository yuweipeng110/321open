import request from '@/utils/request'
// 首页相关

// 首页轮播图
export function homeSwiper(){
    return request({
        url:"/api/index/lunbo",
        method:"post"
    })
}

// 首页最新咨询

export function homeMessage(){
    return request({
        url:"/api/index/index_art",
        method:"post"
    })
}

// 首页需求中心

export function homexqzx(){
    return request({
        url:"/api/index/index_request",
        method:"post"
    })
}

// 需求中心接口

export function homeQuantity(data){
    return request({
        url:"/api/index/request_list",
        method:"post",
        params:data
    })
}


// 需求详情


export function demandDitial(data){

  //  console.log("需求详情参数",data);


    return request({
        url:"/api/index/request_detail",
        method:"post",
        params:data
    })
}

//需求修改
export function updateDitial(data){

    return request({
        url:"/api/index/request_update",
        method:"post",
        params:data
    })
}

//需求删除

export function deleteDitial(data){

  return request({
      url:"/api/index/request_delete",
      method:"post",
      params:data
  })
}

// 首页优质外链
export function homeOuterLink(){
    return request({
        url:"/api/index/link",
        method:"post"
    })
}


// 首页视频精选

export function homeVideo(){
    return request({
        url:"/api/index/video",
        method:"post"
    })
}


// 首页拍摄资源

export function homezyList(){
    return request({
        url:"/api/index/zy_list",
        method:"post"
    })
}


// 首页拍摄资源详情

export function homezydetail(data){
    return request({
        url:"/api/index/zy_detail",
        method:"post",
        params:data
    })
}

// 获取分类文章

export function wenList(data){
    return request({
        url:"/api/index/art",
        method:"post",
        params:data

    })
}
// 文章详情接口


export function art_detail(data){
    return request({
        url:"/api/index/art_detail",
        method:"post",
        params:data
    })
}
