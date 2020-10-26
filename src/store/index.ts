import Vue from 'vue'
import Vuex from 'vuex'
import { MusicState } from './modules/music'

Vue.use(Vuex)

export interface RootState {
    music: MusicState
}

export default new Vuex.Store<RootState>({})
/*
import Vue from 'vue'
import Vuex from 'vuex'
import count from './modules/count'

Vue.use(Vuex)



export default new Vuex.Store({
    modules:{
        count
    }
})*/
