<template>
<div class="home">
<Header />
<Nav />

<div class="faq">
<div class="abouthead animate__animated animate__fadeInDown">Help</div>

<!--Website cobntainer--->
<center>

    <div class="faqs animate__animated animate__fadeInDown card">
    <div class="faqshead head1">How do I calculate my semester result?</div>   
    <div class="faqsbody body1">You can calculate your result by filling in the inputs with accurate data, then click the calculate button. </div>   
    
    </div>   
    
    
    
    <div class="faqs animate__animated animate__fadeInDown animate__delay-2s card">
    <div class="faqshead head2">How do I calculate my cummulative result?</div>   
    <div class="faqsbody body2">For a single session, input the GPs and TCL of the previous semesters to calculate for the GPA of that session.<br>
<b class="ib">TCL : Total Credit Load</b>
<b class="ib">GP : Grade Point</b>
<b class="ib">GPA : Grade Point Average</b></div>   
    </div> 
    
    <div class="faqs animate__animated animate__fadeInUp animate__delay-3s card">
    <div class="faqshead head3">What if, I have more courses, more than the provided inputs?</div>   
    <div class="faqsbody body3">There is a provition made for adding more row inputs.</div>   
    </div>
    
    <div class="faqs animate__animated animate__fadeInUp animate__delay-4s card">
    <div class="faqshead head4">Does Timble save my result data?</div>   
    <div class="faqsbody body4">No not yet, Timble does not save your result inputs, but we might consider the feature in subsequent developments.</div>   
    </div>
    
  
</center>
</div>

</div>
</template>

<script>
import Header from './plugins/header.vue'
import Nav from './plugins/nav.vue'
import $ from "jquery"

export default {
name: 'FAQPage',
components: {
  Header,
Nav
},
mounted(){
///////////////////////
$('#app,document,body').css("background-color","white")
//////////////
$(".head1").click(function(){
$(".body1").toggle()
$(".body2,.body3,.body4").hide(500)
})
$(".head2").click(function(){
$(".body2").toggle()
$(".body1,.body3,.body4").hide(500)
})
$(".head3").click(function(){
$(".body3").toggle()
$(".body2,.body1,.body4").hide(500)
})

$(".head4").click(function(){
$(".body4").toggle()
$(".body2,.body3,.body1").hide(500)
})

}
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.faq{padding: 20px;margin-top: 0px;font-size: 17px;}
.ib{display: block;}
/*########*/
.faqs{width: 96%; margin-left: 2%;border-radius: 2px;background-color:white;color: rgb(27, 27, 27);
background-clip:border-box;border-radius:.25rem;text-align: left;margin-bottom: 20px;border-radius: 5px;}
.faqshead{color:white;font-size: 16px;height: auto;background-color:rgb(37, 37, 204);border-radius: 5px;cursor: pointer;
padding: 10px;}
/*.faqshead:hover{color:#fc5b3f;}*/
.abouthead{font-size: 18px;margin-bottom: 20px;margin-top:60px;color:rgb(37, 37, 204);font-weight: bold;text-align: center;}

.faqsbody{padding: 10px;display: none;font-size: 15px;}
.question{font-size: 18px;color: white;margin-bottom: 10px;text-align: left;margin-left: 2%;}
.forres{display: block;}



</style>
