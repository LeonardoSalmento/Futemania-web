export default {
    state: {
        championship: 'Campeonato Alemão'
    },
    getters: {
        getChampionship(state){
            return state.championship;
        }
    },
    mutations: {
        setChampionship(state, newValue){
            state.championship = newValue;
        },
    },
    actions: {
        changeChampionship(context, value){
            context.commit('setChampionship', value)
        },
    }
}