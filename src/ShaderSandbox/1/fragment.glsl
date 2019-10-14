precision mediump float;

uniform float uTrans;
uniform vec2 uResolution;

varying vec2 vUv;

void main() {
	vec2 position = (gl_FragCoord.xy * 2.0 - uResolution) / min(uResolution.x, uResolution.y);
	vec3 destColor = vec3(0.0);
	for(float i = 0.0; i < 6.0; i++){
		float j = i + 1.0;
		vec2 q = position + vec2(cos(j + uTrans), sin(j + uTrans));
		float r = 0.01 / abs(sin(uTrans / j)) / length(q);
		float g = 0.01 / abs(cos(uTrans / j)) / length(q);
		float b = 1.0 - abs(tan(uTrans / j)) / length(q);
		destColor += vec3(r, g, 0.0);
	}
	gl_FragColor = vec4(destColor, 1.0);
}
