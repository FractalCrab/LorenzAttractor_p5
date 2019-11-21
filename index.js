let x=1;
let y=1;
let z=1;


let sigma=10;
let beta=8/3;
let rho=28;

let pos=[]

let prevPoint;
let green;
let red;

function setup(){
  createCanvas(700,700,WEBGL);
  colorMode(HSB);
}

function draw(){
  background(0);
  let dt=0.01;
  let dx=(sigma*(y-x))*dt;
  let dy=(x* (rho-z)-y) *dt;
  let dz=(x * y-beta *z)*dt;
  x+=dx;
  y+=dy;
  z+=dz;
  pos.push(createVector(x,y,z));
  orbitControl();
  scale(10);
  noFill();

for (i=0;i<pos.length;i++){
      red =map(pos[i].x,-50,0,0,255);
      green= map(pos[i].y,-50,0,0,255);
      stroke(red,green,255);
   if(i>0){
   line(pos[i-1].x,pos[i-1].y,pos[i-1].z,pos[i].x,pos[i].y,pos[i].z);
   }
}
//  beginShape()
//   for (i = 0; i < pos.length; i++){
// 		red = map(pos[i].x, -50, 0, 0, 255)
// 		green = map(pos[i].y, -50, 0, 0, 255)
// 		stroke(red,green,255)
// 		vertex(pos[i].x,pos[i].y,pos[i].z)
		

// 	}
// 	endShape()
}
