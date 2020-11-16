<template>
<div>
    <Banner/>
    <section class="product">
  <div class="information">
      <div class="information-title">
          <h1  class="information-title-ch">信息系统集成服务</h1>
          <p  class="information-title-en">INFORMATION SYSTEM INTEGRATION SERVICE</p>
      </div>
      <div class="information-avator">
          <ul class="information-avator-list">
              <li class="information-avator-item">

                  <div class="information-avator-item-img">
                      <img src="./img/information01.jpg" alt="">
                  </div>
                  <div class="information-avator-item-desc">
                      <h1>软件定制开发</h1>
                      <p>一体化解决方案：简单、稳定、高效，解决企业管理普通所遇“流程+结果”的难题； 软件智能定制开发平台：让软件开发可以变得更简单、更可靠； 各类定制开发：为众多企业量身定制解决方案</p>
                      <a href="">了解详情</a>
                  </div>
              </li>
              <li class="information-avator-item">
                    <div class="information-avator-item-desc">
                            <h1>一体化解决方案</h1>
                            <p>针对不同规模的客户使用不同的业务系统，提供方便快捷的一体化解决方案。 包括基础数据的同步，统一的入口、统一的展现平台；实现单点登录、消息同步， 可在协同系统中直接进行业务流程审批；可携带业务流程随时随地的即时交流， 使企业员工之间达到“零距离”交流，实现企业协同办公、业务管理、客户关系管理、 财务管理等系统的无缝对接。</p>
                            <a href="">了解详情</a>
                    </div>
                    <div class="information-avator-item-img">
                        <img src="./img/information02.jpg" alt="">
                    </div>
                    
                </li>
          </ul>
      </div>


  </div>
  <div class="software">
      <div class="software-title">
          <h1 class="software-title-ch">
                软件智能定制
          </h1>
          <p class="software-title-en">
                SOFTWARE INTELLIGENT CUSTOMIZATION
          </p>
      </div>
      <div class="software-avator">
          <ul class="software-list">
              <li class="software-item">
                  <div class="software-item-img">
                        <img src="./img/software.jpg" alt="">
                  </div>
                  <div class="software-item-desc">
                        <h1>软件定制开发</h1>
                        <p>一体化解决方案：简单、稳定、高效，解决企业管理普通所遇“流程+结果”的难题； 软件智能定制开发平台：让软件开发可以变得更简单、更可靠； 各类定制开发：为众多企业量身定制解决方案</p>
                        <a href="">了解详情</a>
                  </div>
              </li>
          </ul>
      </div>
  </div>
  <div class="various">
      <div class="various-title">
          <h1 class="various-title-ch">各类定制开发</h1>
          <p class="various-title-en">VARIOUS CUSTOMIZED DEVELOPMENT</p>
          <p class="various-title-desc">根据客户的需求，量身定制一系列符合客户实际应用的软件。 目前的多数信息管理软件可以满足行业内的通用需求， 而在特殊流程和客户定制上成本很高。大数据和软件定制对于中小企业来说，可以根据自己的实际业务需求， 定制开发一套适合自己的软件。开发不求一步到位，一步一步进行完善。如此，可以减少投入，并非常适合自身业务发展。</p>
      </div>
      <div class="various-avator">
          <ul class="various-avator-list">
              <li class="various-avator-item">
                  <img src="./img/various01.jpg" alt="">
              </li>
              <li class="various-avator-item">
                    <img src="./img/various02.jpg" alt="">
               </li>
                <li class="various-avator-item">
                    <img src="./img/various03.jpg" alt="">
                </li>
                <li class="various-avator-item">
                    <img src="./img/various04.jpg" alt="">
                </li>
          </ul>
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

.product{
    width: 100%;
}

/* Information */
.information{
    width: 1200px;
    padding-top: 100px;
    margin: 0 auto;
   
}

.information-title{
    text-align: center;
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
.information-avator{
    width: 100%;
}
.information-avator-list{
    width: 100%;
    padding:50px 0px 118px; 
}
.information-avator-item{
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.information-avator-item:not(:last-child){
    margin-bottom: 50px;
}
.information-avator-item-img{
    flex-basis: 520px;
    
}

.information-avator-item div:first-child{
    margin-right: 20px;

}

.information-avator-item-img img{
    width: 100%;
}
.information-avator-item-desc{
    flex:1;
}

.information-avator-item-desc h1{

    font-size: 20px;
    color: #000;
    font-weight: bold;
}

.information-avator-item-desc p{
    font-size: 16px;
   line-height: 24px;
   margin: 35px 0px 85px;
   text-indent: 20px;
}

.information-avator-item-desc  a{
    display: inline-block;
    width: 160px;
    height: 50px;
    border:1px solid #555ca2;
    text-align: center;
    line-height: 50px;
    color:#5f6fb9;
    font-size: 20px;
 }

 /* software */
 .software{

    width: 1200px;
    padding-top: 100px;
    margin: 0 auto;
    
 }


 .software-title{
    text-align: center;
}
.software-title-ch{
    background-image: url(./img/company03.png);
    background-position: center;
    background-repeat: no-repeat;
    font-size: 28px;
    font-weight: bold;

}
.software-title-en{
    color: #f7b52b;
    font-size: 16px;
    line-height: 40px;
}

.software-avator{
    width: 100%;
    position: relative;
    padding: 60px 0px 100px;
  
}

.software-avator:before{
    content: '';
    display: block;
    width: 360px;
    height: 175px;
    background-color: #2d3896;
    position: absolute;
    top:50%;
    left: -360px;
    transform: translateY(-50%);
    
}

.software-list{
    width: 100%;
}

.software-item{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.software-item-img{
    flex-basis: 678px;
    margin-right: 20px;
}
.software-item-img img{
    width: 100%;
    -webkit-filter: drop-shadow(10px 10px 0px #ebebeb);
}
.software-item-desc{
    flex:1;
}

.software-item-desc h1{

    font-size: 20px;
    color: #000;
    font-weight: bold;
}

.software-item-desc p{
    font-size: 16px;
   line-height: 24px;
   margin: 35px 0px 85px;
   text-indent: 20px;
}

.software-item-desc  a{
    display: inline-block;
    width: 160px;
    height: 50px;
    border:1px solid #555ca2;
    text-align: center;
    line-height: 50px;
    color:#5f6fb9;
    font-size: 20px;
 }

 /* various */

 .various{
     width: 1200px;
     margin:0 auto;
   
 }
.various-title{
    text-align: center;
}
.various-title-ch{
    background-image: url(./img/company03.png);
    background-position: center;
    background-repeat: no-repeat;
    font-size: 28px;
    font-weight: bold;

}

.various-title-en{
    color: #f7b52b;
    font-size: 16px;
    line-height: 40px;
}

.various-title-desc{
  padding: 40px 0px 30px;
  line-height: 28px;
  font-size: 16px;
}

.various-avator{
    width: 100%;
    margin-top: 20px;
    padding-bottom: 100px;
}
.various-avator-list{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.various-avator-item{
   flex-basis: 292px;
}

.various-avator-item:not(:last-child){
    margin-right: 10px;
}

.various-avator-item img{
    width: 100%;
}
</style>