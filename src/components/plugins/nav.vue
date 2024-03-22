<template>

<div class="resmenu" id="rnn">


<div class="mmenucont">
<!--<router-link to="/" class="res_navs">  Home</router-link>-->
    <span class="site_name animate__animated animate__fadeIn"> TIMBLE <sup>°</sup>  </span>
<span class="mimgcont animate__animated animate__fadeInLeft">
  <img src="../../assets/arrow_blue.png" alt="" class="menuimg e img2 ablue" v-on:click="hidemenu()">
  <img src="../../assets/a2.png" alt="" class="menuimg e img2 awhite none" v-on:click="hidemenu()">
  </span>
<br><br>
<!---
<div  class="res_navs cn animate__animated animate__fadeInLeft">  Calculate</div>
<div class="calc_submenu none">
<router-link to="/semester" class="res_navs subnavs">Semester GP</router-link>
<router-link to="/cummulative" class="res_navs subnavs">Cummulative GP</router-link>
 </div>

 -->


<router-link to="/semester" class="res_navs animate__animated animate__fadeIn ">Semester GP</router-link>
<router-link to="/cummulative" class="res_navs animate__animated animate__fadeIn">Cummulative GP</router-link>
<router-link to="/About" class="res_navs animate__animated animate__fadeIn">About</router-link>
<router-link to="/Help" class="res_navs animate__animated animate__fadeIn">Help</router-link>
<hr><br>
<div class="m">
  <span class="switchmode">Switch Mode</span>
  <img src="../../assets/off.png" alt="" class="switch_img off">
  <img src="../../assets/on.png" alt="" class="switch_img on none">
</div>

 </div>
<div to="/" class="action_btn rm animate__animated animate__fadeInUp pdf" v-on:click="pdf()">Download Result PDF </div>

<div class="pcont">
<div class="powered1">Powered By</div>
<a href="https://www.echelontech.com.ng" class="powered">Echelon Tech LLC</a>
</div>

</div>
</template>


<script>
import $ from "jquery"
import jsPDF from 'jspdf'

export default {
  name: 'Resmenu',
  components: {
  },
   methods:{ 
hidemenu: function(){
$(".resmenu").hide()
//$(".home").css('margin-left','0%')
$(".hn").show()
$(".floatbtn").show(100)
},
pdf: function(){

var doc = new jsPDF("p", "mm", [300, 300]);
var makePDF = document.getElementById("forsave");
// fromHTML Method
doc.html(makePDF);
doc.save("output.pdf");


/*var doc = new jsPDF()
doc.text("Hello World", 10, 10);
doc.save('myresult' + '.pdf');*/
//alert('done')
}


},
  mounted(){
$(".cn").click(function(){
$(".calc_submenu").toggle(500)
$(".cn").css("color","rgb(37, 37, 204)")
$(".router-link-active").css("color","black")
})

$(".off").click(function(){
$(".off").hide()
$(".on").show()
////////////////////////
$(".mblue,.ablue").hide()
$(".mwhite,.awhite").show()
////////////////////////


$('#app,document,body,.cont,.home').css("background-color","#181818")
$('.head,.inc').css("background-color","#181818").css('box-shadow','2px 2px 2px 2px rgb(37, 37, 37)')
$('tr,thead,#gp-display,select,.cname-input').css("background-color","#181818").css('box-shadow','2px 2px 2px 2px rgb(37, 37, 37)').css('color','white')
$('.score-output,.rrr').css('color','white')
$('.cname-input').css("background-color","transparent")

$('.resmenu').css("background-color","#181818").css('box-shadow','2px 2px 2px 2px rgb(37, 37, 37)').css('color','white')
$('.res_navs').css('color','white')

$('.about,.site_name,.action_btn').css('color','white')
})

//for on light mode
$(".on").click(function(){
$(".on").hide()
$(".off").show()

////////////////////////
$(".mblue,.ablue").show()
$(".mwhite.awhite").hide()
////////////////////////


$('#app,document,body,.cont').css("background-color","white")
$('.head,.inc').css("background-color","white").css('box-shadow','2px 2px 2px 2px rgb(236, 236, 236)')
$('tr,thead,#gp-display,select,.cname-input').css("background-color","white").css('box-shadow','2px 2px 2px 2px rgb(236, 236, 236)').css('color','black')
$('.score-output,.rrr').css('color','black')
$('.cname-input').css("background-color","transparent")

$('.resmenu').css("background-color","white").css('box-shadow','2px 2px 2px 2px rgb(236, 236, 236)').css('color','black')
$('.res_navs').css('color','black')
$('.about').css('color','black')
$('.site_name,.action_btn').css('color','rgb(37, 37, 204)')

$('.router-link-active').css('color','white')


})





  }
}
</script>

<style scoped>


@media screen and (max-width:480px){
  .none{display: none;}
.res_navs{margin-top: 5px;margin-bottom: 20px;padding-left: 5px;font-size: 15px;padding: 5px;
text-decoration: none;color: rgb(36, 36, 36);display: block;text-transform: capitalize;width: 100%;}
.resmenu{padding-bottom: 20px;;width: 70%;display: none;box-shadow: 1px 1px 1px 1px rgb(236, 236, 236);
padding: 0px;color: rgb(36, 36, 36);background-color:/* #000000e7*/rgba(255, 255, 255, 0.985);position: fixed;left:0%;top: 0px;
height: 100%;backdrop-filter: blur(5px);z-index: 999;}
.mmenucont{margin-top: 0px;}
.rm{margin-top: 50px;font-size: 14px;width: 90%;margin-left: 5%;margin-bottom: 20px;padding: 5px;text-align: center;
background-color: transparent;border-radius: 15px;color:rgb(37, 37, 204);
display: block;border: 4px solid rgb(37, 37, 204);}
.rmimg{height: 17px;width: 17px;margin-left: 5px;}
.router-link-active{background-color:rgb(37, 37, 204);font-weight: bold;color: white;}
.semesternav{background-color:rgb(37, 37, 204);font-weight: bold;color: white;}


a,a:visited{text-decoration: none;}
.calc_submenu{padding-left: 20px;}
.subnavs{font-size: 16px;margin-top: 10px;margin-bottom: 10px;}
.cn{margin-bottom: 5px;}

.powered{color:rgb(37, 37, 204);font-size: 16px;}
.powered1{color:grey;font-size: 14px;}
.pcont{bottom: 10px;width: 100%;text-align: center;font-weight: bolder;margin-left: 0%;margin-top: 0px;position: absolute;}
.site_name{font-size: 25px;margin-top: 0px;display: inline-block;margin-left: 5px;font-weight: bolder;color:rgb(37, 37, 204) ;}

.menuimg{width: 100%;height: 100%;}
.mimgcont{width: 35px;height: 35px;/*border: 2px solid white;*/float:right;
border-radius: 4px;padding: 4px;padding-top: 3px;margin-left: 0px;margin-top: 0px;/*border: 4px solid rgb(37, 37, 204);padding: 1px;border-radius: 4px;*/}
.switch_img{width: 35px;height: 35px;float:right;padding: 5px;padding-top: 2px;}
.m{margin-left: 5px;}

sup{margin-top: 0px;display: inline-block;margin-left: -7px;font-size: 20px;display: none;}

}

</style>