(this.webpackJsonpproject2=this.webpackJsonpproject2||[]).push([[0],{102:function(e,t,a){e.exports=a(179)},107:function(e,t,a){},179:function(e,t,a){"use strict";a.r(t);var n,r,i,o,s,l,c,u,m,h,d,p,g,E,f=a(0),b=a.n(f),v=a(22),w=a.n(v),k=a(3),O=a(4),j=a(6),y=a(5),N=a(7),T=(a(107),a(24)),C=a(12),x=a(11),q=function(e){function t(){var e,a;Object(k.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(j.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.toggleCollapse=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(N.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return b.a.createElement(x.f,{color:"indigo",dark:!0,expand:"md",style:{backgroundColor:"#D43A39"},scrolling:!0,fixed:"top",className:this.props.homeMenu},b.a.createElement(x.g,null,b.a.createElement(x.e,{to:"/",style:{color:"white"}},b.a.createElement("strong",{className:"white-text"},"Guru Assistant"))),b.a.createElement(x.i,{onClick:this.toggleCollapse}),b.a.createElement(x.c,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},b.a.createElement(x.h,{left:!0},b.a.createElement(x.d,null,b.a.createElement(x.e,{to:"/yes-no",className:this.props.activeLink1},"Yes / No Questions")),b.a.createElement(x.d,null,b.a.createElement(x.e,{to:"/this-that"},"This or That Questions")),b.a.createElement(x.d,null,b.a.createElement(x.e,{to:"/decide",className:this.props.activeLink},"Let the Guru decide things for you")),b.a.createElement(x.d,null,b.a.createElement(x.e,{to:"/advice"}," Advice from the Guru "))),b.a.createElement(x.h,{right:!0},b.a.createElement(x.d,null))))}}]),t}(f.Component),M=function(e){function t(){return Object(k.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement(q,{homeMenu:"home-nav"}),b.a.createElement("h1",{className:"home-h1"},"Are you tired of making decisions on your own?"),b.a.createElement("h2",{className:"home-h2"},"Ask the Guru!"),b.a.createElement("div",{className:"home"},b.a.createElement("section",{className:"home-buttons"},b.a.createElement(C.b,{to:"/yes-no",style:{textDecoration:"none",color:"white"}},b.a.createElement("button",{className:"btn btn-danger"}," Yes / No Questions")),b.a.createElement(C.b,{to:"/this-that",style:{textDecoration:"none",color:"white"}},b.a.createElement("button",{className:"btn btn-danger"}," This or That Questions")),b.a.createElement(C.b,{to:"/decide",style:{textDecoration:"none",color:"white"}},b.a.createElement("button",{className:"btn btn-danger"}," Let the Guru decide things for you")),b.a.createElement(C.b,{to:"/advice",style:{textDecoration:"none",color:"white"}},b.a.createElement("button",{className:"btn btn-danger"},"Advice from the Guru"))),b.a.createElement("img",{className:"guru-img-home",src:"./images/guru1.png"})))}}]),t}(f.Component),G=function(e){function t(){return Object(k.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props,t=e.show,a=e.value,n=e.handleToggle,r=e.handleChange;return b.a.createElement("div",{className:"dropdown-container"},b.a.createElement("label",{className:"arrow"},b.a.createElement("input",{type:"button",value:a,className:"dropdown-btn",onClick:n})),b.a.createElement("ul",{className:"dropdown-list",hidden:!t},this.props.options.map((function(e){return b.a.createElement("li",{className:"option",onClick:r(e.question)},b.a.createElement(C.b,{to:e.link,style:{textDecoration:"none"}},e.question))}))))}}]),t}(f.Component),A=[{question:"Will I ever find true love?",link:"/answer1"},{question:"Second question?",link:"/answer1"},{question:"Third question?",link:"/answer1"},{question:"Fourth question?",link:"/answer1"},{question:"Fourth question?",link:"/answer1"},{question:"Fourth question?",link:"/answer1"},{question:"Fourth question?",link:"/answer1"},{question:"Fourth question?",link:"/answer1"}],S=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).handleToggle=function(e){e.target.focus(),a.setState({show:!a.state.show})},a.handleChange=function(e){return function(){a.setState({value:e,show:!1})}},a.state={show:!1},a}return Object(N.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement(q,null),b.a.createElement("section",{className:"question-section"},b.a.createElement("img",{className:"guru-img-question",src:"./images/guru1.png"}),b.a.createElement("span",{className:"guru-word"},"Guru,"),b.a.createElement(G,{show:this.state.show,value:this.state.value,handleToggle:this.handleToggle,handleChange:this.handleChange,options:A})))}}]),t}(f.Component),F=a(23),U=a.n(F),D=a(183),I=a(185),L=a(187),Q=a(184),Y=a(186),z=a(188),P=function(e){function t(){return Object(k.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{className:this.props.styleContainer},b.a.createElement("p",{id:"share-text"}," Share your result:"),b.a.createElement("div",{className:"facebook-container"},b.a.createElement(D.a,{url:this.props.fbUrl,quote:this.props.fbQuote,hashtag:this.props.hashtag,className:"share-button"},b.a.createElement(Q.a,{size:52,round:!0}))),b.a.createElement("div",{className:"twitter-container"},b.a.createElement(I.a,{url:this.props.twUrl,title:this.props.twTitle,className:"share-button"},b.a.createElement(Y.a,{size:52,round:!0}))),b.a.createElement("div",{className:"whatsapp-container"},b.a.createElement(L.a,{url:this.props.wpUrl,title:this.props.wpTitle,separator:":: ",className:"share-button"},b.a.createElement(z.a,{size:52,round:!0})))))}}]),t}(f.Component),W="I asked the Guru: Will I ever find true love? And the answer was: ",B="https://daph3105.github.io/Project2/#/yes-no",H=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).state={randomAnswer:{}},a}return Object(N.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=this;U.a.get("https://yesno.wtf/api/").then((function(t){e.setState({randomAnswer:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement(q,{activeLink1:"nav-item nav-link active"}),b.a.createElement("div",{className:"response-container"},b.a.createElement("h1",{id:"yes-no-text",style:{textTransform:"capitalize"}},this.state.randomAnswer.answer,"..."),b.a.createElement("img",{id:"yes-no-image",src:this.state.randomAnswer.image}),b.a.createElement("img",{className:"speech-image",src:"./images/speech1.png"})),b.a.createElement("img",{className:"guru-img2",src:"./images/guru2.png"}),b.a.createElement(P,{styleContainer:"share-container",fbUrl:B,fbQuote:W+this.state.randomAnswer.answer,hashtag:"#asktheguru",twUrl:B,twTitle:W+this.state.randomAnswer.answer,wpUrl:B,wpTitle:W+this.state.randomAnswer.answer}))}}]),t}(f.Component),_="https://daph3105.github.io/Project2/#/advice",J=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).state={randomAdvice:{}},a}return Object(N.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=this;U.a.get("https://api.adviceslip.com/advice").then((function(t){e.setState({randomAdvice:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return this.state.randomAdvice.slip&&(n=this.state.randomAdvice.slip.advice),b.a.createElement(b.a.Fragment,null,b.a.createElement(q,null),b.a.createElement("div",{className:"response-container"},b.a.createElement("p",{id:"advice"},n),b.a.createElement("img",{className:"speech-image",src:"./images/speech1.png"})),b.a.createElement("img",{className:"guru-img2",src:"./images/guru2.png"}),b.a.createElement(P,{styleContainer:"share-container",fbUrl:_,fbQuote:"Advice from the Guru: "+n,hashtag:"#asktheguru",twUrl:_,twTitle:"Advice from the Guru: "+n,wpUrl:_,wpTitle:"Advice from the Guru: "+n}))}}]),t}(f.Component),K=a(100),R="https://api.giphy.com/v1/gifs/search?api_key=sa9xw4Yo24USK2G5qleY0Y4HdBWjcDf2&q=",$="&limit=1&offset=0&rating=G&lang=en",V="https://daph3105.github.io/Project2/#/this-that",X=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).setOptions=function(e){a.setState(Object(K.a)({},e.target.name,e.target.value),(function(){}))},a.mySubmitHandler=function(e){if(e.preventDefault(),a.state.option1&&a.state.option2){r=[a.state.option1,a.state.option2];var t=Math.floor(2*Math.random());a.setState({guruOption:r[t],bubble:!0,loading:!0}),i=R.concat(r[t],$),console.log(i),fetch(i,{cache:"no-store"}).then((function(e){return e.json()})).then((function(e){console.log(e.data),a.setState({randomGif:e,loading:!1})}))}},a.state={option1:"",option2:"",guruOption:"",randomGif:{},bubble:!1},a}return Object(N.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e="";return e=this.state.guruOption?b.a.createElement("p",{id:"gif-text",style:{textTransform:"capitalize"}},this.state.guruOption," is the best choice! "):"",o=this.state.randomGif.data?b.a.createElement("img",{id:"gif",src:this.state.randomGif.data[0].images.original.url}):"",b.a.createElement(b.a.Fragment,null,b.a.createElement(q,null),b.a.createElement("img",{id:"answer-image",src:"./images/guru2.png"}),b.a.createElement("div",{className:"thisthat-answer"},b.a.createElement("h4",{className:"guru-pick-text"}," Guru, pick one for me: "),b.a.createElement("p",{id:"guru-pick-paragraph"}," ",b.a.createElement("i",null," Enter below two things, and the Guru will pick one for you: ")," "),b.a.createElement("form",{onSubmit:this.mySubmitHandler},b.a.createElement("div",{className:"thisthat-input-container"},b.a.createElement("input",{type:"text",name:"option1",placeholder:"This",value:this.state.option1,onChange:this.setOptions}),b.a.createElement("span",null," OR "),b.a.createElement("input",{type:"text",name:"option2",placeholder:"That",value:this.state.option2,onChange:this.setOptions}))," ",b.a.createElement("button",{className:"btn btn-danger",type:"submit"}," Pick Now "))),b.a.createElement("div",{className:"gif-container"}," ",e," ",o,this.state.bubble?b.a.createElement(b.a.Fragment,null,b.a.createElement("img",{className:"speech",src:"./images/speech1.png"}),b.a.createElement(P,{styleContainer:"this-that-share-container",fbUrl:V,fbQuote:"I asked the Guru to decide for me between "+this.state.option1+" or "+this.state.option2+" and he picked: "+this.state.guruOption,hashtag:"#asktheguru",twUrl:V,twTitle:"I asked the Guru to decide for me between "+this.state.option1+" or "+this.state.option2+" and he picked: "+this.state.guruOption,wpUrl:V,wpTitle:"I asked the Guru to decide for me between "+this.state.option1+" or "+this.state.option2+" and he picked: "+this.state.guruOption})):null))}}]),t}(f.Component),Z=[{question:"Should I go out tonight?",link:"/answer3"},{question:"I'm hungry, what should I eat?",link:"/eat"},{question:"Third question?",link:"/answer1"},{question:"Fourth question?",link:"/answer3"}],ee=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).handleToggle=function(e){e.target.focus(),a.setState({show:!a.state.show})},a.handleChange=function(e){return function(){a.setState({value:e,show:!1})}},a.state={show:!1},a}return Object(N.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement(q,null),b.a.createElement("section",{className:"question-section"},b.a.createElement("img",{className:"guru-img-question",src:"./images/guru1.png"}),b.a.createElement("span",{className:"guru-word"},"Guru,"),b.a.createElement(G,{show:this.state.show,value:this.state.value,handleToggle:this.handleToggle,handleChange:this.handleChange,options:Z})))}}]),t}(f.Component),te="I asked the Guru to decide if I should go out tonight, and he told me to",ae=" stay home and watch: ",ne=" go out and drink a ",re="https://daph3105.github.io/Project2/#/decide",ie=Math.floor(2*Math.random())+1,oe=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).loadTrailerorNot=function(){return null!=a.state.randomMovie.trailer?(l=a.state.randomMovie.trailer,c=l.replace("watch?v=","embed/"),u=c.replace("http:","https:"),b.a.createElement(b.a.Fragment,null,b.a.createElement("iframe",{src:u,allowFullScreen:!0}," "),b.a.createElement("a",{href:u,id:"trailer-link",target:"_blank"},"Link to Trailer"))):b.a.createElement("h3",{id:"synopsis"},"Synopsis: ",a.state.randomMovie.synopsis)},a.state={randomMovie:{},randomDrink:{}},a}return Object(N.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://tv-v2.api-fetch.website/random/movie",{cache:"no-store"}).then((function(e){return e.json()})).then((function(t){return e.setState({randomMovie:t})})).catch((function(e){console.log(e)})),U.a.get("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((function(t){e.setState({randomDrink:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return console.log(ie),1==ie?this.state.randomMovie?(s=this.state.randomMovie.title,b.a.createElement(b.a.Fragment,null,b.a.createElement(q,{activeLink:"nav-item nav-link active"}),b.a.createElement("div",{className:"response-container"},b.a.createElement("p",{id:"stay-home-text"},"Nope...",b.a.createElement("br",null),ae),b.a.createElement("h3",{id:"movie-title"},s),b.a.createElement("img",{className:"speech-image",src:"./images/speech1.png"}),this.loadTrailerorNot()),b.a.createElement("img",{className:"guru-img2",src:"./images/guru2.png"}),b.a.createElement(P,{styleContainer:"share-container",fbUrl:re,fbQuote:te+ae+s,hashtag:"#asktheguru",twUrl:re,twTitle:te+ae+s,wpUrl:re,wpTitle:te+ae+s}))):b.a.createElement("div",null,"Loading..."):this.state.randomDrink.drinks?(m=this.state.randomDrink.drinks[0].strDrink,h=this.state.randomDrink.drinks[0].strDrinkThumb,b.a.createElement(b.a.Fragment,null,b.a.createElement(q,{activeLink:"nav-item nav-link active"}),b.a.createElement("div",{className:"response-container"},b.a.createElement("p",{id:"go-out-text"},"Yes, go out and have some fun!",b.a.createElement("br",null),"buy yourself a drink, I feel like you need a..."),b.a.createElement("h3",{id:"drink-text"},m),b.a.createElement("img",{className:"speech-image",src:"./images/speech1.png"}),b.a.createElement("img",{id:"drink-image",src:h})),b.a.createElement("img",{className:"guru-img2",src:"./images/guru2.png"}),b.a.createElement(P,{styleContainer:"share-container",fbUrl:re,fbQuote:te+ne+m,hashtag:"#asktheguru",twUrl:re,twTitle:te+ne+m,wpUrl:re,wpTitle:te+ne+m}))):b.a.createElement("div",null,"Loading...")}}]),t}(f.Component),se="I asked the Guru to decide what I should eat, and he said: ",le="https://daph3105.github.io/Project2/#/decide",ce=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(j.a)(this,Object(y.a)(t).call(this,e))).state={randomMeal:{}},a}return Object(N.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=this;U.a.get("https://www.themealdb.com/api/json/v1/1/random.php").then((function(t){e.setState({randomMeal:t.data}),console.log(e.state.randomMeal)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return this.state.randomMeal.meals&&(d=this.state.randomMeal.meals[0].strMeal,p=this.state.randomMeal.meals[0].strSource,g=this.state.randomMeal.meals[0].strMealThumb),b.a.createElement(b.a.Fragment,null,b.a.createElement(q,{activeLink:"nav-item nav-link active"}),b.a.createElement("div",{className:"response-container"},b.a.createElement("h4",{id:"food-title"},"Have some ",d),b.a.createElement("img",{id:"food-image",src:g}),p?b.a.createElement(b.a.Fragment,null,b.a.createElement("p",{id:"share-eat"},E=", link to recipe: "+p),b.a.createElement("p",{id:"food-text1"},"I even found the recipe for you ",b.a.createElement("a",{href:p,target:"_blank"}," here.")," "),b.a.createElement("p",{id:"food-text2"},"Now, don't be lazy and go cook.")):b.a.createElement(b.a.Fragment,null,b.a.createElement("p",{id:"share-eat"},E=", Yummy! "),b.a.createElement("h3",{id:"food-text2"},"Bon Appetit!")),b.a.createElement("img",{className:"speech-image",src:"./images/speech1.png"})),b.a.createElement("img",{className:"guru-img2",src:"./images/guru2.png"}),b.a.createElement(P,{styleContainer:"share-container",fbUrl:le,fbQuote:se+d+E,hashtag:"#asktheguru",twUrl:le,twTitle:se+d+E,wpUrl:le,wpTitle:se+d+E}))}}]),t}(f.Component),ue=function(e){function t(){return Object(k.a)(this,t),Object(j.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(N.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return b.a.createElement(b.a.Fragment,null,b.a.createElement(T.c,null,b.a.createElement(T.a,{exact:!0,path:"/",component:M}),b.a.createElement(T.a,{exact:!0,path:"/yes-no",render:function(){return b.a.createElement(S,null)}}),b.a.createElement(T.a,{exact:!0,path:"/answer1",render:function(){return b.a.createElement(H,null)}}),b.a.createElement(T.a,{exact:!0,path:"/this-that",render:function(){return b.a.createElement(X,null)}}),b.a.createElement(T.a,{exact:!0,path:"/decide",render:function(){return b.a.createElement(ee,null)}}),b.a.createElement(T.a,{exact:!0,path:"/answer3",render:function(){return b.a.createElement(oe,null)}}),b.a.createElement(T.a,{exact:!0,path:"/eat",render:function(){return b.a.createElement(ce,null)}}),b.a.createElement(T.a,{exact:!0,path:"/advice",render:function(){return b.a.createElement(J,null)}})))}}]),t}(f.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(178);console.log("hi"),w.a.render(b.a.createElement(C.a,null,b.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[102,1,2]]]);
//# sourceMappingURL=main.8dd63db6.chunk.js.map