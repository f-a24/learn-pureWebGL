!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6)}([function(t,e,r){var n=r(1);"string"==typeof n&&(n=[[t.i,n,""]]);var o={insert:"head",singleton:!1};r(3)(n,o);n.locals&&(t.exports=n.locals)},function(t,e,r){(t.exports=r(2)(!1)).push([t.i,"*{margin:0;padding:0}canvas{width:100vw;height:100vh}\n",""])},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var o=(i=n,u=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),a=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot).concat(t," */")}));return[r].concat(a).concat([o]).join("\n")}var i,u,c;return[r].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(r,"}"):r})).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(n[a]=!0)}for(var i=0;i<t.length;i++){var u=t[i];null!=u[0]&&n[u[0]]||(r&&!u[2]?u[2]=r:r&&(u[2]="(".concat(u[2],") and (").concat(r,")")),e.push(u))}},e}},function(t,e,r){"use strict";var n,o={},a=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}();function u(t,e){for(var r=[],n={},o=0;o<t.length;o++){var a=t[o],i=e.base?a[0]+e.base:a[0],u={css:a[1],media:a[2],sourceMap:a[3]};n[i]?n[i].parts.push(u):r.push(n[i]={id:i,parts:[u]})}return r}function c(t,e){for(var r=0;r<t.length;r++){var n=t[r],a=o[n.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](n.parts[i]);for(;i<n.parts.length;i++)a.parts.push(b(n.parts[i],e))}else{for(var u=[];i<n.parts.length;i++)u.push(b(n.parts[i],e));o[n.id]={id:n.id,refs:1,parts:u}}}}function s(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var n=r.nc;n&&(t.attributes.nonce=n)}if(Object.keys(t.attributes).forEach((function(r){e.setAttribute(r,t.attributes[r])})),"function"==typeof t.insert)t.insert(e);else{var o=i(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var f,l=(f=[],function(t,e){return f[t]=e,f.filter(Boolean).join("\n")});function d(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function v(t,e,r){var n=r.css,o=r.media,a=r.sourceMap;if(o&&t.setAttribute("media",o),a&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var p=null,h=0;function b(t,e){var r,n,o;if(e.singleton){var a=h++;r=p||(p=s(e)),n=d.bind(null,r,a,!1),o=d.bind(null,r,a,!0)}else r=s(e),n=v.bind(null,r,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a());var r=u(t,e);return c(r,e),function(t){for(var n=[],a=0;a<r.length;a++){var i=r[a],s=o[i.id];s&&(s.refs--,n.push(s))}t&&c(u(t,e),e);for(var f=0;f<n.length;f++){var l=n[f];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete o[l.id]}}}}},function(t,e,r){"use strict";r.r(e),e.default="#define GLSLIFY 1\nattribute vec4 aVertexPosition;\nattribute vec4 aVertexColor;\nuniform mat4 uModelViewMatrix;\nuniform mat4 uProjectionMatrix;\nvarying lowp vec4 vColor;\nvoid main(void) {\n  gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\n  vColor = aVertexColor;\n}\n"},function(t,e,r){"use strict";r.r(e),e.default="#define GLSLIFY 1\nvarying lowp vec4 vColor;\nvoid main(void) {\n  gl_FragColor = vColor;\n}\n"},function(t,e,r){"use strict";r.r(e);var n="undefined"!=typeof Float32Array?Float32Array:Array,o=function(){var t=new n(16);return n!==Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t},a=function(t,e,r,n,o){var a=t,i=1/Math.tan(e/2);if(a[0]=i/r,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=i,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[11]=-1,a[12]=0,a[13]=0,a[15]=0,null!=o&&o!==1/0){var u=1/(n-o);a[10]=(o+n)*u,a[14]=2*o*n*u}else a[10]=-1,a[14]=-2*n;return a},i=function(t,e,r){var n,o,a,i,u,c,s,f,l,d,v,p,h=r[0],b=r[1],m=r[2];return e===t?(t[12]=e[0]*h+e[4]*b+e[8]*m+e[12],t[13]=e[1]*h+e[5]*b+e[9]*m+e[13],t[14]=e[2]*h+e[6]*b+e[10]*m+e[14],t[15]=e[3]*h+e[7]*b+e[11]*m+e[15]):(n=e[0],o=e[1],a=e[2],i=e[3],u=e[4],c=e[5],s=e[6],f=e[7],l=e[8],d=e[9],v=e[10],p=e[11],t[0]=n,t[1]=o,t[2]=a,t[3]=i,t[4]=u,t[5]=c,t[6]=s,t[7]=f,t[8]=l,t[9]=d,t[10]=v,t[11]=p,t[12]=n*h+u*b+l*m+e[12],t[13]=o*h+c*b+d*m+e[13],t[14]=a*h+s*b+v*m+e[14],t[15]=i*h+f*b+p*m+e[15]),t},u=function(t,e,r,n){var o,a,i,u,c,s,f,l,d,v,p,h,b,m,g,A,R,y,x,E,F,M,S,L,T=n[0],_=n[1],C=n[2],P=Math.hypot(T,_,C);return P<1e-6?null:(T*=P=1/P,_*=P,C*=P,o=Math.sin(r),i=1-(a=Math.cos(r)),u=e[0],c=e[1],s=e[2],f=e[3],l=e[4],d=e[5],v=e[6],p=e[7],h=e[8],b=e[9],m=e[10],g=e[11],A=T*T*i+a,R=_*T*i+C*o,y=C*T*i-_*o,x=T*_*i-C*o,E=_*_*i+a,F=C*_*i+T*o,M=T*C*i+_*o,S=_*C*i-T*o,L=C*C*i+a,t[0]=u*A+l*R+h*y,t[1]=c*A+d*R+b*y,t[2]=s*A+v*R+m*y,t[3]=f*A+p*R+g*y,t[4]=u*x+l*E+h*F,t[5]=c*x+d*E+b*F,t[6]=s*x+v*E+m*F,t[7]=f*x+p*E+g*F,t[8]=u*M+l*S+h*L,t[9]=c*M+d*S+b*L,t[10]=s*M+v*S+m*L,t[11]=f*M+p*S+g*L,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)},c=(r(0),r(4)),s=r(5),f=function(t,e){var r="shader-fs"===e?s.default:c.default,n="shader-fs"===e?t.createShader(t.FRAGMENT_SHADER):t.createShader(t.VERTEX_SHADER);return t.shaderSource(n,r),t.compileShader(n),t.getShaderParameter(n,t.COMPILE_STATUS)?n:(alert("シェーダーのコンパイルでエラーが発生しました: "+t.getShaderInfoLog(n)),null)},l=0,d=document.querySelector("canvas").getContext("webgl"),v=function(t){var e=f(t,"shader-vs"),r=f(t,"shader-fs"),n=t.createProgram();return t.attachShader(n,e),t.attachShader(n,r),t.linkProgram(n),t.getProgramParameter(n,t.LINK_STATUS)?n:(alert("シェーダープログラムの初期化に失敗しました"+t.getProgramInfoLog(n)),null)}(d),p={program:v,attribLocations:{vertexPosition:d.getAttribLocation(v,"aVertexPosition"),vertexColor:d.getAttribLocation(v,"aVertexColor")},uniformLocations:{projectionMatrix:d.getUniformLocation(v,"uProjectionMatrix"),modelViewMatrix:d.getUniformLocation(v,"uModelViewMatrix")}},h=function(t){var e=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,e);var r=[[-1,-1,1,1,-1,1,1,1,1,-1,1,1],[-1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1],[-1,1,-1,-1,1,1,1,1,1,1,1,-1],[-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1],[1,-1,-1,1,1,-1,1,1,1,1,-1,1],[-1,-1,-1,-1,-1,1,-1,1,1,-1,1,-1]].flat();t.bufferData(t.ARRAY_BUFFER,new Float32Array(r),t.STATIC_DRAW);var n=[[1,1,1,1],[1,0,0,1],[0,1,0,1],[0,0,1,1],[1,1,0,1],[1,0,1,1]].reduce((function(t,e){return t.concat(e,e,e,e)}),[]),o=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,o),t.bufferData(t.ARRAY_BUFFER,new Float32Array(n),t.STATIC_DRAW);var a=t.createBuffer();t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,a);var i=[[0,1,2,0,2,3],[4,5,6,4,6,7],[8,9,10,8,10,11],[12,13,14,12,14,15],[16,17,18,16,18,19],[20,21,22,20,22,23]].flat();return t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array(i),t.STATIC_DRAW),{position:e,color:o,indices:a}}(d),b=0;requestAnimationFrame((function t(e){var r=(e*=.001)-b;b=e,function(t,e,r,n){t.clearColor(0,0,0,1),t.clearDepth(1),t.enable(t.DEPTH_TEST),t.depthFunc(t.LEQUAL),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT);var c=45*Math.PI/180,s=t.canvas.clientWidth/t.canvas.clientHeight,f=o();a(f,c,s,.1,100);var d=o();i(d,d,[-0,0,-6]),u(d,d,l,[0,0,1]),u(d,d,.7*l,[0,1,0]),t.bindBuffer(t.ARRAY_BUFFER,r.position),t.vertexAttribPointer(e.attribLocations.vertexPosition,3,t.FLOAT,!1,0,0),t.enableVertexAttribArray(e.attribLocations.vertexPosition),t.bindBuffer(t.ARRAY_BUFFER,r.color),t.vertexAttribPointer(e.attribLocations.vertexColor,4,t.FLOAT,!1,0,0),t.enableVertexAttribArray(e.attribLocations.vertexColor),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,r.indices),t.useProgram(e.program),t.uniformMatrix4fv(e.uniformLocations.projectionMatrix,!1,f),t.uniformMatrix4fv(e.uniformLocations.modelViewMatrix,!1,d),t.drawElements(t.TRIANGLES,36,t.UNSIGNED_SHORT,0),l+=n}(d,p,h,r),requestAnimationFrame(t)}))}]);