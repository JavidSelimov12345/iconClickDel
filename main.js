"use strict"

const userinput= document.querySelector('.userinput');
const tagbox= document.querySelector('.tagbox');

userinput.onkeydown=function(e){


    // console.log(e)



    if(e.keyCode==13){


        let value= userinput.value;

        const tag= document.createElement('div');
        tag.classList.add('tag');
        tag.innerText=value;

        userinput.value="";
        const itag= document.createElement('i');
        itag.innerText="x";

        itag.onclick= function(){
            this.parentElement.remove()
        }


        tag.appendChild(itag);
        tagbox.appendChild(tag);

        



    }



}