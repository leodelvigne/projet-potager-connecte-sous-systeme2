document.addEventListener("backbutton", exitAppPopup, false);

function exitAppPopup() {
    navigator.notification.confirm(
        "Voulez-vous quitter?", 
        function(buttonIndex){
            ConfirmExit(buttonIndex);
        },
        "",
        "Oui,Non"
    );
};

function ConfirmExit(stat){
    if(stat == "1"){
        navigator.app.exitApp();
    }else{
        return;
    };
};

document.addEventListener("DOMContentLoaded", function () {
    var jauge1 = new JustGage({
        id: "jauge1",
        title: "Température carottes",
        value: getRandomInt(-20, 50),
        pointer: true,
        counter: true,
        min: -20,
        max: 50,
        symbol:'°C',
        gaugeWidthScale: 0.5,
        customSectors: [{
                color: '#ff0000',
                lo: 35,
                hi: 50
            }, {
                color: '#00ff00',
                lo: 0,
                hi: 15
            }, {
                color: '#00c9ff',
                lo: -20,
                hi: 0
            }],
        titleFontColor: "black",
        titleFontFamily: "Georgia",
        titlePositleFontColor: "black",
        titleFontFion: "below",
        valueFontColor: "black",
        valueFontFamily: "Georgia"
    });

    var jauge2 = new JustGage({
        id: 'jauge2',
        title: "Hygrométrie carottes",
        value: getRandomInt(0, 100),
        pointer: true,
        counter: true,
        min: 0,
        max: 100,
        symbol: '%',
        gaugeWidthScale: 0.1,
        pointerOptions: {
            toplength: 8,
            bottomlength: -20,
            bottomwidth: 6,
            color: '#8e8e93'
        },
        titleFontColor: "black",
        titleFontFamily: "Georgia",
        titlePositleFontColor: "black",
        titleFontFion: "below",
        valueFontColor: "black",
        valueFontFamily: "Georgia"
    });

    var jauge3 = new JustGage({
        id: "jauge3",
        title: "Humidité du sol",
        value: getRandomInt(0, 100),
        counter: true,
        min: 0,
        max: 100,
        symbol: '%',
        gaugeWidthScale: 1,
        titleFontColor: "black",
        titleFontFamily: "Georgia",
        titlePositleFontColor: "black",
        titleFontFion: "below",
        valueFontColor: "black",
        valueFontFamily: "Georgia"
    });

    document.getElementById('gauge_refresh').addEventListener('click', function () {
        jauge1.refresh(getRandomInt(-20, 50));
        jauge2.refresh(getRandomInt(0, 100));
        jauge3.refresh(getRandomInt(0, 100));
    });
    
    var jauge4 = new JustGage({
        id: "jauge4",
        title: "Température salades",
        value: getRandomInt(-20, 50),
        pointer: true,
        counter: true,
        min: -20,
        max: 50,
        symbol:'°C',
        gaugeWidthScale: 0.5,
        customSectors: [{
                color: '#ff0000',
                lo: 35,
                hi: 50
            }, {
                color: '#00ff00',
                lo: 0,
                hi: 15
            }, {
                color: '#00c9ff',
                lo: -20,
                hi: 0
            }],
        titleFontColor: "black",
        titleFontFamily: "Georgia",
        titlePositleFontColor: "black",
        titleFontFion: "below",
        valueFontColor: "black",
        valueFontFamily: "Georgia"
    });

    var jauge5 = new JustGage({
        id: 'jauge5',
        title: "Hygrométrie salades",
        value: getRandomInt(0, 100),
        pointer: true,
        counter: true,
        min: 0,
        max: 100,
        symbol: '%',
        gaugeWidthScale: 0.1,
        pointerOptions: {
            toplength: 8,
            bottomlength: -20,
            bottomwidth: 6,
            color: '#8e8e93'
        },
        titleFontColor: "black",
        titleFontFamily: "Georgia",
        titlePositleFontColor: "black",
        titleFontFion: "below",
        valueFontColor: "black",
        valueFontFamily: "Georgia"
    });

    var jauge6 = new JustGage({
        id: "jauge6",
        title: "Humidité du sol",
        value: getRandomInt(0, 100),
        counter: true,
        min: 0,
        max: 100,
        symbol: '%',
        gaugeWidthScale: 1,
        titleFontColor: "black",
        titleFontFamily: "Georgia",
        titlePositleFontColor: "black",
        titleFontFion: "below",
        valueFontColor: "black",
        valueFontFamily: "Georgia"
    });

    document.getElementById('gauge_refresh').addEventListener('click', function () {
        jauge4.refresh(getRandomInt(-20, 50));
        jauge5.refresh(getRandomInt(0, 100));
        jauge6.refresh(getRandomInt(0, 100));
    });
    
    var jauge7 = new JustGage({
        id: "jauge7",
        title: "Température tomates",
        value: getRandomInt(-20, 50),
        pointer: true,
        counter: true,
        min: -20,
        max: 50,
        symbol:'°C',
        gaugeWidthScale: 0.5,
        customSectors: [{
                color: '#ff0000',
                lo: 35,
                hi: 50
            }, {
                color: '#00ff00',
                lo: 0,
                hi: 15
            }, {
                color: '#00c9ff',
                lo: -20,
                hi: 0
            }],
        titleFontColor: "black",
        titleFontFamily: "Georgia",
        titlePositleFontColor: "black",
        titleFontFion: "below",
        valueFontColor: "black",
        valueFontFamily: "Georgia"
    });

    var jauge8 = new JustGage({
        id: 'jauge8',
        title: "Hygrométrie tomates",
        value: getRandomInt(0, 100),
        pointer: true,
        counter: true,
        min: 0,
        max: 100,
        symbol: '%',
        gaugeWidthScale: 0.1,
        pointerOptions: {
            toplength: 8,
            bottomlength: -20,
            bottomwidth: 6,
            color: '#8e8e93'
        },
        titleFontColor: "black",
        titleFontFamily: "Georgia",
        titlePositleFontColor: "black",
        titleFontFion: "below",
        valueFontColor: "black",
        valueFontFamily: "Georgia"
    });

    var jauge9 = new JustGage({
        id: "jauge9",
        title: "Humidité du sol",
        value: getRandomInt(0, 100),
        counter: true,
        min: 0,
        max: 100,
        symbol: '%',
        gaugeWidthScale: 1,
        titleFontColor: "black",
        titleFontFamily: "Georgia",
        titlePositleFontColor: "black",
        titleFontFion: "below",
        valueFontColor: "black",
        valueFontFamily: "Georgia"
    });

    document.getElementById('gauge_refresh').addEventListener('click', function () {
        jauge7.refresh(getRandomInt(-20, 50));
        jauge8.refresh(getRandomInt(0, 100));
        jauge9.refresh(getRandomInt(0, 100));
    });
});