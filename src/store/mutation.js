import * as types from './mutation-types'
const mutations = {
  [types.SAVE_USERNAME](state, playload) {
    state.username = playload
  },
}
export default mutations;