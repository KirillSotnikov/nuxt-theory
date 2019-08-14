export const state = () => ({
  users: []
})

export const mutations = {
  setUsers(state, payload) {
    state.users = payload
  }
}

export const actions = {
  async fetchUsers({commit}) {
    try{
      const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users')
      commit('setUsers', users)
    } catch(err) {
      throw new Error(err)
    }
  },
  async fetchUserById({}, payload) {
    try{
      const user = await this.$axios.$get(`https://jsonplaceholder.typicode.com/users/${payload}`)
      return user
    } catch(err) {
      throw new Error(err)
    }
  }
}

export const getters = {
  users(state) {
    return state.users
  }
}