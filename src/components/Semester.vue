<template>
<div class="home">
<Navcont class="none"/>
<Header />
<br>


<div class="cont" id="forsave">
<!--semester calc page-->
<table>
<thead class="none">
<th>COURSE CODE</th>
<th>LOAD</th>
<th>GRADE</th>
<th>RESULT</th>
</thead>
<!--course rows-->
<tr class="animate__animated animate__fadeInDown">
<td><input type="text" class="cname-input" placeholder="Course 1"></td>
<td class="load-input">
<select id="load1" v-model="load1">
<option disabled>Load</option>
<option>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</select>
</td>

<td class="grade-input">
<select id="grade1" v-model="grade1">
<option disabled>Grade</option>
<option>A</option>
<option>B</option>
<option>C</option>
<option>D</option>
<option>E</option>
<option>F</option>
<option>RA</option>
</select>  
</td>
<td class="score-output" id="output1">{{output1}}</td>
</tr>

<!--course rows-->
<tr class="animate__animated animate__fadeInUp">
<td><input type="text" class="cname-input" placeholder="Course 2"></td>
<td class="load-input"><select id="load2" v-model="load2">
<option disabled>Load</option>
<option>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</select></td>
<td class="grade-input"><select id="grade2" v-model="grade2">
<option disabled>Grade</option>
<option>A</option>
<option>B</option>
<option>C</option>
<option>D</option>
<option>E</option>
<option>F</option>
<option>RA</option>

</select>  </td>
<td class="score-output" id="output2">{{output2}}</td>
</tr>
<!--course rows-->
<tr class="animate__animated animate__fadeInDown">
<td><input type="text" class="cname-input" placeholder="Course 3"></td>
<td class="load-input"><select id="load3" v-model="load3">
<option disabled>Load</option>
<option>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</select></td>
<td class="grade-input"><select id="grade3" v-model="grade3">
<option disabled>Grade</option>

<option>A</option>
<option>B</option>
<option>C</option>
<option>D</option>
<option>E</option>
<option>F</option>
<option>RA</option>

</select>  </td>
<td class="score-output" id="output3">{{output3}}</td>
</tr>

<!--course rows-->
<tr class="animate__animated animate__fadeInDown">
<td><input type="text" class="cname-input" placeholder="Course 4"></td>
<td class="load-input"><select id="load4" v-model="load4">
<option disabled>Load</option>
<option>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</select></td>
<td class="grade-input"><select id="grade4" v-model="grade4">
<option disabled>Grade</option>
<option>A</option>
<option>B</option>
<option>C</option>
<option>D</option>
<option>E</option>
<option>F</option>
<option>RA</option>

</select>  </td>
<td class="score-output" id="output4">{{output4}}</td>
</tr>
<!--course rows-->
<tr class="animate__animated animate__fadeInDown">
<td><input type="text" class="cname-input" placeholder="Course 5"></td>
<td class="load-input"><select id="load5" v-model="load5">
<option disabled>Load</option>
<option>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</select></td>
<td class="grade-input"><select id="grade5" v-model="grade5">
<option disabled>Grade</option>
<option>A</option>
<option>B</option>
<option>C</option>
<option>D</option>
<option>E</option>
<option>F</option>
<option>RA</option>

</select>  </td>
<td class="score-output" id="output5">{{output5}}</td>
</tr>
<!--course rows-->
<tr class="animate__animated animate__fadeInLeft">
<td><input type="text" class="cname-input" placeholder="Course 6"></td>
<td class="load-input"><select id="load6" v-model="load6">
<option disabled>Load</option>
<option>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</select></td>
<td class="grade-input"><select id="grade6" v-model="grade6">
<option disabled>Grade</option>
<option>A</option>
<option>B</option>
<option>C</option>
<option>D</option>
<option>E</option>
<option>F</option>
<option>RA</option>

</select>  </td>
<td class="score-output" id="output6">{{output6}}</td>
</tr>
<!--course rows-->
<tr class="animate__animated animate__fadeInRight">
<td><input type="text" class="cname-input" placeholder="Course 7"></td>
<td class="load-input"><select id="load7" v-model="load7">
<option disabled>Load</option>
<option>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</select></td>
<td class="grade-input"><select id="grade7" v-model="grade7">
<option disabled>Grade</option>
<option>A</option>
<option>B</option>
<option>C</option>
<option>D</option>
<option>E</option>
<option>F</option>
<option>RA</option>

