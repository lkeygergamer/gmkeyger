document.addEventListener('deviceready', onDeviceReady, false);
var app = new Framework7({
  // App root element
  el: '#app',
  // App Name
  name: 'Sophia',
  // App id
  id: 'br.com.assistente',
  // Enable swipe panel
  panel: {
    swipe: true,
  },
  // Add default routes
  routes: [
    {
      path: '/index/',
      url: 'index.html',
      on: {
        pageInit: function (e, page) {
          
        },
      } // fechando o objeto 'on'
    }, 
    {
      path: '/memorias/',
      url: 'memorias.html',
      on: {
        pageInit: function (e, page) {
          var searchbar = app.searchbar.create({ 
            el: '.searchbar',
            searchContainer: '.list',
            searchIn: '.item-title',
            on: {
              search: function(sb, query, previousQuery) {
                console.log(query, previousQuery);
              }
            } 
          });
        }
      }
    }
  ],
  // ... outros parâmetros
});

var mainView = app.views.create('.view-main' ,{url:'/index/'});
