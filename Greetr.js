 ;(function(global,$){
    
     // return object from function constructor with key word new
     var greeting=function(firstName,lastName,language){
         
         return new greeting.init(firstName,lastName,language);
     }
     
     
       //setup hidden variable that will be hidden outside world and accessable in function by clusure
    var supportedLangs=['en','es'];
    
     // informal greetings
    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
 
    // formal greetings
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    
    // logger messages
    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión'
    };
     
     // prototype holds methods(to save space)
     greeting.prototype={
         fullName:function(){
             return this.firstName + ' ' + this.lastName;
         },
         
         validate:function(){
             if (supportedLangs.indexOf(this.language)===-1)  
                 throw " invalid languge";
         },
         
         formalGreeting:function(){
           return formalGreetings[this.language] + ' ' +this.fullName();
         },
         
          Greeting:function(){
           return greetings[this.language] + ' ' +this.fullName();
         },
         
         
         greet:function(formal){
             var msg;
             if(formal){
                 msg=this.formalGreeting();
                 
             }
             else{
                 msg=this.Greeting();
             }
             
             if(console){
                 console.log(msg);
             }
             
             // make this function chainable
             return this;
         },
         
         setLang:function(lang){
             this.language=lang;
             this.validate();
             
               // make chainable
             return this;
         },
         
         log:function(){
             if(console){
                 
                 console.log(logMessages[this.language] + ' ' + this.fullName());
             }
             return this;
         }
         
         
     }

     //define prop in function
     greeting.init=function(firstName,lastName,language){
         var self = this;
         
         self.firstName=firstName;
         self.lastName=lastName;
         self.language=language||'en';
         
     }
     
     greeting.init.prototype=greeting.prototype;
     
     global.greeting=global.G$=greeting;
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
})(window,jQuery);