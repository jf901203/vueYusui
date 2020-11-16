
import {
    RECEIVE_BANNER,
} from './mutation-types'

export default {
  [RECEIVE_BANNER] (state, {banner}) {
    state.banner = banner
    console.log(banner)
  },

  
}