<template>
  <div>
      <Banner></Banner>
        <section class="electron">
           
         

          <div class="user">
            <div class="user-title">
                <h1 class="user-title-ch">用户群体</h1>
                <p class="user-title-en">USER GROUPS</p>
            </div>
            <div class="user-avator">
                <div class="avator-items">
                   <img src="./img/user01.jpg" alt="">
                   <p>1. 技术评审专家；</p>
                </div>
                <div class="avator-items">
                    <img src="./img/user02.jpg" alt="">
                    <p>2. 项目负责人；</p>
                </div>
                <div class="avator-items">
                    <img src="./img/user03.jpg" alt="">
                    <p>3. 系统管理人员</p>
                </div>
            </div>
          </div>
          <div class="system">
              <div class="system-title">
                  <h1 class="system-title-ch">系统功能</h1>
                  <p class="system-title-en">SYSTEM FUNCTION</p>
              </div>
              
          </div>
        <div class="system-bg">
            <div class="system-bg-title">
                <ul class="system-list">
                    <li class="system-list-itmes">
                        <h1>技术评审专家</h1>
                        <p>专家可以通过登录系统进行项目技术评审工作。
                            有权限查看各类和评审项目相关的信息。
                            并根据工作情况与其他专家互动交流，
                            全过程参与项目技术评审。 使用电子化评审系统，
                            使项目评审更具专业性、科学性与效益性。</p>
                    </li>
                    <li class="system-list-itmes">
                        <h1>
                            业务部门/项目负责人</h1>
                        <p>工作人员通过技术评审系统掌握整个项目评审情况，汇总整个项目评审专家意见，根据工作情况对项目评审资料进行完善补充、对项目技术评审工作进行控制、协调，并有权限对项目评审进行结束或重新申请评审。</p>
                    </li>
                    <li class="system-list-itmes">
                        <h1>系统管理人员</h1>
                        <p>系统管理员通过后台对系统进行维护、管理、更新。为了更加规范本系统管理，使本项目技术评审系统管理起到更大的作用、提供更加真实的信息反馈，系统管理员用户及密码要严格保密，不得将管理人员用户及密码外泄；系统管理员在操作系统完完毕后，一定要使用“退出管理”退出，不得直接关闭打开的页面。系统管理员进入管理系统后，如长时间无操作，请退出。不得在进入系统后，不退出系统就离开。系统管理员不得擅自修改、添加、删除系统内数据，如需对系统内数据进行更改需要向科技委办中层以上人员提出申请和书面备案，同意后由系统管理员对备案的内容进行相关操作。系统管理员每天要对系统数据进行备份。</p>
                    </li>
                </ul>
            </div>
        </div>
          <div class="structure">
              <div class="structure-title">
                  <h1 class="structure-title-ch">系统结构</h1>
                  <p class="structure-title-en">SYSTEM STRUCTURE</p>
                  <p class="structure-title-desc">根据科技委办的总体业务，推出了上述的框架规划，包含了基础层、数据层、业务支撑层、访问层以及相关的标准规范和管理体系。</p>
              </div>
              <div class="structure-item">
                 <div class="structure-icon-01">
                     <div class="structure-icon-01-left">
                         <p>访问层</p>
                     </div>
                     <div class="structure-icon-01-right">
                         <p>访问层主要体现为门户系统。主要是统一用户界面，将所有专家待评审项目、已评审项目、通知公告等功能通过登录一个系统门户，就能全部展示在专家面前。</p>
                     </div>
                 </div>
                 <div class="structure-icon-02">
                    <div class="structure-icon-02-left">
                        <p>业务支撑层</p>
                    </div>
                    <div class="structure-icon-02-right">
                        <p>体现为科技委办整体的初步设计电子化评审系统，
                            涵盖了科技委办的初步设计电子化评审系统的所有业务功能，
                            包括图纸管理、图纸转换、在线审图、生成评审报告、专家评审汇总、
                            数据汇总分析等，是本次系统的核心。
                        </p>
                    </div>
                </div>
                <div class="structure-icon-03">
                    <div class="structure-icon-03-left">
                        <p>数据层</p>
                    </div>
                    <div class="structure-icon-03-right">
                        <p>
                            主要是相关的基础数据库的建设和数据应用和服务的接口。
                        </p>
                    </div>
                </div>
                <div class="structure-icon-04">
                    <div class="structure-icon-04-left">
                        <p>基础层</p>
                    </div>
                    <div class="structure-icon-04-right">
                        <p>
                          包含了整体信息化建设的基础软硬件环境建设。
                        </p>
                    </div>
                </div>
                
              </div>
          </div>
          <div class="basic">
            <div class="basic-title">
              <h1 class="basic-title-ch">系统的基本功能</h1>
              <p class="basic-title-en">BASIC FUNCTIONS OF THE SYSTEM</p>
            </div>
            <div class="basic-table">

               <img src="./img/basic-table.jpg" alt="">

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


