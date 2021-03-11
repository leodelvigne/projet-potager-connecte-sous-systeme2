

function connexion() {


    cordova.plugins.CordovaMqTTPlugin.connect({
        url: "tcp://eu.thethings.network",
        port: 1883,

        clientid: "iPotager81",
        connectionTimeout: 60,
        willTopicConfig: {
            qos: 0, //default is 0
            retain: true, //default is true
            topic: "+/devices/+/up",
            payload: "22",

        },
        username: "applicationcapteur",
        password: 'ttn-account-v2.ksLsu-i8x4veBF5SF0mJ6ZM7jQysryTt4lRe_gfD50s',
        keepAlive: 3000,
        isBinaryPayload: false, //setting this 'true' will make plugin treat all data as binary and emit ArrayBuffer instead of string on events

        success: function (s) {
            alert("connexion reussie");

        },
        error: function (e) {

            alert("error");
        },
        onConnectionLost: function () {

            alert("onConnectionLost");
        },
        routerConfig: {
            router:routerObject //instantiated router object
                    publishMethod: "emit", //refer your custom router documentation to get the emitter/publishing function name. The parameter should be a string and not a function.
            useDefaultRouter: false //Set false to use your own topic router implementation. Set true to use the stock topic router implemented in the plugin.
        }

    });


}


cordova.plugins.CordovaMqTTPlugin.publish({
    topic: "+/devices/+/up",
    payload: "22",
    qos: 0,
    retain: false,
    success: function (s) {
        alert("message envoyé");

    },
    error: function (e) {
        alert("erreur de communications");

    }
});

function alerte() {
    alert("ça fonctionne");

}