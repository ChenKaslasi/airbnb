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
        },
        addSpace(state, {space}) {
            state.spaces.push(space)
        },
        removeSpace(state, {spaceId}) {
            state.spaces = state.spaces.filter(space => space._id !== spaceId)
        },
    },
    actions: {
        async addSpace(context, {space}) {
            space = await spaceService.add(space)
            context.commit({type: 'addSpace', space})
            return space;
        },

        async removeSpace(context, {spaceId}) {
            await spaceService.remove(spaceId);
            context.commit({type: 'removeSpace', spaceId})
        },
        
        async filterSpaces(context,{filterBy}) {
            const spaces = await spaceService.filter(filterBy);
            context.commit({type:'setSpaces', spaces})
        },
    },
    computed:{
        
    }
}
