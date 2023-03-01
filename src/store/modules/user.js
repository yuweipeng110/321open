import {
  login, logout, getInfo, getLogin, CodeLogin, tenderList, enndRecord, consumeLog,
  YieldLog,
  withdrawDepositList, collect
} from '@/api/user'
import { cateLog } from "@/api/tenant"
import { homeQuantity } from "@/api/home"
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    // 剧组需求记录
    needList: localStorage.getItem("needList") && localStorage.getItem("needList") != "undefined" ? JSON.parse(localStorage.getItem("needList")) : [],
    userInfo: localStorage.getItem("userinfo") && localStorage.getItem("userinfo") != "undefined" ? JSON.parse(localStorage.getItem("userinfo")) : {},
    id: localStorage.getItem("id") || "",
    tender: localStorage.getItem("tenderList") ? JSON.parse(localStorage.getItem("tenderList")) : {},
    // 消费收益体现记录
    xiaofeiLog: localStorage.getItem("xiaofeiLog") && localStorage.getItem("xiaofeiLog") != "undefined" ? JSON.parse(localStorage.getItem("xiaofeiLog")) : [],
    shouyiLog: localStorage.getItem("shouyiLog") && localStorage.getItem("shouyiLog") != "undefined" ? JSON.parse(localStorage.getItem("shouyiLog")) : [],
    tixianLog: localStorage.getItem("tixianLog") && localStorage.getItem("tixianLog") != "undefined" ? JSON.parse(localStorage.getItem("tixianLog")) : [],

    shouchang: localStorage.getItem("shouchang") && localStorage.getItem("shouchang") != "undefined" ? JSON.parse(localStorage.getItem("shouchang")) : []
    , ziyuan: localStorage.getItem("ziyuan") && localStorage.getItem("ziyuan") != "undefined" ? JSON.parse(localStorage.getItem("ziyuan")) : [],
    //  首页需求中心
    homeNeedCenter: localStorage.getItem("homeNeedCenter") && localStorage.getItem("homeNeedCenter") != "undefined" ? JSON.parse(localStorage.getItem("homeNeedCenter")) : []
    ,
    //  企业服务进度
    progressServe: localStorage.getItem("progressServe") && localStorage.getItem("progressServe") != "undefined" ? JSON.parse(localStorage.getItem("progressServe")) : []
    //  入驻进度
    , ruzhujindu: localStorage.getItem("isSuccess") && localStorage.getItem("isSuccess") != "undefined" ? localStorage.getItem("isSuccess") : true
    , ruzhuxiangqing: localStorage.getItem("ruzhuxiangqing") && localStorage.getItem("ruzhuxiangqing") != "undefined" ? localStorage.getItem("ruzhuxiangqing") : 0


  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_JINDU: (state, data) => {
    console.log("状态管理用户基本信息", data);
    state.ruzhujindu = data

    localStorage.setItem("ruzhujindu", data)
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_USERINFO: (state, data) => {
    console.log("状态管理用户基本信息", data);
    state.userInfo = data

    localStorage.setItem("userinfo", JSON.stringify(data))
  },
  // 清空本地存储
  SET_CLEAR:(state, data) => {
    // console.log("状态管理用、户基本信息", data);
    // state.userInfo = data、
    localStorage.clear()

    // localStorage.setItem("userinfo", JSON.stringify(data))
  },
  // 商家入驻进度

  SET_SERVEJINDUS: (state, data) => {
    console.log("progressServe", data);
    // state.progressServe=data
    state.ruzhuxiangqing = data

    localStorage.setItem("ruzhuxiangqing", data)
  },


  // 企业服务进度
  SET_SERVEPRO: (state, data) => {
    console.log("progressServe", data);
    // state.progressServe=data
    state.progressServe.push(data);
    const jsonData = JSON.stringify(state.progressServe);
    localStorage.setItem("progressServe", jsonData)
  },


  // 首页需求中心

  SET_ENNDCONTENT: (state, data) => {
    console.log("状态管理用户基本信息", data);
    if (data.length > 0) {
      state.homeNeedCenter = data
      localStorage.setItem("homeNeedCenter", JSON.stringify(data))
    } else {
      state.homeNeedCenter = []
      localStorage.setItem("homeNeedCenter", [])
    }

  },


  // 消费收益体现记录
  SET_USERLOG: (state, data) => {
    console.log("状态管理用户基本信息", data);
    if (data.length > 0) {
      state.xiaofeiLog = data
      localStorage.setItem("xiaofeiLog", JSON.stringify(data))
    } else {
      state.xiaofeiLog = []
      localStorage.setItem("xiaofeiLog", [])
    }

  },
  // 用户体现记录
  SET_TIXIAN: (state, data) => {
    console.log("用户提现信息", data);
    if (data.length > 0) {
      state.tixianLog = data
      localStorage.setItem("tixianLog", JSON.stringify(data))
    } else {
      state.tixianLog = []
      localStorage.setItem("tixianLog", [])
    }

  },

  // 用户收益记录
  SET_SHOUYI: (state, data) => {
    console.log("用户收益信息", data);
    if (data.length > 0) {
      state.shouyiLog = data
      localStorage.setItem("shouyiLog", JSON.stringify(data))
    } else {
      state.shouyiLog = []
      localStorage.setItem("shouyiLog", [])
    }

  },
  // 用户id
  SET_ID: (state, data) => {
    state.id = data
    localStorage.setItem("id", data)
  },
  // 投标记录

  SET_TENDER: (state, data) => {
    state.tender = data

    localStorage.setItem("tenderList", JSON.stringify(data))
  },

  // 修改剧组需求记录
  SET_NEEDLIST: (state, data) => {
    state.needList = data

    localStorage.setItem("needList", JSON.stringify(data))
  },

  // 用户收藏
  SET_SHOUCHANG: (state, data) => {
    state.shouchang = data

    localStorage.setItem("shouchang", JSON.stringify(data))
  },
  // SET_SHZY 商户资源
  SET_SHZY: (state, data) => {
    state.ziyuan = data

    localStorage.setItem("ziyuan", JSON.stringify(data))
  },

}


