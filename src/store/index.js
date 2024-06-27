import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    projects:null
  },
  getters: {
  },
  mutations: {
    setprojects(state,payload){
      state.projects=payload
    }
  },
  actions: {
    async getInfo({commit}){
      let {data}=await axios.get('https://caitlin-dalwai.github.io/redemption-api/data/')
      let {projects}=data
      console.log(data);
      commit('setprojects',projects)
    }
  },
  modules: {
  }
})
