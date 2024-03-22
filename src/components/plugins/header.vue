<template>
<div class="head">
<div class="row">
<div class="col-md-3 hn"> 
  <span class="mimgcont animate__animated animate__fadeInLeft">
 <img src="../../assets/menu.png" alt="" class="menuimg img1 mblue" v-on:click="showmenu()">
 <img src="../../assets/wm.png" alt="" class="menuimg img1 none mwhite" v-on:click="showmenu()">
<!--<img src="../../assets/x.png" alt="" class="menuimg resnone desknone img2" v-on:click="hidemenu()">-->

</span>
    <span class="site_name animate__animated animate__fadeIn"> <!--<img src="../assets/logo.png" alt="" class="logoo">--> TIMBLE <sup>°</sup>  </span> 
  </div>
<div class="col-md-7"></div>

<div class="col-md-2 resnone">
<router-link to="/Login" class="action_btn signup logout">Logout</router-link>
</div>
</div>
</div>
</template>

<script>
import $ from "jquery"

export default {
  name: 'DHeader',
  methods:{ 
showmenu: function(){
$(".resmenu").show(500)
//$(".img2").show()
//$(".img1").hide()
//$(".home").css('margin-left','70%').css('width','100%')
$(".hn").hide()
$(".floatbtn").hide()

},
hidemenu: function(){
$(".resmenu").hide()
//$(".img1").show()
//$(".img2").hide()
//$(".home").css('margin-left','0%')

$(".hn").show()

}

}
}

/*
window.addEventListener('scroll', function(){
console.log(window.scrollY)
if (window.scrollY!=0) {
$("#head").css("background-color","rgba(0, 0, 0, 0.788)").css("color","white")
}

if (window.scrollY==0) {
$("#head").css("background-color","transparent").css("color","steelblue")
//$(".r4,.card,.contributors").hide()
}
})*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only  #101112;-->
<style scoped>

.navs{margin-left: 10px;margin-right: 10px;color:#a8a899;font-size: 15px;text-decoration: none;}
.home{color: white;}
.navs:hover{color: white;font-weight: bold;}
.head{padding:30px 40px 0px 40px;background-color: white;position: fixed;height: 100px;width: 100%;z-index: 2;top: 0px;margin-bottom: 40px;
box-shadow: 2px 2px 2px 2px rgb(236, 236, 236);} /* top right bottom left     box-shadow:0px 1px 0px 0px rgba(255, 255, 255, 0.801);*/


a{text-decoration: none;}
.desknone{display: none;}
.none{display: none;}
.router-link-active{color: rgb(37, 37, 204);font-weight: bold;}

@media screen and (max-width:480px){
.head{padding:5px 10px 0px 10px;height: 60px;padding-top: 10px;}
.resnone{display: none;}
.menuimg{width: 100%;height: 100%;}
.mimgcont{width: 35px;height: 35px;float:left;
border-radius: 4px;padding: 4px;padding-top: 3px;margin-left: 0px;margin-top: 0px;/*border: 4px solid rgb(37, 37, 204);padding: 1px;border-radius: 4px;*/}
.site_name{font-size: 25px;margin-top: 0px;display: inline-block;margin-left: 5px;font-weight: bolder;color:rgb(37, 37, 204) ;}
sup{margin-top: 0px;display: inline-block;margin-left: -7px;font-size: 20px;display: none;}
}
</style>
