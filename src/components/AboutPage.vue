<template>
<div class="home">
<Header />
<Nav />

<div class="about text-center">

<div class="abouthead animate__animated animate__fadeInDown">About</div>

Timble  is an app that makes tertiary school students result calculation easy, accurate and more convinent,
you can calculate both Semester and cummulative GP on this app. 
The upgraded version of the app has a tool for saving calculated result in a PDF format.<br><br>

Timble version 4.0.1

<div class="developed">Developed By</div>
Ukonu George Chukwuebuka





</div>



</div>
</template>

<script>
import Header from './plugins/header.vue'
import Nav from './plugins/nav.vue'
import $ from "jquery"

export default {
name: 'AboutPage',
components: {
  Header,
Nav
},
mounted(){
$('#app,document,body').css("background-color","white")
$('.about').css('color','black')

}
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

@media screen and (max-width:480px){
.about{padding: 20px;margin-top: 50px;color: black;font-size: 16px;text-align: center;font-family: Tahoma, Tahoma, Courier;}
.abouthead{font-size: 18px;margin-bottom: 20px;margin-top: 20px;color: rgb(37, 37, 204);font-weight: bold;}
.developed{font-weight: bold;margin-top: 20px;color:rgb(37, 37, 204)}
}
</style>
