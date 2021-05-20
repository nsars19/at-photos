(this["webpackJsonpat-photo-display"]=this["webpackJsonpat-photo-display"]||[]).push([[0],{58:function(n,e,t){"use strict";t.r(e);var i,r=t(3),a=t(1),c=t.n(a),o=t(12),s=t.n(o),l=t(5),u=t.n(l),p=t(6),d=t(7),h=t(4),b=t(31),f=t.n(b),m=t(2),x=h.b.img(i||(i=Object(r.a)(["\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  transition: filter 300ms ease-in, opacity 300ms ease-in;\n"])));function g(n){var e=n.src,t=n.alt,i=n.style,r=n.className;return Object(m.jsx)(x,{src:e,alt:t||"desc",style:i||{},className:r?r+" image":"image",loading:"lazy"})}function j(n){var e=n.imgKey;return Object(m.jsx)(f.a,{delay:1e3,src:"https://stormy-shore-10716.herokuapp.com/images/".concat(e),placeholder:"https://stormy-shore-10716.herokuapp.com/images/tiny-".concat(e),children:function(n,e){return Object(m.jsx)(g,{src:n,style:{filter:e?"blur(20px)":"blur(0px)"}})}})}var v,O=t(32),y=h.b.div(v||(v=Object(r.a)(["\n  overflow: hidden;\n  height: 200px;\n  transition: opacity 300ms ease-in;\n  opacity: ",";\n  cursor: pointer;\n\n  &:hover,\n  &:active {\n    z-index: 2;\n    filter: brightness(0.7);\n  }\n\n  @media (max-width: 540px) {\n    height: 100px;\n  }\n"])),(function(n){return n.inView?100:0}));function k(n){var e=n.imgKey,t=n.setKey,i=n.setModalVis,r=n.children,a=n.setID,c=n.imgID,o=n.setActiveIdx,s=n.getActiveIndex,l=Object(O.a)({triggerOnce:!0,threshold:.3}),u=l.ref,p=l.inView;return Object(m.jsx)(y,{ref:u,inView:p,onClick:function(){t(e),a(c),o(s(e)),i(!0)},children:r})}var w,z={black:"#1b262c",darkBlue:"#0f4c75",blue:"#3282b8",lightBlue:"#bbe1fa"},I=h.b.div(w||(w=Object(r.a)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: #aaa4;\n  height: 40px;\n  width: 40px;\n\n  span {\n    display: block;\n    width: 15px;\n    height: 2px;\n    background: #777;\n\n    &:first-child {\n      transform: rotate(45deg);\n      position: absolute;\n    }\n    &:last-child {\n      transform: rotate(-45deg);\n      position: absolute;\n    }\n  }\n\n  &:hover,\n  &:active {\n    cursor: pointer;\n    background: #aaa7;\n\n    span {\n      background: #333;\n    }\n  }\n"])));function N(n){var e=n.toggleVis;return Object(m.jsxs)(I,{onClick:e,children:[Object(m.jsx)("span",{}),Object(m.jsx)("span",{})]})}var C,S=t(33),V=t(34),A=t.n(V),D=h.b.div(C||(C=Object(r.a)(["\n  padding: 10px;\n  display: flex;\n  align-items: flex-start;\n\n  button {\n    background: none;\n  }\n\n  .icon {\n    cursor: pointer;\n    font-size: 1.5rem;\n    color: ",";\n  }\n\n  p {\n    font-size: 16px;\n    margin-left: 4px;\n    color: ",";\n  }\n"])),z.blue,z.lightBlue);function E(n){var e=n.likeCount,t=n.setLikeCount,i=n.imgID,r=function(){var n=Object(p.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://stormy-shore-10716.herokuapp.com/photos/unlike/"+i).then(function(){var n=Object(p.a)(u.a.mark((function n(e){var r,a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.json();case 2:r=n.sent,a=r.likes,t(a),localStorage.removeItem(i);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),a=function(){var n=Object(p.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://stormy-shore-10716.herokuapp.com/photos/like/"+i).then(function(){var n=Object(p.a)(u.a.mark((function n(e){var r,a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.json();case 2:r=n.sent,a=r.likes,t(a),localStorage.setItem(i,!0);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(m.jsxs)(D,{children:[Object(m.jsx)("button",{onClick:function(){"true"===localStorage.getItem(i)?r():a()},children:Object(m.jsx)(S.a,{className:"icon"})}),e||null!==e?Object(m.jsx)("p",{children:e}):Object(m.jsx)(A.a,{})]})}var K,B=t(8),L=h.b.div(K||(K=Object(r.a)(["\n  display: ",';\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  z-index: 3;\n  height: 100vh;\n  width: 100vw;\n  background: #000a;\n\n  img {\n    height: fit-content;\n    max-height: 90vh;\n    object-fit: cover;\n  }\n\n  img[src=""] {\n    display: none;\n  }\n\n  .display-wrap {\n    margin: auto 5px;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    background: ',";\n    border-radius: 16px;\n    overflow: hidden;\n    box-shadow: 0 0 1.4px #0008, 0 0 2.5px #0008, 0 0 7px #0008, 0 0 14px #0002;\n  }\n\n  @media (max-width: 768px) {\n    .display-wrap {\n      margin: auto 15px;\n    }\n  }\n\n  .content-wrap {\n    height: 100%;\n    overflow-y: scroll;\n    scrollbar-width: none;\n    position: relative;\n    z-index: 2;\n  }\n\n  .direct-btn {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 60px;\n    background: transparent;\n    cursor: pointer;\n    position: absolute;\n    top: 0;\n    outline: none;\n\n    &:hover .icon-left,\n    &:hover .icon-right,\n    &:active .icon-left,\n    &:active .icon-right {\n      color: ",";\n      transition: color 50ms ease;\n    }\n\n    &:focus .icon-left,\n    &:focus .icon-right {\n      color: ",";\n      transition: color 50ms ease;\n    }\n  }\n\n  .prev {\n    left: 0;\n  }\n\n  .next {\n    right: 0;\n  }\n\n  .icon-left,\n  .icon-right {\n    font-size: 40px;\n    color: ","aa;\n  }\n\n  @media (max-width: 1068px) {\n    width: fit-content;\n  }\n"])),(function(n){return n.vis?"flex":"none"}),z.black,z.blue,z.blue,z.black);function M(n){var e=n.vis,t=n.setVis,i=n.imgKey,r=n.imgID,c=n.clearActive,o=n.prevImg,s=n.nextImg,l=Object(a.useState)(null),h=Object(d.a)(l,2),b=h[0],f=h[1],x=function(){t(!1),c()},j=function(n){"path"!==n.target.nodeName&&"svg"!==n.target.nodeName&&n.target.className.includes("img-frame")&&x()};return Object(a.useEffect)((function(){if(e)return window.addEventListener("click",j),function(){window.removeEventListener("click",j)}})),Object(a.useEffect)((function(){function n(){return(n=Object(p.a)(u.a.mark((function n(){var e,t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://stormy-shore-10716.herokuapp.com/photos/"+r);case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,f(t.likes);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}r&&function(){n.apply(this,arguments)}()}),[r]),Object(m.jsx)(L,{vis:e,className:"img-frame",children:Object(m.jsxs)("div",{className:"display-wrap",children:[Object(m.jsx)("button",{onClick:o,className:"direct-btn prev",children:Object(m.jsx)(B.b,{className:"icon-left"})}),Object(m.jsx)(g,{src:i?"https://stormy-shore-10716.herokuapp.com/images/"+i:""}),Object(m.jsx)("button",{onClick:s,className:"direct-btn next",children:Object(m.jsx)(B.c,{className:"icon-right"})}),Object(m.jsx)(N,{toggleVis:x}),Object(m.jsx)("div",{className:"content-wrap",children:Object(m.jsx)(E,{likeCount:b,setLikeCount:f,imgID:r})})]})})}var _,J,T=t.p+"static/media/cover.dcf3806d.jpg",F=t(24),q=t(35),G=t(36),H=h.b.div(_||(_=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n  .spinner {\n    color: ",";\n    font-size: ","px;\n    animation: rotate 3s cubic-bezier(0.79, 0.14, 0.15, 0.86) infinite;\n  }\n\n  @keyframes rotate {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"])),z.blue,(function(n){return n.size}));function P(n){var e=n.size,t=void 0===e?40:e;return Object(m.jsx)(H,{size:t,children:Object(m.jsx)(G.a,{className:"spinner"})})}var Q=h.b.div(J||(J=Object(r.a)(["\n  .img-wrap {\n    display: grid;\n    gap: 2px;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    grid-auto-flow: row;\n    justify-content: center;\n    width: 98%;\n    margin: 0 auto;\n  }\n\n  .overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    height: 100vh;\n    width: 100%;\n    background: linear-gradient(\n      to bottom,\n      ","cc 1%,\n      transparent 85%,\n      ","aa\n    );\n  }\n\n  section {\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-attachment: fixed;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    color: ",";\n    margin-bottom: 10px;\n\n    img {\n      margin-top: 50px;\n    }\n\n    h1 {\n      margin: 0 30px;\n      margin-top: 70px;\n      max-width: 500px;\n      text-align: center;\n      font-size: 1.5rem;\n      z-index: 2;\n    }\n\n    .icon-wrap {\n      color: ",";\n      height: 100%;\n      width: 100%;\n      padding-bottom: 80px;\n      display: flex;\n      align-items: flex-end;\n      justify-content: center;\n      z-index: 2;\n    }\n\n    .icon-down {\n      font-size: 70px;\n      cursor: pointer;\n\n      &:hover,\n      &:active {\n        color: ",";\n        transition: color 300ms ease;\n      }\n    }\n  }\n\n  @media (min-width: 1080px) {\n    section h1 {\n      font-size: 2rem;\n    }\n\n    background: linear-gradient(\n      to bottom,\n      ","cc 1%,\n      transparent 65%,\n      transparent 85%,\n      ","aa\n    );\n\n    .img-wrap {\n      width: 80%;\n    }\n  }\n\n  @media (max-width: 540px) {\n    .img-wrap {\n      width: 99%;\n      grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));\n    }\n  }\n"])),z.black,z.black,T,z.lightBlue,z.lightBlue,z.blue,z.black,z.black);var R,U=function(){var n=Object(a.useState)(null),e=Object(d.a)(n,2),t=e[0],i=e[1],r=Object(a.useState)([]),o=Object(d.a)(r,2),s=o[0],l=o[1],h=Object(a.useState)(null),b=Object(d.a)(h,2),f=b[0],x=b[1],g=Object(a.useState)(null),v=Object(d.a)(g,2),O=v[0],y=v[1],w=Object(a.useState)(D()),z=Object(d.a)(w,2),I=z[0],N=z[1],C=Object(a.useState)(!1),S=Object(d.a)(C,2),V=S[0],A=S[1];function D(n){return t&&n?t.map((function(n){return n.key})).indexOf(n):null}var E=function(){var n=0===I?0:I-1,e=t[n];x(e.key),y(e._id),N(n)},K=function(){var n=I===t.length-1?I:I+1,e=t[n];x(e.key),y(e._id),N(n)};Object(a.useEffect)((function(){function n(){return(n=Object(p.a)(u.a.mark((function n(){var e,t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://stormy-shore-10716.herokuapp.com/photos");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,i(t),l(t.slice(0,10));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){return window.onkeydown=function(n){37===n.keyCode&&E();39===n.keyCode&&K()},function(){window.keydown=null}}));var L=t&&Object(m.jsx)(q.a,{dataLength:s.length,next:function(){l(t.slice(0,s.length+10))},hasMore:s.length!==t.length,loader:Object(m.jsx)(P,{size:30}),className:"img-wrap",name:"scroll-target",children:s.map((function(n){var e=n._id,t=n.key;return Object(m.jsx)(c.a.Fragment,{children:Object(m.jsx)(k,{activeIdx:I,setActiveIdx:N,getActiveIndex:D,setKey:x,setID:y,setModalVis:A,imgKey:t,imgID:e,children:Object(m.jsx)(j,{imgKey:t})})},e)}))});return Object(m.jsxs)(Q,{children:[Object(m.jsxs)("section",{children:[Object(m.jsx)("div",{className:"overlay"}),Object(m.jsx)("h1",{children:"A collection of photos taken during my 2019 Appalachian Trail thru-hike attempt"}),Object(m.jsx)("div",{className:"icon-wrap",children:Object(m.jsx)(B.a,{className:"icon-down",onClick:function(){F.scroller.scrollTo("scroll-target",{smooth:"easeOutCubic",offset:-20})}})})]}),Object(m.jsx)(F.Element,{name:"scroll-target"}),L||Object(m.jsx)(P,{}),Object(m.jsx)(M,{vis:V,imgKey:f,imgID:O,setVis:A,clearActive:function(){y(null),x(null),N(null)},prevImg:E,nextImg:K})]})},W=Object(h.a)(R||(R=Object(r.a)(["\n  *,\n  *::before,\n  *::after {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-size: 16px;\n    font-family: 'Noto Sans', sans-serif;\n  }\n\n  body {\n    background: ",';\n\n    button,\n    input[type="submit"] {\n      border-style: none;\n      border: none;\n      background: ',";\n      color: ",";\n    }\n  }\n"])),z.black,z.blue,z.lightBlue);s.a.render(Object(m.jsxs)(c.a.StrictMode,{children:[Object(m.jsx)(W,{}),Object(m.jsx)(U,{})]}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.ea6cc7b8.chunk.js.map