.electron{
    width: 1900px;
    background-color: #fff;
}
.user{
    width: 1200px;
    margin:0 auto;
    padding-bottom: 100px;
}
.user-title{
    text-align: center;
    padding-top: 30px;
    padding-bottom: 60px;
}
.user-title-ch{
    font-size: 32px;
    color:#000;
    margin-bottom: 20px;
    font-weight: bold;
    background-image: url(./img/company.png);
    background-position: center;
    background-repeat: no-repeat;
}
.user-title-en{
    font-size: 24px;
    color: #f8c058;
}
.user-avator{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.user-avator > div{
    flex-basis: 33%;
}
.user-avator > div:nth-of-type(2){
    margin: 0 60px;
}
.avator-items{
    width: 100%;
    display: flex;
    text-justify: center;
    align-items: center;
    flex-direction: column;
}

.avator-items img{
    width: 357px;
    height: 438px;
    margin-bottom: 35px;
}
.avator-items p{
    font-size: 20px;
}

/* system */

.system{
    width: 1200px;
    margin:0 auto;  
}

.system-title{
    width: 100%;
    text-align: center;
    padding-bottom: 75px;
}
.system-title-ch{
    font-size: 32px;
    margin-bottom: 20px;
    font-weight: bold;
    background-image: url(./img/company.png);
    background-position: center;
    background-repeat: no-repeat;
}
.system-title-en{
    font-size: 24px;
    color: #f8c058;
}
.system-bg{
    width: 1900px;
    background-image: url(./img/system-bg.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 566px;
    padding: 60px 0px 55px;
    box-sizing: border-box;
}
.system-bg-title{
   width: 1200px;
   margin: 0 auto;
}
.system-list{
    margin: 0;
    padding: 0;
}
.system-list-itmes{
    width: 100%;
    margin-bottom: 30px;
    text-align: center;
}
.system-list-itmes h1{
    font-size: 20px;
    color:#fff;
    margin: 0;
    margin-bottom: 10px;
}

.system-list-itmes p{
    font-size: 16px;
    color: #fff;
    line-height: 24px;
}

/* structure */

.structure{
    width: 1200px;
    margin:0 auto;
    padding-bottom: 100px;
    padding-top: 150px;
}

.structure-title{
    text-align: center;

}
.structure-title-ch{
    font-size: 32px;
    margin-bottom: 20px;
    font-weight: bold;
    background-image: url(./img/company.png);
    background-position: center;
    background-repeat: no-repeat;
}
.structure-title-en{
    font-size: 24px;
    color: #f8c058;
}
.structure-title-desc{
    max-width: 963px;
    margin: 0 auto;
    font-size: 20px;
    line-height: 30px;
    margin-top: 47px;
    margin-bottom: 76px;
}
.structure-item{
    width: 100%;
}
.structure-item > div{
    margin-bottom: 5px;;
}
.structure-icon-01{
    width: 100%;
    height: 182px;
    background-image: url(./img/structure01.jpg);
    background-repeat: no-repeat;
    display: flex;
}
.structure-icon-01-left{
    width: 385px;
    height: 182px;
    position: relative;
}
.structure-icon-01-left p{
   position: absolute;
   right:70px;
   bottom: 39px;
   font-size: 20px;
   color: #fff;
}
.structure-icon-01-right{
    max-width: 750px;
    padding-top: 50px;
    box-sizing: border-box;
}
.structure-icon-01-right p{
    font-size: 20px;
    line-height: 30px;
}
.structure-icon-02{
    width: 100%;
    height: 107px;
    background-image: url(./img/structure02.jpg);
    background-repeat: no-repeat;
    display: flex;
}
.structure-icon-02-left{
    width: 446px;
    height: 117px;
    position: relative;
}
.structure-icon-02-left p{
    position: absolute;
    right:113px;
    bottom: 40px;
    color: #fff;
    font-size: 20px;
}
.structure-icon-02-right{
    max-width: 700px;
}
.structure-icon-02-right p{
    font-size: 20px;
    line-height: 30px;
}
.structure-icon-03{
    width: 100%;
    height: 104px;
    display: flex;
    background-image: url(./img/structure03.jpg);
    background-repeat: no-repeat;
}
.structure-icon-03-left{
    width: 506px;
    height: 112px;
    position: relative;
}
.structure-icon-03-left p{
    position: absolute;
    right: 200px;
    bottom: 36px;
    color: #fff;
    font-size: 20px;
}
.structure-icon-03-right{
    max-width: 640px;
}
.structure-icon-03-right p{
    font-size: 20px;
    line-height: 112px;
}
.structure-icon-04{
    width: 100%;
    height: 90px;
    background-image: url(./img/structure04.jpg);
    background-repeat: no-repeat;
    display: flex;
}
.structure-icon-04-left{
    position: relative;
    width: 560px;
    height: 90px;

}

.structure-icon-04-left p{
     position: absolute;
     right: 245px;
     bottom: 30px;
     font-size: 20px;
     color: #fff;
}
.structure-icon-04-right{
    max-width: 580px;
}
.structure-icon-04-right p{
   
    line-height: 90px;
    font-size: 20px;

}

/* basic */

.basic{
    width: 1200px;
    margin: 0 auto;
}
.basic-title{
    text-align: center;
    padding-bottom: 150px;
}

.basic-title-ch{
    font-size: 32px;
    color: #000;
    margin-bottom: 20px;
    font-weight: bold;
    background-image: url(./img/company04.png);
    background-position: center;
    background-repeat: no-repeat;
}
.basic-title-en{
    font-size: 24px;
    line-height: 20px;
    color: #f8c058;
}

.basic-table{
    width: 100%;
    text-align: center;
    padding-bottom: 55px;
     
}
</style>