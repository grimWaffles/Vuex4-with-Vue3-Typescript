import vuex, { StoreOptions } from 'vuex'
import { user } from '@/store/modules/userModule'

export interface RootState{
  helloMessage:string
}

const store : StoreOptions<RootState>={
  state:{
    helloMessage:'This is the message',
    
  },
  modules:{
    user,
  }
} 


export default new vuex.Store<RootState>(store)