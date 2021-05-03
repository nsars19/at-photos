(this["webpackJsonpat-photo-display"]=this["webpackJsonpat-photo-display"]||[]).push([[0],{56:function(n,e,t){"use strict";t.r(e);var i,r=t(4),c=t(1),o=t.n(c),a=t(12),s=t.n(a),l=t(3),u=t.n(l),p=t(6),d=t(7),h=t(5),f=t(31),m=t.n(f),b=t(2),x=h.b.img(i||(i=Object(r.a)(["\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  transition: filter 300ms ease-in, opacity 300ms ease-in;\n"])));function j(n){var e=n.src,t=n.alt,i=n.style,r=n.className;return Object(b.jsx)(x,{src:e,alt:t||"desc",style:i||{},className:r?r+" image":"image",loading:"lazy"})}function g(n){var e=n.imgKey;return Object(b.jsx)(m.a,{delay:1e3,src:"https://stormy-shore-10716.herokuapp.com/images/".concat(e),placeholder:"https://stormy-shore-10716.herokuapp.com/images/tiny-".concat(e),children:function(n,e){return Object(b.jsx)(j,{src:n,style:{filter:e?"blur(20px)":"blur(0px)"}})}})}var v,O=t(32),y=h.b.div(v||(v=Object(r.a)(["\n  overflow: hidden;\n  height: 200px;\n  transition: opacity 300ms ease-in;\n  opacity: ",";\n  cursor: pointer;\n\n  &:hover,\n  &:active {\n    z-index: 2;\n    filter: brightness(0.7);\n  }\n\n  @media (max-width: 540px) {\n    height: 100px;\n  }\n"])),(function(n){return n.inView?100:0}));function w(n){var e=n.imgKey,t=n.setKey,i=n.setModalVis,r=n.children,c=n.setID,o=n.imgID,a=n.setActiveIdx,s=n.getActiveIndex,l=Object(O.a)({triggerOnce:!0,threshold:.3}),u=l.ref,p=l.inView;return Object(b.jsx)(y,{ref:u,inView:p,onClick:function(){t(e),c(o),a(s(e)),i(!0)},children:r})}var k,I={black:"#1b262c",darkBlue:"#0f4c75",blue:"#3282b8",lightBlue:"#bbe1fa"},N=h.b.div(k||(k=Object(r.a)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: #aaa4;\n  height: 40px;\n  width: 40px;\n\n  span {\n    display: block;\n    width: 15px;\n    height: 2px;\n    background: #777;\n\n    &:first-child {\n      transform: rotate(45deg);\n      position: absolute;\n    }\n    &:last-child {\n      transform: rotate(-45deg);\n      position: absolute;\n    }\n  }\n\n  &:hover,\n  &:active {\n    cursor: pointer;\n    background: #aaa7;\n\n    span {\n      background: #333;\n    }\n  }\n"])));function C(n){var e=n.toggleVis;return Object(b.jsxs)(N,{onClick:e,children:[Object(b.jsx)("span",{}),Object(b.jsx)("span",{})]})}var z,S=t(33),V=t(34),A=t.n(V),D=h.b.div(z||(z=Object(r.a)(["\n  padding: 10px;\n  display: flex;\n  align-items: flex-start;\n\n  button {\n    background: none;\n  }\n\n  .icon {\n    cursor: pointer;\n    font-size: 1.5rem;\n    color: ",";\n  }\n\n  p {\n    font-size: 16px;\n    margin-left: 4px;\n    color: ",";\n  }\n"])),I.blue,I.lightBlue);function E(n){var e=n.likeCount,t=n.setLikeCount,i=n.imgID,r=function(){var n=Object(p.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://stormy-shore-10716.herokuapp.com/photos/unlike/"+i).then(function(){var n=Object(p.a)(u.a.mark((function n(e){var r,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.json();case 2:r=n.sent,c=r.likes,t(c),localStorage.removeItem(i);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=Object(p.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://stormy-shore-10716.herokuapp.com/photos/like/"+i).then(function(){var n=Object(p.a)(u.a.mark((function n(e){var r,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.json();case 2:r=n.sent,c=r.likes,t(c),localStorage.setItem(i,!0);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(b.jsxs)(D,{children:[Object(b.jsx)("button",{onClick:function(){"true"===localStorage.getItem(i)?r():c()},children:Object(b.jsx)(S.a,{className:"icon"})}),e||null!==e?Object(b.jsx)("p",{children:e}):Object(b.jsx)(A.a,{})]})}var K,B=t(8),L=h.b.div(K||(K=Object(r.a)(["\n  display: ",';\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  z-index: 3;\n  height: 100vh;\n  width: 100vw;\n  background: #000a;\n\n  img {\n    height: fit-content;\n    max-height: 90vh;\n    object-fit: cover;\n  }\n\n  img[src=""] {\n    display: none;\n  }\n\n  .display-wrap {\n    margin: auto 5px;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background: ',";\n    border-radius: 16px;\n    overflow: hidden;\n    box-shadow: 0 0 1.4px #0008, 0 0 2.5px #0008, 0 0 7px #0008, 0 0 14px #0002;\n  }\n\n  @media (max-width: 768px) {\n    .display-wrap {\n      margin: auto 15px;\n    }\n  }\n\n  .content-wrap {\n    height: 100%;\n    overflow-y: scroll;\n    scrollbar-width: none;\n    position: relative;\n    z-index: 2;\n  }\n\n  .direct-btn {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 60px;\n    background: transparent;\n    cursor: pointer;\n    position: absolute;\n    top: 0;\n    outline: none;\n\n    &:hover .icon-left,\n    &:hover .icon-right,\n    &:active .icon-left,\n    &:active .icon-right {\n      color: ",";\n      transition: color 50ms ease;\n    }\n\n    &:focus .icon-left,\n    &:focus .icon-right {\n      color: ",";\n      transition: color 50ms ease;\n    }\n  }\n\n  .prev {\n    left: 0;\n  }\n\n  .next {\n    right: 0;\n  }\n\n  .icon-left,\n  .icon-right {\n    font-size: 40px;\n    color: ","aa;\n  }\n\n  @media (max-width: 1068px) {\n    width: fit-content;\n  }\n"])),(function(n){return n.vis?"flex":"none"}),I.black,I.blue,I.blue,I.black);function M(n){var e=n.vis,t=n.setVis,i=n.imgKey,r=n.imgID,o=n.clearActive,a=n.prevImg,s=n.nextImg,l=Object(c.useState)(null),h=Object(d.a)(l,2),f=h[0],m=h[1],x=function(){t(!1),o()},g=function(n){"path"!==n.target.nodeName&&"svg"!==n.target.nodeName&&n.target.className.includes("img-frame")&&x()};return Object(c.useEffect)((function(){if(e)return window.addEventListener("click",g),function(){window.removeEventListener("click",g)}})),Object(c.useEffect)((function(){function n(){return(n=Object(p.a)(u.a.mark((function n(){var e,t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://stormy-shore-10716.herokuapp.com/photos/"+r);case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,m(t.likes);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}r&&function(){n.apply(this,arguments)}()}),[r]),Object(b.jsx)(L,{vis:e,className:"img-frame",children:Object(b.jsxs)("div",{className:"display-wrap",children:[Object(b.jsx)("button",{onClick:a,className:"direct-btn prev",children:Object(b.jsx)(B.b,{className:"icon-left"})}),Object(b.jsx)(j,{src:i?"https://stormy-shore-10716.herokuapp.com/images/"+i:""}),Object(b.jsx)("button",{onClick:s,className:"direct-btn next",children:Object(b.jsx)(B.c,{className:"icon-right"})}),Object(b.jsx)(C,{toggleVis:x}),Object(b.jsx)("div",{className:"content-wrap",children:Object(b.jsx)(E,{likeCount:f,setLikeCount:m,imgID:r})})]})})}var _,J=t.p+"static/media/at.7784889c.png",T=t(24),F=h.b.div(_||(_=Object(r.a)(["\n  .img-wrap {\n    display: grid;\n    gap: 2px;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    grid-auto-flow: row;\n    justify-content: center;\n    width: 98%;\n    margin: 0 auto;\n  }\n\n  section {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    color: ",";\n\n    img {\n      margin-top: 50px;\n    }\n\n    h1 {\n      margin: 0 30px;\n      margin-top: 70px;\n      max-width: 500px;\n      text-align: center;\n      font-size: 1.5em;\n    }\n\n    .icon-wrap {\n      height: 100%;\n      width: 100%;\n      padding-bottom: 80px;\n      display: flex;\n      align-items: flex-end;\n      justify-content: center;\n    }\n\n    .icon-down {\n      font-size: 50px;\n      cursor: pointer;\n\n      &:hover,\n      &:active {\n        color: ",";\n        transition: color 300ms ease;\n      }\n    }\n  }\n\n  @media (min-width: 1080px) {\n    .img-wrap {\n      width: 80%;\n    }\n  }\n\n  @media (max-width: 540px) {\n    .img-wrap {\n      width: 99%;\n      grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));\n    }\n  }\n"])),I.blue,I.lightBlue);var q,G=function(){var n=Object(c.useState)(null),e=Object(d.a)(n,2),t=e[0],i=e[1],r=Object(c.useState)(null),a=Object(d.a)(r,2),s=a[0],l=a[1],h=Object(c.useState)(null),f=Object(d.a)(h,2),m=f[0],x=f[1],j=Object(c.useState)(z()),v=Object(d.a)(j,2),O=v[0],y=v[1],k=Object(c.useState)(!1),I=Object(d.a)(k,2),N=I[0],C=I[1];function z(n){return t&&n?t.map((function(n){return n.key})).indexOf(n):null}var S=function(){var n=0===O?0:O-1,e=t[n];l(e.key),x(e._id),y(n)},V=function(){var n=O===t.length-1?O:O+1,e=t[n];l(e.key),x(e._id),y(n)};Object(c.useEffect)((function(){function n(){return(n=Object(p.a)(u.a.mark((function n(){var e,t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://stormy-shore-10716.herokuapp.com/photos");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,i(t);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),Object(c.useEffect)((function(){return window.onkeydown=function(n){37===n.keyCode&&S();39===n.keyCode&&V()},function(){window.keydown=null}}));var A=t&&t.map((function(n){var e=n._id,t=n.key;return Object(b.jsx)(o.a.Fragment,{children:Object(b.jsx)(w,{activeIdx:O,setActiveIdx:y,getActiveIndex:z,setKey:l,setID:x,setModalVis:C,imgKey:t,imgID:e,children:Object(b.jsx)(g,{imgKey:t})})},e)}));return Object(b.jsxs)(F,{children:[Object(b.jsxs)("section",{children:[Object(b.jsx)("img",{src:J,alt:"AT"}),Object(b.jsx)("h1",{children:"A collection of photos taken during my 2019 thru-hike attempt"}),Object(b.jsx)("div",{className:"icon-wrap",children:Object(b.jsx)(B.a,{className:"icon-down",onClick:function(){T.scroller.scrollTo("scroll-target",{smooth:"easeOutCubic",offset:-20})}})})]}),Object(b.jsx)(T.Element,{name:"scroll-target",children:Object(b.jsx)("div",{className:"img-wrap",children:A||Object(b.jsx)("div",{children:"Loading..."})})}),Object(b.jsx)(M,{vis:N,imgKey:s,imgID:m,setVis:C,clearActive:function(){x(null),l(null),y(null)},prevImg:S,nextImg:V})]})},H=Object(h.a)(q||(q=Object(r.a)(["\n  *,\n  *::before,\n  *::after {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-size: 16px;\n    font-family: 'Noto Sans', sans-serif;\n  }\n\n  body {\n    background: ",';\n\n    button,\n    input[type="submit"] {\n      border-style: none;\n      border: none;\n      background: ',";\n      color: ",";\n    }\n  }\n"])),I.black,I.blue,I.lightBlue);s.a.render(Object(b.jsxs)(o.a.StrictMode,{children:[Object(b.jsx)(H,{}),Object(b.jsx)(G,{})]}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.6fd6a804.chunk.js.map