</select>  </td>
<td class="score-output" id="output7">{{output7}}</td>
</tr>
<!--course rows-->
<tr class="animate__animated animate__fadeInUp">
<td><input type="text" class="cname-input" placeholder="Course 8"></td>
<td class="load-input"><select id="load8" v-model="load8">
<option disabled>Load</option>
<option>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</select></td>
<td class="grade-input"><select id="grade8" v-model="grade8">
<option disabled>Grade</option>
<option>A</option>
<option>B</option>
<option>C</option>
<option>D</option>
<option>E</option>
<option>F</option>
<option>RA</option>

</select>  </td>
<td class="score-output" id="output8">{{output8}}</td>
</tr>

<!--course rows-->
<tr class="animate__animated animate__fadeInUp">
<td><input type="text" class="cname-input" placeholder="Course 9"></td>
<td class="load-input"><select id="load9" v-model="load9">
<option disabled>Load</option>
<option>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</select></td>
<td class="grade-input"><select id="grade9" v-model="grade9">
<option disabled>Grade</option>
<option>A</option>
<option>B</option>
<option>C</option>
<option>D</option>
<option>E</option>
<option>F</option>
<option>RA</option>

</select>  </td>
<td class="score-output" id="output9">{{output9}}</td>
</tr>

<!--course rows-->
<tr class="animate__animated animate__fadeInUp">
<td><input type="text" class="cname-input" placeholder="Course 10"></td>
<td class="load-input"><select id="load10" v-model="load10">
<option disabled>Load</option>
<option>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</select></td>
<td class="grade-input"><select id="grade10" v-model="grade10">
<option disabled>Grade</option>
<option>A</option>
<option>B</option>
<option>C</option>
<option>D</option>
<option>E</option>
<option>F</option>
<option>RA</option>

</select>  </td>
<td class="score-output" id="output10">{{output10}}</td>
</tr>


<!--other1 course rows x2-->
<tr class="hide1 animate__animated animate__fadeInUp">
<td><input type="text" class="cname-input" placeholder="Course 11"></td>
<td class="load-input"><select id="load11" v-model="load11">
<option disabled>Load</option>
<option>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</select></td>
<td class="grade-input"><select id="grade11" v-model="grade11">
<option disabled>Grade</option>
<option>A</option>
<option>B</option>
<option>C</option>
<option>D</option>
<option>E</option>
<option>F</option>
<option>RA</option>

</select>  </td>
<td class="score-output" id="output11">{{output11}}</td>
</tr>

<tr class="hide2 animate__animated animate__fadeInUp">
<td><input type="text" class="cname-input" placeholder="Course 12"></td>
<td class="load-input"><select id="load12" v-model="load12">
<option disabled>Load</option>
<option>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</select></td>
<td class="grade-input"><select id="grade12" v-model="grade12">
<option disabled>Grade</option>
<option>A</option>
<option>B</option>
<option>C</option>
<option>D</option>
<option>E</option>
<option>F</option>
<option>RA</option>

</select>  </td>
<td class="score-output" id="output12">{{output12}}</td>
</tr>

<!--other2 course rows x2-->
<tr class="hide3 animate__animated animate__fadeInUp">
<td><input type="text" class="cname-input" placeholder="Course 13"></td>
<td class="load-input"><select id="load13" v-model="load13">
<option disabled>Load</option>
<option>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</select></td>
<td class="grade-input"><select id="grade13" v-model="grade13">
<option disabled>Grade</option>
<option>A</option>
<option>B</option>
<option>C</option>
<option>D</option>
<option>E</option>
<option>F</option>
<option>RA</option>

</select>  </td>
<td class="score-output" id="output13">{{output13}}</td>
</tr>

<tr class="hide4 animate__animated animate__fadeInUp">
<td><input type="text" class="cname-input" placeholder="Course 14"></td>
<td class="load-input"><select id="load14" v-model="load14">
<option disabled>Load</option>
<option>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</select></td>
<td class="grade-input"><select id="grade14" v-model="grade14">
<option disabled>Grade</option>
<option>A</option>
<option>B</option>
<option>C</option>
<option>D</option>
<option>E</option>
<option>F</option>
<option>RA</option>

