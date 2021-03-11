document.addEventListener("connected",function(e){
 console.log(e.type)
},false);

console.log("ligne 5");

cordova.plugins.CordovaMqTTPlugin.connect({
        url:"tcp://eu.thethings.network",
        port:1883,
        
        clientid:"iPotager81",
        connectionTimeout:60, 
        willTopicConfig:{
            qos:0, //default is 0
            retain:true, //default is true
            topic:"+/devices/+/up",
            payload:"22",
            
        },
        username:"applicationcapteur",
        password:'ttn-account-v2.ksLsu-i8x4veBF5SF0mJ6ZM7jQysryTt4lRe_gfD50s',
        keepAlive:3000,
        isBinaryPayload: false, //setting this 'true' will make plugin treat all data as binary and emit ArrayBuffer instead of string on events
        
        success:function(s){
             console.log("connexion reussie");
      
        },
        error:function(e){
          
            console.log("error");
        },
        onConnectionLost:function (){
         
            console.log("onConnectionLost");
        }
   
    });
    
console.log("ligne 40");

 cordova.plugins.CordovaMqTTPlugin.publish({
                topic:"+/devices/+/up",
                payload:"22",
                qos:0,
                retain:false,
                    success:function(s){
                        console.log("message envoyé");

                        },
                        error:function(e){
                            console.log("erreur de communications");

                        }
              });

    console.log("ligne57");


function alerte(){
    console.log("ça fonctionne");
}

// site : https://github.com/arcoirislabs/cordova-plugin-mqtt



//http://www.steves-internet-guide.com/using-javascript-mqtt-client-websockets/