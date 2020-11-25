import spaceService from '../services/space.service.js'

export const spaceStore = {
    strict: true,
    state: {
        spaces: [],
        filterBy: null,
        sortBy: ''
    },
    getters: {
        spacesForDisplay(state) {
            return state.spaces;
        },
        
    },
    mutations: {
        setSpaces(state, {spaces}) {
            state.spaces = spaces;
            console.log(state.spaces,'state spaces')
        },
        setCurrSpace(state,{space}) {
            state.currSpace = space;
        }
    },
    actions: {
        async loadSpaces(context) {
            const spaces = await spaceService.getSpaces();
            context.commit({type:'setSpaces', spaces})
        },
        async filterSpaces(context,{filterBy}) {
            const spaces = await spaceService.query(filterBy);
            context.commit({type:'setSpaces', spaces})
        },

    },
    computed:{
    }
}
