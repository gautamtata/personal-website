(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,n,t){e.exports=t.p+"static/media/gautam-1.c878d195.gif"},51:function(e,n,t){e.exports=t.p+"static/media/logo.292858ea.svg"},53:function(e,n,t){e.exports=t.p+"static/media/proofchecker.a6489645.png"},54:function(e,n,t){e.exports=t.p+"static/media/pgmuseum.4a1f6fb5.png"},55:function(e,n,t){e.exports=t.p+"static/media/car-scan.20db77d8.gif"},56:function(e,n,t){e.exports=t.p+"static/media/jsmaps.3b17e72e.png"},63:function(e,n,t){e.exports=t(88)},71:function(e,n,t){},88:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),i=t(10),o=t.n(i),r=t(11),c=t(12),s=t(14),m=t(13),p=t(15),u=t(3),d=t(91),x=t(2),h=t(4);function f(){var e=Object(h.a)(["\n  body {\n    font-family: 'Lato', Arial, Helvetica, sans-serif;\n    line-height: 1.6 !important;\n    background-color: ",";\n    transition: background-color 300ms linear;\n    color: ",";\n    -webkit-font-smoothing: antialiased;\n  }\n\n  h1,\n  h2,\n  h3 {\n    font-family: 'Playfair Display', 'Palatino', 'Times New Roman', Times, serif;\n    margin: 0 !important;\n  }\n"]);return f=function(){return e},e}var g=Object(x.createGlobalStyle)(f(),function(e){return e.theme.backgroundColor},function(e){return e.theme.color});function b(){var e=Object(h.a)(["\n  visibility: ",";\n  animation: "," 1s linear;\n  transition: visibility 0.6s linear;\n"]);return b=function(){return e},e}function k(){var e=Object(h.a)(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"]);return k=function(){return e},e}function E(){var e=Object(h.a)(["\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"]);return E=function(){return e},e}var v=Object(x.keyframes)(E()),w=Object(x.keyframes)(k()),y=x.default.div(b(),function(e){return e.visible?"visible":"hidden"},function(e){return e.visible?v:w}),j=t(35),_=t.n(j),O=document.querySelector(".loader"),C=function(){O.classList.add("loader--hide"),setTimeout(function(){O.style.display="none"},200)},I=new _.a("Lato"),z=new _.a("Playfair Display"),N={dark:{backgroundColor:"purple",navBackground:"white",navLinkColor:"#191919",logoColor:"yellow",color:"rgba(249, 105, 14, 1)"},light:{backgroundColor:"black",navBackground:"white",navLinkColor:"black",logoColor:"white",color:"white"}},S=(t(71),function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(l)))).state={visible:!1,theme:N.dark},t.changeTheme=function(e){var n=e.pathname;t.state.theme!==N.dark&&"/"===n?t.setState({theme:N.dark}):t.state.theme===N.light||"/about"!==n&&"/portfolio"!==n||t.setState({theme:N.light})},t.execAfterFontLoadEval=function(){C(),t.setState({visible:!0})},t}return Object(p.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;Promise.all([I.load(),z.load()]).then(function(){e.execAfterFontLoadEval()}).catch(function(){e.execAfterFontLoadEval()})}},{key:"render",value:function(){var e=this.state,n=e.visible,t=e.theme;return l.a.createElement(x.ThemeProvider,{theme:t},l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null),l.a.createElement(y,{visible:n},l.a.createElement(u.c,{fluid:!0,px:0,mx:0},l.a.createElement(u.d,{mx:0,px:15},l.a.createElement(u.b,{px:0},l.a.createElement(d.a,null,l.a.createElement(T,null,l.a.createElement(Y,null),l.a.createElement(R,{changeTheme:this.changeTheme})))))))))}}]),n}(a.Component)),q=t(93),L=function(e){function n(){return Object(r.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(c.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo({top:0,behavior:"auto"})}},{key:"render",value:function(){return this.props.children}}]),n}(a.Component),T=Object(q.a)(L),A=t(37),B=t(92),M=t(89);function F(){var e=Object(h.a)(["\n   .fade-enter {\n        opacity: 0.01;\n    }\n\n    .fade-enter.fade-enter-active {\n        opacity: 1;\n        transition: opacity 300ms ease-in;\n    }\n    \n    .fade-exit {\n        opacity: 1;\n    }\n      \n    .fade-exit.fade-exit-active {\n        opacity: 0.01;\n        transition: opacity 50ms ease-in;\n    }\n\n    div.transition-group {\n      position: relative;\n    }\n\n    div.route-section {\n      position: absolute;\n      width: 100%;\n      top: 0;\n      left: 0;\n    }\n"]);return F=function(){return e},e}var P=x.default.div(F()),D=function(e){function n(){return Object(r.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(c.a)(n,[{key:"componentDidUpdate",value:function(){this.props.changeTheme(this.props.location)}},{key:"render",value:function(){var e=this.props.location;return l.a.createElement(P,null,l.a.createElement(A.TransitionGroup,{className:"transition-group"},l.a.createElement(A.CSSTransition,{key:e.key,timeout:{enter:300,exit:50},classNames:"fade"},l.a.createElement("div",{className:"route-section"},l.a.createElement(B.a,{location:e},l.a.createElement(M.a,{exact:!0,path:"/",component:re}),l.a.createElement(M.a,{exact:!0,path:"/about",component:de}),l.a.createElement(M.a,{exact:!0,path:"/portfolio",component:qe}))))))}}]),n}(a.Component),R=Object(q.a)(D),J=t(90),V=t(51),H=t.n(V);function G(){var e=Object(h.a)(["\n  display: inline-flex;\n  /* remove blue highlight when clicking quickly on mobile chrome */\n  user-select: none;  \n  -webkit-tap-highlight-color: transparent;\n\n  svg {\n    display: block;\n    height: 50px;\n    width: 50px;\n\n    .logo-fill {\n      fill: ",";\n    }\n\n    transition: transform 0.4s cubic-bezier(.54,.84,.44,.67);\n\n    :active {\n      transform: rotate(-360deg);\n      transition: transform 0s;\n    }\n  \n    @media (min-width: 576px) {\n      height: 60px;\n      width: 60px;\n    }\n  \n    @media (min-width: 992px) {\n      height: 65px;\n      width: 65px;\n    }\n  }\n\n  .logo-link_content {\n    display: block;\n  }\n\n  :focus {\n    outline: none;\n\n    .logo-link_content {\n      outline: 3px solid turquoise;\n    }\n  }\n\n  .logo-link_content:focus {\n    outline: none;\n  }\n"]);return G=function(){return e},e}function W(){var e=Object(h.a)(["\n                  color: turquoise;\n                  -webkit-text-stroke: 1px turquoise;\n                "]);return W=function(){return e},e}function U(){var e=Object(h.a)(["\n                  color: turquoise;\n                  -webkit-text-stroke: 1px turquoise;\n                "]);return U=function(){return e},e}function Q(){var e=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 13px 25px;\n  background-color: ",";\n  margin: 0;\n  list-style: none;\n  font-size: calc(18px + (26 - 18) * ((100vw - 320px) / (1700 - 320)));\n\n  @media (min-width: 1700px) {\n    font-size: 26px;\n  }\n\n  @media (max-width: 320px) {\n    font-size: 18px;\n  }\n  \n  a {\n    color: ",";\n    text-decoration: none;\n    /* remove blue highlight when clicking quickly on mobile chrome */\n    user-select: none;  \n    -webkit-tap-highlight-color: transparent;\n  }\n\n  li {\n    margin-right: 20px;\n    padding: 0px;\n\n    :nth-child(n+1) {\n      a {\n        display: inline-block;\n        transition: transform 0.4s ease-in-out;\n    \n        :active {\n          transform: scale(1.2);\n          transition: transform 0s;\n        }\n      }\n    }\n\n    :nth-child(1) {\n      a {\n        color: ",";\n\n        \n        ",";\n      }\n    }\n\n    :nth-child(2) {\n      a {\n        color: ",";\n\n        \n        ",";\n      }\n    }\n\n    :nth-child(1),\n    :nth-child(2) {\n      a {\n        :hover {\n          color: turquoise;\n        }\n\n        .nav-link_content {\n          display: block;\n        }\n        \n        :focus {\n          outline: none;\n\n          .nav-link_content {\n            color: turquoise;\n            outline: 3px solid turquoise;\n          }\n        }\n\n        .nav-link_content:focus {\n          outline: none;\n        }\n      }\n    }\n\n    :last-of-type {\n      margin-right: 0;\n    }\n\n    @media (min-width: 576px) {\n      margin-right: 40px;\n    }\n  }\n"]);return Q=function(){return e},e}var X=x.default.ul(Q(),function(e){return e.theme.navBackground},function(e){return e.theme.navLinkColor},function(e){return e.theme.navLinkColor},function(e){return"/about"===e.page&&Object(x.css)(U())},function(e){return e.theme.navLinkColor},function(e){return"/portfolio"===e.page&&Object(x.css)(W())}),K=Object(x.default)(J.a)(G(),function(e){return e.theme.logoColor}),Y=Object(q.a)(function(e){var n=e.location;return l.a.createElement(u.a,{width:"100%",maxWidth:"450px",position:"fixed",left:0,zIndex:100,as:"nav",role:"navigation"},l.a.createElement(u.a,{display:"flex",justifyContent:"space-between",alignItems:"center",p:"10px 0 10px 10px"},l.a.createElement(K,{to:"/","aria-label":"Home page"},l.a.createElement("span",{className:"logo-link_content",tabIndex:"-1"},l.a.createElement("img",{className:"logo",alt:"logo",style:{height:"100px",width:"100px"},src:H.a}))),l.a.createElement(X,{page:n.pathname},l.a.createElement("li",null,l.a.createElement(J.a,{to:"/","aria-label":"About page"},l.a.createElement("span",{className:"nav-link_content",tabIndex:"-1"},"Home"))),l.a.createElement("li",null,l.a.createElement(J.a,{to:"/about","aria-label":"About page"},l.a.createElement("span",{className:"nav-link_content",tabIndex:"-1"},"About"))),l.a.createElement("li",null,l.a.createElement(J.a,{to:"/portfolio","aria-label":"Portfolio page"},l.a.createElement("span",{className:"nav-link_content",tabIndex:"-1"},"Portfolio"))))))}),Z=t(58);function $(){var e=Object(h.a)(['\n  width: calc(20px + (30 - 20) * ((100vw - 320px) / (1700 - 320)));\n  margin-right: 25px;\n  position: relative;\n  top: 1px;\n  user-select: none;  \n  -webkit-tap-highlight-color: transparent;\n\n  @media (min-width: 1700px) {\n    width: 30px;\n  }\n\n  @media (max-width: 320px) {\n    width: 20px;\n  }\n\n  @media (min-width: 768px) {\n    margin-right: 35px;\n  }\n\n  @media (min-width: 1200px) {\n    margin-right: 45px;\n  }\n\n  transition: transform 0.4s ease-in-out;\n  :active {\n    transform: scale(1.2);\n    transition: transform 0s;\n  }\n\n  .social-link_content {\n    display: block;\n  }\n\n  /* Make sure nothing inside the a tag has pointer events, so clicks on the a tag will always be found on that element */\n  .social-link_content > * {\n    pointer-events: none;\n  }\n\n  :hover {\n    .linkedin-fill,\n    .medium-fill,\n    .gmail-fill {\n      fill: turquoise;\n\n      /* Block "sticky hover" effect on mobile devices */\n      @media (hover: none) { \n        fill: #fff;\n      }\n    }\n\n    .github-stroke {\n      stroke: turquoise;\n\n      /* Block "sticky hover" effect on mobile devices */\n      @media (hover: none) {\n        stroke: #fff;\n      }\n    }\n  }\n\n  .profile-pic {\n    height: 300px;\n    position: absolute;\n    left: 1000px;\n    bottom: 150px;\n\n  }\n\n  svg {\n    display: block;\n    height: 100%;\n    width: 100%;\n  }\n\n  :nth-child(3),\n  :nth-child(4) {\n    top: 2px;\n  }\n\n  :nth-child(4) {\n    width: calc(22px + (36 - 22) * ((100vw - 320px) / (1700 - 320)));\n\n    @media (min-width: 1700px) {\n      width: 36px;\n    }\n\n    @media (max-width: 320px) {\n      width: 22px;\n    }\n\n  }\n\n  :last-of-type {\n    margin-right: 0;\n  }\n\n  :focus {\n    outline: none;\n\n    .social-link_content {\n      outline: 3px solid turquoise;\n    }\n\n    .social-link_content .linkedin-fill,\n    .social-link_content .medium-fill,\n    .social-link_content .gmail-fill {\n      fill: turquoise;\n    }\n\n    .social-link_content .github-stroke {\n      stroke: turquoise;      \n    }\n  }\n\n  .social-link_content:focus {\n    outline: none;\n  }\n']);return $=function(){return e},e}function ee(){var e=Object(h.a)(["\n  text-align: center;\n  font-size: calc(12px + (18 - 12) * ((100vw - 320px) / (1700 - 320)));\n\n  @media (min-width: 1700px) {\n    font-size: 18px;\n  }\n\n  @media (max-width: 320px) {\n    font-size: 12px;\n  }\n\n"]);return ee=function(){return e},e}function ne(){var e=Object(h.a)(['\n  font-size: calc(28px + (64 - 28) * ((100vw - 320px) / (1700 - 320))) !important;\n  \n  @media (min-width: 1700px) {\n    font-size: 64px !important;\n  }\n\n  @media (max-width: 320px) {\n    font-size: 28px !important;\n  }\n\n  @media (min-width: 450px){\n    .break-under-xs {\n      display: none;\n    }\n  }\n\n  @media (min-width: 1400px){\n    .break-small {\n      display: none;\n    }\n  }\n\n  .break-large {\n    display: none;\n  }\n\n  @media (min-width: 450px){\n    .break-large {\n      display: block;\n    }\n  }\n\n  span,\n  .city-link,\n  .city_link_content {\n    color: #fff;\n  }\n\n  .city-link {\n    text-decoration: none;\n    display: inline-block;\n    user-select: none;  \n    -webkit-tap-highlight-color: transparent;\n    transition: transform 0.4s ease-in-out;\n\n    :active {\n      transform: scale(1.2);\n      transition: transform 0s;\n    }\n  }\n\n  .city-link_content {\n    display: block;\n    text-decoration: underline;\n  }\n\n  .city-link:hover > .city-link_content {\n    color: turquoise;\n\n    /* Block "sticky hover" effect on mobile devices */\n    @media (hover: none) {\n      color: inherit;\n    }\n  }\n\n  /* Remove default focus from target elements */  \n  .city-link:focus,\n  .city-link_content:focus {\n    outline: none;\n  }\n\n  /* Only when the outer element is reached by a keyboard, apply the focus styles. Now clicking on the element won\'t focus the link */  \n  .city-link:focus > .city-link_content {\n    color: turquoise;\n\n    /* Apply default focus styles */\n    outline: 3px solid turquoise;\n  }\n']);return ne=function(){return e},e}var te=x.default.h1(ne()),ae=x.default.p(ee()),le=x.default.a($()),ie=t(32),oe=t.n(ie),re=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.d,{mx:0,px:15,pt:{xs:"120px",sm:"130px",lg:"140px",xl:"155px"},pb:"20px"},l.a.createElement(u.b,{px:0,xs:12,sm:10,osm:1,lg:8,olg:2,my:0,mx:"auto"},l.a.createElement(u.a,{as:"header",role:"banner"},l.a.createElement(te,null,"Hello World.\xa0",l.a.createElement("br",{className:"break-large"}),"My name is Gautam Tata.\xa0",l.a.createElement("br",{className:"break-large"}),"I'm\xa0",l.a.createElement("br",{className:"break-under-xs"}),l.a.createElement(Z.a,{interval:2500,springConfig:{stiffness:30,damping:10},mask:!0},l.a.createElement("span",null,"a Fullstack developer"),l.a.createElement("span",null,"an Engineer"),l.a.createElement("span",null,"UI/UX enthusiast"),l.a.createElement("span",null,"a Coffee Lover"),l.a.createElement("span",null,"a Student of the game"),l.a.createElement("span",null,"a Team player"),l.a.createElement("span",null,"a Tech Geek")),"\xa0",l.a.createElement("br",{className:"break-small"}))))),l.a.createElement(u.d,{mx:0,mt:{xs:"20px",md:"35px",lg:"45px"},px:15},l.a.createElement(u.b,{px:0,maxWidth:"1100px",width:"100%",my:0,mx:"auto",as:"section",role:"region"},l.a.createElement(ae,null,"Connect with me"),l.a.createElement(u.a,{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",mb:15},l.a.createElement(le,{href:"https://www.linkedin.com/in/gautam-tata-b91b20118/ ",target:"_blank",rel:"noopener noreferrer","aria-label":"Linkedin page"},l.a.createElement("span",{className:"social-link_content",tabIndex:"-1"},l.a.createElement(Le,null))),l.a.createElement(le,{href:"https://github.com/gautamtata",target:"_blank",rel:"noopener noreferrer","aria-label":"Github page"},l.a.createElement("span",{className:"social-link_content",tabIndex:"-1"},l.a.createElement(Te,null))),l.a.createElement(le,{href:"mailto:gautam@gautamtata.com?subject=Job Opportunitiy","aria-label":"Send email to gautam@gautamtata.com"},l.a.createElement("span",{className:"social-link_content",tabIndex:"-1"},l.a.createElement(Be,null))),l.a.createElement(le,{href:"https://medium.com/@gautamtata",target:"_blank",rel:"noopener noreferrer","aria-label":"Medium page"},l.a.createElement("span",{className:"social-link_content",tabIndex:"-1"},l.a.createElement(Ae,null)))))))};function ce(){var e=Object(h.a)(["\n  a {\n    .netlify-link_content {\n      outline: none;\n    }\n\n    :focus {\n      outline: none;\n\n      .netlify-link_content img {\n        outline: 5px solid turquoise;\n      }\n    }\n  }\n"]);return ce=function(){return e},e}function se(){var e=Object(h.a)(["\n  color: ",";\n  font-size: calc(16px + (20 - 16) * ((100vw - 320px) / (1700 - 320)));\n\n  @media (min-width: 1700px) {\n    font-size: 20px;\n  }\n\n  @media (max-width: 320px) {\n    font-size: 16px;\n  }\n\n  /* Remove default focus from target elements */  \n  .video-link:focus,\n  .video-link_content:focus {\n    outline: none;\n  }\n\n  /* Only when the outer element is reached by a keyboard, apply the focus styles. Now clicking on the element won't focus the link */  \n  .video-link:focus > .video-link_content {\n    color: turquoise;\n\n    /* Apply default focus styles */\n    outline: 3px solid turquoise;\n  }\n\n  a {\n    user-select: none;  \n    -webkit-tap-highlight-color: transparent;\n    color: inherit;\n\n    :hover {\n      color: turquoise;\n\n      @media (hover: none) {\n        color: inherit;\n      }\n    }\n  }\n"]);return se=function(){return e},e}function me(){var e=Object(h.a)(["\n  font-size: calc(28px + (46 - 28) * ((100vw - 320px) / (1700 - 320)));\n\n  @media (min-width: 1700px) {\n    font-size: 46px;\n  }\n\n  @media (max-width: 320px) {\n    font-size: 28px;\n  }\n\n  color: ",";\n\n  .break-large {\n    display: none;\n  }\n\n  @media (min-width: 768px){\n    .break-large {\n      display: block;\n    }\n  }\n"]);return me=function(){return e},e}var pe=x.default.h2(me(),function(e){return e.white?"white":"#191919"}),ue=x.default.p(se(),function(e){return e.white?"rgba(250,250,250,0.7)":"rgba(25, 25, 25, 0.8)"}),de=(Object(x.default)(u.a)(ce()),function(){return l.a.createElement(u.d,{mx:0,px:15,pt:{xs:"120px",sm:"130px",lg:"140px",xl:"155px"},pb:"20px"},l.a.createElement(u.b,{px:0,xs:12,sm:10,osm:1,lg:8,olg:2,my:0,mx:"auto"},l.a.createElement(u.a,{as:"header",role:"banner"},l.a.createElement(u.d,{mb:{xs:"10px",sm:"20px",lg:"30px",xl:"40px"}},l.a.createElement(u.b,{xs:1,md:2,display:"flex",alignItems:"center",justifyContent:{xs:"left",md:"center"}}),l.a.createElement(u.b,{xs:12,md:8,mt:{xs:"10px",md:"0"}},l.a.createElement("img",{src:oe.a,alt:"A black and white of me",style:{display:"block",position:"static",marginLeft:"auto",marginRight:"auto",width:"100%",maxWidth:"300px",margin:"0 auto"}}))),l.a.createElement(u.d,{mb:{xs:"30px",sm:"40px",lg:"50px",xl:"60px"}},l.a.createElement(u.b,null,l.a.createElement(pe,{as:"h1",white:!0},"NAMASTE\xa0",l.a.createElement("span",{role:"img","aria-label":"Hand wave emoji"},"\ud83d\ude4f\ud83c\udffe")),l.a.createElement(ue,{white:!0},"I'm a full-stack engineer that just graduated from CSU Monterey Bay with a degree in Computer Science. I've built and shipped products for users. I obsess over user experience and I do whatever it takes to deliver reliable, useful software.")))),l.a.createElement(u.a,{as:"main",role:"main"},l.a.createElement(u.d,{mb:{xs:"30px",sm:"40px",lg:"50px",xl:"60px"},backgroundColor:"#191919",p:20},l.a.createElement(u.b,{xs:12,md:4,display:"flex",alignItems:"center",justifyContent:{xs:"left",md:"center"}},l.a.createElement(pe,{white:!0},"The\xa0",l.a.createElement("br",{className:"break-large"}),"FullStack\xa0")),l.a.createElement(u.b,{xs:12,md:8},l.a.createElement(ue,{white:!0},'I started coding in my first year in college. Back when I thought that everything ran via an "if-else" block.',l.a.createElement("br",null),l.a.createElement("br",null),"I got into frontend developement when I realized there is a need for building amazing user experiences. Currently, Something else that I'm learning is Machine Learning on the client side.",l.a.createElement("br",null),"Tech Stack : JS, Python, MongoDB, Node.js"))),l.a.createElement(u.d,{mb:{xs:"30px",sm:"40px",lg:"50px",xl:"60px"},backgroundColor:"#191919",p:20},l.a.createElement(u.b,{xs:12,md:4,display:"flex",alignItems:"center",justifyContent:{xs:"left",md:"center"}},l.a.createElement(pe,{white:!0},"Web\xa0",l.a.createElement("br",{className:"break-large"}),"Developer\xa0")),l.a.createElement(u.b,{xs:12,md:8},l.a.createElement(ue,{white:!0},"I became passionate about Web development after I graduated from college. I started spending a lot of my time online, on websites like TechCrunch and Hacker News. After seeing all those cool apps, innovative startups, and brilliant developers changing our technological landscape on a daily basis, I decided I wanted to become a part of that disruptive movement.",l.a.createElement("br",null),l.a.createElement("br",null),"So in the last year and half I learned a lot of cool stuff related to front-end and back-end development. I used that knowledge to build my portfolio and this website. I know a lot about NodeJS, ExpressJS, MongoDB, jQuery, React, Redux, Bootstrap, Mocha, Chai, Enzyme, HTML, CSS, CSS-in-JS, TDD, responsive design, progressive enhancement, graceful degradation, a11y, mobile-first design, continuous integration, code transpiling, module bundling, RESTful architecture, API's and more."))),l.a.createElement(u.d,{mb:{xs:"30px",sm:"40px",lg:"50px",xl:"60px"},backgroundColor:"#191919",p:20},l.a.createElement(u.b,{xs:12,md:4,display:"flex",alignItems:"center",justifyContent:{xs:"left",md:"center"}},l.a.createElement(pe,{white:!0},"Computer \xa0",l.a.createElement("br",{className:"break-large"}),"Scientist\xa0",l.a.createElement("span",{role:"img","aria-label":"Thunderbolt emoji"},"\ud83d\udc66\ud83c\udffd"))),l.a.createElement(u.b,{xs:12,md:8},l.a.createElement(ue,{white:!0},"BS Computer Science - CSU Monterey Bay",l.a.createElement("br",null),"AA Chemistry & Mathematics - Diablo Valley College"))),l.a.createElement(u.d,{mb:{xs:"30px",sm:"40px",lg:"50px",xl:"60px"},backgroundColor:"#191919",p:20},l.a.createElement(u.b,{xs:12,md:4,display:"flex",alignItems:"center",justifyContent:{xs:"left",md:"center"}},l.a.createElement(pe,{white:!0},"Favorite\xa0",l.a.createElement("br",{className:"break-large"}),"Quote\xa0")),l.a.createElement(u.b,{xs:12,md:8},l.a.createElement(ue,{white:!0},"\"The one's who are crazy enough to change the world are the one's who do.\"",l.a.createElement("br",null),l.a.createElement("br",null),"- Steve Jobs\xa0")))),l.a.createElement(u.a,{as:"footer",role:"contentinfo"},l.a.createElement(u.d,{mb:{xs:"20px",sm:"30px",lg:"40px",xl:"50px"}},l.a.createElement(u.b,{xs:12})))))});function xe(){var e=Object(h.a)(["\n  margin-bottom: 30px;\n\n  @media (min-width: 576px) {\n    margin-bottom: 40px;\n  }\n\n  @media (min-width: 992px) {\n    margin-bottom: 50px;\n  }\n\n  @media (min-width: 1200px) {\n    display: none;\n  }\n"]);return xe=function(){return e},e}function he(){var e=Object(h.a)(['\n  a {\n    font-size: calc(16px + (20 - 16) * ((100vw - 320px) / (1700 - 320)));\n\n    @media (min-width: 1700px) {\n      font-size: 20px;\n    }\n\n    @media (max-width: 320px) {\n      font-size: 16px;\n    }\n\n    user-select: none;  \n    -webkit-tap-highlight-color: transparent;\n    transition: transform 0.4s ease-in-out;\n\n    :active {\n      transform: scale(1.2);\n      transition: transform 0s;\n    }\n\n    :hover {\n      color: turquoise;\n\n      /* Block "sticky hover" effect on mobile devices */\n      @media (hover: none) {\n        color: white;\n      }\n    }\n\n    display: inline-block;\n    margin-right: 10px;\n    color: white;\n    text-decoration: none;\n\n    :last-of-type {\n      margin-right: 0;\n    }\n\n    .project-link_content {\n      display: block;\n      background-color: #191919;\n      padding: 10px;\n    }\n\n    :focus {\n      outline: none;\n\n      .project-link_content {\n        color: turquoise;\n        outline: 5px solid turquoise;        \n      }\n    }\n\n    .project-link_content:focus {\n      outline: none;\n    }\n  }\n']);return he=function(){return e},e}function fe(){var e=Object(h.a)(["\n  svg {\n    width: calc(20px + (25 - 20) * ((100vw - 320px) / (1700 - 320)));\n    height: calc(20px + (25 - 20) * ((100vw - 320px) / (1700 - 320)));\n    margin-right: 10px;\n\n    .heroku-logo {\n      fill: #2d2d2d;\n    }\n\n    rect {\n      fill: transparent;\n    }\n\n    @media (min-width: 992px) {\n      margin-right: 10px;\n    }\n\n    @media (min-width: 1700px) {\n      width: 25px;\n    }\n  \n    @media (max-width: 320px) {\n      width: 20px;\n    }\n  }\n"]);return fe=function(){return e},e}function ge(){var e=Object(h.a)(["\n  font-size: calc(28px + (46 - 28) * ((100vw - 320px) / (1700 - 320)));\n\n  @media (min-width: 1700px) {\n    font-size: 46px;\n  }\n\n  @media (max-width: 320px) {\n    font-size: 28px;\n  }\n  \n  color: black;\n"]);return ge=function(){return e},e}function be(){var e=Object(h.a)(["\n  color: ",";\n  font-size: calc(16px + (20 - 16) * ((100vw - 320px) / (1700 - 320)));\n\n  @media (min-width: 1700px) {\n    font-size: 20px;\n  }\n\n  @media (max-width: 320px) {\n    font-size: 16px;\n  }\n\n  a {\n    text-decoration: none;\n    user-select: none;  \n    -webkit-tap-highlight-color: transparent;\n    color: inherit;\n\n    :hover {\n      color: ",';\n\n      /* Block "sticky hover" effect on mobile devices */\n      @media (hover: none) {\n        color: inherit;\n      }\n    }\n\n    .email-link_content {\n      display: inline-block;\n      text-decoration: underline;\n    }\n\n    :focus {\n      outline: none;\n\n      .email-link_content {\n        color: ',";\n        outline: ",";\n      }\n    }\n\n    .email-link_content:focus {\n      outline: none;\n    }\n  }\n"]);return be=function(){return e},e}var ke=x.default.p(be(),function(e){return e.white?"rgba(250,250,250,0.7)":"rgba(25, 25, 25, 0.8)"},function(e){return e.email?"#388e3c":"turquoise"},function(e){return e.email?"#388e3c":"turquoise"},function(e){return e.email?"3px solid #388e3c":"3px solid turquoise"}),Ee=x.default.h2(ge()),ve=Object(x.default)(u.a)(fe()),we=Object(x.default)(u.a)(he()),ye=x.default.hr(xe()),je=t(53),_e=t.n(je),Oe=t(54),Ce=t.n(Oe),Ie=t(55),ze=t.n(Ie),Ne=t(56),Se=t.n(Ne),qe=function(){return l.a.createElement(u.d,{mx:0,px:15,pt:{xs:"120px",sm:"130px",lg:"140px",xl:"155px"},pb:"20px"},l.a.createElement(u.b,{px:0,xs:12,sm:10,osm:1,lg:8,olg:2,my:0,mx:"auto"},l.a.createElement(u.a,{as:"header",role:"banner"},l.a.createElement(u.d,{mb:{xs:"20px",sm:"30px",lg:"40px",xl:"50px"}},l.a.createElement(u.b,{xs:12},l.a.createElement(Ee,{as:"h1"},"I'm currently looking for work!"),l.a.createElement(ke,{email:!0},"Feel free to contact me at\xa0",l.a.createElement("a",{href:"mailto:gautam@gautamtata.com?subject=Open positions at ","aria-label":"Send email to gautam@gautamtata.com"},l.a.createElement("span",{className:"email-link_content",tabIndex:"-1"},"gautam@gautamtata.com")),".")))),l.a.createElement(u.a,{as:"main",role:"main"},l.a.createElement(u.d,{mb:{xs:"30px",sm:"40px",lg:"50px",xl:"80px"}},l.a.createElement(u.b,{xs:12,mb:{xs:"15px",xl:"0px"},xl:6,display:"flex",alignItems:"flex-end"},l.a.createElement("img",{src:_e.a,alt:"Screenshot showing landing page of proofchecker",style:{width:"100%",display:"block",margin:"0 auto",borderRadius:"5px"}})),l.a.createElement(u.b,{xs:12,xl:6,pl:{xl:"30px"}},l.a.createElement(Ee,null,"Logic Proof Checker"),l.a.createElement(ve,{display:"flex",mt:"5px"}),l.a.createElement(ke,null,"A proof checking tool for Logic that saves teaching assistants hours of grading time."),l.a.createElement(we,null,l.a.createElement("a",{href:"https://github.com/gautamtata/logic-proof-checker",target:"_blank",rel:"noopener noreferrer","aria-label":"Logic proof checker"},l.a.createElement("span",{className:"project-link_content",tabIndex:"-1"},"View Code")),l.a.createElement("a",{href:"https://gautamtata.github.io/logic-proof-checker/",target:"_blank",rel:"noopener noreferrer","aria-label":"proof checker live app"},l.a.createElement("span",{className:"project-link_content",tabIndex:"-1"},"View Demo"))))),l.a.createElement(ye,null),l.a.createElement(u.d,{mb:{xs:"30px",sm:"40px",lg:"50px",xl:"80px"}},l.a.createElement(u.b,{xs:12,mb:{xs:"15px",xl:"0px"},xl:6,display:"flex",alignItems:"flex-end"},l.a.createElement("img",{src:Ce.a,alt:"Pacific grove museum project screenshot",style:{width:"100%",display:"block",margin:"0 auto",borderRadius:"5px"}})),l.a.createElement(u.b,{xs:12,xl:6,pl:{xl:"30px"}},l.a.createElement(Ee,null,"Pacific grove climate data viz"),l.a.createElement(ve,{display:"flex",mt:"5px"}),l.a.createElement(ke,null,"Website for data visualizations and resources for climate change in Monterey County for the Pacific Grove Museum."),l.a.createElement(we,null,l.a.createElement("a",{href:"https://github.com/gautamtata/watershed-guardians",target:"_blank",rel:"noopener noreferrer","aria-label":"watershed guardians code"},l.a.createElement("span",{className:"project-link_content",tabIndex:"-1"},"View Code")),l.a.createElement("a",{href:"https://gautamtata.github.io/watershed-guardians/",target:"_blank",rel:"noopener noreferrer","aria-label":"watershed guardians live app"},l.a.createElement("span",{className:"project-link_content",tabIndex:"-1"},"View Project"))))),l.a.createElement(ye,null),l.a.createElement(u.d,{mb:{xs:"30px",sm:"40px",lg:"50px",xl:"80px"}},l.a.createElement(u.b,{xs:12,mb:{xs:"15px",xl:"0px"},xl:6,display:"flex",alignItems:"flex-end"},l.a.createElement("img",{src:ze.a,alt:"",style:{width:"100%",display:"block",margin:"0 auto",borderRadius:"5px"}})),l.a.createElement(u.b,{xs:12,xl:6,pl:{xl:"30px"}},l.a.createElement(Ee,null,"License plate OCR"),l.a.createElement(ve,{display:"flex",mt:"5px"}),l.a.createElement(ke,null,"A CLI tool that is used for recognizing characters on a Number plate using a sliding window."),l.a.createElement(we,null,l.a.createElement("a",{href:"https://github.com/gautamtata/License-Plate-reader",target:"_blank",rel:"noopener noreferrer","aria-label":"License plate code"},l.a.createElement("span",{className:"project-link_content",tabIndex:"-1"},"View Code"))))),l.a.createElement(ye,null),l.a.createElement(u.d,{mb:{xs:"20px",sm:"30px",lg:"40px",xl:"50px"}},l.a.createElement(u.b,{xs:12,mb:{xs:"15px",xl:"0px"},xl:6,display:"flex",alignItems:"flex-end"},l.a.createElement("img",{src:Se.a,alt:"jsmaps screenshot",style:{width:"100%",display:"block",margin:"0 auto",borderRadius:"5px"}})),l.a.createElement(u.b,{xs:12,xl:6,pl:{xl:"30px"}},l.a.createElement(Ee,null,"JS annotatable maps"),l.a.createElement(ve,{display:"flex",mt:"5px"}),l.a.createElement(ke,null,"A tool that makes it easy for developers to customize events and interactions on a map."),l.a.createElement(we,null,l.a.createElement("a",{href:"https://github.com/gautamtata/JSMaps",target:"_blank",rel:"noopener noreferrer","aria-label":"jsmaps code"},l.a.createElement("span",{className:"project-link_content",tabIndex:"-1"},"View Code")),l.a.createElement("a",{href:"https://js-annotated-maps.herokuapp.com/",target:"_blank",rel:"noopener noreferrer","aria-label":"js maps live app"},l.a.createElement("span",{className:"project-link_content",tabIndex:"-1"},"View Project"))))))))},Le=function(){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60px",height:"60px",viewBox:"0 0 60 60",role:"img","aria-labelledby":"linkedin-icon-svg"},l.a.createElement("title",{id:"linkedin-icon-svg"},"Linkedin icon"),l.a.createElement("path",{className:"linkedin-fill",fill:"#ffffff",fillOpacity:"0.95",stroke:"null",d:"m12.68255,59.89458l0,-39.60984l-12.16349,0l0,39.60984l12.16349,0zm0,-53.6498c-0.07246,-3.54467 -2.41962,-6.24353 -6.23267,-6.24353c-3.81402,0 -6.30609,2.69886 -6.30609,6.24353c0,3.46768 2.41962,6.24462 6.16021,6.24462l0.07246,0c3.88647,0 6.30609,-2.77694 6.30609,-6.24462zm19.84403,53.6498l0,-22.56778c0,-1.20779 0.08673,-2.41558 0.43961,-3.27657c0.96474,-2.41439 3.16041,-4.9137 6.84716,-4.9137c4.82973,0 7.85867,2.7588 7.85867,8.19027l0,22.56778l12.24556,0l0,-23.17166c0,-12.41276 -6.58338,-18.18864 -15.36481,-18.18864c-7.20003,0 -10.36045,4.05148 -12.1153,6.80907l0.08792,-5.29765l-12.2244,0c0.17584,3.79199 0,39.84888 0,39.84888l12.22559,0z"}))},Te=function(){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",role:"img","aria-labelledby":"github-icon-svg"},l.a.createElement("title",{id:"github-icon-svg"},"Github icon"),l.a.createElement("path",{className:"github-stroke",strokeOpacity:"0.95",stroke:"#ffffff",strokeWidth:"2",strokeLinejoin:"round",strokeLinecap:"round",fill:"none",d:"m8.913847,19.823033c-5.624176,1.568484 -5.624176,-2.61414 -7.873846,-3.136968m15.747692,6.273937l0,-4.046689a3.790694,3.523861 0 0 0 -1.057345,-2.729162c3.531982,-0.36598 7.243938,-1.61031 7.243938,-7.319593a6.119103,5.688369 0 0 0 -1.687253,-3.92121a5.702914,5.301476 0 0 0 -0.101235,-3.942123s-1.327305,-0.36598 -4.398105,1.547571a15.050294,13.990878 0 0 0 -7.873846,0c-3.0708,-1.913551 -4.398105,-1.547571 -4.398105,-1.547571a5.702914,5.301476 0 0 0 -0.101235,3.942123a6.119103,5.688369 0 0 0 -1.687253,3.95258c0,5.667456 3.711956,6.911787 7.243938,7.319593a3.790694,3.523861 0 0 0 -1.057345,2.697793l0,4.046689"}))},Ae=function(){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",role:"img","aria-labelledby":"medium-icon-svg"},l.a.createElement("title",{id:"medium-icon-svg"},"Medium icon"),l.a.createElement("polygon",{className:"medium-fill",fillOpacity:"0.95",points:"24,2.5 24,2 17.5,2 12.5,14 7.5,2 0,2 0,2.5 2,5.9545288 2,18 0,21.5 0,22 7,22 7,21.5 4.5,18    4.5,10.2727661 11,21.5 11.5,21.5 17,7.75 17,19 15,21.5 15,22 24,22 24,21.5 22,19 22,4.5  ",fill:"#ffffff"}))},Be=function(){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"382px",height:"382px",viewBox:"0 0 382 382",role:"img","aria-labelledby":"gmail-icon-svg"},l.a.createElement("title",{id:"gmail-icon-svg"},"Github icon"),l.a.createElement("path",{className:"gmail-fill",d:"M336.764,45.945H45.354C20.346,45.945,0,65.484,0,89.5v203.117c0,24.016,20.346,43.555,45.354,43.555h291.41  c25.008,0,45.353-19.539,45.353-43.555V89.5C382.117,65.484,361.772,45.945,336.764,45.945z M336.764,297.72H45.354  c-3.676,0-6.9-2.384-6.9-5.103V116.359l131.797,111.27c2.702,2.282,6.138,3.538,9.676,3.538l22.259,0.001  c3.536,0,6.974-1.257,9.677-3.539l131.803-111.274v176.264C343.664,295.336,340.439,297.72,336.764,297.72z M191.059,192.987  L62.87,84.397h256.378L191.059,192.987z",fill:"#FFFFFF"}))},Me=t(57);o.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(Me.Normalize,null),l.a.createElement(S,null)),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.0ef8a771.chunk.js.map