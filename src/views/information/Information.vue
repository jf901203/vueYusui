<template>
  <div>
      <Banner/>
      <section class="information">
     <div class="information-content">
        
            <div class="information-title">
                <h1 class="information-title-ch">信息系统集成服务</h1>
                <p class="information-title-en">Information system integration service</p>
            </div>
            <div class="information-item">
                <h1 class="information-item-title">系统集成</h1>
                <p class="information-item-desc">    软件与智能设备系统集成，提供从项目考察、方案设计、产品整合、开发实施到售后维护等一整套服务：</p>
                <div class="information-item-avator">
                    <img src="./img/information_service01.jpg" alt="">
                </div>
            </div>
            <div class="information-item">
                    <h1 class="information-item-title">软件系统集成</h1>
                    <p class="information-item-desc">     通过结构化的综合布线系统和计算机网络技术，将各个分离的设备（如个人电脑）、功能和信息等集成到相互关联的、统一和协调的系统之中，使资源达到充分共享，实现集中、高效、便利的管理。采用功能集成、网络集成、软件界面集成等多种集成技术</p>
                    <div class="information-item-avator">
                        <img src="./img/information_service02.jpg" alt="">
                    </div>
            </div>
     </div>
     
  
</section>
  </div>
</template>

<script>
import Banner from '../../components/banner/Banner'
export default {
data() {
return {

};
},
//import引入的组件
components: {
    Banner
},
//方法集合
methods: {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
}
</script>
<style >

.information{
    width: 100%;
}
.information-content{
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 50px;
}
.information-title{
    width: 100%;
    text-align: center;
    padding-top: 100px;
    padding-bottom: 50px;
}

.information-title-ch{
    background-image: url(./img/company02.png);
    background-position: center;
    background-repeat: no-repeat;
    font-size: 28px;
    font-weight: bold;

}
.information-title-en{
    color: #f7b52b;
    font-size: 16px;
    line-height: 40px;
}

.information-item{
    width: 100%;
    text-align: center;
}
.information-item-title{
    font-size: 20px;
    font-weight: bold;
    
}
.information-item-desc{
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 70px;
    margin-top: 30px;
}

.information-item-avator{
    width: 835px;
    height: 320px;
    margin: 0 auto;
  
}
.information-item:not(:last-child){
    margin-bottom: 50px;
}
.information-item-avator img{
    width: 100%;
    height: 100%;;
}


</style>