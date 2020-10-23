import Vue from 'vue'
import Vuex from 'vuex'
import { MusicState } from './modules/app'

Vue.use(Vuex)

export interface RootState {
    music: MusicState
}

export default new Vuex.Store<RootState>({})