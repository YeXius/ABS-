import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state:{
        arr:[]
    },
    mutations:{
        tj(state,v){
            // console.log(v)
            let index = state.arr.findIndex((vv,i)=>{
                return v.id == vv.id
            })
            // console.log(index)
            if(index == -1){
                v.num = 1
                state.arr.push(v)
            }else{
                state.arr[index].num += 1
            }
        }
    }
})
export default store;