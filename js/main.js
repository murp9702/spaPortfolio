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
      path: '/botany',
      component: function(resolve, reject){
        $.get('/html/botany.component.html', function(htmlFromServer){
          var botanyComponent = {
            template: htmlFromServer
          }
          resolve(botanyComponent)
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