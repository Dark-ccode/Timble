<template>
<div class="home">

<div class="cont">
<div class="timble animate__animated animate__bounceInBig animate__delay-1s animate__repeat-1 blink">
 TIMBLE  <sup>°</sup> 
</div>

<div class="pcont">
<div class="powered1">Powered By</div>
<div class="powered">Echelon Tech LLC</div>
</div>
</div>
</div>
</template>

<script>

//import $ from "jquery"

export default {
name: 'loadpage',
components: {
},
data() { 
return {}},
mounted(){
function loader(){
window.location.href='#/Semester'
}
setTimeout(loader,3000)
//setTimeout(loader,6000)

}
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only display: flex;flex-direction: row;flex-basis: 1200px;--> 
<style scoped>

@media screen and (max-width:480px){
.none{display: none;}
.cont{margin-top: 60px;padding: 10px;margin-bottom: 0PX;padding-top: 30%;}
.home{display: block;overflow-y: hidden;}
.ib{display: inline-block;}



.timble {
    text-align: center;
    font-size: 40px;
    margin-top:27%;
color: rgb(37, 37, 204);
letter-spacing: 2px;
font-weight: bolder;
}

@keyframes fade {
from { opacity: 1.0; }
50% { opacity: 0.4; }
to { opacity: 1.0; }
}

.blink {
animation:fade 3000ms infinite;
-webkit-animation:fade 3000ms infinite;
}

.powered{color:rgb(37, 37, 204);font-weight: bolder;width: 100%;text-align: center;font-size: 16px;}
.powered1{color:grey;font-weight: bolder;width: 100%;text-align: center;font-size: 14px;}
.pcont{position: fixed;bottom: 10px;width: 100%;text-align: center;}

sup{display: inline-block;margin-left: -13px;font-size: 35px;margin-top: 53px;}

}
</style>
