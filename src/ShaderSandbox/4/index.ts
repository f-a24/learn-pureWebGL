// シェーダーモジュール
type ShaderModule = {
  default: string;
};
const vertShaderModule: ShaderModule = require('./vertex.glsl');
const fragmentShaderModule: ShaderModule = require('./fragment.glsl');

export default () => {
  // 枠構築
  const canvasBlock = document.createElement('div');
  canvasBlock.style.width = '1024px';
  canvasBlock.style.padding = '1rem';
  canvasBlock.style.margin = '.5rem';
  canvasBlock.style.boxShadow =
    '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)';

  // canvas部構築
  const canvas = document.createElement('canvas');
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.margin = '1rem 0';
  canvasBlock.appendChild(canvas);
  const gl = canvas.getContext('webgl');

  // プログラムの作成
  const program = gl.createProgram();

  // vertextシェーダをコンパイル
  const vShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vShader, vertShaderModule.default);
  gl.compileShader(vShader);

  // fragmentシェーダをコンパイル
  const fShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fShader, fragmentShaderModule.default);
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
  const uResolutionLoc = gl.getUniformLocation(program, 'uResolution');

  const obj = {
    trans: 0,
  };

  const render = () => {
    // WebGLを初期化する
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clearColor(1.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 使用するprogramを指定する
    gl.useProgram(program);

    // 描画に使用する頂点バッファーをattributeとして設定する。
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.vertexAttribPointer(vertexLocation, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vertexLocation);

    // uniformsの値を指定する
    gl.uniform1f(uTransLoc, obj.trans);
    gl.uniform2fv(uResolutionLoc, [gl.canvas.width, gl.canvas.height]);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    requestAnimationFrame(render);
  };
  setInterval(() => {
    obj.trans += 0.01;
  }, 10);
  render();

  return canvasBlock;
};
