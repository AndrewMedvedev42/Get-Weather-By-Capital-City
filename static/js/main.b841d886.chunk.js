(this["webpackJsonpyour-new-project"]=this["webpackJsonpyour-new-project"]||[]).push([[0],{19:function(e,t,c){},20:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(8),o=c.n(r),a=c(2),i=c(9),j=c.n(i),l=c(3),u=c(0);var h=function(e){var t,c=e.name,s=Object(n.useState)([]),r=Object(a.a)(s,2),o=r[0],i=r[1],h=Object(n.useState)(),b=Object(a.a)(h,2),O=b[0],d=b[1],m=Object(n.useState)([]),f=Object(a.a)(m,2),p=f[0],x=f[1],g="https://restcountries.eu/rest/v2/name/".concat(c);function y(e){return 1==e?"Tommorow":2==e?"After tommorow":"After the day after tomorrow"}return Object(n.useEffect)((function(){Object(l.trackPromise)(fetch(g).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e[0].capital;return x(e[0]),d(t),fetch("https://goweather.herokuapp.com/weather/".concat(t))})).then((function(e){return e.json()})).then((function(e){console.log(e),i(e)})).catch((function(e){return alert(e)})))}),[g]),o.forecast?t=o.forecast.map((function(e){var t=e.day,c=e.temperature,n=e.wind;return Object(u.jsxs)("div",{className:"forecastSlot",children:[Object(u.jsx)("h1",{children:y(t)}),Object(u.jsxs)("h2",{children:["Temp: ",c]}),Object(u.jsxs)("h2",{children:["Wind: ",n]})]},t)})):console.log("No forecast"),Object(u.jsx)(j.a,{children:Object(u.jsxs)("section",{className:"weatherDetails",children:[Object(u.jsxs)("article",{className:" slotstyle currentWeather",children:[Object(u.jsx)("h1",{children:"".concat(p.name,": ").concat(O)}),Object(u.jsx)("h2",{children:o.description}),Object(u.jsxs)("h2",{children:["Temp: ",o.temperature]}),Object(u.jsxs)("h2",{children:["Wind: ",o.wind]})]}),Object(u.jsxs)("section",{className:"slotstyle",children:[Object(u.jsx)("h1",{children:"Daily Forecast"}),Object(u.jsx)("div",{className:"forecastSection",children:t})]})]})})};c(19);var b=function(){var e=Object(n.useState)(),t=Object(a.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)("Usa"),o=Object(a.a)(r,2),i=o[0],j=o[1],b=function(e){return Object(l.usePromiseTracker)().promiseInProgress&&Object(u.jsx)("h1",{className:"loadingMessage slotstyle",children:"Hey some async call in progress ! "})};return console.log(c),Object(u.jsxs)("section",{className:"mainSection",children:[Object(u.jsxs)("section",{className:"slotstyle inputSection",children:[Object(u.jsx)("input",{type:"text",onChange:function(e){s(e.target.value)},autoComplete:"on"}),Object(u.jsx)("button",{onClick:function(){j(c)},children:"Press"})]}),Object(u.jsx)(b,{}),Object(u.jsx)(h,{name:i})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,21)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),r(e),o(e)}))};o.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),O()}},[[20,1,2]]]);
//# sourceMappingURL=main.b841d886.chunk.js.map