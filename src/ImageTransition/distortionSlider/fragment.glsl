precision mediump float;

uniform float uTrans;
uniform sampler2D uTexture0;
uniform sampler2D uTexture1;

varying vec2 vUv;

void main() {
    vec2 uv = vUv;
    float intensity = 0.3;
    
    vec4 orig1 = texture2D(uTexture0, uv);
    vec4 orig2 = texture2D(uTexture1, uv);

    vec4 currentImage = texture2D(uTexture0, vec2(uv.x, uv.y + uTrans * (orig2 * intensity)));
    vec4 nextImage = texture2D(uTexture1, vec2(uv.x, uv.y + (1.0 - uTrans) * (orig1 * intensity)));
    
    gl_FragColor = mix(currentImage, nextImage, uTrans);
}
