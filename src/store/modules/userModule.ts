import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import { RootState } from "..";

interface UserState{
    username:string
    email:string
}

const state: UserState = {
    username:'grimWaffles',email:'waziullah@live.com',
}

//state and return type is not optional for mutations
const mutations: MutationTree<UserState>={
    SET_USERNAME(state:UserState,payload:string):void{
        state.username=payload
    },
    SET_EMAIL(state:UserState):void{
        console.log('Mutation called')
        state.email='km'
    },
}

const actions: ActionTree<UserState,RootState>={
    async loadInfo({commit}):Promise<void>{
        console.log('Reached the module')
        commit('SET_USERNAME','wazi')
    }
}

//state and return type is  optional for getters
const getters:GetterTree<UserState,RootState>={
    getUserInfo(state):string{
        return `Username is ${state.username}  & email is ${state.email}`
    }
}

export const user : Module<UserState,RootState>={
    state,
    mutations,
    actions,
    getters,
}