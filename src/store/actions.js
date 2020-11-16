import {
  getBanner
} from '../api/test'


import {RECEIVE_BANNER} from './mutation-types'
export default {
  async reqBanner({commit}) {
   const res= await getBanner();
  if(res.code===0){
    const banner=res.data
   
    commit(RECEIVE_BANNER,{banner})
   
  }

  }

 


}