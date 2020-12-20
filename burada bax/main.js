"use strict"

const tagbox= document.querySelector('.tagbox');
const userinput= document.querySelector('.userinput');

userinput.onkeydown=function(e){

    if(e.keyCode==13){

        let value= userinput.value

        const tag= document.createElement('div');
        tag.classList.add('tag')
        tag.innerText=value;
        const i= document.createElement('i')
        i.classList.add('close')
        i.innerText="x"
        tag.appendChild(i);
        i.onclick=function(){
            this.parentElement.remove();
        }
        tagbox.appendChild(tag);

        userinput.value=""





    }


}

function colorChanger (){


    const colors ="0123456789abcdef";
    let color='#';

    for (let index = 0; index <6; index++) {
       
        let randnum=Math.round(Math.random()*15);

        color= color+colors[randnum]


        
    }


    return color






}


setInterval(function(){

    document.body.style.backgroundColor=colorChanger()



},1000)
// console.log(colorChanger())