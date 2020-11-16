<!--  -->


<template>
 <div>
    
     <header>
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
          
              <a class="navbar-brand" href="#">
                <img alt="Brand" src="./img/logo6.png">
              </a> 

              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="true">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <div class="collapse navbar-collapse " id="bs-example-navbar-collapse-1">
          
                <ul class="nav navbar-nav">
                  <li class="dropdown">
                    <router-link to="/home"  class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">首页 </router-link>
                   
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">产品与服务<span class="caret"></span></a>
                    <ul class="dropdown-menu">

                      <li><router-link to="/product">软件开发服务</router-link></li>
                      <li><router-link to="/information">信息系统集成服务</router-link></li>
                      <li><router-link to="/internet">互联网+</router-link></li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">解决方式<span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        
                        <li><router-link to="/government">政府综合业务管理</router-link></li>
                        <li><router-link to="/electron">电子化评审</router-link></li>
                        <li><router-link to="/model">三维建模</router-link></li>
                        
                      </ul>
                  </li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">案列  <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        
                        <li><router-link to="/smart">智慧照明</router-link></li>
                       
                      </ul>
                  </li>
                  <li class="dropdown">
                    <router-link  to="/about" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">关于我们</router-link >
                    
                  </li>
                </ul>
              </div>
            </div>
         </nav>

     </header>
 </div>
</template>

<script>
export default {
 data () {
    return {
    }
 },
 components:{
   
 }
}

</script>


<style  scoped>
  


.navbar {
   
    min-height: 90px;
    margin-bottom: 20px;
    border: 1px solid transparent;
}
.container{
    min-height: 90px;
    padding-top: 20px;
}

.navbar-brand {
    float: left;
    height: 50px;
    padding:0; 
    font-size: 18px;
    line-height: 20px;
}


.container .navbar-header .title{
    color:#007eff;
    font-weight: bold;
    margin-top:5px;
}
.navbar-brand{
    width: 204px;
    height: 62px;
}
.navbar-brand img{
    width: 100%;
    height: 100%;
}
.navbar-inverse {
    background-color: #fff;
  
}
.navbar-nav>li{
    text-align: center;
}
.dropdown-menu{
    padding: 10px 15px;
    width: 50px !important;
}
.navbar-nav>li{
  width: 150px;
}
.navbar-inverse .navbar-nav>li>a {
    color:#747474;
    font-size: 16px;
    font-weight: bold;
}
.navbar-inverse .navbar-nav>li>a{
    position: relative;
}

.caret {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 9px;
    vertical-align: middle;
    border-top: 4px dashed;
    border-top: 4px solid\9;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
}

.navbar-inverse .navbar-nav>li>a:hover::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 100%;
    bottom: 0;
    right: auto;
    height: 2px;
    width: 30px;
    background-color:#2c348c;
    transform: translateX(-45%);
  }

.navbar-inverse .navbar-nav>li>a:hover {
    color:#2c348c;
    
}

.navbar-inverse .navbar-nav>.open>a, .navbar-inverse .navbar-nav>.open>a:focus, .navbar-inverse .navbar-nav>.open>a:hover{
    background-color: #fff;
    color:blue;
    text-align: center;
}

.dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover{
    
    background-color: blue;
    color:#fff;

}
.dropdown .dropdown-menu{
    padding: 0 !important;
}

.dropdown .dropdown-menu > li{
    text-align: left;
    line-height: 20px;
}

.dropdown-menu>li>a{
 
    padding: 10px 3px;

}


</style>