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
        updateSpace(state,  space ) {
            console.log('updating in store mutation!! ',space )
            const idx = state.spaces.findIndex(currSpace => currSpace._id === space._id)
            state.spaces.splice(idx, 1, space)
          }
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
        async updateSpace({ commit }, { updatedSpace }) {
            console.log(updatedSpace,'space!!');
            await spaceService.update(updatedSpace)
            commit({
              type: 'updateSpace',
              updatedSpace
            })
          },
    },
}
