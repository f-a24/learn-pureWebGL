precision mediump float;

uniform float uTrans;
uniform sampler2D uTexture0;
uniform sampler2D uTexture1;

varying vec2 vUv;

void main() {
    vec4 color0 = texture2D(uTexture0, vUv);
    if (sin(uTrans * 100.0) < -0.9) {
        color0.r = texture2D(uTexture1, vec2(vUv.x + sin(uTrans * 10.0), vUv.y)).r;
        color0.g = texture2D(uTexture1, vec2(vUv.x + sin(uTrans * 45.0), vUv.y)).g;
        color0.b = texture2D(uTexture1, vec2(vUv.x + sin(uTrans * 900.0), vUv.y)).b;
    }
  gl_FragColor = mix(color0, texture2D(uTexture1, vUv), uTrans < 0.9 ? 0.0 : 1.0);
}
