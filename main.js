canvas= document.getElementById("myCanvas");
color = "red";
ctx = canvas.getContext("2d");
mouseEvent="";
Last_x=0;
Last_y=0;
width_of_line= 2;
radius=10;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    mouseEvent="mousedown";
    color = document.getElementById("color").value;
    width_of_line= document.getElementById("width_of_line").value;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_X= e.clientX-canvas.offsetLeft;
    current_Y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();  
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_X,current_Y,radius,0,2*Math.PI);
        ctx.stroke();
    }

    Last_x=current_X;
    Last_y=current_Y;
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}