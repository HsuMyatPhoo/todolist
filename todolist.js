// for date and time 
let getp=document.getElementById('time');
let getp2=document.getElementById('datet');
// console.log(getp);
// getp.textContent="Hey";

let day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function clock(){
    let date=new Date();
    let h=date.getHours();
    let min=date.getMinutes();
    let s=date.getSeconds();

    let ampm;
    switch(h>12){
        case true:
            ampm="PM";
            h=h-12;
        break;
        case false:
            ampm="AM";
    }

    let d=date.getDay();

    getp.textContent=h+":"+min+":"+s+" "+ampm+" ";
    getp2.textContent=day[d];
}

clock();//work once
setInterval(clock,1000);//work per 1000ms(1s) 


// form not to reload 
document.querySelector('form').addEventListener('click',function(e){
    e.preventDefault();
})

// getting value of addtask 
let newtask=document.getElementById('addtask');


// clicking the submit button 
let btn=document.querySelector('.submit');

btn.addEventListener('mouseup',function(e){
    // console.log(newtask.value);
    let ul =document.querySelector("ul");

    if(ul){
        let newli =document.createElement('li');
        let newa =document.createElement('a');
        let itag = document.createElement('i');

        newli.className = "list-item";
        newa.setAttribute('href','#');
        itag.className = "fa-solid fa-trash-can";
        if(newtask.value ==""){
            window.alert('Please Enter a task');
        }else{
            newli.textContent =newtask.value;
            newa.appendChild(itag);
            newli.appendChild(newa);
            ul.appendChild(newli);
        }
    }else{
        let uldiv =document.querySelector('.uldiv');
        console.log(uldiv);
        let newul=document.createElement('ul');
        let newli =document.createElement('li');
        let newa =document.createElement('a');
        let itag = document.createElement('i');

        newul.className = 'ul';
        newli.className = "list-item";
        newa.setAttribute('href','#');
        itag.className = "fa-solid fa-trash-can";
         if(newtask.value ==""){
            window.alert('Please Enter a task');
        }else{
            newli.textContent =newtask.value;
            newa.appendChild(itag);
            newli.appendChild(newa);
            newul.appendChild(newli);
            uldiv.appendChild(newul);

        }
    }


    

    // console.log(newli);

    newtask.value = '';
})


// adding value to my list 
// function addvalue(e){
    
// }



// function addlistitem(){
//     let newli =document.createElement('li');
//     let newa =document.createElement('a');
//     let itag = document.createElement('i');

//     newli.className = "list-item";
//     newa.setAttribute('href','#');
//     itag.className = "fa-solid fa-trash-can";
// }











// Delete when click on bin 
let action =document.querySelector('.action')
// console.log(action);

action.addEventListener('click',del);

function del(e){
    // console.log('i am delete function');
    if (e.target.className == "fa-solid fa-trash-can"){
        // console.log('yes this is bin');
        // console.log(e.target.parentElement.parentElement);

        e.target.parentElement.parentElement.remove();
    }
}


// clear all task 
let cabtn=document.querySelector('.clearall');
// console.log(cabtn);

cabtn.addEventListener('click',clearall);

function clearall(e){
    // console.log('i am clear all btn');
    // console.log(e.target.parentElement.children[1].remove());
    // console.log(e.target.parentElement.children[1]);
    let ultag =e.target.parentElement.children[1].children[0];
    let litag =e.target.parentElement.children[1].children[0].children[0];
    if(ultag.className == "ul"){
        if(litag){
            ultag.remove();

        }
       
        
    }else{
        console.log('NO , this is not ul tag');
    }
   
}



