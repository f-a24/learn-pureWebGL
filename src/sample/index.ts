import * as mat4 from '../utils/mat4';

// シェーダーモジュール
import vertexShader from './vertex.glsl';
import fragmentShader from './fragment.glsl';

export default () => {
  // シェーダーのコンパイル
  const getShader = (gl: WebGLRenderingContext, id: string) => {
    const source = id === 'shader-fs' ? fragmentShader : vertexShader;
    const shader =
      id === 'shader-fs'
        ? gl.createShader(gl.FRAGMENT_SHADER)
        : gl.createShader(gl.VERTEX_SHADER);

    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      alert(
        `シェーダーのコンパイルでエラーが発生しました: ${gl.getShaderInfoLog(
          shader
        )}`
      );
      return null;
    }
    return shader;
  };

  // シェーダープログラムの初期化
  const initShaderProgram = (gl: WebGLRenderingContext) => {
    const vertexShader = getShader(gl, 'shader-vs');
    const fragmentShader = getShader(gl, 'shader-fs');

    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      alert(
        `シェーダープログラムの初期化に失敗しました${gl.getProgramInfoLog(
          shaderProgram
        )}`
      );
      return null;
    }

    return shaderProgram;
  };

  const initBuffers = (gl: WebGLRenderingContext) => {
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    const positions = [
      [-1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0], // Front face
      [-1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0], // Back face
      [-1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0], // Top face
      [-1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0], // Bottom face
      [1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0], // Right face
      [-1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0], // Left face
    ].flat();

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    const faceColors = [
      [1.0, 1.0, 1.0, 1.0], // Front face: white
      [1.0, 0.0, 0.0, 1.0], // Back face: red
      [0.0, 1.0, 0.0, 1.0], // Top face: green
      [0.0, 0.0, 1.0, 1.0], // Bottom face: blue
      [1.0, 1.0, 0.0, 1.0], // Right face: yellow
      [1.0, 0.0, 1.0, 1.0], // Left face: purple
    ];

    const colors = faceColors.reduce((a, c) => a.concat(c, c, c, c), []);

    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

    const indices = [
      [0, 1, 2, 0, 2, 3], // front
      [4, 5, 6, 4, 6, 7], // back
      [8, 9, 10, 8, 10, 11], // top
      [12, 13, 14, 12, 14, 15], // bottom
      [16, 17, 18, 16, 18, 19], // right
      [20, 21, 22, 20, 22, 23], // left
    ].flat();

    gl.bufferData(
      gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(indices),
      gl.STATIC_DRAW
    );

    return {
      position: positionBuffer,
      color: colorBuffer,
      indices: indexBuffer,
    };
  };

  let cubeRotation = 0.0;

  const canvas = document.createElement('canvas');
  canvas.style.width = '100vw';
  canvas.style.width = '100vh';
  const gl = canvas.getContext('webgl');

  const shaderProgram = initShaderProgram(gl);

  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(
        shaderProgram,
        'uProjectionMatrix'
      ),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
    },
  };

  const buffers = initBuffers(gl);

  let then = 0;

  function render(now: number) {
    now *= 0.001;
    const deltaTime = now - then;
    then = now;

    drawScene(gl, programInfo, buffers, deltaTime);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  function drawScene(
    gl: WebGLRenderingContext,
    pgInfo: typeof programInfo,
    bufs: typeof buffers,
    deltaTime: number
  ) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
    gl.clearDepth(1.0); // Clear everything
    gl.enable(gl.DEPTH_TEST); // Enable depth testing
    gl.depthFunc(gl.LEQUAL); // Near things obscure far things

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const fieldOfView = (45 * Math.PI) / 180; // in radians
    const aspect =
      (gl.canvas as HTMLCanvasElement).clientWidth /
      (gl.canvas as HTMLCanvasElement).clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = mat4.create();

    mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

    const modelViewMatrix = mat4.create();

    mat4.translate(
      modelViewMatrix, // destination matrix
      modelViewMatrix, // matrix to translate
      [-0.0, 0.0, -6.0]
    ); // amount to translate
    mat4.rotate(
      modelViewMatrix, // destination matrix
      modelViewMatrix, // matrix to rotate
      cubeRotation, // amount to rotate in radians
      [0, 0, 1]
    ); // axis to rotate around (Z)
    mat4.rotate(
      modelViewMatrix, // destination matrix
      modelViewMatrix, // matrix to rotate
      cubeRotation * 0.7, // amount to rotate in radians
      [0, 1, 0]
    ); // axis to rotate around (X)

    gl.bindBuffer(gl.ARRAY_BUFFER, bufs.position);
    gl.vertexAttribPointer(
      pgInfo.attribLocations.vertexPosition,
      3,
      gl.FLOAT,
      false,
      0,
      0
    );
    gl.enableVertexAttribArray(pgInfo.attribLocations.vertexPosition);

    gl.bindBuffer(gl.ARRAY_BUFFER, bufs.color);
    gl.vertexAttribPointer(
      pgInfo.attribLocations.vertexColor,
      4,
      gl.FLOAT,
      false,
      0,
      0
    );
    gl.enableVertexAttribArray(pgInfo.attribLocations.vertexColor);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufs.indices);
    gl.useProgram(pgInfo.program);
    gl.uniformMatrix4fv(
      pgInfo.uniformLocations.projectionMatrix,
      false,
      projectionMatrix
    );
    gl.uniformMatrix4fv(
      pgInfo.uniformLocations.modelViewMatrix,
      false,
      modelViewMatrix
    );

    gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0);

    cubeRotation += deltaTime;
  }

  return canvas;
};
