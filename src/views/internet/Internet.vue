<template>
  <div>
         <Banner/>
          <section class="service">
           
      
           <div class="internet">
             <div class="internet-title">
                 <h1>互联网</h1>
                 <p>INTNRNET</p>
             </div>
             <div class="internet-avator">
                 <div class="avator-left">
                     <div class="avator-title">
                         <h1>APP移动应用开发</h1>
                         <p> 长期专注于移动应用领域开发，从IOS、ANDROID开发到移动WEB、H5打造一站式移动生态系统。</p>
                     </div>
                     <div class="avator-title">
                        <h1 >互联网</h1>
                        <p> 官网建设：企业高端形象官网、个性网站； 电商建设：各类B2B/B2C/O2O商城、APP移动应用定制开发； 云应用：云服务器、大数据应用； ERP管理企业管理、OA协同办公； CRM客户关系管理：与OA数据交互，实现一体化高效办公。</p>
                    </div>
                    <div class="avator-title">
                        <h1>高端官网建设</h1>
                        <p> 企业高端形象官网、个性网站； 大型综合门户信息网站； 各类B2B/B2C/O2O商城</p>
                    </div>
                     
                 </div>
                 <div class="avator-right">
                     <div class="avator-right-img">
                         <img src="./img/intnet03.jpg" alt="">
                     </div>
                     <div class="avator-right-imgs">
                         <img src="./img/intnet01.jpg" alt="">
                         <img src="./img/intnet02.jpg" alt="">
                     </div>
                 </div>
             </div>

           </div>

           <div class="cloud">

             <div class="cloud-content">
                <div class="cloud-avator">
                    <img src="./img/cloud_02.jpg" alt="">
                </div>
                <div class="cloud-desc">
                    <h1>云服务、大数据应用</h1>
                    <p class="cloud-en">CLOUD SERVICES, BIG DATA APPLICATIONS</p>
                    <p class="cloud-descript">从企业客户的视角看，自身大多不会建设或拥有云的基础设施，而云应用服务则主要提供基于云的应用， 在当今大数据爆发及云端服务越发普及的背景下，
                        大数据应用则成为众多企业的首选。创建高度可用的且可大规模缩放的应用程序和 API。 专注于应用程序而不是硬件，打包功能强大的应用程序和服务，并将其部署到云中。
                        在数分钟内，你的访问量级就能从 1 提升到1000。 部署应用程序之后，从预配到负载平衡，再到运行状况监视,你都可以高枕无忧。
                        支持 Java、Node.js、PHP、Python、.NET 和Ruby， 自动缩放以满足需要并节省成本，集成了运行状况、监视和负载均衡等。自动的操作系统和应用程序修补</p>
                </div>
             </div>

           </div>
           <div class="erp">

            <div class="erp-avator">
                
              <img src="./img/erp01.jpg" alt="">
            </div>
            <div class="erp-title">
                <h1> ERP企业管理、OA协同办公、 CRM客户关系管理</h1>
                <p>面向大中型企事业单位推出系列全功能ERP、协同办公自动化、CRM客户关系管理系统。
                    包括了企业门户管理、日程管理、工作计划、工作任务、固定资产、会议管理、车辆管理、流程审批、档案管理、人力资源管理等功能，
                    并获得行业良好口碑。</p>
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
<style scode>

.service{
    width: 1900px;
    background-color: #fff;

}


/* internet */


.internet{
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 75px;
    padding-top: 75px;
    background-color: #fff;
    
}
.internet-title{
    padding-bottom: 50px;
}
.internet-title h1{
    font-size: 32px;
    color: #000;
    text-align: center;
}
.internet-title p{
    color: #969696;
    font-size: 28px;
    text-align: center;
}
.internet-avator{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.internet-avator div:first-child{
    flex-basis: 50%;
}

.internet-avator div:last-child{
    flex-basis: 45%;
}


.avator-title h1{
   font-size: 20px;
   line-height: 28px;
   font-weight: bold;
}
.avator-title p{
    margin-bottom: 35px;
    text-indent: 20px;
    font-size: 16px;
    line-height: 28px;
}
.avator-right-img {
    margin-bottom: 8px;
}
.avator-right-img img{
    width: 100%;
    height: 100%;

}
.avator-right-imgs{
    width: 100%;
    display: flex;
    justify-content: space-between;
    
}

.avator-right-imgs{
    flex-basis: 50%;
   
}
/* cloud */

.cloud{
   background:#007eff;
}
.cloud-content{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    padding-top: 35px;
}
.cloud-avator{
    flex-basis: 540px;
    max-width:540px;
}
.cloud-avator {
   width: 100%;
   margin-right: 40px;
}
.cloud-desc{
    flex:1;
}
.cloud-desc h1{
    text-align: center;
    color: #fff;
    font-size: 32px;
}
.cloud-en{

    font-size: 24px;
    text-align: center;
    color: #fff;
    margin-bottom: 45px;
}
.cloud-descript{
    color: #fff;
    font-size: 16px;
    line-height: 30px;
}
/* erp */

.erp{
    width: 1200px;
    padding-top: 65px;
    padding-bottom: 60px;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
}
.erp-avator{
  flex-basis: 55%;
  max-width: 648px;
}
.erp-avator img{
    width: 100%;
   -webkit-filter: drop-shadow(-15px 15px 0px #ebebeb); 
   filter: drop-shadow(-15px 15px 0px #ebebeb); 
}

.erp-title{
    flex-basis: 45%;
}

.erp-title h1{
    font-size: 20px;
    color: #000;
    font-weight: bold;
    margin: 0;
    line-height: 30px;
    margin-bottom: 40px;
}
.erp-title p{
    font-size: 18px;
    line-height: 30px;
}
</style>