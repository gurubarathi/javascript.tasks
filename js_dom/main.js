const body = document.body;
console.log(body);
body.append("Hello","guru");//used to add node type ex string, numbers
const div= document.createElement("div");
body.appendChild(div);


let section=document.querySelector("section");
console.log(section.textContent);//display none properties with all position showned;
console.log(section.innerText);//only visible text on document shows on console;

body.removeChild(div);
 
body.appendChild(div);
div.innerHTML="<h1>HTMl</h1>"; 