const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  get_ID({ commit }, data) {
    console.log("commit", commit);
    console.log("state===========id", data);
    commit("SET_ID", data)
  },

  //  首页需求中心请求
  get_contentAct({ commit }, data) {

    // console.log("data",data);

    return new Promise((resolve, reject) => {
      homeQuantity(data).then((res) => {
        if (!res.data) {
          return reject('首页需求中心请求出错.')
        }
        // console.log("投标历史记录");
        console.log("===============", res);
        commit("SET_ENNDCONTENT", res.data.data)
      })
    })
  },

  // 用户收藏

  getLike({ commit }, data) {

    // console.log("data",data);

    return new Promise((resolve, reject) => {
      collect(data).then((res) => {
        if (!res.data) {
          return reject('Verification failed, please Login again.')
        }
        // console.log("投标历史记录");
        console.log("===============", res);
        commit("SET_SHOUCHANG", res.data.data)
      })
    })
  },

 

  // 商户资源jilu
  getZy({ commit }, data) {

    console.log("商户资源jilu", data);

    return new Promise((resolve, reject) => {
      cateLog(data).then((res) => {
        if (!res.data) {
          return reject('Verification failed, please Login again.')
        }

        console.log("===============", res);
        commit("SET_SHZY", res.data.data)
      })
    })
  },



  //  个人消费记录

  getUserLog({ commit }, data) {

    console.log("data", data);

    return new Promise((resolve, reject) => {
      consumeLog(data).then((res) => {
        if (!res.data) {
          return reject('Verification failed, please Login again.')
        }
        // console.log("投标历史记录");
        console.log("===============", res);
        commit("SET_USERLOG", res.data.data)
      })
    })
  },

  //  用户提现记录

  getTixianLog({ commit }, data) {

    console.log("体现data", data);

    return new Promise((resolve, reject) => {
      withdrawDepositList(data).then((res) => {
        if (!res.data) {
          return reject('Verification failed, please Login again.')
        }

        console.log("===============", res);
        commit("SET_TIXIAN", res.data.data)
      })
    })
  },
  //  用户收益记录

  getShouyiLog({ commit }, data) {

    console.log("收益data", data);

    return new Promise((resolve, reject) => {
      YieldLog(data).then((res) => {
        if (!res.data) {
          return reject('Verification failed, please Login again.')
        }
        // console.log("投标历史记录");
        console.log("===============", res);
        commit("SET_SHOUYI", res.data.data)
      })
    })
  },



  // 剧组需求记录

  getEnndAct({ commit }, data) {
    return new Promise((resolve, reject) => {
      enndRecord(data).then((res) => {
        if (!res.data) {
          return reject('Verification failed, please Login again.')
        }
        // console.log("投标历史记录");
        commit("SET_NEEDLIST", res.data.data)
      })
    })


  },


  //  投标记录异步接口信息
  getTenderAct({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      tenderList(data).then((res) => {
        if (!res.data) {
          return reject('Verification failed, please Login again.')
        }
        console.log("投标历史记录");
        commit("SET_TENDER", res.data.data)
      })
    })


  },

  getUserInfo({ commit, state }, data) {

    //  console.log("commit",commit);
    //  console.log("state",state);
     console.log("获取用户基本信息",data);
    return new Promise((resolve, reject) => {
      getLogin(data).then(res => {
        if (!res.data) {
          return reject('Verification failed, please Login again.')
        }

        let resData = res.data.data
        commit("SET_USERINFO", resData)



        resolve(resData)
      }).catch(error => {
        reject(error)
      })
    })
  },




  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          return reject('Verification failed, please Login again.')
        }

        const { name, avatar } = data

        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

