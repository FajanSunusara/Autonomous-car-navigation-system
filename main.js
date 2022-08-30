

const canvas=document.getElementById('mycanvas');

canvas.width=200;

  

const ctx =canvas.getContext("2d");
 const roads = new road(canvas.width/2,canvas.width*0.9); 
const cars =new car(roads.getLaneCenter(1),100,30,50);
animate();
  

function animate(){
    cars.update();
    canvas.height=window.innerHeight;
    ctx.save();
    ctx.translate(0,-cars.y+canvas.height*0.7);
    roads.draw(ctx);
    cars.draw(ctx);
    ctx.restore();
    requestAnimationFrame(animate);

}