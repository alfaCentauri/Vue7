/* 
    Created on : 31/01/2019, 11:06:52 AM
    Author     : Ricardo Presilla.
    Licencia GNU.
*/
var vue = new Vue({
    el: '#app',
    data: {
        ok: false
    }
});

var vue2 = new Vue({
    el: '#app-2',
    data: {
        ok: true
    }
});

var vue3 = new Vue({
    el: '#app-3',
    data: {
        
    }
});

var vue4 = new Vue({
    el: '#app-4',
    data: {
        type: 'E'
    }
});

var vue5 = new Vue({
    el: '#app-5',
    data: {
        loginType: '',
    },
    methods: {
      cambio: function(){
          if(this.loginType === 'username'){
            this.loginType = 'email';  
          }
          else{
            this.loginType = 'username';
          }
      }  
    }
});

var vue6 = new Vue({
    el: '#app-6',
    data: {
        loginType: '',
    },
    methods: {
      cambio: function(){
          if(this.loginType === 'username'){
            this.loginType = 'email';  
          }
          else{
            this.loginType = 'username';
          }
      }  
    }
});
