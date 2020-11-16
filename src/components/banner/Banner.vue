<!--  -->
<template>
 <div class="content">
    <div class="banner">
        <div class="swiper-container banner-container swiper1">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in banner" :key="index" >
                        <img :src="item.banner" alt="">
                        <div class="slide-item">
                          <h1 class="slide-item-title">{{item.title}}</h1>
                          <p class="slide-item-desc">{{item.description}}</p>
                          <div class="banner-link">
                              <a href="">了解更多</a>
                              <a href="">立即咨询</a>
                          </div>

                        </div>
                    </div>
                    
                           
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination "></div>
                
               
            </div>


</div>


 </div>
</template>

<script>
import Swiper from "swiper"
import {mapState,mapActions} from 'vuex';
export default {
 data () {
    return {

    }
 },
 computed:{
    ...mapState(['banner'])
 },
 components:{

 },

 mounted(){

   this.reqBanner();
   this.$nextTick(() => {
          new Swiper ('.swiper1', {
          direction: 'horizontal', // 垂直切换选项
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        });   

    });

 },

 
 methods:{
     ...mapActions(['reqBanner'])
 }


}

</script>

<style  scoped>
  
.content{
    width: 1900px;
}
.banner{
     width: 100%;
     overflow: hidden;
     
}

.swiper-pagination-bullet{
    margin: 0 4px;
    width: 50px;
    height: 10px;
    border-radius: 0;
    opacity :1;
    background:#ffffff; 
}

.swiper-pagination-bullet-active{
    background-color: #2b338b;
}

.swiper-slide{
    position: relative;
}
.slide-item{
    position: absolute;
    width: 420px;
    z-index: 10;
    top:50%;
    left: 445px;
    margin-top:-160px;

}
.slide-item-title{
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 70px;
    margin-top: 30px;
}

.slide-item-desc{
    font-size: 16px;
    line-height: 30px;
    max-width: 290px;
    color: #fff;
    margin-bottom: 100px;
}

.banner-link a{
  
    text-decoration: none;
    display: inline-block;
    width: 160px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 3px;
    
}

.banner-link a:first-child{
    border:1px solid #fff;
    margin-right: 20px;
    color: #fff;
}

.banner-link a:last-child{
    color: #33b0ff;
    background: #fff;
}
.button-prev{
    color: #fff;
    left: 360px;
}

.button-next{
    color: #fff;
    right: 360px;
}
</style>
