import * as types from './mutation-types'
const actions = {
  saveUserName( {commit}, playload){
    commit(types.SAVE_USERNAME, playload)
  }
}
export default actions;