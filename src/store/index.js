import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:[]
  },
  mutations: {
    'AXIOS_DATA'(state,action){
      state.data=action
    }
  },
  actions: {
    // data数据
    'AXIOS_ACTION_DATA'({commit}){
      axios.get('https://api.baxiaobu.com/index.php/home/v5/findUser')
      .then(res=>{
        commit('AXIOS_DATA',res.data.users)
      })
    },
    //删除
    'AXIOS_ACTION_DEL'({commit},dataId){
      let id={id:dataId}
      axios.post('https://api.baxiaobu.com/index.php/home/v5/deleteUser',qs.stringify(id))
      .then(()=>{
        axios.get('https://api.baxiaobu.com/index.php/home/v5/findUser')
        .then(res=>{
          commit('AXIOS_DATA',res.data.users)
        })
      })
    },
    //添加
    'AXIOS_ACTION_ADD'({commit},obj){
      console.log(obj)
      axios.post('https://api.baxiaobu.com/index.php/home/v5/add',qs.stringify(obj))
      .then(()=>{
        
      console.log(obj)
        axios.get('https://api.baxiaobu.com/index.php/home/v5/findUser')
        .then(res=>{
          commit('AXIOS_DATA',res.data.users)
        })
      })
    },
 
  },
  modules: {
    
  }
})
