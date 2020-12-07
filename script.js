const heading=document.getElementById('hi');
const h2=document.querySelector('.h2')

const h3=document.querySelectorAll('h2');
const h3d=h3[1];

console.dir(heading.textContent);
for(let i=0;i<h3.length;i++){
  if(i==0)
  setTimeout(()=>{
   addStyleTo(h3[i],'Javascirpt '+i,'blue');
 },500+(i+1)*1000)
 else setTimeout(()=>{
    addStyleTo(h3[i],'Javascirpt '+i);
  },500+(i+1)*1000)
}


function addStyleTo(node,text,color='red') {
  node.textContent=text;
  node.style.color=color;
  node.style.textAlign='Center'
  node.style.backgroundColor='black'
  node.style.padding='20px'
}
