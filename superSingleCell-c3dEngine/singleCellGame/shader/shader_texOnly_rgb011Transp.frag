
varying mediump vec2 texCoordOut;
uniform sampler2D Texture;
uniform lowp vec4 transpColor;
void main(void) {
    lowp vec4 texColor=texture2D(Texture,texCoordOut);
    lowp vec3 dcolor=vec3(texColor)-vec3(transpColor);
    lowp float alpha=dot(dcolor,dcolor);
    gl_FragColor =vec4(vec3(texColor),alpha);
    
}