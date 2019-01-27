(function(e){function t(t){for(var a,i,s=t[0],m=t[1],h=t[2],c=0,l=[];c<s.length;c++)i=s[c],n[i]&&l.push(n[i][0]),n[i]=0;for(a in m)Object.prototype.hasOwnProperty.call(m,a)&&(e[a]=m[a]);u&&u(t);while(l.length)l.shift()();return r.push.apply(r,h||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],a=!0,s=1;s<o.length;s++){var m=o[s];0!==n[m]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=o[0]))}return e}var a={},n={app:0},r=[];function i(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=a,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(o,a,function(t){return e[t]}.bind(null,a));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/48seconds/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],m=s.push.bind(s);s.push=t,s=s.slice();for(var h=0;h<s.length;h++)t(s[h]);var u=m;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("1c43")},"6d43":function(e,t,o){},bcd5:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("game")},n=[],r=(o("cc0a"),o("869c"),o("98c4"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",["TITLE"===e.state?o("title-card",{on:{next:function(t){e.state="PLAY"}}}):"PLAY"===e.state?o("actual-game",{on:{done:e.gameDone}}):"GAMEOVER"===e.state?o("div",[e.finalScore>0?o("h2",[e._v("You're a winner! You made something!")]):e._e(),0==e.finalScore?o("h2",[e._v("Somehow, you ended exactly where you started. You're a winner!")]):e._e(),e.finalScore<0?o("h2",[e._v("You managed to end the jam with less of a game than you started with. You're still a winner though.")]):e._e(),o("br"),o("button",{on:{click:function(t){e.state="PLAY"}}},[e._v("Play Again")])]):e._e()],1)}),i=[],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h2",[e._v(e._s(e.text))])},m=[],h={name:"TitleCard",data:function(){var e=this;return window.setTimeout(function(){e.text="This should be easy."},4e3),window.setTimeout(function(){e.$emit("next")},8e3),{text:"Ah! The Global Game Jam, where I feel at home."}}},u=h,c=o("3550"),l=Object(c["a"])(u,s,m,!1,null,null,null),d=l.exports,g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("p",[e._v("Time Remaining: "+e._s(e.time))]),o("p",[e._v("Game Completion: "+e._s(e.percent)+"%")]),o("br"),e.previousResult?o("p",{staticClass:"italic"},[e._v(e._s(e.previousResult))]):e._e(),o("p",[e._v(e._s(e.question.text))]),e._l(e.question.answers,function(t,a){return o("button",{key:a,on:{click:function(o){e.clickAnswer(t)}}},[e._v(e._s(t.text))])})],2)},y=[],b=o("ed32"),p=o("540c"),f=function(){return{forming:[{text:"Perfectionist Programmer wants to join your team.",answers:[{text:"Welcome to the team!",goodProbability:.3,goodChange:5,goodCommentary:"This is going to be the best game.",badChange:-5,badCommentary:"What is perfection, really?"},{text:"Sorry, we've already got a programmer.",change:0},{text:"Nope!",change:-10}]},{text:"The theme is...",answers:[{text:"Home",change:2,commentary:"Hey look, I included the theme."},{text:"Transmission",change:5,commentary:"Good memory! That's a diversifier this year."},{text:"Wave",change:-5,commentary:"#throwbackthursday"}]},{text:"Aspiring Artist wants to join your team.",answers:[{text:"This game is gonna make Crysis look bad.",goodProbability:.5,goodChange:5,goodCommentary:"Ok maybe not, but we will have fun.",badChange:-5,badCommentary:'Aspiring Artist: "BTW I\'m a big deal on Tumblr."'},{text:"The more the merrier!",change:2}]},{text:'"I\'m just here for the snacks."',answers:[{text:"Aren't we all...",change:8},{text:"Snack later, I'm here to make the next big game.",change:-5}]}],prepro:[{text:"Everyone on your team has different ideas.",answers:[{text:"Compromise.",commentary:"Yay teamwork!",change:5},{text:"My way or the highway!",commentary:"Really setting yourself up for success there...",goodProbability:.2,goodChange:1,badChange:-10}]},{text:"Ok team, let's whiteboard this first.",answers:[{text:"Nah brah.",change:-4},{text:"Attempt a storyboard.",change:1}]},{text:"What game engine should we use?",answers:[{text:"Unity",goodProbability:.5,goodChange:5,goodCommentary:"We could turn this into a real game and sell it!",badChange:-5,badCommentary:"Team spends the rest of the jam troubleshooting Unity prefabs, weird source control issues, and inflexible code architecture."},{text:"Unreal",commentary:"Team spends the rest of the jam admiring the graphics in the demo scene and no one knows C++.",change:-9},{text:"Phaser.js",commentary:"How hard could JavaScript be?",change:-2},{text:"Write our engine. We're real programmers.",change:-4567}]},{text:"2D or 3D?",answers:[{text:"2D",change:4,commentary:"That sounds doable."},{text:"3D",goodProbability:.5,goodChange:7,goodCommentary:"We have some great 3D artists on our team, so this will put their skills to good use.",badChange:-5,badCommentary:"Does anyone on the team know Blender?"},{text:"3D VR!",goodProbability:.5,goodChange:56,goodCommentary:"We have great artists, developers, and we have the equipment already set up.",badChange:-40,badCommentary:"How does the VR API work again? I'm feeling dizzy..."}]},{text:"We should make a first person shooter crossed with a platformer. Think Mirror's Edge but with more guns.",answers:[{text:"No.",change:3},{text:"Let's do it!",goodProbability:.5,goodChange:10,goodCommentary:"Well, that didn't work, but we made a great Mario clone.",badChange:-5,badCommentary:"Well, that wasn't as easy as I thought, but we could keep working on it after the jam."}]}],production:[{text:"It turns out no one on your team actually knows how to make a game.",answers:[{text:"Ok.",change:3},{text:"Let's order pizza.",goodProbability:.6,goodChange:10,goodCommentary:"Your team is happy.",badChange:-5,badCommentary:"A team member eats too much pizza and gets sick."},{text:"Panic!",commentary:"This is going greaaaaat.",change:-7}]},{text:"Merge conflict!",answers:[{text:"Over-write with my code.",change:-4,commentary:"Your teammates are mad at you, but the code works."},{text:"Over-write with their code.",change:-4,commentary:"Whoops, the game is broken now."},{text:"Throw it all out and use a flash drive instead of GitHub.",change:0,commentary:"Gotta make sacrifices somewhere."}]},{text:"A programmer on your team goes rogue and starts making a totally different game.",answers:[{text:"Reel in the rogue programmer. We need to work as a team.",goodProbability:.6,goodChange:11,goodCommentary:"Back on track now.",badChange:-4,badCommentary:"Programmer quits. Well, our game can still have awesome art and music."},{text:"Let them do their thing.",change:-1,commentary:"Maybe we can work it in as a bonus level."}]},{text:"Your game has AWESOME music because you live in Nashville.",answers:[{text:"Yay!",change:8}]},{text:"Making a game is proving to be more difficult than your team anticipated.",answers:[{text:"Yup. This ain't my first rodeo.",change:2},{text:"No, like seriously. Game development is difficult.",goodProbability:.5,goodChange:6,goodCommentary:"I didn't sleep for two days, but I learned a lot.",badChange:-4,badCommentary:"I think I'll stick to making Java enterprise applications."}]}],polish:[{text:"Your hard drive crashed.",answers:[{text:"I came here with nothing, so I can leave with nothing.",change:0},{text:"That's ok, we used source control.",commentary:"Did you remember to push?",change:8},{text:"We still have 2 hours! Let's do this!",change:10}]},{text:"Insomnia is setting in. Your zombie game is about to be acted out in real life if you don't sleep soon.",answers:[{text:"Get some sleep.",change:5},{text:"More caffiene! I'm invincible!",change:1},{text:"BRAAAIINNNNSS",change:-20,commentary:"In your sleep-deprived state, you accidently ate your computer."}]},{text:"Your team has made a functional game. Time to:",answers:[{text:"Add VR support!",change:-5,commentery:"You accidently broke your game by trying to do VR with PICO 8."},{text:"Add in the audio assets, play test, fix bugs.",change:8,commentary:"Surprisingly good decision!"}]},{text:"It's crunch time. 3 hours until submission.",answers:[{text:"I should probably edit the two hours of voice-overs we recorded last night.",goodProbability:.1,goodChange:5,goodCommentary:"Yeah! There might not be a way to win this game, but the audience will love it.",badChange:-4,badCommentary:"It is now 1 hour until submission."}]}],submission:[{text:"Forgot password to the GGJ site.",answers:[{text:"Click the forgot password button.",goodProbability:.5,goodChange:6,goodCommentary:"Crisis averted.",badChange:-4,badCommentary:"GGJ site has slowed to a standstill."},{text:"I forgot my email password too...",change:-3}]},{text:"Ok, it is really crunch time now. 30 minutes until submission.",answers:[{text:"Throw all the assets together and hope it works.",goodProbability:.2,goodChange:25,goodCommentary:"It actually worked!",badChange:-8,badCommentary:"20 minutes until submission."},{text:"Cool. Let's build what we got and call it good.",change:4},{text:"What was our original plan for this game again?",change:0}]},{text:"Everything is on fire!!!",answers:[{text:"Button 1",change:2,commentary:"Lorem ipsum dolor sit amet"},{text:"Button 2",change:-2,commentary:"Lorem ipsum dolor sit amet"},{text:"Button 3",goodProbability:.5,goodChange:15,badChange:-15,commentary:"Lorem ipsum dolor sit amet"}]},{text:"Your game throws a weird error during the presentation and crashes.",answers:[{text:"undefined is not a function.",change:9,commentary:"<p>This was fun to program�</p"},{text:"NaN",change:5,commentary:Array(16).join(NaN)+" Batman"}]}]}},w=function(){function e(t){Object(b["a"])(this,e),this.maxTime=t,this.questions=f()}return Object(p["a"])(e,[{key:"randInt",value:function(e){return Math.floor(Math.random()*Math.floor(e))}},{key:"getQSet",value:function(e){var t,o=1-e/this.maxTime;return t=o<.2?this.questions.forming:o<.4?this.questions.prepro:o<.6?this.questions.production:o<.8?this.questions.polish:this.questions.submission,t}},{key:"getNext",value:function(e){var t=this.getQSet(e);0===t.length&&(this.questions=f(),t=this.getQSet(e));var o=this.randInt(t.length-1),a=t[o];return t.splice(o,1),a}},{key:"calcChange",value:function(e){var t=0,o=e.commentary||"";return e.hasOwnProperty("change")?t=e.change:e.hasOwnProperty("goodProbability")&&(Math.random()<=e.goodProbability?(t=e.goodChange,o=e.goodCommentary||o):(t=e.badChange,o=e.badCommentary||o)),{change:t,text:o}}}]),e}(),x=w,v={name:"ActualGame",data:function(){var e=this,t=48;return this.timer=window.setInterval(function(){e.tick()},1e3),this.questionProvider=new x(t),{percent:0,time:t,question:this.questionProvider.getNext(t),previousResult:""}},methods:{tick:function(){0===this.time&&this.$emit("done",this.percent),this.time--},beforeDestroy:function(){window.clearInterval(this.timer)},clickAnswer:function(e){var t=this,o=this.questionProvider.calcChange(e);this.percent+=o.change,this.previousResult=o.text,this.question={text:"",answers:[]},window.setTimeout(function(){t.question=t.questionProvider.getNext(t.time),t.previousResult=""},1e3)}}},C=v,k=Object(c["a"])(C,g,y,!1,null,null,null),P=k.exports,T={name:"Game",components:{TitleCard:d,ActualGame:P},data:function(){return{state:"TITLE",finalScore:0}},methods:{gameDone:function(e){this.finalScore=e,this.state="GAMEOVER"}}},_=T,I=Object(c["a"])(_,r,i,!1,null,null,null),A=I.exports,O={name:"Home",components:{Game:A}},j=O,S=(o("e5cd"),Object(c["a"])(j,a,n,!1,null,null,null));t["a"]=S.exports},e5cd:function(e,t,o){"use strict";var a=o("6d43"),n=o.n(a);n.a}});
//# sourceMappingURL=app.367653e8.js.map