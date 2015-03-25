var ToastyAlert = (function() {
    "use strict";

    var ToastyAlert = {},
        toastyContainer,
        toastyAudio,
        config = {
            toastyImageClass: 'toasty-alert',
            toastyImageVisibleClass: 'toasty-alert-show',
            toastyDuration: 800,
            soundFilePath: './sound/toasty.mp3',
            noSound: false,
            showImage: true
        };

    function initOptions(options) {
        for(var prop in options) {
            if(options.hasOwnProperty(prop)){
                config[prop] = options[prop];
            }
        }
    }

    function createToastyAudio() {
        if(!toastyAudio) {
            toastyAudio = document.createElement("audio");
            toastyAudio.src = config.soundFilePath;
            toastyAudio.preload = "auto";
        }

        return toastyAudio;
    }

    function createToastyContainer() {
        if(!toastyContainer) {
            toastyContainer = document.createElement("div");
            toastyContainer.className = config.toastyImageClass;
        }
        return toastyContainer;
    }

    function createToasty() {
        var block = createToastyContainer(),
            audio = createToastyAudio();

        document.body.appendChild(block);
        document.body.appendChild(audio);
    }

    function runToasty() {
        if(!config.noSound)
            toastyAudio.play();

        if(config.showImage) {
            toastyContainer.classList.add(config.toastyImageVisibleClass);
            setTimeout(hideToasty, config.toastyDuration);
        }
    }

    function hideToasty() {
        toastyContainer.classList.remove(config.toastyImageVisibleClass);
    }

    ToastyAlert.initialize = function(options) {
        initOptions(options);
        createToasty();
    };

    ToastyAlert.destroy = function() {
        toastyContainer.remove();
        toastyAudio.remove();
        toastyContainer = null;
        toastyAudio = null;
    };

    ToastyAlert.run = function() {
        runToasty();
    };

    return ToastyAlert;
})();