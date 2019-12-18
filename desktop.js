if(screen.width<699)
{
    document.location="mobile.html";
}
// function addimage() {
//     var x = document.createElement("IMG");
//     x.setAttribute("src", "g12.jpg");
//     x.setAttribute("width", "304");
//     x.setAttribute("height", "228");
//     x.setAttribute("alt", "The Pulpit Rock");
//     document.body.appendChild(x);
//   }
function addimage()
{
    var x=document.getElementById("title").value;
    var y=document.getElementById("url").value;
    var element="";
    element=
        `<div class="task" style="background-image:url(`+y+`)">`+x+`</div>`
        
    var post=document.getElementsByClassName('grid-1')[0];
    post.insertAdjacentHTML("afterbegin",element); 
    document.getElementById("title").value="";
    document.getElementById("url").value="";
}