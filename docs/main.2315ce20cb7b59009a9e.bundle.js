(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{301:function(module,__webpack_exports__,__webpack_require__){"use strict";var vertShaderModule=__webpack_require__(650),fragmentShaderModule=__webpack_require__(651);__webpack_exports__.a=function(){var assetUrls=["./images/nozomi.jpg","./images/eri.jpg","./images/rin.jpg","./images/umi.jpg"],canvasBlock=document.createElement("div");canvasBlock.style.width="1024px",canvasBlock.style.padding="1rem",canvasBlock.style.margin=".5rem",canvasBlock.style.boxShadow="0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)";var canvas=document.createElement("canvas");canvas.style.width="100%",canvas.style.height="100%",canvas.style.margin="1rem 0",canvasBlock.appendChild(canvas);var gl=canvas.getContext("webgl"),cnt=0,textureArr=[],btnBlock=document.createElement("div");btnBlock.style.width="100%",btnBlock.style.display="flex",btnBlock.style.alignItems="center",btnBlock.style.justifyContent="space-between";var prevBtn=document.createElement("button");prevBtn.textContent="Previous";var nextBtn=document.createElement("button");nextBtn.textContent="Next",btnBlock.appendChild(prevBtn),btnBlock.appendChild(nextBtn),canvasBlock.appendChild(btnBlock);var program=gl.createProgram(),vShader=gl.createShader(gl.VERTEX_SHADER);gl.shaderSource(vShader,vertShaderModule.default),gl.compileShader(vShader);var fShader=gl.createShader(gl.FRAGMENT_SHADER);gl.shaderSource(fShader,fragmentShaderModule.default),gl.compileShader(fShader),gl.attachShader(program,vShader),gl.deleteShader(vShader),gl.attachShader(program,fShader),gl.deleteShader(fShader),gl.linkProgram(program);var vertices=new Float32Array([-1,-1,1,-1,-1,1,1,-1,-1,1,1,1]),vertexBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer),gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW);var vertexLocation=gl.getAttribLocation(program,"position");gl.bindBuffer(gl.ARRAY_BUFFER,null);var uTransLoc=gl.getUniformLocation(program,"uTrans"),textureLocArr=[gl.getUniformLocation(program,"uTexture0"),gl.getUniformLocation(program,"uTexture1")],obj={currentTexture:textureArr[0],nextTexture:textureArr[1],trans:0},render=function(){gl.viewport(0,0,gl.canvas.width,gl.canvas.height),gl.clearColor(0,0,0,1),gl.clear(gl.COLOR_BUFFER_BIT),gl.useProgram(program),gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer),gl.vertexAttribPointer(vertexLocation,2,gl.FLOAT,!1,0,0),gl.enableVertexAttribArray(vertexLocation),gl.activeTexture(gl.TEXTURE0),gl.bindTexture(gl.TEXTURE_2D,obj.currentTexture),gl.uniform1i(textureLocArr[0],0),gl.activeTexture(gl.TEXTURE0+1),gl.bindTexture(gl.TEXTURE_2D,obj.nextTexture),gl.uniform1i(textureLocArr[1],1),gl.uniform1f(uTransLoc,obj.trans),gl.drawArrays(gl.TRIANGLES,0,6),requestAnimationFrame(render)};assetUrls.forEach((function(url,index){var img=new Image,texture=gl.createTexture();textureArr.push(texture),img.onload=function(){gl.bindTexture(gl.TEXTURE_2D,texture),gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,img),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR_MIPMAP_NEAREST),gl.generateMipmap(gl.TEXTURE_2D),gl.bindTexture(gl.TEXTURE_2D,null),0===index&&(obj.currentTexture=texture),1===index&&(obj.nextTexture=texture),4==++cnt&&render()},img.crossOrigin="Anonymous",img.src=url}));var arrIdx=0,isAnimation=!1;return nextBtn.addEventListener("click",(function(){if(!isAnimation){isAnimation=!0,obj.currentTexture=textureArr[arrIdx],3===arrIdx?arrIdx=0:arrIdx++,obj.nextTexture=textureArr[arrIdx];var trans=0,animation=function(){var animId=requestAnimationFrame(animation);(trans+=.02)>1?(Object.assign(obj,{trans:1}),isAnimation=!1,cancelAnimationFrame(animId)):Object.assign(obj,{trans:trans})};animation()}})),prevBtn.addEventListener("click",(function(){if(!isAnimation){isAnimation=!0,obj.nextTexture=textureArr[arrIdx],0===arrIdx?arrIdx=3:arrIdx--,obj.currentTexture=textureArr[arrIdx];var trans=1,animation=function(){var animId=requestAnimationFrame(animation);(trans-=.02)<0?(Object.assign(obj,{trans:0}),isAnimation=!1,cancelAnimationFrame(animId)):Object.assign(obj,{trans:trans})};animation()}})),canvasBlock}},302:function(module,__webpack_exports__,__webpack_require__){"use strict";var vertShaderModule=__webpack_require__(654),fragmentShaderModule=__webpack_require__(655);__webpack_exports__.a=function(){var assetUrls=["./images/nozomi.jpg","./images/eri.jpg","./images/rin.jpg","./images/umi.jpg"],canvasBlock=document.createElement("div");canvasBlock.style.width="1024px",canvasBlock.style.padding="1rem",canvasBlock.style.margin=".5rem",canvasBlock.style.boxShadow="0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)";var canvas=document.createElement("canvas");canvas.style.width="100%",canvas.style.height="100%",canvas.style.margin="1rem 0",canvasBlock.appendChild(canvas);var gl=canvas.getContext("webgl"),cnt=0,textureArr=[],btnBlock=document.createElement("div");btnBlock.style.width="100%",btnBlock.style.display="flex",btnBlock.style.alignItems="center",btnBlock.style.justifyContent="space-between";var prevBtn=document.createElement("button");prevBtn.textContent="Previous";var nextBtn=document.createElement("button");nextBtn.textContent="Next",btnBlock.appendChild(prevBtn),btnBlock.appendChild(nextBtn),canvasBlock.appendChild(btnBlock);var program=gl.createProgram(),vShader=gl.createShader(gl.VERTEX_SHADER);gl.shaderSource(vShader,vertShaderModule.default),gl.compileShader(vShader);var fShader=gl.createShader(gl.FRAGMENT_SHADER);gl.shaderSource(fShader,fragmentShaderModule.default),gl.compileShader(fShader),gl.attachShader(program,vShader),gl.deleteShader(vShader),gl.attachShader(program,fShader),gl.deleteShader(fShader),gl.linkProgram(program);var vertices=new Float32Array([-1,-1,1,-1,-1,1,1,-1,-1,1,1,1]),vertexBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer),gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW);var vertexLocation=gl.getAttribLocation(program,"position");gl.bindBuffer(gl.ARRAY_BUFFER,null);var uTransLoc=gl.getUniformLocation(program,"uTrans"),textureLocArr=[gl.getUniformLocation(program,"uTexture0"),gl.getUniformLocation(program,"uTexture1")],obj={currentTexture:textureArr[0],nextTexture:textureArr[1],trans:0},render=function(){gl.viewport(0,0,gl.canvas.width,gl.canvas.height),gl.clearColor(0,0,0,1),gl.clear(gl.COLOR_BUFFER_BIT),gl.useProgram(program),gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer),gl.vertexAttribPointer(vertexLocation,2,gl.FLOAT,!1,0,0),gl.enableVertexAttribArray(vertexLocation),gl.activeTexture(gl.TEXTURE0),gl.bindTexture(gl.TEXTURE_2D,obj.currentTexture),gl.uniform1i(textureLocArr[0],0),gl.activeTexture(gl.TEXTURE0+1),gl.bindTexture(gl.TEXTURE_2D,obj.nextTexture),gl.uniform1i(textureLocArr[1],1),gl.uniform1f(uTransLoc,obj.trans),gl.drawArrays(gl.TRIANGLES,0,6),requestAnimationFrame(render)};assetUrls.forEach((function(url,index){var img=new Image,texture=gl.createTexture();textureArr.push(texture),img.onload=function(){gl.bindTexture(gl.TEXTURE_2D,texture),gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,img),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR_MIPMAP_NEAREST),gl.generateMipmap(gl.TEXTURE_2D),gl.bindTexture(gl.TEXTURE_2D,null),0===index&&(obj.currentTexture=texture),1===index&&(obj.nextTexture=texture),4==++cnt&&render()},img.crossOrigin="Anonymous",img.src=url}));var arrIdx=0,isAnimation=!1;return nextBtn.addEventListener("click",(function(){if(!isAnimation){isAnimation=!0,obj.currentTexture=textureArr[arrIdx],3===arrIdx?arrIdx=0:arrIdx++,obj.nextTexture=textureArr[arrIdx];var trans=0,animation=function(){var animId=requestAnimationFrame(animation);(trans+=.02)>1?(isAnimation=!1,cancelAnimationFrame(animId)):Object.assign(obj,{trans:trans})};animation()}})),prevBtn.addEventListener("click",(function(){if(!isAnimation){isAnimation=!0,obj.nextTexture=textureArr[arrIdx],0===arrIdx?arrIdx=3:arrIdx--,obj.currentTexture=textureArr[arrIdx];var trans=1,animation=function(){var animId=requestAnimationFrame(animation);(trans-=.02)<0?(isAnimation=!1,cancelAnimationFrame(animId)):Object.assign(obj,{trans:trans})};animation()}})),canvasBlock}},303:function(module,__webpack_exports__,__webpack_require__){"use strict";var vertShaderModule=__webpack_require__(656),fragmentShaderModule=__webpack_require__(657);__webpack_exports__.a=function(){var assetUrls=["./images/nozomi.jpg","./images/eri.jpg","./images/rin.jpg","./images/umi.jpg"],canvasBlock=document.createElement("div");canvasBlock.style.width="1024px",canvasBlock.style.padding="1rem",canvasBlock.style.margin=".5rem",canvasBlock.style.boxShadow="0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)";var canvas=document.createElement("canvas");canvas.style.width="100%",canvas.style.height="100%",canvas.style.margin="1rem 0",canvasBlock.appendChild(canvas);var gl=canvas.getContext("webgl"),cnt=0,textureArr=[],btnBlock=document.createElement("div");btnBlock.style.width="100%",btnBlock.style.display="flex",btnBlock.style.alignItems="center",btnBlock.style.justifyContent="space-between";var prevBtn=document.createElement("button");prevBtn.textContent="Previous";var nextBtn=document.createElement("button");nextBtn.textContent="Next",btnBlock.appendChild(prevBtn),btnBlock.appendChild(nextBtn),canvasBlock.appendChild(btnBlock);var program=gl.createProgram(),vShader=gl.createShader(gl.VERTEX_SHADER);gl.shaderSource(vShader,vertShaderModule.default),gl.compileShader(vShader);var fShader=gl.createShader(gl.FRAGMENT_SHADER);gl.shaderSource(fShader,fragmentShaderModule.default),gl.compileShader(fShader),gl.attachShader(program,vShader),gl.deleteShader(vShader),gl.attachShader(program,fShader),gl.deleteShader(fShader),gl.linkProgram(program);var vertices=new Float32Array([-1,-1,1,-1,-1,1,1,-1,-1,1,1,1]),vertexBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer),gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW);var vertexLocation=gl.getAttribLocation(program,"position");gl.bindBuffer(gl.ARRAY_BUFFER,null);var uTransLoc=gl.getUniformLocation(program,"uTrans"),textureLocArr=[gl.getUniformLocation(program,"uTexture0"),gl.getUniformLocation(program,"uTexture1")],obj={currentTexture:textureArr[0],nextTexture:textureArr[1],trans:0},render=function(){gl.viewport(0,0,gl.canvas.width,gl.canvas.height),gl.clearColor(0,0,0,1),gl.clear(gl.COLOR_BUFFER_BIT),gl.useProgram(program),gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer),gl.vertexAttribPointer(vertexLocation,2,gl.FLOAT,!1,0,0),gl.enableVertexAttribArray(vertexLocation),gl.activeTexture(gl.TEXTURE0),gl.bindTexture(gl.TEXTURE_2D,obj.currentTexture),gl.uniform1i(textureLocArr[0],0),gl.activeTexture(gl.TEXTURE0+1),gl.bindTexture(gl.TEXTURE_2D,obj.nextTexture),gl.uniform1i(textureLocArr[1],1),gl.uniform1f(uTransLoc,obj.trans),gl.drawArrays(gl.TRIANGLES,0,6),requestAnimationFrame(render)};assetUrls.forEach((function(url,index){var img=new Image,texture=gl.createTexture();textureArr.push(texture),img.onload=function(){gl.bindTexture(gl.TEXTURE_2D,texture),gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,img),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR_MIPMAP_NEAREST),gl.generateMipmap(gl.TEXTURE_2D),gl.bindTexture(gl.TEXTURE_2D,null),0===index&&(obj.currentTexture=texture),1===index&&(obj.nextTexture=texture),4==++cnt&&render()},img.crossOrigin="Anonymous",img.src=url}));var arrIdx=0,isAnimation=!1;return nextBtn.addEventListener("click",(function(){if(!isAnimation){isAnimation=!0,obj.currentTexture=textureArr[arrIdx],3===arrIdx?arrIdx=0:arrIdx++,obj.nextTexture=textureArr[arrIdx];var trans=0,animation=function(){var animId=requestAnimationFrame(animation);(trans+=.02)>1?(isAnimation=!1,cancelAnimationFrame(animId)):Object.assign(obj,{trans:trans})};animation()}})),prevBtn.addEventListener("click",(function(){if(!isAnimation){isAnimation=!0,obj.nextTexture=textureArr[arrIdx],0===arrIdx?arrIdx=3:arrIdx--,obj.currentTexture=textureArr[arrIdx];var trans=1,animation=function(){var animId=requestAnimationFrame(animation);(trans-=.02)<0?(isAnimation=!1,cancelAnimationFrame(animId)):Object.assign(obj,{trans:trans})};animation()}})),canvasBlock}},304:function(module,__webpack_exports__,__webpack_require__){"use strict";var vertShaderModule=__webpack_require__(658),fragmentShaderModule=__webpack_require__(659);__webpack_exports__.a=function(){var assetUrls=["./images/nozomi.jpg","./images/eri.jpg","./images/rin.jpg","./images/umi.jpg"],canvasBlock=document.createElement("div");canvasBlock.style.width="1024px",canvasBlock.style.padding="1rem",canvasBlock.style.margin=".5rem",canvasBlock.style.boxShadow="0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)";var canvas=document.createElement("canvas");canvas.style.width="100%",canvas.style.height="100%",canvas.style.margin="1rem 0",canvasBlock.appendChild(canvas);var gl=canvas.getContext("webgl"),cnt=0,textureArr=[],btnBlock=document.createElement("div");btnBlock.style.width="100%",btnBlock.style.display="flex",btnBlock.style.alignItems="center",btnBlock.style.justifyContent="space-between";var prevBtn=document.createElement("button");prevBtn.textContent="Previous";var nextBtn=document.createElement("button");nextBtn.textContent="Next",btnBlock.appendChild(prevBtn),btnBlock.appendChild(nextBtn),canvasBlock.appendChild(btnBlock);var program=gl.createProgram(),vShader=gl.createShader(gl.VERTEX_SHADER);gl.shaderSource(vShader,vertShaderModule.default),gl.compileShader(vShader);var fShader=gl.createShader(gl.FRAGMENT_SHADER);gl.shaderSource(fShader,fragmentShaderModule.default),gl.compileShader(fShader),gl.attachShader(program,vShader),gl.deleteShader(vShader),gl.attachShader(program,fShader),gl.deleteShader(fShader),gl.linkProgram(program);var vertices=new Float32Array([-1,-1,1,-1,-1,1,1,-1,-1,1,1,1]),vertexBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer),gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW);var vertexLocation=gl.getAttribLocation(program,"position");gl.bindBuffer(gl.ARRAY_BUFFER,null);var uTransLoc=gl.getUniformLocation(program,"uTrans"),textureLocArr=[gl.getUniformLocation(program,"uTexture0"),gl.getUniformLocation(program,"uTexture1")],obj={currentTexture:textureArr[0],nextTexture:textureArr[1],trans:0},render=function(){gl.viewport(0,0,gl.canvas.width,gl.canvas.height),gl.clearColor(0,0,0,1),gl.clear(gl.COLOR_BUFFER_BIT),gl.useProgram(program),gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer),gl.vertexAttribPointer(vertexLocation,2,gl.FLOAT,!1,0,0),gl.enableVertexAttribArray(vertexLocation),gl.activeTexture(gl.TEXTURE0),gl.bindTexture(gl.TEXTURE_2D,obj.currentTexture),gl.uniform1i(textureLocArr[0],0),gl.activeTexture(gl.TEXTURE0+1),gl.bindTexture(gl.TEXTURE_2D,obj.nextTexture),gl.uniform1i(textureLocArr[1],1),gl.uniform1f(uTransLoc,obj.trans),gl.drawArrays(gl.TRIANGLES,0,6),requestAnimationFrame(render)};assetUrls.forEach((function(url,index){var img=new Image,texture=gl.createTexture();textureArr.push(texture),img.onload=function(){gl.bindTexture(gl.TEXTURE_2D,texture),gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,img),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR_MIPMAP_NEAREST),gl.generateMipmap(gl.TEXTURE_2D),gl.bindTexture(gl.TEXTURE_2D,null),0===index&&(obj.currentTexture=texture),1===index&&(obj.nextTexture=texture),4==++cnt&&render()},img.crossOrigin="Anonymous",img.src=url}));var arrIdx=0,isAnimation=!1;return nextBtn.addEventListener("click",(function(){if(!isAnimation){isAnimation=!0,obj.currentTexture=textureArr[arrIdx],3===arrIdx?arrIdx=0:arrIdx++,obj.nextTexture=textureArr[arrIdx];var trans=0,animation=function(){var animId=requestAnimationFrame(animation);(trans+=.01)>1?(isAnimation=!1,cancelAnimationFrame(animId)):Object.assign(obj,{trans:trans})};animation()}})),prevBtn.addEventListener("click",(function(){if(!isAnimation){isAnimation=!0,obj.nextTexture=textureArr[arrIdx],0===arrIdx?arrIdx=3:arrIdx--,obj.currentTexture=textureArr[arrIdx];var trans=1,animation=function(){var animId=requestAnimationFrame(animation);(trans-=.01)<0?(isAnimation=!1,cancelAnimationFrame(animId)):Object.assign(obj,{trans:trans})};animation()}})),canvasBlock}},305:function(module,__webpack_exports__,__webpack_require__){"use strict";var vertShaderModule=__webpack_require__(652),fragmentShaderModule=__webpack_require__(653),distortion=function(distSrc,auto){var assetUrls=["./images/nozomi.jpg","./images/eri.jpg","./images/rin.jpg","./images/umi.jpg"];assetUrls.push("./images/displacement/"+distSrc+".jpg");var canvasBlock=document.createElement("div");canvasBlock.style.width="400px",canvasBlock.style.padding="1rem",canvasBlock.style.margin=".5rem",canvasBlock.style.boxShadow="0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)";var canvasTitleBlock=document.createElement("div");canvasTitleBlock.style.display="flex",canvasTitleBlock.style.alignItems="center",canvasTitleBlock.style.justifyContent="space-between";var canvasTitle=document.createElement("div");canvasTitle.innerHTML="Distortion sample : "+distSrc,canvasTitleBlock.appendChild(canvasTitle);var canvasImg=document.createElement("img");canvasImg.width=100,canvasImg.height=100,canvasImg.src="./images/displacement/"+distSrc+".jpg",canvasImg.alt=distSrc+".jpg",canvasTitleBlock.appendChild(canvasImg),canvasBlock.appendChild(canvasTitleBlock);var canvas=document.createElement("canvas");canvas.style.width="100%",canvas.style.height="368px",canvas.style.margin="1rem 0",canvasBlock.appendChild(canvas);var gl=canvas.getContext("webgl"),cnt=0,textureArr=[],btnBlock=document.createElement("div");btnBlock.style.width="100%",btnBlock.style.display="flex",btnBlock.style.alignItems="center",btnBlock.style.justifyContent="space-between";var prevBtn=document.createElement("button");prevBtn.textContent="Previous";var nextBtn=document.createElement("button");nextBtn.textContent="Next",btnBlock.appendChild(prevBtn),btnBlock.appendChild(nextBtn),canvasBlock.appendChild(btnBlock);var program=gl.createProgram(),vShader=gl.createShader(gl.VERTEX_SHADER);gl.shaderSource(vShader,vertShaderModule.default),gl.compileShader(vShader);var fShader=gl.createShader(gl.FRAGMENT_SHADER);gl.shaderSource(fShader,fragmentShaderModule.default),gl.compileShader(fShader),gl.attachShader(program,vShader),gl.deleteShader(vShader),gl.attachShader(program,fShader),gl.deleteShader(fShader),gl.linkProgram(program);var vertices=new Float32Array([-1,-1,1,-1,-1,1,1,-1,-1,1,1,1]),vertexBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer),gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW);var vertexLocation=gl.getAttribLocation(program,"position");gl.bindBuffer(gl.ARRAY_BUFFER,null);var uTransLoc=gl.getUniformLocation(program,"uTrans"),textureLocArr=[gl.getUniformLocation(program,"uTexture0"),gl.getUniformLocation(program,"uTexture1"),gl.getUniformLocation(program,"uDisp")],obj={currentTexture:textureArr[0],nextTexture:textureArr[1],trans:0},render=function(){gl.viewport(0,0,gl.canvas.width,gl.canvas.height),gl.clearColor(0,0,0,1),gl.clear(gl.COLOR_BUFFER_BIT),gl.useProgram(program),gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer),gl.vertexAttribPointer(vertexLocation,2,gl.FLOAT,!1,0,0),gl.enableVertexAttribArray(vertexLocation),gl.activeTexture(gl.TEXTURE0),gl.bindTexture(gl.TEXTURE_2D,obj.currentTexture),gl.uniform1i(textureLocArr[0],0),gl.activeTexture(gl.TEXTURE0+1),gl.bindTexture(gl.TEXTURE_2D,obj.nextTexture),gl.uniform1i(textureLocArr[1],1),gl.activeTexture(gl.TEXTURE0+2),gl.bindTexture(gl.TEXTURE_2D,textureArr[textureArr.length-1]),gl.uniform1i(textureLocArr[2],2),gl.uniform1f(uTransLoc,obj.trans),gl.drawArrays(gl.TRIANGLES,0,6),requestAnimationFrame(render)};assetUrls.forEach((function(url,index){var img=new Image,texture=gl.createTexture();textureArr.push(texture),img.onload=function(){gl.bindTexture(gl.TEXTURE_2D,texture),gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,img),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR_MIPMAP_NEAREST),gl.generateMipmap(gl.TEXTURE_2D),gl.bindTexture(gl.TEXTURE_2D,null),0===index&&(obj.currentTexture=texture),1===index&&(obj.nextTexture=texture),5==++cnt&&render()},img.crossOrigin="Anonymous",img.src=url}));var arrIdx=0,isAnimation=!1;return auto&&setInterval((function(){nextBtn.click()}),1e3),nextBtn.addEventListener("click",(function(){if(!isAnimation){isAnimation=!0,obj.currentTexture=textureArr[arrIdx],3===arrIdx?arrIdx=0:arrIdx++,obj.nextTexture=textureArr[arrIdx];var trans=0,animation=function(){var animId=requestAnimationFrame(animation);(trans+=.01)>1?(isAnimation=!1,cancelAnimationFrame(animId)):Object.assign(obj,{trans:trans})};animation()}})),prevBtn.addEventListener("click",(function(){if(!isAnimation){isAnimation=!0,obj.nextTexture=textureArr[arrIdx],0===arrIdx?arrIdx=3:arrIdx--,obj.currentTexture=textureArr[arrIdx];var trans=1,animation=function(){var animId=requestAnimationFrame(animation);(trans-=.01)<0?(isAnimation=!1,cancelAnimationFrame(animId)):Object.assign(obj,{trans:trans})};animation()}})),canvasBlock},distortionList=function(auto){document.body.appendChild(distortionHeader(auto));var distortionArea=document.createElement("div");distortionArea.style.display="flex",distortionArea.style.alignItems="center",distortionArea.style.justifyContent="space-evenly",distortionArea.style.padding="1rem",distortionArea.style.flexWrap="wrap";for(var i=1;i<=16;i++)distortionArea.appendChild(distortion(""+i,auto));document.body.appendChild(distortionArea)},distortionHeader=function(auto){var titleBlock=document.createElement("div");titleBlock.style.padding="1rem 1rem 0",titleBlock.style.display="flex",titleBlock.style.alignItems="center";var title=document.createElement("h1");title.style.display="inline-block",title.style.marginRight="1rem",title.textContent="Distortion Sample Page",titleBlock.appendChild(title);var inputAuto=document.createElement("input");inputAuto.type="checkbox",inputAuto.id="autoCheck",inputAuto.checked=auto,inputAuto.addEventListener("change",(function(e){document.body.innerHTML="",distortionList(e.target.checked)}));var inputAutoLabel=document.createElement("label");return inputAutoLabel.htmlFor="autoCheck",inputAutoLabel.textContent="Auto",titleBlock.appendChild(inputAuto),titleBlock.appendChild(inputAutoLabel),titleBlock};__webpack_exports__.a=distortionList},306:function(module,exports,__webpack_require__){__webpack_require__(307),__webpack_require__(445),module.exports=__webpack_require__(446)},328:function(module,exports){},446:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(126);Object(_storybook_html__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){__webpack_require__(649)}),module)}.call(this,__webpack_require__(239)(module))},649:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(126),_src_ImageTransition_channel__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(301),_src_ImageTransition_distortionList__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(305),_src_ImageTransition_distSlider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(302),_src_ImageTransition_mosaic__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(303),_src_ImageTransition_wave__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(304);Object(_storybook_html__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("ImageTransition",module).add("channel",(function(){return document.body.innerHTML="",document.body.appendChild(Object(_src_ImageTransition_channel__WEBPACK_IMPORTED_MODULE_1__.a)()),""})).add("distortion",(function(){return document.body.innerHTML="",Object(_src_ImageTransition_distortionList__WEBPACK_IMPORTED_MODULE_2__.a)(!0),""})).add("distSlder",(function(){return document.body.innerHTML="",document.body.appendChild(Object(_src_ImageTransition_distSlider__WEBPACK_IMPORTED_MODULE_3__.a)()),""})).add("mosaic",(function(){return document.body.innerHTML="",document.body.appendChild(Object(_src_ImageTransition_mosaic__WEBPACK_IMPORTED_MODULE_4__.a)()),""})).add("wave",(function(){return document.body.innerHTML="",document.body.appendChild(Object(_src_ImageTransition_wave__WEBPACK_IMPORTED_MODULE_5__.a)()),""}))}.call(this,__webpack_require__(239)(module))},650:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default="precision mediump float;\n#define GLSLIFY 1\nattribute vec4 position;\nvarying vec2 vUv;\n\nvoid main() {\n\tgl_Position = position;\n\tvUv = vec2((position.x + 1.0) / 2.0, (-position.y + 1.0) / 2.0);\n}\n"},651:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default="precision mediump float;\n#define GLSLIFY 1\n\nuniform float uTrans;\nuniform sampler2D uTexture0;\nuniform sampler2D uTexture1;\n\nvarying vec2 vUv;\n\nvoid main() {\n  float r0 = texture2D(uTexture0, vUv + vec2(uTrans, 0.0)).r;\n  float g0 = texture2D(uTexture0, vUv ).g;\n  float b0 = texture2D(uTexture0, vUv - vec2(uTrans, 0.0)).b;\n  vec3 color0 = vec3(r0, g0, b0);\n\n  float r1 = texture2D(uTexture1, vUv + vec2(1.0 - uTrans, 0.0)).r;\n  float g1 = texture2D(uTexture1, vUv ).g;\n  float b1 = texture2D(uTexture1, vUv - vec2(1.0 - uTrans, 0.0)).b;\n  vec3 color1 = vec3(r1, g1, b1);\n  \n  gl_FragColor = mix(vec4(color0, (1.0 - uTrans)), vec4(color1, 1.0), uTrans);\n}\n"},652:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default="precision mediump float;\n#define GLSLIFY 1\nattribute vec4 position;\nvarying vec2 vUv;\n\nvoid main() {\n\tgl_Position = position;\n\tvUv = vec2((position.x + 1.0) / 2.0, (-position.y + 1.0) / 2.0);\n}\n"},653:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default="precision mediump float;\n#define GLSLIFY 1\n\nuniform float uTrans;\nuniform sampler2D uTexture0;\nuniform sampler2D uTexture1;\nuniform sampler2D uDisp;\n\nvarying vec2 vUv;\n\nfloat quarticInOut(float t) {\n  return t < 0.5\n    ? +8.0 * pow(t, 4.0)\n    : -8.0 * pow(t - 1.0, 4.0) + 1.0;\n}\n\nvoid main() {\n\tvec4 disp = texture2D(uDisp, vec2(0., 0.5) + (vUv - vec2(0., 0.5)) * (0.2 + 0.8 * (1.0 - uTrans)));\n\tfloat trans = clamp(1.6  * uTrans - disp.r * 0.4 - vUv.x * 0.2, 0.0, 1.0);\n\ttrans = quarticInOut(trans);\n\tvec4 color0 = texture2D(uTexture0, vec2(0.5 - 0.3 * trans, 0.5) + (vUv - vec2(0.5)) * (1.0 - 0.2 * trans));\n\tvec4 color1 = texture2D(uTexture1, vec2(0.5 + sin((1. - trans) * 0.1), 0.5 ) + (vUv - vec2(0.5)) * (0.9 + 0.1 * trans));\n\tgl_FragColor = mix(color0, color1, trans);\n}\n"},654:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default="precision mediump float;\n#define GLSLIFY 1\nattribute vec4 position;\nvarying vec2 vUv;\n\nvoid main() {\n\tgl_Position = position;\n\tvUv = vec2((position.x + 1.0) / 2.0, (-position.y + 1.0) / 2.0);\n}\n"},655:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default="precision mediump float;\n#define GLSLIFY 1\n\nuniform float uTrans;\nuniform sampler2D uTexture0;\nuniform sampler2D uTexture1;\n\nvarying vec2 vUv;\n\nvoid main() {\n    vec2 uv = vUv;\n    float intensity = 0.3;\n    \n    vec4 orig1 = texture2D(uTexture0, uv);\n    vec4 orig2 = texture2D(uTexture1, uv);\n\n    vec4 currentImage = texture2D(uTexture0, vec2(uv.x, uv.y + uTrans * (orig2 * intensity)));\n    vec4 nextImage = texture2D(uTexture1, vec2(uv.x, uv.y + (1.0 - uTrans) * (orig1 * intensity)));\n    \n    gl_FragColor = mix(currentImage, nextImage, uTrans);\n}\n"},656:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default="precision mediump float;\n#define GLSLIFY 1\nattribute vec4 position;\nvarying vec2 vUv;\n\nvoid main() {\n\tgl_Position = position;\n\tvUv = vec2((position.x + 1.0) / 2.0, (-position.y + 1.0) / 2.0);\n}\n"},657:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default="precision mediump float;\n#define GLSLIFY 1\n\nuniform float uTrans;\nuniform sampler2D uTexture0;\nuniform sampler2D uTexture1;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec2 uv0 = vUv;\n  vec2 uv1 = vUv;\n  float moz0 = uTrans * 0.02;\n  float moz1 = (1.0 - uTrans) * 0.02;\n\n  if(moz0 > 0.0) {\n    uv0 = floor(uv0 / moz0) * moz0 + (moz0 * 0.5);\n  }\n  if(moz1 > 0.0) {\n    uv1 = floor(uv1 / moz1) * moz1 + (moz1 * 0.5);\n  }\n  vec3 color0 = texture2D(uTexture0, uv0).rgb;\n  vec3 color1 = texture2D(uTexture1, uv1).rgb;\n\n  gl_FragColor = mix(vec4(color0, 1.0), vec4(color1, 1.0), uTrans);\n}\n"},658:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default="precision mediump float;\n#define GLSLIFY 1\nattribute vec4 position;\nvarying vec2 vUv;\n\nvoid main() {\n\tgl_Position = position;\n\tvUv = vec2((position.x + 1.0) / 2.0, (-position.y + 1.0) / 2.0);\n}\n"},659:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default="precision mediump float;\n#define GLSLIFY 1\n\nuniform float uTrans;\nuniform sampler2D uTexture0;\nuniform sampler2D uTexture1;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vec2 uv = vUv;\n  float trans0 = uTrans;\n  float trans1 = 1.0 - uTrans;\n\n  float t0 = trans0 * 6.0;\n  float t1 = trans1 * 6.0;\n  float amount0 = trans0 * 0.2;\n  float amount1 = trans1 * 0.2;\n\n  vec2 uvOffset0 = vec2(cos(uv.y * 20.0 + t0), sin(uv.x * 10.0 - t0)) * amount0;\n  vec2 uvOffset1 = vec2(cos(uv.y * 20.0 + t1), sin(uv.x * 10.0 - t1)) * amount1;\n  vec3 color0 = texture2D(uTexture0, uv + uvOffset0).rgb;\n  vec3 color1 = texture2D(uTexture1, uv + uvOffset1).rgb;\n\n  gl_FragColor = mix(vec4(color0, 1.0), vec4(color1, 1.0), uTrans);\n}\n"}},[[306,1,2]]]);
//# sourceMappingURL=main.2315ce20cb7b59009a9e.bundle.js.map