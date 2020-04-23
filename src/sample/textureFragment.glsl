precision mediump float;

uniform sampler2D uTexture;
uniform vec2 resolution;
uniform vec2 imageResolution;

varying vec2 vUv;

void main() {
    vec2 ratio = vec2(
        min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),
        min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)
        );
        
    vec2 uv = vec2(
        vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
        vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
        );

  gl_FragColor = texture2D(uTexture, uv);
}
