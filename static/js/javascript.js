
//for video player

var myFP = fluidPlayer(
    'video-id', {
    "layoutControls": {
        "controlBar": {
            "autoHideTimeout": 3,
            "animated": true,
            "autoHide": true
        },
        "htmlOnPauseBlock": {
            "html": null,
            "height": null,
            "width": null
        },
        "autoPlay": false,
        "mute": false,
        "allowTheatre": true,
        "playPauseAnimation": false,
        "playbackRateEnabled": true,
        "allowDownload": false,
        "playButtonShowing": true,
        "fillToContainer": false,
        "primaryColor": "red",
        "posterImage": ""
    },
    "vastOptions": {
        "adList": [
            //ads in video start time
            {
                "roll": "preRoll",
                "vastTag": "www.ads.com",
                "adText": ""
            },
            //ads in video pause time
            {
                "roll": "onPauseRoll",
                "vastTag": "www.ads.com",
                "adText": ""
            }
        ],
        "adCTAText": false,
        "adCTATextPosition": ""
    }
});






function moon() {

    document.getElementById('moon').style.display = "none";
    document.getElementById('sun').style.display = "block";
    document.getElementById('main').style.background = "#000000d4";
    document.getElementById('main').style.transition = "1s";

}

function sun() {

    document.getElementById('sun').style.display = "none";
    document.getElementById('moon').style.display = "block";
    document.getElementById('main').style.background = "#33236e";
}

