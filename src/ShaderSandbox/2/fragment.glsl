precision mediump float;

uniform float uTrans;
uniform vec2 uResolution;

varying vec2 vUv;

void main() {
	vec2 position = (gl_FragCoord.xy * 2.0 - uResolution) / min(uResolution.x, uResolution.y);
	vec3 color = vec3(0.0);
	position *= 5.0;   
	position = fract(position); 
	position = (position * 2.0 - 1.0);
	
	float l = abs(sin(uTrans / 2.0)) / length(position);
	color = vec3(l);
	
	gl_FragColor = vec4(color,1.0);
}
