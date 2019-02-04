!function(e){function t(t){for(var o,s,a=t[0],c=t[1],u=t[2],l=0,_=[];l<a.length;l++)s=a[l],r[s]&&_.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(f&&f(t);_.length;)_.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={0:0},i=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var f=c;i.push([1176,1]),n()}({1176:function(e,t,n){"use strict";n.r(t);var o=n(9),r=n.n(o),i={GAME_WIDTH:window.innerWidth,GAME_HEIGHT:window.innerHeight,GAME_TITLE_IMAGE_KEY:"game-title",BACKGROUND_IMAGE_KEY:"backGround",BACKGROUND_IMAGE_WIDTH:640,BACKGROUND_IMAGE_HEIGHT:960,FLOOR_IMAGE_KEY:"floor",FLOOR_IMAGE_HEIGHT:166,SCORE_IMAGE_KEY:"score",MONSTER_SPRITE_SHEET_KEY:"monster-idle",MONSTER_ANIMATION_KEY:"move",MONSTER_COVER_IMAGE_KEY:"monster-cover",CANDY_SPRITE_SHEET_KEY:"candy",BUTTON_SPRITE_SHEET_KEY:"button",BUTTON_SPRITE_FRAME_WIDTH:401,BUTTON_SPRITE_FRAME_HEIGHT:143,CANDY_FRAME_WIDTH:82,CANDY_FRAME_HEIGHT:98,CANDY_ANIMATION_KEY:"candy-move",SCORE_TEXT_FONT_STYLE:{font:"50px Arial",fill:"#FFCC00",stroke:"#333",strokeThickness:5,align:"center"},QUESTION_TEXT_STYLE:{font:"70px Arial",fill:"#FFCC00",stroke:"#333",strokeThickness:5,align:"center"},BG_SOUND_KEY:"bg_sound",CLICK_SOUND_KEY:"click_sound",ANSWER_CLICKED_EVENT_KEY:"answer_clicked"};function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=c(this,u(t).call(this,{key:"BootScene"})))._ready=!1,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r.a.Scene),function(e,t,n){t&&a(e.prototype,t),n&&a(e,n)}(t,[{key:"preload",value:function(){this.load.audio(i.BG_SOUND_KEY,"./assets/sounds/bg.mp3"),this.load.audio(i.CLICK_SOUND_KEY,"./assets/sounds/click.mp3"),this.load.image(i.BACKGROUND_IMAGE_KEY,"./assets/images/background.png"),this.load.image(i.FLOOR_IMAGE_KEY,"./assets/images/floor.png"),this.load.image(i.SCORE_IMAGE_KEY,"./assets/images/score-bg.png"),this.load.image(i.MONSTER_COVER_IMAGE_KEY,"./assets/images/monster-cover.png"),this.load.image(i.GAME_TITLE_IMAGE_KEY,"./assets/images/title.png"),this.load.spritesheet(i.MONSTER_SPRITE_SHEET_KEY,"./assets/images/monster-idle.png",{frameWidth:103,frameHeight:131}),this.load.spritesheet(i.CANDY_SPRITE_SHEET_KEY,"./assets/images/candy.png",{frameWidth:i.CANDY_FRAME_WIDTH,frameHeight:i.CANDY_FRAME_HEIGHT}),this.load.spritesheet(i.BUTTON_SPRITE_SHEET_KEY,"./assets/images/button-start.png",{frameWidth:i.BUTTON_SPRITE_FRAME_WIDTH,frameHeight:i.BUTTON_SPRITE_FRAME_HEIGHT}),this._ready=!0}},{key:"update",value:function(){this._ready&&this.scene.start("SplashScene")}}]),t}(),_=n(224),p=n.n(_);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,b(t).call(this,{key:"SplashScene"}))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,r.a.Scene),function(e,t,n){t&&y(e.prototype,t),n&&y(e,n)}(t,[{key:"preload",value:function(){var e=this.game.config.width/i.BACKGROUND_IMAGE_WIDTH,t=this.game.config.height/i.BACKGROUND_IMAGE_HEIGHT,n=.5*this.game.config.width,o=.5*this.game.config.height;this.add.image(0,0,i.BACKGROUND_IMAGE_KEY).setOrigin(0,0).setScale(e,t),this.add.image(n,o-150,i.GAME_TITLE_IMAGE_KEY).setScale(e,t),this.add.image(80*e,this.game.config.height-160*t,i.MONSTER_COVER_IMAGE_KEY).setScale(e,t),this.add.image(this.game.config.width-i.BUTTON_SPRITE_FRAME_WIDTH*e*.8,this.game.config.height-i.BUTTON_SPRITE_FRAME_HEIGHT*t*.8,i.BUTTON_SPRITE_SHEET_KEY,0).setOrigin(0).setScale(.8*e,.8*t).setInteractive().on("pointerdown",function(){this.scene.start("GameScene")},this)}},{key:"openLoginForm",value:function(){var e=document.getElementById("login"),t=document.getElementById("loginBtn");e.style.visibility="visible",window.scrollTo(0,0),t.addEventListener("click",this.loginClicked,!1)}},{key:"loginClicked",value:function(){document.getElementById("login").style.visibility="hidden",document.getElementById("loginBtn").removeEventListener("click",this.loginClicked);var e=document.getElementById("username").value,t=document.getElementById("password").value;console.log("".concat(e," , ").concat(t));p.a.post("http://54.205.68.225:8080/eddy/eddy/api/login",{username:e,password:t}).then(function(e){window.token=e.headers["x-auth-token"],console.log("Axios response"+window.token)}).catch(function(e){console.log("Axios response"+e)})}}]),t}();function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function w(e,t,n){return(w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var M=function(e){function t(e,n){var o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var s=r.a.Math.Between(.5*i.CANDY_FRAME_WIDTH,i.GAME_WIDTH-.5*i.CANDY_FRAME_WIDTH),a=r.a.Math.Between(75,125);return(o=function(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?S(e):t}(this,T(t).call(this,e,s,a,i.CANDY_SPRITE_SHEET_KEY,r.a.Math.Between(0,4))))._rotationSpeed=r.a.Math.Between(0,100)%2==0?-.03:.03,o.scene.add.existing(S(S(o))),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,r.a.GameObjects.Sprite),function(e,t,n){t&&g(e.prototype,t),n&&g(e,n)}(t,[{key:"preUpdate",value:function(e,n){w(T(t.prototype),"preUpdate",this).call(this,e,n),this.rotation+=this._rotationSpeed}}]),t}();function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t,n){return(R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var j=function(e){function t(e,n,o,s,a){var c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c=function(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?k(e):t}(this,C(t).call(this,e,n,o,s,i.QUESTION_TEXT_STYLE)),R(C(t.prototype),"setInteractive",k(c)).call(k(c)),R(C(t.prototype),"setOrigin",k(c)).call(k(c),.5,.5),c.once("pointerdown",function(){e.game.events.emit(i.ANSWER_CLICKED_EVENT_KEY,this)},k(k(c))),c._correct=a,c._rotationSpeed=r.a.Math.Between(0,100)%2==0?-.01:.01,e.add.existing(k(k(c))),c}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,r.a.GameObjects.Text),function(e,t,n){t&&A(e.prototype,t),n&&A(e,n)}(t,[{key:"preUpdate",value:function(e,t){this.rotation+=this._rotationSpeed}},{key:"correct",get:function(){return this._correct}}]),t}();function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var x=function(e){function t(e,n,o){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=function(e,t){return!t||"object"!==G(t)&&"function"!=typeof t?D(e):t}(this,N(t).call(this,e,n,o,i.MONSTER_SPRITE_SHEET_KEY)),e.add.existing(D(D(r))),e.anims.create({key:i.MONSTER_ANIMATION_KEY,frames:e.anims.generateFrameNumbers(i.MONSTER_SPRITE_SHEET_KEY,{start:0,end:12}),frameRate:24,repeat:-1}),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(t,r.a.GameObjects.Sprite),t}();function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function H(e,t){return!t||"object"!==B(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var L=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=H(this,U(t).call(this,{key:"GameScene"})))._score=0,e._spawnCandyTimer=0,e._questionsTimer=0,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(t,r.a.Scene),function(e,t,n){t&&Y(e.prototype,t),n&&Y(e,n)}(t,[{key:"init",value:function(){this._candies=this.physics.add.group(),this.physics.world.setBoundsCollision(!0,!0,!0,!0),this.game.events.on("pont",function(e){console.log("point events "+e),this._score+=e},this),this.input.on("gameobjectdown",this.camdyClicked,this),this.physics.world.on("worldbounds",function(e){console.log("worldbounds "),e.gameObject.destroy()},this)}},{key:"preload",value:function(){var e=this.game.config.width/i.BACKGROUND_IMAGE_WIDTH,t=this.game.config.height/i.BACKGROUND_IMAGE_HEIGHT;this._bgMusic=this.sound.add(i.BG_SOUND_KEY,{loop:!0}),this._clickMusic=this.sound.add(i.CLICK_SOUND_KEY),this.add.image(0,0,i.BACKGROUND_IMAGE_KEY).setOrigin(0,0).setScale(e,t);var n=this.add.image(0,0,i.SCORE_IMAGE_KEY).setOrigin(0,0).setScale(e,t);this.add.image(-10,this.game.config.height-i.FLOOR_IMAGE_HEIGHT+10,i.FLOOR_IMAGE_KEY).setOrigin(0,0),this._scoreText=this.add.text(.5*n.width*e+50*e,.5*n.height*t,this._score,i.SCORE_TEXT_FONT_STYLE).setOrigin(.5).setScale(e,t)}},{key:"create",value:function(){this._player=new x(this,40,this.game.config.height-130),this._player.anims.play(i.MONSTER_ANIMATION_KEY,!0)}},{key:"update",value:function(e,t){this._spawnCandyTimer+=t,this._questionsTimer+=t,this.spawnQuestion(),this.spawnCandy(),this._scoreText.text=this._score}},{key:"camdyClicked",value:function(e,t,n){this._clickMusic.play(),this.game.events.emit("pont",1),t.destroy()}},{key:"spawnQuestion",value:function(){this._questionsTimer>=r.a.Math.Between(2e3,5e3)&&(this.scene.pause(this.scene.key),this.scene.launch("QuestionsScene"),this._questionsTimer=0)}},{key:"spawnCandy",value:function(){if(this._spawnCandyTimer>=r.a.Math.Between(700,1200)){var e=new M(this);this._candies.add(e),e.setInteractive(),e.body.onWorldBounds=!0,e.body.setCollideWorldBounds(),e.body.setVelocityY(200+this._score/5*20),this._spawnCandyTimer=0}}}]),t}(),q=n(477);function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function V(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var z=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=V(this,X(t).call(this,{key:"QuestionsScene"})))._answers=[],e._questionFactory=new q.a,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(t,r.a.Scene),function(e,t,n){t&&Q(e.prototype,t),n&&Q(e,n)}(t,[{key:"preload",value:function(){this._questionText=this.add.text(.5*i.GAME_WIDTH,120,"",i.QUESTION_TEXT_STYLE),this._questionText.setOrigin(.5,.5),this.game.events.once(i.ANSWER_CLICKED_EVENT_KEY,function(e){for(console.log(i.ANSWER_CLICKED_EVENT_KEY+F(j));this._answers.length;){this._answers.pop().destroy()}this.game.events.emit("pont",e.correct?1:-1),this.scene.stop("QuestionsScene"),this.scene.resume("GameScene")},this),this._questionFactory.initQuestions()}},{key:"create",value:function(){this.generateMathQuestion()}},{key:"update",value:function(){this._answers.forEach(function(e){e.update()})}},{key:"generateAnswerPosition",value:function(e){for(;;){for(var t=r.a.Math.Between(.5*e.width,i.GAME_WIDTH-.5*e.width),n=r.a.Math.Between(120+e.height,i.GAME_HEIGHT-100),o=!0,s=0;s<this._answers.length;s++){var a=this._answers[s];if(Math.abs(a.x-t)<e.width&&Math.abs(a.y-n)<e.height){o=!1;break}}if(o)return{x:t,y:n}}}},{key:"generateMathQuestion",value:function(){var e=this._questionFactory.Generate();if(e){this._questionText.text=e.text;for(var t=0;t<e.answers.length;t++){var n=e.answers[t],o=new j(this,0,0,n.data,n.correct),r=this.generateAnswerPosition(o);o.x=r.x,o.y=r.y,this._answers.push(o)}}else this.scene.stop("QuestionsScene"),this.scene.resume("GameScene")}}]),t}(),Z={type:r.a.AUTO,parent:"phaser-app",width:i.GAME_WIDTH,height:i.GAME_HEIGHT,resolution:Math.floor(window.devicePixelRatio),localStorageName:"phaseres6webpack",physics:{default:"arcade",arcade:{gravity:{y:0},debug:!1}}};function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e,t){return!t||"object"!==$(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ne(e,t){return(ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var oe=Object.assign(Z,{scene:[l,m,L,z]});new(function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),ee(this,te(t).call(this,oe))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ne(e,t)}(t,r.a.Game),t}())},225:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.d(t,"a",function(){return r});var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._questionText=t,this._answers=n}return function(e,t,n){t&&o(e.prototype,t),n&&o(e,n)}(e,[{key:"text",get:function(){return this._questionText}},{key:"answers",get:function(){return this._answers}}]),e}()},226:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.d(t,"a",function(){return r});var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._correct=n}return function(e,t,n){t&&o(e.prototype,t),n&&o(e,n)}(e,[{key:"correct",get:function(){return this._correct}},{key:"data",get:function(){return this._data}}]),e}()},477:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return _default});var _question__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(225),_answer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(226),axios__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(224),axios__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}var _default=function(){function _default(){_classCallCheck(this,_default),this._minusOperator="-",this._plusOperator="+",this._multiplicationOperator="*",this._divideOperator="/",this._divideOperatorText="÷",this._minimum=1,this._maximum=9,this._operators=[this._minusOperator,this._plusOperator,this._multiplicationOperator,this._divideOperator],this._numberOfAnswers=3,this._questions=[],this._ready=!1}return _createClass(_default,[{key:"initQuestions",value:function(){this._ready}},{key:"Generate",value:function(){if(this._questions.length>0){console.log("questions from server");for(var e=this._questions[Phaser.Math.Between(0,this._questions.length-1)].data,t=[],n=e.answers.split(",").map(function(e){return e.trim()}),o=0;o<n.length;o++){var r=n[o];t.push(new _answer__WEBPACK_IMPORTED_MODULE_1__.a(r,r===e.correctAnswer))}return new _question__WEBPACK_IMPORTED_MODULE_0__.a(e.body,t)}for(var i=Phaser.Math.Between(this._minimum,this._maximum),s=Phaser.Math.Between(this._minimum,this._maximum);i===s;)s=Phaser.Math.Between(this._minimum,this._maximum);var a=this._operators[Phaser.Math.Between(0,this._operators.length-1)];if(a===this._minusOperator&&i<s)i+=s,i-=s=i-s;else if(a===this._divideOperator)for(;i%s!=0;)i=Phaser.Math.Between(this._minimum,this._maximum),s=Phaser.Math.Between(this._minimum,this._maximum);var c=this.generateAnswers(i,s,a),u=this.generateQuestionText(i,s,a);return new _question__WEBPACK_IMPORTED_MODULE_0__.a(u,c)}},{key:"generateQuestionText",value:function(e,t,n){return(n===this._divideOperator?"".concat(e," ").concat(this._divideOperatorText," ").concat(t):"".concat(e," ").concat(n," ").concat(t))+" = ?"}},{key:"generateAnswers",value:function generateAnswers(firstNumber,secondNumber,operator){for(var questionExpression="".concat(firstNumber," ").concat(operator," ").concat(secondNumber),correctAnswer=eval(questionExpression),answers=[],index=0;index<this._numberOfAnswers;index++){var answer=new _answer__WEBPACK_IMPORTED_MODULE_1__.a(0===index?correctAnswer:correctAnswer+(index%2?-1:1*Math.floor(1+3*Math.random())),0===index);answers.push(answer)}return answers}}]),_default}()}});
//# sourceMappingURL=bundle.56e5562a22e720347b99.js.map