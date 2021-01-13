export default {
    state: {
        myClub: 'Futemania',
    },
    getters: {
        getMyClub(state){
            return state.myClub;
        },
    },
    mutations: {
        setMyClub(state, newValue){
            state.myClub = newValue;
        }
    }, 
    actions: {
        updateMyClub(context, value){
            context.commit('setMyClub', value)
        }
    }

}