</select>  </td>
<td class="score-output" id="output14">{{output14}}</td>
</tr>
</table>
<!--total row-->

<br>
<div class="rrr">
<span style="float:left;margin-left: 7%;" class="ib"> <b> GP </b></span>

<span style="margin-left:40%;" id="Ltotal" class="ib">{{TTT}}</span>

<span style="float:right;margin-right:7%;" id="marktotal" class="ib">{{Mtotal}}</span>
</div>

<br>
<div id="gp-display" class=""><span id="GP" class="ib" >{{GP}}</span></div>
<!-- <button style="float:left"  class=" btns">+ Add rows</button>-->
<button style="float:right;display:none"  v-onclick="Sub()" id="fbtn" class="btns">Calculate</button>

<div class="floatbtn adder animate__animated animate__bounceIn animate__delay-3s animate__repeat-1" id="addbutton">+</div>

</div>
</div>
</template>

<script>
import Header from './plugins/header.vue'
import Navcont from './plugins/nav.vue'
import $ from "jquery"

export default {
name: 'Semester',
components: {
Header,
Navcont
},
data() { 
return {
a:0,
load1:0,
load2:0,
load3:0,
load4:0,
load5:0,
load6:0,
load7:0,
load8:0,
load9:0,
load10:0,
load11:0,
load12:0,
load13:0,
load14:0,

grade1:"A",
grade2:"A",
grade3:"A",
grade4:"A",
grade5:"A",
grade6:"A",
grade7:"A",
grade8:"A",
grade9:"A",
grade10:"A",
grade11:"A",
grade12:"A",
grade13:"A",
grade14:"A",

output1:0,
output2:0,
output3:0,
output4:0,
output5:0,
output6:0,
output7:0,
output8:0,
output9:0,
output10:0,
output11:0,
output12:0,
output13:0,
output14:0,



TTT:0,
Mtotal:0,
GP:0

}
},
methods:{

Sub: function(){

function Course(load,grade){
this.grade=grade;
this.load=load;
}

Course.prototype.calculate = function(){
var mark = 0
if(this.grade=="A" || this.grade=="a"){
mark = 5 * this.load;
return mark;
}

else if(this.grade=="B" || this.grade=="b"){
mark = 4 * this.load;
return mark;
}

else if(this.grade=="C" || this.grade=="c"){
mark = 3 * this.load;
return mark;
}

else if(this.grade=="D" || this.grade=="d"){
mark = 2 * this.load;
return mark;
}

else if(this.grade=="E" || this.grade=="e"){
mark = 1 * this.load;
return mark;
}

else if(this.grade=="F" || this.grade=="f"){
mark = 0 * this.load;
return mark;
}

else if(this.grade=="RA"  || this.grade=="ra"){
mark = 0 * this.load;
return mark;
}

else if(this.load==0 ||  this.load=="" ){
mark = 0;
return mark;
}


}

// course objects

var course1 = new Course(this.load1,this.grade1)
var course2 = new Course(this.load2,this.grade2)
var course3 = new Course(this.load3,this.grade3)
var course4 = new Course(this.load4,this.grade4)
var course5 = new Course(this.load5,this.grade5)
var course6 = new Course(this.load6,this.grade6)
var course7 = new Course(this.load7,this.grade7)
var course8 = new Course(this.load8,this.grade8)
var course9 = new Course(this.load9,this.grade9)
var course10 = new Course(this.load10,this.grade10)
var course11 = new Course(this.load11,this.grade11)
var course12 = new Course(this.load12,this.grade12)
var course13 = new Course(this.load13,this.grade13)
var course14 = new Course(this.load14,this.grade14)



this.output1 = course1.calculate()
this.output2 = course2.calculate()
this.output3 = course3.calculate()
this.output4 = course4.calculate()
this.output5 = course5.calculate()
this.output6 = course6.calculate()
this.output7 = course7.calculate()
this.output8 = course8.calculate()
this.output9 = course9.calculate()
this.output10 = course10.calculate()
this.output11 = course11.calculate()
this.output12 = course12.calculate()
this.output13 = course13.calculate()
this.output14 = course14.calculate()



var total = () => {
//load total calculation

var Loadsum =Number(this.load1)+Number(this.load2)+Number(this.load3)+Number(this.load4)+Number(this.load5)+Number(this.load6)+Number(this.load7)+Number(this.load8)+
Number(this.load9)+Number(this.load10)+Number(this.load11)+Number(this.load12)+Number(this.load13)+Number(this.load14);
console.log(Loadsum)
this.TTT = Loadsum;

//mark total calculation

var  Marktotal = course1.calculate()+course2.calculate()+course3.calculate()+course4.calculate()+course5.calculate()+
course6.calculate()+course7.calculate()+course8.calculate()+course9.calculate()+course10.calculate()
+course11.calculate()+course12.calculate()+course13.calculate()+course14.calculate()
this.Mtotal = Marktotal; 


//GP  calculation

var Gpcalc = Marktotal / Loadsum;
var GP =Gpcalc.toFixed(2)
console.log(GP)
//trying to catch  NAN  error here 

if (isNaN(GP)){
this.GP = "No result yet"; 

}

else{        
this.GP = GP; 
}
} 
total()

/*(var i = document.getElementsByTagName("input")
for(var a=0; a<i.length; a++){
i[a].disabled=true;
i[a].style="background-color:rgba(235, 233, 233, 0.925);"
}*/
}



},
mounted(){
///////////////////////
$('#app,document,body').css("background-color","white")
//////////////


 var   a =0
var ele = document.getElementById("addbutton")

$(".adder").click(function(){

a++
if (a==1){$(".hide1").show().css("display","inline-block");}

else if (a==2){$(".hide2").show().css("display","inline-block");}

else if (a==3){$(".hide3").show().css("display","inline-block");}

else if (a==4){
ele.innerHTML = "-"
$(".hide4").show().css("display","inline-block");
}


else if (a==5){
ele.innerHTML = "-"
$(".hide4").hide();
}

else if (a==6){
ele.innerHTML = "-"

$(".hide3").hide();
$(".hide4").hide();
}

else if (a==7){
ele.innerHTML = "-"

$(".hide2").hide();
$(".hide3").hide();
$(".hide4").hide();
}

else if (a==8){
ele.innerHTML = "+"

$(".hide1").hide();
$(".hide2").hide();
$(".hide3").hide();
$(".hide4").hide();
a=0
}
})

}
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only display: flex;flex-direction: row;flex-basis: 1200px;--> 
<style scoped>

@media screen and (max-width:480px){
    input{outline:none}
.none{display: none;}
.cont{margin-top: 40px;padding: 10px;margin-bottom: 0PX;}
.home{display: block;overflow-y: hidden;}
.ib{display: inline-block;}
table{
background-color:transparent; 
color: black;
border-collapse: collapse;
width: 100%;

}

thead{font-size: 14px;margin-bottom: 20px;}

.cname-input{width: 100%;
height: 100%;
border: none;
text-align: center;
}

.grade-input,.load-input,select{
width: 60px;
}

select{width: 80%; background-color: white;border: none;box-shadow: 2px 2px 2px 2px rgb(236, 236, 236)}

.score-output{
color:black;
text-align: center;
}

tr,thead{height: 40px;width: inherit;background-color: white;box-shadow: 4px 4px 4px 4px rgb(236, 236, 236);display: inline-block;
border-radius: 15px;margin-bottom: 5px;margin-top: 5px;padding-top: 6px;}
.hide1,.hide2,.hide3,.hide4,#page2,.cumrow2,.cumrow3,.cumrow4,.cumrow5{display: none;}
#gp-display{width: 100%;margin-left: 0%;box-shadow: 4px 4px 4px 4px rgb(236, 236, 236);margin-bottom: 15px;
background-color: white;height: auto;padding: 4px;color: rgb(37, 37, 204);
text-align: center;border-radius: 15px;font-weight: bold;}
.btns{width: 43%;margin-bottom: 20px;border-radius: 15px;background-color: transparent;color: rgb(37, 37, 204);
border: none;box-shadow: 4px 4px 4px 4px rgb(236, 236, 236);}
.floatbtn{width: 60px; height: 60px;border-radius: 50%;background-color: rgb(37, 37, 204);font-weight: bolder;font-size: 38px;text-align: center;
position: fixed;top: 80%;right: 20px;color: white;}
}
</style>
