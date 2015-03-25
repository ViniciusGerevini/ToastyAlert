Toasty! Alert
=====================

Just a joke that can be used in easter eggs.

>"Toasty!" is an Easter egg that first featured in Mortal Kombat II.
>It originated as an inside joke between members of the Mortal Kombat development team, and made its way into the game via an image of sound designer Dan Forden appearing in the lower-right corner of the screen, and saying "Toasty!" in a falsetto voice, when the player performed a particularly vicious uppercut.

## How to use

* Import `toasty-alert.min.css` and `ToastyAlert.min.js`
* create a `./sound` folder in your website directory and copy `toasty.mp3` to it.
* In your page put:
```javascript
<script>
    (function() {
        ToastyAlert.initialize();
    })();
</script>
```
* You can trigger the Toasty! alert executing `ToastyAlert.run()`. eg:

```html
<button onclick="ToastyAlert.run();">Toasty!</button>
```

## Options

```javascript
ToastyAlert.initialize({
    toastyDuration: 800, //Time before Toasty! image disappears
    soundFilePath: './sound/toasty.mp3', // Toasty! sound file path
    noSound: false, // Disable Toasty! sound
    showImage: true // Enable/disable Toasty! image
});

```

##More

Web Components

* native (To do)
* Polymer (To do)
* X-Tag (To do)
