(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(n,e,t){n.exports=t.p+"static/media/spinning-wheel.0156d168.png"},52:function(n,e,t){n.exports=t.p+"static/media/gautam-1.c878d195.gif"},53:function(n,e,t){n.exports=t.p+"static/media/proofchecker.a6489645.png"},54:function(n,e,t){n.exports=t.p+"static/media/pgmuseum.4a1f6fb5.png"},55:function(n,e,t){n.exports=t.p+"static/media/car-scan.20db77d8.gif"},56:function(n,e,t){n.exports=t.p+"static/media/jsmaps.3b17e72e.png"},63:function(n,e,t){n.exports=t(87)},87:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),l=t(10),o=t.n(l),r=t(11),c=t(12),s=t(14),m=t(13),p=t(15),u=t(3),d=t(90),f=t(2),h=t(4);function x(){var n=Object(h.a)(["\n  body {\n    font-family: 'Lato', Arial, Helvetica, sans-serif;\n    line-height: 1.6 !important;\n    background-color: ",";\n    transition: background-color 300ms linear;\n    color: ",";\n    -webkit-font-smoothing: antialiased;\n  }\n\n  h1,\n  h2,\n  h3 {\n    font-family: 'Playfair Display', 'Palatino', 'Times New Roman', Times, serif;\n    margin: 0 !important;\n  }\n"]);return x=function(){return n},n}var g=Object(f.createGlobalStyle)(x(),function(n){return n.theme.backgroundColor},function(n){return n.theme.color});function b(){var n=Object(h.a)(["\n  visibility: ",";\n  animation: "," 1s linear;\n  transition: visibility 0.6s linear;\n"]);return b=function(){return n},n}function k(){var n=Object(h.a)(["\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n"]);return k=function(){return n},n}function v(){var n=Object(h.a)(["\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"]);return v=function(){return n},n}var w=Object(f.keyframes)(v()),E=Object(f.keyframes)(k()),y=f.default.div(b(),function(n){return n.visible?"visible":"hidden"},function(n){return n.visible?w:E}),j=t(34),_=t.n(j),O=document.querySelector(".loader"),z=function(){O.classList.add("loader--hide"),setTimeout(function(){O.style.display="none"},200)},N=new _.a("Lato"),C=new _.a("Playfair Display"),q={dark:{backgroundColor:"#191919",navBackground:"white",navLinkColor:"#191919",logoColor:"white",color:"rgba(250, 250, 250, 0.7)"},light:{backgroundColor:"white",navBackground:"#191919",navLinkColor:"white",logoColor:"black",color:"black"}},I=function(n){function e(){var n,t;Object(r.a)(this,e);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(t=Object(s.a)(this,(n=Object(m.a)(e)).call.apply(n,[this].concat(i)))).state={visible:!1,theme:q.dark},t.changeTheme=function(n){var e=n.pathname;t.state.theme!==q.dark&&"/"===e?t.setState({theme:q.dark}):t.state.theme===q.light||"/about"!==e&&"/portfolio"!==e||t.setState({theme:q.light})},t.execAfterFontLoadEval=function(){z(),t.setState({visible:!0})},t}return Object(p.a)(e,n),Object(c.a)(e,[{key:"componentDidMount",value:function(){var n=this;Promise.all([N.load(),C.load()]).then(function(){n.execAfterFontLoadEval()}).catch(function(){n.execAfterFontLoadEval()})}},{key:"render",value:function(){var n=this.state,e=n.visible,t=n.theme;return i.a.createElement(f.ThemeProvider,{theme:t},i.a.createElement(i.a.Fragment,null,i.a.createElement(g,null),i.a.createElement(y,{visible:e},i.a.createElement(u.c,{fluid:!0,px:0,mx:0},i.a.createElement(u.d,{mx:0,px:15},i.a.createElement(u.b,{px:0},i.a.createElement(d.a,null,i.a.createElement(P,null,i.a.createElement(Y,null),i.a.createElement(G,{changeTheme:this.changeTheme})))))))))}}]),e}(a.Component),L=t(92),F=function(n){function e(){return Object(r.a)(this,e),Object(s.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(p.a)(e,n),Object(c.a)(e,[{key:"componentDidUpdate",value:function(n){this.props.location!==n.location&&window.scrollTo({top:0,behavior:"auto"})}},{key:"render",value:function(){return this.props.children}}]),e}(a.Component),P=Object(L.a)(F),T=t(36),A=t(91),B=t(88);function S(){var n=Object(h.a)(["\n   .fade-enter {\n        opacity: 0.01;\n    }\n\n    .fade-enter.fade-enter-active {\n        opacity: 1;\n        transition: opacity 300ms ease-in;\n    }\n    \n    .fade-exit {\n        opacity: 1;\n    }\n      \n    .fade-exit.fade-exit-active {\n        opacity: 0.01;\n        transition: opacity 50ms ease-in;\n    }\n\n    div.transition-group {\n      position: relative;\n    }\n\n    div.route-section {\n      position: absolute;\n      width: 100%;\n      top: 0;\n      left: 0;\n    }\n"]);return S=function(){return n},n}var M=f.default.div(S()),V=function(n){function e(){return Object(r.a)(this,e),Object(s.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(p.a)(e,n),Object(c.a)(e,[{key:"componentDidUpdate",value:function(){this.props.changeTheme(this.props.location)}},{key:"render",value:function(){var n=this.props.location;return i.a.createElement(M,null,i.a.createElement(T.TransitionGroup,{className:"transition-group"},i.a.createElement(T.CSSTransition,{key:n.key,timeout:{enter:300,exit:50},classNames:"fade"},i.a.createElement("div",{className:"route-section"},i.a.createElement(A.a,{location:n},i.a.createElement(B.a,{exact:!0,path:"/",component:cn}),i.a.createElement(B.a,{exact:!0,path:"/about",component:un}),i.a.createElement(B.a,{exact:!0,path:"/portfolio",component:In}))))))}}]),e}(a.Component),G=Object(L.a)(V),R=t(89),D=t(50),H=t.n(D);function J(){var n=Object(h.a)(["\n  display: inline-flex;\n  /* remove blue highlight when clicking quickly on mobile chrome */\n  user-select: none;  \n  -webkit-tap-highlight-color: transparent;\n\n  svg {\n    display: block;\n    height: 50px;\n    width: 50px;\n\n    .logo-fill {\n      fill: ",";\n    }\n\n    transition: transform 0.4s cubic-bezier(.54,.84,.44,.67);\n\n    :active {\n      transform: rotate(-360deg);\n      transition: transform 0s;\n    }\n  \n    @media (min-width: 576px) {\n      height: 60px;\n      width: 60px;\n    }\n  \n    @media (min-width: 992px) {\n      height: 65px;\n      width: 65px;\n    }\n  }\n\n  .logo-link_content {\n    display: block;\n  }\n\n  :focus {\n    outline: none;\n\n    .logo-link_content {\n      outline: 3px solid turquoise;\n    }\n  }\n\n  .logo-link_content:focus {\n    outline: none;\n  }\n"]);return J=function(){return n},n}function W(){var n=Object(h.a)(["\n                  color: turquoise;\n                  -webkit-text-stroke: 1px turquoise;\n                "]);return W=function(){return n},n}function U(){var n=Object(h.a)(["\n                  color: turquoise;\n                  -webkit-text-stroke: 1px turquoise;\n                "]);return U=function(){return n},n}function X(){var n=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 13px 25px;\n  background-color: ",";\n  margin: 0;\n  list-style: none;\n  font-size: calc(18px + (26 - 18) * ((100vw - 320px) / (1700 - 320)));\n\n  @media (min-width: 1700px) {\n    font-size: 26px;\n  }\n\n  @media (max-width: 320px) {\n    font-size: 18px;\n  }\n  \n  a {\n    color: ",";\n    text-decoration: none;\n    /* remove blue highlight when clicking quickly on mobile chrome */\n    user-select: none;  \n    -webkit-tap-highlight-color: transparent;\n  }\n\n  li {\n    margin-right: 20px;\n    padding: 0px;\n\n    :nth-child(n+1) {\n      a {\n        display: inline-block;\n        transition: transform 0.4s ease-in-out;\n    \n        :active {\n          transform: scale(1.2);\n          transition: transform 0s;\n        }\n      }\n    }\n\n    :nth-child(1) {\n      a {\n        color: ",";\n\n        \n        ",";\n      }\n    }\n\n    :nth-child(2) {\n      a {\n        color: ",";\n\n        \n        ",";\n      }\n    }\n\n    :nth-child(1),\n    :nth-child(2) {\n      a {\n        :hover {\n          color: turquoise;\n        }\n\n        .nav-link_content {\n          display: block;\n        }\n        \n        :focus {\n          outline: none;\n\n          .nav-link_content {\n            color: turquoise;\n            outline: 3px solid turquoise;\n          }\n        }\n\n        .nav-link_content:focus {\n          outline: none;\n        }\n      }\n    }\n\n    :last-of-type {\n      margin-right: 0;\n    }\n\n    @media (min-width: 576px) {\n      margin-right: 40px;\n    }\n  }\n"]);return X=function(){return n},n}var K=f.default.ul(X(),function(n){return n.theme.navBackground},function(n){return n.theme.navLinkColor},function(n){return n.theme.navLinkColor},function(n){return"/about"===n.page&&Object(f.css)(U())},function(n){return n.theme.navLinkColor},function(n){return"/portfolio"===n.page&&Object(f.css)(W())}),Q=Object(f.default)(R.a)(J(),function(n){return n.theme.logoColor}),Y=Object(L.a)(function(n){var e=n.location;return i.a.createElement(u.a,{width:"100%",maxWidth:"450px",position:"fixed",left:0,zIndex:100,as:"nav",role:"navigation"},i.a.createElement(u.a,{display:"flex",justifyContent:"space-between",alignItems:"center",p:"10px 0 10px 10px"},i.a.createElement(Q,{to:"/","aria-label":"Home page"},i.a.createElement("span",{className:"logo-link_content",tabIndex:"-1"},i.a.createElement("img",{className:"logo",alt:"logo",style:{height:"100px",width:"100px"},src:H.a}))),i.a.createElement(K,{page:e.pathname},i.a.createElement("li",null,i.a.createElement(R.a,{to:"/","aria-label":"About page"},i.a.createElement("span",{className:"nav-link_content",tabIndex:"-1"},"Home"))),i.a.createElement("li",null,i.a.createElement(R.a,{to:"/about","aria-label":"About page"},i.a.createElement("span",{className:"nav-link_content",tabIndex:"-1"},"About"))),i.a.createElement("li",null,i.a.createElement(R.a,{to:"/portfolio","aria-label":"Portfolio page"},i.a.createElement("span",{className:"nav-link_content",tabIndex:"-1"},"Portfolio"))))))}),Z=t(58);function $(){var n=Object(h.a)(['\n  width: calc(20px + (30 - 20) * ((100vw - 320px) / (1700 - 320)));\n  margin-right: 25px;\n  position: relative;\n  top: 1px;\n  user-select: none;  \n  -webkit-tap-highlight-color: transparent;\n\n  @media (min-width: 1700px) {\n    width: 30px;\n  }\n\n  @media (max-width: 320px) {\n    width: 20px;\n  }\n\n  @media (min-width: 768px) {\n    margin-right: 35px;\n  }\n\n  @media (min-width: 1200px) {\n    margin-right: 45px;\n  }\n\n  transition: transform 0.4s ease-in-out;\n  :active {\n    transform: scale(1.2);\n    transition: transform 0s;\n  }\n\n  .social-link_content {\n    display: block;\n  }\n\n  /* Make sure nothing inside the a tag has pointer events, so clicks on the a tag will always be found on that element */\n  .social-link_content > * {\n    pointer-events: none;\n  }\n\n  :hover {\n    .linkedin-fill,\n    .medium-fill,\n    .gmail-fill {\n      fill: turquoise;\n\n      /* Block "sticky hover" effect on mobile devices */\n      @media (hover: none) { \n        fill: #fff;\n      }\n    }\n\n    .github-stroke {\n      stroke: turquoise;\n\n      /* Block "sticky hover" effect on mobile devices */\n      @media (hover: none) {\n        stroke: #fff;\n      }\n    }\n  }\n\n  .profile-pic {\n    height: 300px;\n    position: absolute;\n    left: 1000px;\n    bottom: 150px;\n\n  }\n\n  svg {\n    display: block;\n    height: 100%;\n    width: 100%;\n  }\n\n  :nth-child(3),\n  :nth-child(4) {\n    top: 2px;\n  }\n\n  :nth-child(4) {\n    width: calc(22px + (36 - 22) * ((100vw - 320px) / (1700 - 320)));\n\n    @media (min-width: 1700px) {\n      width: 36px;\n    }\n\n    @media (max-width: 320px) {\n      width: 22px;\n    }\n\n  }\n\n  :last-of-type {\n    margin-right: 0;\n  }\n\n  :focus {\n    outline: none;\n\n    .social-link_content {\n      outline: 3px solid turquoise;\n    }\n\n    .social-link_content .linkedin-fill,\n    .social-link_content .medium-fill,\n    .social-link_content .gmail-fill {\n      fill: turquoise;\n    }\n\n    .social-link_content .github-stroke {\n      stroke: turquoise;      \n    }\n  }\n\n  .social-link_content:focus {\n    outline: none;\n  }\n']);return $=function(){return n},n}function nn(){var n=Object(h.a)(["\n  text-align: center;\n  font-size: calc(12px + (18 - 12) * ((100vw - 320px) / (1700 - 320)));\n\n  @media (min-width: 1700px) {\n    font-size: 18px;\n  }\n\n  @media (max-width: 320px) {\n    font-size: 12px;\n  }\n\n"]);return nn=function(){return n},n}function en(){var n=Object(h.a)(['\n  font-size: calc(28px + (64 - 28) * ((100vw - 320px) / (1700 - 320))) !important;\n  \n  @media (min-width: 1700px) {\n    font-size: 64px !important;\n  }\n\n  @media (max-width: 320px) {\n    font-size: 28px !important;\n  }\n\n  @media (min-width: 450px){\n    .break-under-xs {\n      display: none;\n    }\n  }\n\n  @media (min-width: 1400px){\n    .break-small {\n      display: none;\n    }\n  }\n\n  .break-large {\n    display: none;\n  }\n\n  @media (min-width: 450px){\n    .break-large {\n      display: block;\n    }\n  }\n\n  span,\n  .city-link,\n  .city_link_content {\n    color: #fff;\n  }\n\n  .city-link {\n    text-decoration: none;\n    display: inline-block;\n    user-select: none;  \n    -webkit-tap-highlight-color: transparent;\n    transition: transform 0.4s ease-in-out;\n\n    :active {\n      transform: scale(1.2);\n      transition: transform 0s;\n    }\n  }\n\n  .city-link_content {\n    display: block;\n    text-decoration: underline;\n  }\n\n  .city-link:hover > .city-link_content {\n    color: turquoise;\n\n    /* Block "sticky hover" effect on mobile devices */\n    @media (hover: none) {\n      color: inherit;\n    }\n  }\n\n  /* Remove default focus from target elements */  \n  .city-link:focus,\n  .city-link_content:focus {\n    outline: none;\n  }\n\n  /* Only when the outer element is reached by a keyboard, apply the focus styles. Now clicking on the element won\'t focus the link */  \n  .city-link:focus > .city-link_content {\n    color: turquoise;\n\n    /* Apply default focus styles */\n    outline: 3px solid turquoise;\n  }\n']);return en=function(){return n},n}var tn=f.default.h1(en()),an=f.default.p(nn()),ln=f.default.a($()),on=t(52),rn=t.n(on),cn=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.d,{mx:0,px:15,pt:{xs:"120px",sm:"130px",lg:"140px",xl:"155px"},pb:"20px"},i.a.createElement(u.b,{px:0,xs:12,sm:10,osm:1,lg:8,olg:2,my:0,mx:"auto"},i.a.createElement(u.a,{as:"header",role:"banner"},i.a.createElement(tn,null,"Hello World.\xa0",i.a.createElement("br",{className:"break-large"}),"My name is Gautam Tata.\xa0",i.a.createElement("br",{className:"break-large"}),"I'm\xa0",i.a.createElement("br",{className:"break-under-xs"}),i.a.createElement(Z.a,{interval:2500,springConfig:{stiffness:30,damping:10},mask:!0},i.a.createElement("span",null,"a Fullstack developer"),i.a.createElement("span",null,"an Engineer"),i.a.createElement("span",null,"UI/UX enthusiast"),i.a.createElement("span",null,"a Coffee Lover"),i.a.createElement("span",null,"a Student of the game"),i.a.createElement("span",null,"a Team player"),i.a.createElement("span",null,"a Tech Geek")),"\xa0",i.a.createElement("br",{className:"break-small"}))))),i.a.createElement("img",{className:"profile-pic",alt:"profile-pic",style:{height:"300px",position:"absolute",left:"1000px",bottom:"150px"},src:rn.a}),i.a.createElement(u.d,{mx:0,mt:{xs:"20px",md:"35px",lg:"45px"},px:15},i.a.createElement(u.b,{px:0,maxWidth:"1100px",width:"100%",my:0,mx:"auto",as:"section",role:"region"},i.a.createElement(an,null,"Connect with me"),i.a.createElement(u.a,{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",mb:15},i.a.createElement(ln,{href:"https://www.linkedin.com/in/gautam-tata-b91b20118/ ",target:"_blank",rel:"noopener noreferrer","aria-label":"Linkedin page"},i.a.createElement("span",{className:"social-link_content",tabIndex:"-1"},i.a.createElement(Ln,null))),i.a.createElement(ln,{href:"https://github.com/gautamtata",target:"_blank",rel:"noopener noreferrer","aria-label":"Github page"},i.a.createElement("span",{className:"social-link_content",tabIndex:"-1"},i.a.createElement(Fn,null))),i.a.createElement(ln,{href:"mailto:gautam@gautamtata.com?subject=Job Opportunitiy","aria-label":"Send email to gautam@gautamtata.com"},i.a.createElement("span",{className:"social-link_content",tabIndex:"-1"},i.a.createElement(Tn,null))),i.a.createElement(ln,{href:"https://medium.com/@gautamtata",target:"_blank",rel:"noopener noreferrer","aria-label":"Medium page"},i.a.createElement("span",{className:"social-link_content",tabIndex:"-1"},i.a.createElement(Pn,null)))))))};function sn(){var n=Object(h.a)(["\n  a {\n    .netlify-link_content {\n      outline: none;\n    }\n\n    :focus {\n      outline: none;\n\n      .netlify-link_content img {\n        outline: 5px solid turquoise;\n      }\n    }\n  }\n"]);return sn=function(){return n},n}function mn(){var n=Object(h.a)(["\n  color: ",";\n  font-size: calc(16px + (20 - 16) * ((100vw - 320px) / (1700 - 320)));\n\n  @media (min-width: 1700px) {\n    font-size: 20px;\n  }\n\n  @media (max-width: 320px) {\n    font-size: 16px;\n  }\n\n  /* Remove default focus from target elements */  \n  .video-link:focus,\n  .video-link_content:focus {\n    outline: none;\n  }\n\n  /* Only when the outer element is reached by a keyboard, apply the focus styles. Now clicking on the element won't focus the link */  \n  .video-link:focus > .video-link_content {\n    color: turquoise;\n\n    /* Apply default focus styles */\n    outline: 3px solid turquoise;\n  }\n\n  a {\n    user-select: none;  \n    -webkit-tap-highlight-color: transparent;\n    color: inherit;\n\n    :hover {\n      color: turquoise;\n\n      @media (hover: none) {\n        color: inherit;\n      }\n    }\n  }\n"]);return mn=function(){return n},n}function pn(){var n=Object(h.a)(["\n  font-size: calc(28px + (46 - 28) * ((100vw - 320px) / (1700 - 320)));\n\n  @media (min-width: 1700px) {\n    font-size: 46px;\n  }\n\n  @media (max-width: 320px) {\n    font-size: 28px;\n  }\n\n  color: ",";\n\n  .break-large {\n    display: none;\n  }\n\n  @media (min-width: 768px){\n    .break-large {\n      display: block;\n    }\n  }\n"]);return pn=function(){return n},n}f.default.h2(pn(),function(n){return n.white?"white":"#191919"}),f.default.p(mn(),function(n){return n.white?"rgba(250,250,250,0.7)":"rgba(25, 25, 25, 0.8)"}),Object(f.default)(u.a)(sn());var un=function(){return i.a.createElement("div",{className:"about"})};function dn(){var n=Object(h.a)(["\n  margin-bottom: 30px;\n\n  @media (min-width: 576px) {\n    margin-bottom: 40px;\n  }\n\n  @media (min-width: 992px) {\n    margin-bottom: 50px;\n  }\n\n  @media (min-width: 1200px) {\n    display: none;\n  }\n"]);return dn=function(){return n},n}function fn(){var n=Object(h.a)(['\n  a {\n    font-size: calc(16px + (20 - 16) * ((100vw - 320px) / (1700 - 320)));\n\n    @media (min-width: 1700px) {\n      font-size: 20px;\n    }\n\n    @media (max-width: 320px) {\n      font-size: 16px;\n    }\n\n    user-select: none;  \n    -webkit-tap-highlight-color: transparent;\n    transition: transform 0.4s ease-in-out;\n\n    :active {\n      transform: scale(1.2);\n      transition: transform 0s;\n    }\n\n    :hover {\n      color: turquoise;\n\n      /* Block "sticky hover" effect on mobile devices */\n      @media (hover: none) {\n        color: white;\n      }\n    }\n\n    display: inline-block;\n    margin-right: 10px;\n    color: white;\n    text-decoration: none;\n\n    :last-of-type {\n      margin-right: 0;\n    }\n\n    .project-link_content {\n      display: block;\n      background-color: #191919;\n      padding: 10px;\n    }\n\n    :focus {\n      outline: none;\n\n      .project-link_content {\n        color: turquoise;\n        outline: 5px solid turquoise;        \n      }\n    }\n\n    .project-link_content:focus {\n      outline: none;\n    }\n  }\n']);return fn=function(){return n},n}function hn(){var n=Object(h.a)(["\n  svg {\n    width: calc(20px + (25 - 20) * ((100vw - 320px) / (1700 - 320)));\n    height: calc(20px + (25 - 20) * ((100vw - 320px) / (1700 - 320)));\n    margin-right: 10px;\n\n    .heroku-logo {\n      fill: #2d2d2d;\n    }\n\n    rect {\n      fill: transparent;\n    }\n\n    @media (min-width: 992px) {\n      margin-right: 10px;\n    }\n\n    @media (min-width: 1700px) {\n      width: 25px;\n    }\n  \n    @media (max-width: 320px) {\n      width: 20px;\n    }\n  }\n"]);return hn=function(){return n},n}function xn(){var n=Object(h.a)(["\n  font-size: calc(28px + (46 - 28) * ((100vw - 320px) / (1700 - 320)));\n\n  @media (min-width: 1700px) {\n    font-size: 46px;\n  }\n\n  @media (max-width: 320px) {\n    font-size: 28px;\n  }\n  \n  color: black;\n"]);return xn=function(){return n},n}function gn(){var n=Object(h.a)(["\n  color: ",";\n  font-size: calc(16px + (20 - 16) * ((100vw - 320px) / (1700 - 320)));\n\n  @media (min-width: 1700px) {\n    font-size: 20px;\n  }\n\n  @media (max-width: 320px) {\n    font-size: 16px;\n  }\n\n  a {\n    text-decoration: none;\n    user-select: none;  \n    -webkit-tap-highlight-color: transparent;\n    color: inherit;\n\n    :hover {\n      color: ",';\n\n      /* Block "sticky hover" effect on mobile devices */\n      @media (hover: none) {\n        color: inherit;\n      }\n    }\n\n    .email-link_content {\n      display: inline-block;\n      text-decoration: underline;\n    }\n\n    :focus {\n      outline: none;\n\n      .email-link_content {\n        color: ',";\n        outline: ",";\n      }\n    }\n\n    .email-link_content:focus {\n      outline: none;\n    }\n  }\n"]);return gn=function(){return n},n}var bn=f.default.p(gn(),function(n){return n.white?"rgba(250,250,250,0.7)":"rgba(25, 25, 25, 0.8)"},function(n){return n.email?"#388e3c":"turquoise"},function(n){return n.email?"#388e3c":"turquoise"},function(n){return n.email?"3px solid #388e3c":"3px solid turquoise"}),kn=f.default.h2(xn()),vn=Object(f.default)(u.a)(hn()),wn=Object(f.default)(u.a)(fn()),En=f.default.hr(dn()),yn=t(53),jn=t.n(yn),_n=t(54),On=t.n(_n),zn=t(55),Nn=t.n(zn),Cn=t(56),qn=t.n(Cn),In=function(){return i.a.createElement(u.d,{mx:0,px:15,pt:{xs:"120px",sm:"130px",lg:"140px",xl:"155px"},pb:"20px"},i.a.createElement(u.b,{px:0,xs:12,sm:10,osm:1,lg:8,olg:2,my:0,mx:"auto"},i.a.createElement(u.a,{as:"header",role:"banner"},i.a.createElement(u.d,{mb:{xs:"20px",sm:"30px",lg:"40px",xl:"50px"}},i.a.createElement(u.b,{xs:12},i.a.createElement(kn,{as:"h1"},"I'm currently looking for work!"),i.a.createElement(bn,{email:!0},"Feel free to contact me at\xa0",i.a.createElement("a",{href:"mailto:gautam@gautamtata.com?subject=Open positions at ","aria-label":"Send email to gautam@gautamtata.com"},i.a.createElement("span",{className:"email-link_content",tabIndex:"-1"},"gautam@gautamtata.com")),".")))),i.a.createElement(u.a,{as:"main",role:"main"},i.a.createElement(u.d,{mb:{xs:"30px",sm:"40px",lg:"50px",xl:"80px"}},i.a.createElement(u.b,{xs:12,mb:{xs:"15px",xl:"0px"},xl:6,display:"flex",alignItems:"flex-end"},i.a.createElement("img",{src:jn.a,alt:"Screenshot showing landing page of proofchecker",style:{width:"100%",display:"block",margin:"0 auto",borderRadius:"5px"}})),i.a.createElement(u.b,{xs:12,xl:6,pl:{xl:"30px"}},i.a.createElement(kn,null,"Logic Proof Checker"),i.a.createElement(vn,{display:"flex",mt:"5px"}),i.a.createElement(bn,null,"A proof checking tool for Logic that saves teaching assistants hours of grading time."),i.a.createElement(wn,null,i.a.createElement("a",{href:"https://github.com/gautamtata/logic-proof-checker",target:"_blank",rel:"noopener noreferrer","aria-label":"Logic proof checker"},i.a.createElement("span",{className:"project-link_content",tabIndex:"-1"},"View Code")),i.a.createElement("a",{href:"https://gautamtata.github.io/logic-proof-checker/",target:"_blank",rel:"noopener noreferrer","aria-label":"proof checker live app"},i.a.createElement("span",{className:"project-link_content",tabIndex:"-1"},"View Demo"))))),i.a.createElement(En,null),i.a.createElement(u.d,{mb:{xs:"30px",sm:"40px",lg:"50px",xl:"80px"}},i.a.createElement(u.b,{xs:12,mb:{xs:"15px",xl:"0px"},xl:6,display:"flex",alignItems:"flex-end"},i.a.createElement("img",{src:On.a,alt:"Pacific grove museum project screenshot",style:{width:"100%",display:"block",margin:"0 auto",borderRadius:"5px"}})),i.a.createElement(u.b,{xs:12,xl:6,pl:{xl:"30px"}},i.a.createElement(kn,null,"Pacific grove climate data viz"),i.a.createElement(vn,{display:"flex",mt:"5px"}),i.a.createElement(bn,null,"Website for data visualizations and resources for climate change in Monterey County for the Pacific Grove Museum."),i.a.createElement(wn,null,i.a.createElement("a",{href:"https://github.com/gautamtata/watershed-guardians",target:"_blank",rel:"noopener noreferrer","aria-label":"watershed guardians code"},i.a.createElement("span",{className:"project-link_content",tabIndex:"-1"},"View Code")),i.a.createElement("a",{href:"https://gautamtata.github.io/watershed-guardians/",target:"_blank",rel:"noopener noreferrer","aria-label":"watershed guardians live app"},i.a.createElement("span",{className:"project-link_content",tabIndex:"-1"},"View Project"))))),i.a.createElement(En,null),i.a.createElement(u.d,{mb:{xs:"30px",sm:"40px",lg:"50px",xl:"80px"}},i.a.createElement(u.b,{xs:12,mb:{xs:"15px",xl:"0px"},xl:6,display:"flex",alignItems:"flex-end"},i.a.createElement("img",{src:Nn.a,alt:"",style:{width:"100%",display:"block",margin:"0 auto",borderRadius:"5px"}})),i.a.createElement(u.b,{xs:12,xl:6,pl:{xl:"30px"}},i.a.createElement(kn,null,"License plate OCR"),i.a.createElement(vn,{display:"flex",mt:"5px"}),i.a.createElement(bn,null,"A CLI tool that is used for recognizing characters on a Number plate using a sliding window."),i.a.createElement(wn,null,i.a.createElement("a",{href:"https://github.com/gautamtata/License-Plate-reader",target:"_blank",rel:"noopener noreferrer","aria-label":"License plate code"},i.a.createElement("span",{className:"project-link_content",tabIndex:"-1"},"View Code"))))),i.a.createElement(En,null),i.a.createElement(u.d,{mb:{xs:"20px",sm:"30px",lg:"40px",xl:"50px"}},i.a.createElement(u.b,{xs:12,mb:{xs:"15px",xl:"0px"},xl:6,display:"flex",alignItems:"flex-end"},i.a.createElement("img",{src:qn.a,alt:"jsmaps screenshot",style:{width:"100%",display:"block",margin:"0 auto",borderRadius:"5px"}})),i.a.createElement(u.b,{xs:12,xl:6,pl:{xl:"30px"}},i.a.createElement(kn,null,"JS annotatable maps"),i.a.createElement(vn,{display:"flex",mt:"5px"}),i.a.createElement(bn,null,"A tool that makes it easy for developers to customize events and interactions on a map."),i.a.createElement(wn,null,i.a.createElement("a",{href:"https://github.com/gautamtata/JSMaps",target:"_blank",rel:"noopener noreferrer","aria-label":"jsmaps code"},i.a.createElement("span",{className:"project-link_content",tabIndex:"-1"},"View Code")),i.a.createElement("a",{href:"https://js-annotated-maps.herokuapp.com/",target:"_blank",rel:"noopener noreferrer","aria-label":"js maps live app"},i.a.createElement("span",{className:"project-link_content",tabIndex:"-1"},"View Project"))))))))},Ln=function(){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60px",height:"60px",viewBox:"0 0 60 60",role:"img","aria-labelledby":"linkedin-icon-svg"},i.a.createElement("title",{id:"linkedin-icon-svg"},"Linkedin icon"),i.a.createElement("path",{className:"linkedin-fill",fill:"#ffffff",fillOpacity:"0.95",stroke:"null",d:"m12.68255,59.89458l0,-39.60984l-12.16349,0l0,39.60984l12.16349,0zm0,-53.6498c-0.07246,-3.54467 -2.41962,-6.24353 -6.23267,-6.24353c-3.81402,0 -6.30609,2.69886 -6.30609,6.24353c0,3.46768 2.41962,6.24462 6.16021,6.24462l0.07246,0c3.88647,0 6.30609,-2.77694 6.30609,-6.24462zm19.84403,53.6498l0,-22.56778c0,-1.20779 0.08673,-2.41558 0.43961,-3.27657c0.96474,-2.41439 3.16041,-4.9137 6.84716,-4.9137c4.82973,0 7.85867,2.7588 7.85867,8.19027l0,22.56778l12.24556,0l0,-23.17166c0,-12.41276 -6.58338,-18.18864 -15.36481,-18.18864c-7.20003,0 -10.36045,4.05148 -12.1153,6.80907l0.08792,-5.29765l-12.2244,0c0.17584,3.79199 0,39.84888 0,39.84888l12.22559,0z"}))},Fn=function(){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",role:"img","aria-labelledby":"github-icon-svg"},i.a.createElement("title",{id:"github-icon-svg"},"Github icon"),i.a.createElement("path",{className:"github-stroke",strokeOpacity:"0.95",stroke:"#ffffff",strokeWidth:"2",strokeLinejoin:"round",strokeLinecap:"round",fill:"none",d:"m8.913847,19.823033c-5.624176,1.568484 -5.624176,-2.61414 -7.873846,-3.136968m15.747692,6.273937l0,-4.046689a3.790694,3.523861 0 0 0 -1.057345,-2.729162c3.531982,-0.36598 7.243938,-1.61031 7.243938,-7.319593a6.119103,5.688369 0 0 0 -1.687253,-3.92121a5.702914,5.301476 0 0 0 -0.101235,-3.942123s-1.327305,-0.36598 -4.398105,1.547571a15.050294,13.990878 0 0 0 -7.873846,0c-3.0708,-1.913551 -4.398105,-1.547571 -4.398105,-1.547571a5.702914,5.301476 0 0 0 -0.101235,3.942123a6.119103,5.688369 0 0 0 -1.687253,3.95258c0,5.667456 3.711956,6.911787 7.243938,7.319593a3.790694,3.523861 0 0 0 -1.057345,2.697793l0,4.046689"}))},Pn=function(){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",role:"img","aria-labelledby":"medium-icon-svg"},i.a.createElement("title",{id:"medium-icon-svg"},"Medium icon"),i.a.createElement("polygon",{className:"medium-fill",fillOpacity:"0.95",points:"24,2.5 24,2 17.5,2 12.5,14 7.5,2 0,2 0,2.5 2,5.9545288 2,18 0,21.5 0,22 7,22 7,21.5 4.5,18    4.5,10.2727661 11,21.5 11.5,21.5 17,7.75 17,19 15,21.5 15,22 24,22 24,21.5 22,19 22,4.5  ",fill:"#ffffff"}))},Tn=function(){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"382px",height:"382px",viewBox:"0 0 382 382",role:"img","aria-labelledby":"gmail-icon-svg"},i.a.createElement("title",{id:"gmail-icon-svg"},"Github icon"),i.a.createElement("path",{className:"gmail-fill",d:"M336.764,45.945H45.354C20.346,45.945,0,65.484,0,89.5v203.117c0,24.016,20.346,43.555,45.354,43.555h291.41  c25.008,0,45.353-19.539,45.353-43.555V89.5C382.117,65.484,361.772,45.945,336.764,45.945z M336.764,297.72H45.354  c-3.676,0-6.9-2.384-6.9-5.103V116.359l131.797,111.27c2.702,2.282,6.138,3.538,9.676,3.538l22.259,0.001  c3.536,0,6.974-1.257,9.677-3.539l131.803-111.274v176.264C343.664,295.336,340.439,297.72,336.764,297.72z M191.059,192.987  L62.87,84.397h256.378L191.059,192.987z",fill:"#FFFFFF"}))},An=t(57);o.a.render(i.a.createElement(i.a.Fragment,null,i.a.createElement(An.Normalize,null),i.a.createElement(I,null)),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.6d431fe4.chunk.js.map