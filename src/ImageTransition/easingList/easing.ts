// シェーダーモジュール
import vertexShader from '../utils/vertex.glsl';
import fragmentShader from './fragment.glsl';
import { easingEaseInExpo, easingEaseOutExpo } from '../utils/easing';

export default (distSrc: string, auto: boolean) => {
  const assetUrls = [
    './images/nozomi.jpg',
    './images/eri.jpg',
    './images/rin.jpg',
    './images/umi.jpg',
  ];
  let easingChangeValue = 0.5;

  // 枠構築
  const canvasBlock = document.createElement('div');
  canvasBlock.style.display = 'inline-block';
  canvasBlock.style.padding = '1rem';
  canvasBlock.style.margin = '.5rem';
  canvasBlock.style.boxShadow =
    '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)';
  const canvasTitleBlock = document.createElement('div');
  canvasTitleBlock.style.display = 'flex';
  canvasTitleBlock.style.alignItems = 'center';
  canvasTitleBlock.style.justifyContent = 'space-between';
  const canvasTitle = document.createElement('div');
  canvasTitle.innerHTML = `Easing sample : easingEaseInExpo`;
  canvasTitleBlock.appendChild(canvasTitle);
  const canvasInput = document.createElement('input');
  canvasInput.type = 'range';
  canvasInput.min = '0';
  canvasInput.max = '1';
  canvasInput.step = '0.01';
  canvasInput.value = `${easingChangeValue}`;
  canvasTitleBlock.appendChild(canvasInput);

  canvasBlock.appendChild(canvasTitleBlock);

  canvasInput.addEventListener('change', (e) => {
    easingChangeValue = parseFloat((e.target as HTMLInputElement).value);
  });

  // canvas部構築
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  canvas.style.margin = '1rem 0';
  canvasBlock.appendChild(canvas);
  const gl = canvas.getContext('webgl');
  let cnt = 0;
  const textureArr: WebGLTexture[] = [];

  // ボタン部構築
  const btnBlock = document.createElement('div');
  btnBlock.style.width = '100%';
  btnBlock.style.display = 'flex';
  btnBlock.style.alignItems = 'center';
  btnBlock.style.justifyContent = 'space-between';
  const prevBtn = document.createElement('button');
  prevBtn.textContent = 'Previous';
  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Next';
  btnBlock.appendChild(prevBtn);
  btnBlock.appendChild(nextBtn);
  canvasBlock.appendChild(btnBlock);

  // プログラムの作成
  const program = gl.createProgram();

  // vertextシェーダをコンパイル
  const vShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vShader, vertexShader);
  gl.compileShader(vShader);

  // fragmentシェーダをコンパイル
  const fShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fShader, fragmentShader);
  gl.compileShader(fShader);

  gl.attachShader(program, vShader);
  gl.deleteShader(vShader);

  gl.attachShader(program, fShader);
  gl.deleteShader(fShader);
  gl.linkProgram(program);

  // bufferの作成
  const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, -1, -1, 1, 1, 1]);

  const vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  const vertexLocation = gl.getAttribLocation(program, 'position');
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  // uniformのロケーションを取得しておく
  const uTransLoc = gl.getUniformLocation(program, 'uTrans');
  const textureLocArr = [
    gl.getUniformLocation(program, 'uTexture0'),
    gl.getUniformLocation(program, 'uTexture1'),
  ];

  const obj = {
    currentTexture: textureArr[0],
    nextTexture: textureArr[1],
    trans: 0,
  };

  const render = () => {
    // WebGLを初期化する
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 使用するprogramを指定する
    gl.useProgram(program);

    // 描画に使用する頂点バッファーをattributeとして設定する。
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.vertexAttribPointer(vertexLocation, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vertexLocation);

    // uniformsの値を指定する
    // 描画に使用するのtexture設定
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, obj.currentTexture);
    gl.uniform1i(textureLocArr[0], 0);

    gl.activeTexture(gl.TEXTURE0 + 1);
    gl.bindTexture(gl.TEXTURE_2D, obj.nextTexture);
    gl.uniform1i(textureLocArr[1], 1);

    gl.uniform1f(uTransLoc, obj.trans);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    requestAnimationFrame(render);
  };

  // デモに使用する画像をロードする
  const loadImages = () => {
    assetUrls.forEach((url, index) => {
      const img = new Image();

      const texture = gl.createTexture();
      textureArr.push(texture);

      img.onload = () => {
        // imageをテクスチャーとして更新する
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          img
        );
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(
          gl.TEXTURE_2D,
          gl.TEXTURE_MIN_FILTER,
          gl.LINEAR_MIPMAP_NEAREST
        );
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.bindTexture(gl.TEXTURE_2D, null);

        if (index === 0) obj.currentTexture = texture;
        if (index === 1) obj.nextTexture = texture;

        cnt++;
        if (cnt === 4) render();
      };
      img.crossOrigin = 'Anonymous';
      img.src = url;
    });
  };

  loadImages();

  let arrIdx = 0;
  let isAnimation = false;

  if (auto) {
    setInterval(() => {
      nextBtn.click();
    }, 1000);
  }

  nextBtn.addEventListener('click', () => {
    if (isAnimation) return;
    isAnimation = true;
    obj.currentTexture = textureArr[arrIdx];
    if (arrIdx === 3) {
      arrIdx = 0;
    } else {
      arrIdx++;
    }
    obj.nextTexture = textureArr[arrIdx];

    let trans = 0;
    const animation = () => {
      const animId = requestAnimationFrame(animation);
      trans += 0.01;
      if (trans > 1) {
        Object.assign(obj, { trans: 1 });
        isAnimation = false;
        cancelAnimationFrame(animId);
      } else {
        Object.assign(obj, {
          trans: easingEaseInExpo(trans, 0, easingChangeValue),
        });
      }
    };
    animation();
  });

  prevBtn.addEventListener('click', () => {
    if (isAnimation) return;
    isAnimation = true;
    obj.nextTexture = textureArr[arrIdx];
    if (arrIdx === 0) {
      arrIdx = 3;
    } else {
      arrIdx--;
    }
    obj.currentTexture = textureArr[arrIdx];

    let trans = 0;
    const animation = () => {
      const animId = requestAnimationFrame(animation);
      trans += 0.01;
      if (trans > 1) {
        Object.assign(obj, { trans: 0 });
        isAnimation = false;
        cancelAnimationFrame(animId);
      } else {
        Object.assign(obj, {
          trans: 1 - easingEaseInExpo(trans, 0, easingChangeValue),
        });
      }
    };
    animation();
  });

  return canvasBlock;
};
