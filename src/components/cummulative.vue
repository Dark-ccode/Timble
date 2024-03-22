<template>
<div class="home">
<Navcont class="none"/>
<br>
<Header class="inc"/>

<br>
<div class="cont">
<div class="soon">
 <div class="animate__animated animate__bounceIn animate__delay-2s animate__repeat-1">   Comming soon </div>
</div>
</div>
</div>
</template>

<script>
import Header from './plugins/header.vue'
import Navcont from './plugins/nav.vue'
//import $ from "jquery"

export default {
name: 'Cummulative',
components: {
Header,
Navcont
},
data() { 
return {}}
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only display: flex;flex-direction: row;flex-basis: 1200px;--> 
<style scoped>

@media screen and (max-width:480px){
.none{display: none;}
.cont{margin-top: 40px;padding: 10px;margin-bottom: 0PX;padding-top: 40%;}
.home{display: block;overflow-y: hidden;}
.ib{display: inline-block;}

@keyframes fade {
from { opacity: 1.0; }
50% { opacity: 0.4; }
to { opacity: 1.0; }
}

.soon {
    text-align: center;
    font-size: 27px;
    margin-top: 40px;
animation:fade 3000ms infinite;
-webkit-animation:fade 3000ms infinite;
}

}
</style>
