#Tophat.csss

---

*Another css framework. But this one is mine.*


Tophat is a CSS framework I created from my goal of creating 12 side projects on 2013.
It's somewhat similar to those popular front-end frameworks (like [Bootstrap] and [Foundation]) but without the overwelming useless features.

##Usase

Tophat is not the kind of framework you want to download a precompiled .css file and start coding on top of that. Although you can do that [here] [1], you will only know it's full potential if you use [SASS] and code alongside with it.

First, clone de repo or download a .zip of the [lastest version][2].

Assuming that you have [SASS] running on your machine (and you should), go to the directory and do:

```
sass --watch tophat.scss:styles.css --style compressed
```
Now just use that `styles.css` file on your project for unlimited power.


##Features

Since I'm only releasing the version 0.1, I don't have all the features ready but they are enough to get you started with the crazy world of web development.

+ A reset using a slightly modified version of modified version of [normalize.css]
+ Basic typography with many customization features.
+ A fluid grid (and a optional non-fluid grid)
+ Responsive features with usefull classes.


##Browser Support

Since this framework is intended for modern development (and I don't like IE7), it will support everything from IE8 and above. If you are worried about other browsers don't be, because tophat was tested and will work like a sir on the major ones: Chrome, Firefox, Opera and Safari.

##Roadmap

I will likely add more features as I need them, and I'm also planing to create a base design for quickly prototyping. Stay tuned!


##Documentation

Coming soon. I promisse!


##License

Copyright 2013 João Campinhos

Licensed under the MIT License.

  [1]: https://github.com/joaocampinhos/Tophat/raw/master/compiled/tophat.css
  [2]: https://github.com/joaocampinhos/Tophat/archive/master.zip
  [Bootstrap]: http://twitter.github.com/bootstrap/
  [Foundation]: http://foundation.zurb.com/
  [SASS]: http://sass-lang.com/
  [normalize.css]: http://necolas.github.com/normalize.css/
