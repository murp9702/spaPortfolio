Vue.component('carousel-pic', {
  template: `
  <div class="item">
    <img :src="'/img/photographySamples/' + fileName" :alt="alt">
  </div>`,
  props: ["fileName", "alt"]
})


var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: function(resolve,reject){
        $.get('/html/home.component.html', function(htmlFromServer){
          var homeComponent = {
            template: htmlFromServer
          }
          resolve(homeComponent)
        })
      }
    },
    {
      path: '/webDev',
      // get component from server, runs ASYNC and needs to be resolved
      component: function(resolve, reject){
        $.get('/html/webDev.component.html', function(htmlFromServer){
          var webDevComponent = {
            template: htmlFromServer
          }
          resolve(webDevComponent)
        })
      }
    },
    {
      path: '/photography',
      component: function(resolve,reject){
        $.get('/html/photography.component.html', function(htmlFromServer){
          var photographyComponent = {
            template: htmlFromServer
          }
          resolve(photographyComponent)
        })
      }
    },
    {
      path: '/about',
      component: function(resolve,reject){
        $.get('/html/about.component.html', function(htmlFromServer){
          var aboutComponent = {
            template: htmlFromServer
          }
          resolve(aboutComponent)
        })
      }
    }

  ]
})




var vm = new Vue({
  el: "#app",
  router: router,
  data: {},
});
