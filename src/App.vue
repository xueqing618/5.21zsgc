<template>
  <div class="app">
    <p><input type="text" placeholder="搜索" v-model="input.serach"/><button @click="serach(input.serach)">搜索</button></p>
    <p>
      <input type="text" placeholder="name" v-model="input.name"/>
      <input type="text" placeholder="age" v-model="input.age"/>
      <button @click="add(input.name,input.age)">添加</button>
    </p>
    <div>
      <table cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <td>名字</td>
            <td>年龄</td>
            <td>地址</td>
            <td>操作</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td><input type="text"/>{{item.name}}</td>
            <td><input type="text"/>{{item.age}}</td>
            <td><input type="text"/>{{item.address}}</td>
            <td>
              <button @click="onclick(item.id)">删除</button>
              <button @click="update">修改</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data(){
   return {
      input:{
        name:'',
        age:'',
        serach:''
      }
    }
  },
  created () {
   this.$store.dispatch('AXIOS_ACTION_DATA')
  },
  methods:{
    //删除
    onclick(id){
      this.$store.dispatch('AXIOS_ACTION_DEL',id)
    },
    //添加
    add(name,age){
      let obj={name,age}
       this.$store.dispatch('AXIOS_ACTION_ADD',obj)
       window.location.reload(),{
          name:this.input.name,   
          phone:this.input.phone,

       }
    },
    //搜索
    serach(val){
      this.$store.dispatch('AXIOS_ACTION_SERACH',val)
      this.search = ''
    },
    update(){
      
    }
  },
  computed:{
    ...mapState(['data']),
  }
}
</script>
<style>
table{
  width: 700px;
  border: 1px solid #ccc;
}

td{
  width: 180px;
  height: 40px;
  text-align: center;
  border: 1px solid #ccc;
}
td input{
  border: 0;
  outline: 0;
}
input{
  height: 40px;
}
</style>
