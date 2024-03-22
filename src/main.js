import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'



/*import Home from './components/HomePage.vue'
import About from './components/AboutPage.vue'
import Review from './components/Review.vue'
*/

import coverpage from './components/coverpage.vue'
import Semester from './components/Semester.vue'
import Help from './components/HelpPage.vue'
import About from './components/AboutPage.vue'
import Cummulative from './components/cummulative.vue'

const routes =[
/*{path:'/',component:Home},
{path:'/about',component:About},
{path:'/Review',component:Review},
*/
{path:'/',component:coverpage},
{path:'/semester',component:Semester},
{path:'/cummulative',component:Cummulative},
{path:'/Help',component:Help},
{path:'/About',component:About},

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});


const xapp = createApp(App);
xapp.use(router).mount("#app");


