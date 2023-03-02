
## homeSwiper 首页轮播图 /api/index/lunbo 图片缺少前缀
```
pic: "https://cgbox-1313228505.cos.ap-shanghai.myqcloud.com/image/2022/12/14/1671013779-48615.jpg"
pic: "/static/uploads/20220922/9fb4273fbe7f0cd2e3d5714fd5796c61.jpg"
```
轮播上传后台还没做，按照正常的对接就可以了，后台换图片
## homeMessage 首页最新咨询 /api/index/index_art  500 Internal Server Error
已修复

## homexqzx 首页需求中心 /api/index/index_request 页面中发布时间是否是 zhao_start招标开始时间/use_start使用开始时间
发布时间addtime,需求的接口有很多，由于对接的时候会加字段，一些接口字段不全，可以参考相关的接口

## homeQuantity 需求中心接口 /api/index/request_list ok
 
## demandDitial 需求详情 /api/index/request_detail ok

## homeOuterLink 首页优质外链 /api/index/link 二维码链接怎么生成 数据跟页面对不上 缺少场景、评分、评价
```
addtime: "2023-02-21 01:49:57"
avatar: "http://kelerk.178tqw.com/static/uploads/fbe1afbb46a06725e3e119ddc408ebd.png"
id: 1
mobile: "15236263626"
money: "100.00"
nick: "我是昵称"
password: null
wxcode: null
xiaofei: "50.00"
```
二维码是根据前端的页面链接生成的

## homeVideo 首页视频精选 /api/index/video 暂无数据
后端再做，会尽快加上

## homezyList 首页拍摄资源 /api/index/zy_list 暂无数据
先接资源发布接口，这个数据是前端发布的

## homezydetail 首页拍摄资源详情 /api/index/zy_detail 列表无数据，详情无数据
先接资源发布接口，这个数据是前端发布的

## wenList 获取分类文章 /api/index/art ok

## art_detail 文章详情接口 /api/index/art_detail ok





拍摄资源
## catePull 拍摄资源发布 /api/index/zy_add  

##  cateLog 资源记录接口 /api/index/zy  OK

## cateClassify  资源分类 /api/index/zy_cate  Ok  

## toubiaoApi 投标下单  api/index/toubiao   ok

##  ServeRZApi 企业服务  /api/index/user_server  Ok

##  ServeZZApi 资质办理  /api/index/user_zz  OK

## ServeCHApi 活动策划  /api/index/user_act  OK

## ServeZXApi  政策咨询  /api/index/user_zh  数据库少了 'zi'字段
没少呀！是不是zi是关键字了？

## ServerListLog 服务进度 api/index/server_jindu    OK

## shangjiaruzhuLog  商家入驻查询 /api/index/user_detail_f   没有返回值
这个是需要提交商家入驻后才会有数据的








user
## getLogin 用户登录基本信息 /api/index/user ok

## withdrawDeposit 申请提现接口 /api/index/tx ok

## enndPull 需求发布 /api/index/request_add ok

## enndRecord 需求记录 /api/index/request ok

## updataUser 用户修改资料 /api/index/update_user ok

## withdrawDepositList 提现列表 /api/index/my_tx OK
先申请提现才有数据
 
## YieldLog 收益记录 /api/index/my_hav 没有数据
这个是订单，下单完才有数据

## consumeLog 消费记录 /api/index/my_order 没有数据
这个是订单，下单完才有数据

## attention 我的关注 /api/index/my_like ok

## collect 我的收藏 /api/index/my_collect 没有数据
先做收藏接口


## imageUpload 图片上传 /api/index/upload 未测
```
axios.post("http://kelerk.178tqw.com/api/index/upload", formdata).then((res) => {
  console.log(res);
  this.imageUrl = res.data.url;
});
```

## tenderList 投标记录异步接口信息 /api/index/my_toubiao 暂无数据
先接投标接口

## xiadan 资源下单 /api/index/goumai 等待数据测试 
```


## UserEmail 用户登录验证码发送接口 /api/index/send_code 未测

## CodeLogin 用户验证码登录接口 /api/index/mobile_login 未测




// table
## getAddressList  获取地区列表 /api/index/area  OK
## essayClassify 获取文章分类  /api/index/art_cate OK
## classifyEssay  获取分类下的文章   /api/index/art  OK
## ruzhu   商家入驻  /api/index/add_user_detail ok

