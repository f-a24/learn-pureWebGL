// シェーダーモジュール
import vertexShader from './textureVertex.glsl';
import fragmentShader from './textureFragment.glsl';

export default () => {
  // 枠構築
  const canvasBlock = document.createElement('div');
  canvasBlock.style.display = 'inline-block';
  canvasBlock.style.padding = '1rem';
  canvasBlock.style.margin = '.5rem';
  canvasBlock.style.boxShadow =
    '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)';

  // canvas部構築
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 450;
  canvas.style.margin = '1rem 0';
  canvasBlock.appendChild(canvas);
  const gl = canvas.getContext('webgl');
  let glTexture: WebGLTexture;
  let img: HTMLImageElement;

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
  const textureLoc = gl.getUniformLocation(program, 'uTexture');
  const resolutionLoc = gl.getUniformLocation(program, 'resolution');
  const imageResolutionLoc = gl.getUniformLocation(program, 'imageResolution');

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
    gl.bindTexture(gl.TEXTURE_2D, glTexture);
    gl.uniform1i(textureLoc, 0);
    gl.uniform2f(resolutionLoc, gl.canvas.width, gl.canvas.height);
    gl.uniform2f(imageResolutionLoc, img.naturalWidth, img.naturalHeight);

    gl.drawArrays(gl.TRIANGLES, 0, 6);

    requestAnimationFrame(render);
  };

  // デモに使用する画像をロードする
  const loadImages = () => {
    img = new Image();

    const texture = gl.createTexture();
    glTexture = texture;

    img.onload = () => {
      // imageをテクスチャーとして更新する
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(
        gl.TEXTURE_2D,
        gl.TEXTURE_MIN_FILTER,
        gl.LINEAR_MIPMAP_NEAREST
      );
      gl.generateMipmap(gl.TEXTURE_2D);
      gl.bindTexture(gl.TEXTURE_2D, null);

      render();
    };
    img.crossOrigin = 'Anonymous';
    img.src = './images/nozomi.jpg';
  };
  loadImages();

  return canvasBlock;
};
