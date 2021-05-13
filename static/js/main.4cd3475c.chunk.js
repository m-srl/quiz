(this["webpackJsonpcomputer-quiz"]=this["webpackJsonpcomputer-quiz"]||[]).push([[0],{20:function(e,n,t){},21:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var r,i,a,s,o,c,d,l,h=t(0),m=t.n(h),p=t(7),b=t.n(p),f=(t(20),t(4)),u=[{question:"Which of the following is an example of an Operating System(OS)?",answers:["Microsoft Office","Adobe Photoshop","Windows 10","Wikipedia"],correct:2,id:1},{question:"What do you call a portable computer?",answers:["Desktop","Laptop","Booknote","CompuLight"],correct:1,id:2},{question:"What memory capacity listed below is the largest?",answers:["100,000 MB","1,000,000 KB","1,000 GB","10,000 TB"],correct:3,id:3},{question:"Which of the following is not a web browser?",answers:["Chrome","Firefox","Opera","Maxtron"],correct:3,id:4},{question:"What device is used to display information from a computer?",answers:["Mouse","Speakers","Monitor","USB"],correct:2,id:5},{question:"What WWW stands for?",answers:["World Web Wired","Websites World Wonders","Word World Webs","World Wide Web"],correct:3,id:6},{question:"What is an ISP?",answers:["International Services Presenter","Internet Service Provider","Internal Security Protocol","Internet Service Program"],correct:1,id:7},{question:"Which of the following is a storage device?",answers:["Solid-State Drive","Motherboard","Network Adapter","Graphics Card"],correct:0,id:8},{question:"What is a folder?",answers:["A virus","A bug","A container where files can be stored","A location on a website"],correct:2,id:9},{question:"The hexadecimal number system consists of what symbols?",answers:["0 \u2013 7","0 \u2013 9 , A \u2013 F","0 \u2013 7, A \u2013 F","0 - 1"],correct:1,id:10},{question:"Compact discs, (according to the original CD specifications) hold how many minutes of music?",answers:["74 min","90 min","56 min","60 min"],correct:0,id:11},{question:"Which of the following is an example of non-volatile memory?",answers:["Cache memory","RAM","ROM","IOPS"],correct:2,id:12},{question:"What is the definition of shareware?",answers:["Software that is free","Software that is free on a trial basis","Software that was announced but not launched","Shared data on a computer"],correct:1,id:13},{question:"What type of malware blocks access to data unless the victim pays money?",answers:["Adware","Ransomware","Trojan Horse","Spyware"],correct:1,id:14},{question:"What is the error message of HTTP 404?",answers:["Server not found","Forbidden","No internet","Server found"],correct:0,id:15}],g=(t(21),t(2)),w=t(3),x=t(1),j=w.a.div(r||(r=Object(g.a)(["\n\n\n  min-height: 30vh;\n  position: relative;\n  width: 70%;\n  margin: 1rem 1rem 0 1rem;\n  border: 1px solid rgb(77, 175, 255);\n  padding: 2rem;\n  border-radius: 1rem;\n  h1 {\n    text-align: center;\n  }\n  ol {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    text-align: center;\n    padding: 0 1rem;\n  }\n  li {\n    line-height: 2rem;\n    text-align:left\n  }\n\n  @media screen and (max-width:1200px){\n  max-width:50%;\n}\n@media screen and (max-width:760px){\n  max-width:80%;\n  width:80%;\n  margin:5%;\n  }\n"]))),y=function(e){return!e.gameFinished&&Object(x.jsxs)(j,{children:[Object(x.jsx)("h1",{children:"Test Your Computer Knowledge - Quiz"}),Object(x.jsx)("h3",{children:"Rules:"}),Object(x.jsxs)("ol",{children:[Object(x.jsx)("li",{children:"Only one answer is correct"}),Object(x.jsx)("li",{children:"The game stops when the player wins the highest prize after guessing correctly 15 times, quits or guesses wrong "}),Object(x.jsxs)("li",{children:["The player can use two helping options: Search on google for 30 seconds or 50/50 which removes 2 wrong answers"," "]}),Object(x.jsx)("li",{children:"Time is not of the essence, don't cheat"})]})]})},O=t.p+"static/media/google.10290fd5.svg",v=w.a.p(i||(i=Object(g.a)(['\n  width: 90%;\n  margin: 0.4rem;\n  text-align: center;\n  border-radius: 2rem;\n  padding: 0.2rem 0 0.4rem 0;\n  position: relative;\n  &:is(.money-item10, .money-item5)::after {\n    content: "";\n    margin-left: 1rem;\n    width: 50px;\n    background: white;\n    height: 3px;\n    right: 5%;\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    @media screen and (max-width: 550px) {\n      width: 10px;\n    }\n  }\n  &:is(.money-item10, .money-item5)::before {\n    content: "";\n    margin-right: 1rem;\n    width: 50px;\n    background: white;\n    height: 3px;\n    position: absolute;\n    top: 50%;\n    left: 5%;\n    transform: translateY(-50%);\n    @media screen and (max-width: 550px) {\n      width: 10px;\n    }\n  }\n']))),S=function(e){var n=e.id,t=e.item;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(v,{className:"money-item".concat(n," money-item"),children:"".concat(n," : ").concat(t)})})},k=t.p+"static/media/timeup.7736daf3.mp3",F=["$1,000,000","$500,000","$250,000","$125,000","$50,000","$25,000","$10,000","$5,000","$2,500","$1,000","$500","$400","$300","$200","$100"],W=[].concat(F).reverse(),C=w.a.div(a||(a=Object(g.a)(["\n  width: 20%;\n  position: fixed;\n  top: 0;\n  right: 2vw;\n\n  > div {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n\n    margin: 1rem 0 2rem 0;\n  }\n  .current {\n    background: orange;\n    width: 90%;\n    color: black;\n  }\n  .current::after,\n  .current::before {\n    background: black;\n  }\n  .past {\n    background: transparent;\n    color: #00ff00;\n  }\n  .end-timer {\n    display: none;\n  }\n  p {\n  }\n  .money,\n  .helper {\n    border: 1px solid rgb(77, 175, 255);\n    border-radius: 1rem;\n  }\n  .money {\n    font-size: 1.1rem;\n    font-weight: 500;\n    .step {\n      display: static;\n    }\n    .step-text {\n      display: inline-block;\n      position: relative;\n    }\n    .step-line {\n      display: inline-block;\n      width: 6rem;\n      margin: 0 1rem 0.3rem 1rem;\n      position: relative;\n      vertical-align: middle;\n    }\n  }\n\n  .helper-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n  .helper {\n    &:hover {\n      background-color: rgba(22, 134, 253, 0.6);\n      transition: 1s ease;\n    }\n    cursor: pointer;\n    position: relative;\n    width: 10rem;\n    height: 10rem;\n    .fifty-top,\n    .fifty-bottom,\n    .fifty-line {\n      position: absolute;\n      font-size: 1.7rem;\n      pointer-events: none;\n    }\n    .fifty-line {\n      transform: rotate(-45deg);\n      left: 50%;\n      top: 40%;\n      transform: translate(-50%, -50%) rotate(-45deg);\n      width: 7rem;\n    }\n    .fifty-top {\n      top: 2rem;\n      left: 2rem;\n    }\n    .fifty-bottom {\n      bottom: 2rem;\n      right: 2rem;\n    }\n  }\n  .google {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .google img {\n    width: 60%;\n  }\n  .disabled-helper {\n    pointer-events: none;\n  }\n  .grey {\n    color: grey;\n  }\n  @media screen and (max-width: 1200px) {\n    width: 35%;\n    p {\n      margin: 0.2rem;\n    }\n    .helper-container {\n      justify-content: space-around;\n    }\n    .helper {\n      width: 6rem;\n      height: 6rem;\n      user-select: none;\n      .fifty-line {\n        top: 35%;\n      }\n      .fifty-top {\n        top: 0.5rem;\n        left: 1rem;\n      }\n      .fifty-bottom {\n        bottom: 0.5rem;\n        right: 1rem;\n      }\n    }\n  }\n  @media screen and (max-width: 760px) {\n    position: static;\n    width: 50%;\n    margin: 0 auto;\n  }\n"]))),M=function(e){var n=e.counter,t=e.setUsedFiftyFifty,r=e.gameFinished;Object(h.useLayoutEffect)((function(){for(var e=document.querySelectorAll(".money-item"),t=0;t<e.length;t++)t===n?(e[e.length-1-t].classList.add("current"),e.length-t<15&&e[e.length-t].classList.add("past")):e[e.length-1-t].classList.remove("current");console.log(e[0])}),[n]);var i=new Audio(k);Object(h.useEffect)((function(){}),[r]);return Object(x.jsxs)(C,{children:[Object(x.jsx)("div",{className:"money",children:F.map((function(e,t){return Object(x.jsx)(S,{item:e,counter:n,id:F.length-t,className:"money-row".concat(F.length-t," current-row").concat(n)},t)}))}),r?null:Object(x.jsxs)("div",{className:"helper-container",children:[Object(x.jsx)("div",{role:"img",alt:"heart",onClick:function(){var e=document.getElementById("google");e.classList.add("disabled-helper");var n=document.createElement("h1"),t=30;n.innerText="GO";var r=setInterval((function(){n.innerText="".concat(t),--t<0&&(clearInterval(r),e.classList.add("grey"),i.play())}),1e3);e.removeChild(e.childNodes[0]),e.appendChild(n)},className:"helper google",id:"google",children:Object(x.jsx)("img",{className:"google-image",src:O,alt:"search on google"})}),Object(x.jsxs)("div",{onClick:function(){document.getElementById("fifty").classList.add("disabled-helper","grey"),t(!0)},className:"helper",id:"fifty",children:[Object(x.jsx)("span",{className:"fifty-top",children:"50"}),Object(x.jsx)("hr",{className:"fifty-line"}),Object(x.jsx)("span",{className:"fifty-bottom",children:"50"})]})]})]})},N={type:"INCREMENT"},q=w.a.div(s||(s=Object(g.a)(["\n  @media screen and (max-width: 1200px) {\n    max-width: 50%;\n  }\n  @media screen and (max-width: 1000px) {\n    /* max-width:80%; */\n    .answer {\n      min-width: 70%;\n    }\n  }\n  @media screen and (max-width: 760px) {\n    /* max-width:80%; */\n    max-width: 80%;\n    margin: 5%;\n  }\n"]))),L=w.a.div(o||(o=Object(g.a)(["\n  display: flex;\n  width: 70%;\n  margin: 2rem 1rem;\n  border: 1px solid rgb(77, 175, 255);\n  border-radius: 1rem;\n  padding: 1rem 2rem;\n  justify-content: center;\n  user-select: none;\n  h4 {\n    font-size: 2rem;\n    text-align: center;\n  }\n  @media screen and (max-width: 1200px) {\n    width: 100%;\n  }\n  @media screen and (max-width: 760px) {\n    margin: 1rem 0;\n  }\n"]))),T=w.a.div(c||(c=Object(g.a)(['\n  display: flex;\n  width: 70%;\n  margin: 2rem 1rem 1rem 1rem;\n  border: 1px solid rgb(77, 175, 255);\n  border-radius: 1rem;\n  padding: 2rem 2rem;\n  justify-content: center;\n  flex-wrap: wrap;\n\n  .arrow-border {\n    display: inline-block;\n    position: relative;\n    margin: 1rem 3rem;\n    padding: 1.2rem 1rem;\n    font-size: 1.1rem;\n    line-height: 18px;\n    font-family: arial, helvetica, sans-serif;\n    border: 2px solid rgb(77, 175, 255);\n    border-right: none;\n    border-left: none;\n    border-radius: 5px 0 0 5px;\n    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.4);\n    width: 100%;\n    flex-basis: 35%;\n    flex-wrap: nowrap;\n    flex-grow: 0;\n    /* flex-grow: 0; */\n    text-align: center;\n    font-size: 1.3rem;\n  }\n\n  .arrow-border::after {\n    content: "";\n    position: absolute;\n    display: inline-block;\n    top: 0.45rem;\n    right: -1.3rem;\n    width: 2.5rem;\n    height: 2.55rem;\n    border-top: 2px solid rgb(77, 175, 255);\n    border-right: 2px solid rgb(77, 175, 255);\n    box-shadow: 4px 0 2px -2px rgba(0, 0, 0, 0.4);\n    transform: rotate(45deg);\n    background: attr(color-value);\n  }\n\n  .arrow-border::before {\n    content: "";\n    position: absolute;\n    display: inline-block;\n    top: 0.45rem;\n    left: -1.12rem;\n    width: 2.5rem;\n    height: 2.55rem;\n    border-top: 2px solid rgb(77, 175, 255);\n    border-left: 2px solid rgb(77, 175, 255);\n    box-shadow: 4px 0 -2px -2px rgba(0, 0, 0, 0.4);\n    transform: rotate(-45deg);\n  }\n  .disable-answers {\n    pointer-events: none;\n  }\n  .winner {\n    &,\n    ::before,\n    ::after {\n      background: green;\n    }\n  }\n\n  .loser {\n    color: black;\n    &,\n    ::before,\n    ::after {\n      background: orange;\n    }\n  }\n\n  .answer {\n    cursor: pointer;\n  }\n  @media screen and (max-width: 1200px) {\n    width: 100%;\n  }\n  @media screen and (max-width: 760px) {\n    margin: 1rem 0;\n  }\n']))),I=w.a.div(d||(d=Object(g.a)(["\n  display: flex;\n  width: 70%;\n  margin: 0rem 1rem;\n  padding: 0rem 2rem;\n  justify-content: center;\n  user-select: none;\n  button {\n    padding: 1rem 4rem;\n    font-size: 1.3rem;\n    background: #0f82b8;\n    border: 1px solid rgb(77, 175, 255);\n    color: white;\n    cursor: pointer;\n    border-radius: 0.5rem;\n    &:hover {\n      background: #16a7eb;\n      transition: 1s ease;\n    }\n  }\n  @media screen and (max-width: 1200px) {\n    width: 100%;\n  }\n  @media screen and (max-width: 760px) {\n    margin: 1rem 0;\n  }\n"]))),A=function(e){var n=e.counter,t=e.dispatch,r=e.usedFiftyFifty,i=e.setUsedFiftyFifty,a=e.setMillionaire,s=e.answersCorrect,o=e.setAnswersCorrect,c=e.setPlayerQuit,d=e.setReachedFirstStep,l=e.setReachedSecondStep,m=e.reachedSecondStep,p=e.reachedFirstStep,b=e.setPlayerLost,g=e.currentMoney,w=e.setCurrentMoney,j=e.moneyArray,y=e.gameFinished,O=e.setGameFinished,v=Object(h.useState)(!0),S=Object(f.a)(v,2),k=S[0],F=S[1],W=function(e){var r=document.querySelectorAll(".answer"),i=u[n].answers[u[n].correct],c=u[n].correct,h=e.currentTarget;if(e.currentTarget.innerText===i){o((function(e){return e+1})),w(j[s-1]),console.log(s),15===s?(a(!0),O(!0)):s>=10?l(!0):s>=5&&d(!0),h.classList.toggle("winner");for(var f=setInterval((function(){h.classList.toggle("winner")}),400),g=0;g<r.length;g++)r[g].classList.add("disable-answers"),r[g].innerText!==i&&r[g].classList.add("loser");setTimeout((function(){clearInterval(f);for(var e=0;e<r.length;e++)r[e].classList.remove("winner","loser","disable-answers");n<u.length-1&&t(N),n===u.length-1&&F(!1)}),2e3),r.forEach((function(e){return e.childNodes[0].style.visibility="visible"}))}else{h.classList.add("loser");for(var x=0;x<r.length;x++)r[x].classList.add("disable-answers");var y=setInterval((function(){r[c].classList.toggle("winner")}),400);setTimeout((function(){clearInterval(y);for(var e=0;e<r.length;e++)r[e].classList.remove("winner","loser","disable-answers");F(!1),O(!0)}),2e3),b(!0),w(m?j[9]:p?j[4]:0)}},C=function(){if(r){for(var e=document.querySelectorAll(".answer"),t=u[n].correct,i=Math.floor(3*Math.random()),a=[],s=[],o=0;o<e.length;o++)s.push(o);s.splice(t,1);for(var c=0;c<1e3;c++)if(-1===a.indexOf(i)&&a.length<2)a.push(i),i=Math.floor(3*Math.random());else{if(a.length>=2)break;i=Math.floor(3*Math.random())}e[s[0]].childNodes[0].style.visibility="hidden",e[s[2]].childNodes[0].style.visibility="hidden"}};return C(),Object(h.useEffect)((function(){i(!1)}),[C]),k&&!y&&Object(x.jsxs)(q,{children:[Object(x.jsx)(L,{children:Object(x.jsx)("h4",{children:u[n].question})}),Object(x.jsxs)(T,{children:[Object(x.jsx)("p",{onClick:W,className:"arrow-border answer",children:Object(x.jsx)("span",{children:u[n].answers[0]})}),Object(x.jsx)("p",{onClick:W,className:"arrow-border answer",children:Object(x.jsx)("span",{children:u[n].answers[1]})}),Object(x.jsx)("p",{onClick:W,className:"arrow-border answer",children:Object(x.jsx)("span",{children:u[n].answers[2]})}),Object(x.jsx)("p",{onClick:W,className:"arrow-border answer",children:Object(x.jsx)("span",{children:u[n].answers[3]})})]}),Object(x.jsx)(I,{children:Object(x.jsx)("button",{onClick:function(){0!==g?(c(!0),setTimeout((function(){O(!0)}),300)):alert("You can't withdraw before answering the first question")},children:"Withdraw"})})]})},$=w.a.div(l||(l=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction:column;\n  min-height: 30vh;\n  position: relative;\n  width: 70%;\n  margin: 1rem 1rem 0 1rem;\n  border: 1px solid rgb(77, 175, 255);\n  padding: 2rem;\n  border-radius: 1rem;\n  animation: transitionTop 4s ease forwards;\n\n  h1,\n  h2 {\n    text-align: center;\n  }\n  h2 {\n    animation: scaleInOut 2s ease forwards;\n    font-size: 3rem;\n    color: green;\n  }\n\n  @media screen and (max-width: 1200px) {\n    width: 50%;\n  }\n  @keyframes scaleInOut {\n    from {\n      transform: scale(1);\n    }\n    to {\n      transform: scale(1.5);\n    }\n  }\n  @keyframes transitionTop {\n    from {\n      transform: translateY(100%);\n      opacity: 0;\n    }\n    to {\n      transform: translateY(50%);\n\n      opacity: 1;\n    }\n  }\n"]))),E=function(e){var n=e.millionaire,t=e.reachedFirstStep,r=e.reachedSecondStep,i=e.playerQuit,a=e.playerLost,s=e.currentMoney;return e.gameIsFinished?n?Object(x.jsxs)($,{children:[Object(x.jsx)("h1",{children:"Congratulations, you managed to win milion:"}),Object(x.jsx)("h2",{children:s})]}):i?Object(x.jsxs)($,{children:[Object(x.jsx)("h1",{children:"Congratulations, you withdrew with this amount of money:"}),Object(x.jsx)("h2",{children:s})]}):a?r?Object(x.jsxs)($,{children:[Object(x.jsx)("h1",{children:"Congratulations, you managed to reach the second step and won:"}),Object(x.jsx)("h2",{children:s})]}):t?Object(x.jsxs)($,{children:[Object(x.jsx)("h1",{children:"Congratulations, you reached the first step and won:"}),Object(x.jsx)("h2",{children:s})]}):Object(x.jsx)($,{children:Object(x.jsx)("h1",{children:"You lost the game."})}):null:null},P=t(6);var z=function(){var e=Object(P.c)((function(e){return e})),n=Object(P.b)(),t=Object(h.useState)(!1),r=Object(f.a)(t,2),i=r[0],a=r[1],s=Object(h.useState)(!1),o=Object(f.a)(s,2),c=o[0],d=o[1],l=Object(h.useState)(!1),m=Object(f.a)(l,2),p=m[0],b=m[1],u=Object(h.useState)(!1),g=Object(f.a)(u,2),w=g[0],j=g[1],O=Object(h.useState)(!1),v=Object(f.a)(O,2),S=v[0],k=v[1],F=Object(h.useState)(1),C=Object(f.a)(F,2),N=C[0],q=C[1],L=Object(h.useState)(!1),T=Object(f.a)(L,2),I=T[0],$=T[1],z=Object(h.useState)(0),R=Object(f.a)(z,2),B=R[0],Y=R[1],G=Object(h.useState)(!1),Q=Object(f.a)(G,2),U=Q[0],D=Q[1];return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(y,{gameFinished:U}),Object(x.jsx)(A,{gameFinished:U,setGameFinished:D,moneyArray:W,currentMoney:B,setCurrentMoney:Y,reachedFirstStep:p,setReachedFirstStep:b,reachedSecondStep:w,setReachedSecondStep:j,setPlayerLost:$,setPlayerQuit:k,answersCorrect:N,setAnswersCorrect:q,setMillionaire:d,usedFiftyFifty:i,setUsedFiftyFifty:a,counter:e,dispatch:n}),Object(x.jsx)(M,{gameFinished:U,setUsedFiftyFifty:a,counter:e}),Object(x.jsx)(E,{gameIsFinished:U,currentMoney:B,playerLost:I,playerQuit:S,reachedFirstStep:p,reachedSecondStep:w,millionaire:c})]})},R=t(15),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"INCREMENT":return e+1;default:return e}},Y=Object(R.a)(B);b.a.render(Object(x.jsx)(m.a.StrictMode,{children:Object(x.jsx)(P.a,{store:Y,children:Object(x.jsx)(z,{})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.4cd3475c.chunk.js.map