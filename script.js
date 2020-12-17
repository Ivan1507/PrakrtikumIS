// const heading=document.getElementById('hi');
// const h2=document.querySelector('.h2')
//
// const h3=document.querySelectorAll('h2');
// const h3d=h3[1];
// setTimeout(()=>{
//    addStyleTo(heading,heading.textContent);
//  },700)
// console.dir(heading.textContent);
//
// const link=h3[1].children[0];
// link.onclick=()=>{
//   event.preventDefault();
//   console.log('your click on link',event.target.getAttribute('href'))
//   const url=event.target.getAttribute('href')
//   window.location=url
// }
// for(let i=0;i<h3.length;i++){
//   if(i==0)
//   setTimeout(()=>{
//    addStyleTo(h3[i],'Javascirpt '+i,'blue','5rem');
//  },500+(i+1)*1000)
//  else setTimeout(()=>{
//     addStyleTo(link,'Javascirpt '+i);
//   },500+(i+1)*1000)
// }



const text1=document.getElementById('text1')
const input=document.querySelectorAll('input')
const table=document.querySelectorAll('td');
input[0].oninput=()=>{
  template=this.value.value.toLowerCase();
  console.dir(template)
  if(template!='')
  Search_for_template(table,template)
  else Show_all(table)
}
input[1].oninput=()=>{
  let num=input[1].value

  if(num<50) input[1].style.backgroundColor='red'
  else if(num<70) input[1].style.backgroundColor='yellow'
  else if(num<85) input[1].style.backgroundColor='#7fff00'
  else input[1].style.backgroundColor='green'

}
const condition=document.getElementById('value')
const search=document.getElementById('search')
const but_show_all=document.getElementById('showAll')
search.onclick=()=>{
  console.dir(input)
  const condit_text=condition.value.toLowerCase();
 Search_for_template(table,condit_text)
}

but_show_all.onclick=()=>{
  Show_all(table)
}


function Search_for_template(table,template){
  for(let i=0;i<table.length;i+=3){
      if(table[i].innerText.toLowerCase().search(template)==-1){
        for(let j=i;j<i+3;j++){
        table[j].style.display='None'
      }
      table[i].innerHTML=table[i].innerText
    }
      else{
        const str=table[i].innerText;
        console.dir(str)
        table[i].innerHTML=insertMark(str,str.toLowerCase().search(template),template.length);
      }
  }
}

function Show_all(table){
  for(let i=0;i<table.length;i++){
    table[i].style.display=''
    if(i%3==0)
    table[i].innerHTML=table[i].innerText;
  }
}

function insertMark(str, pos,len){
  return str.slice(0,pos)+'<mark>'+str.slice(pos,pos+len)+'</mark>'+str.slice(pos+len);
}


// function addStyleTo(node,text,color='red',fontsize) {
//   node.textContent=text;
//   node.style.color=color;
//   node.style.textAlign='Center'
//   node.style.backgroundColor='black'
//   node.style.padding='20px'
//   node.style.display='block'
//   node.style.width='100%'
//   if(fontsize){
//     node.style.fontSize=fontsize
//   }
// }

// heading.onclick=()=>{
//   console.log('hello')
//     heading.style.backgroundColor='blue';
//     heading.textContent='Hello, Ivan!'
// }
// h3d.addEventListener('dblclick',()=>{
//   h3d.style.backgroundColor='blue';
// })
