const heading=document.getElementById('hi');
const h2=document.querySelector('.h2')

const h3=document.querySelectorAll('h2');
const h3d=h3[1];

setTimeout(()=>{
   addStyleTo(heading,heading.textContent);
 },300)
console.dir(heading.textContent);
for(let i=0;i<h3.length;i++){
  if(i==0)
  setTimeout(()=>{
   addStyleTo(h3[i],'Javascirpt '+i,'blue','5rem');
 },500+(i+1)*1000)
 else setTimeout(()=>{
    addStyleTo(h3[i],'Javascirpt '+i);
  },500+(i+1)*1000)
}


function addStyleTo(node,text,color='red',fontsize) {
  node.textContent=text;
  node.style.color=color;
  node.style.textAlign='Center'
  node.style.backgroundColor='black'
  node.style.padding='20px'
  if(fontsize){
    node.style.fontSize=fontsize
  }
}

heading.onclick=()=>{
  console.log('hello')
    heading.style.backgroundColor='blue';
    heading.textContent='Hello, Ivan!'
}
h3d.addEventListener('dblclick',()=>{
  h3d.style.backgroundColor='blue';
})
