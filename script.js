const un = document.getElementById("un");
const deux = document.getElementById("deux");
const trois = document.getElementById("trois");
const quatre = document.getElementById("quatre");
const cinq = document.getElementById("cinq");
const six = document.getElementById("six");
const lancer = document.getElementById("Lancer");
const carre = document.getElementById("carre");
const erreur = document.getElementById("erreur");
const alert2 = document.getElementById("alert");
const aide = document.getElementById("aide");
const main = document.getElementById("main");
const cacher = document.getElementById("cacher");
let nombre;
let nombre2;
let explication = false ; 

un.addEventListener('click',()=>{
    if ( nombre2 != null) {
        console.log("Vous ne pouvez pas miser sur deux chiffres !")
    } else{
        nombre2 = 1;
        un.style.backgroundColor = "rgb(236, 42, 42)" ; 
        console.log(nombre2);
    }
    un.addEventListener('dblclick',()=>{
        nombre2 = null ;  
        un.style.backgroundColor = "rgb(32, 32, 32)" ; 
        console.log(nombre2);
    })
   
})

deux.addEventListener('click',()=>{
    if ( nombre2 != null) {
        console.log("Vous ne pouvez pas miser sur deux chiffres !")
    } else{
        nombre2 = 2;
        deux.style.backgroundColor = "rgb(236, 42, 42)" ; 
        console.log(nombre2);
    }
    deux.addEventListener('dblclick',()=>{
        nombre2 = null ;  
        deux.style.backgroundColor = "rgb(32, 32, 32)" ; 
        console.log(nombre2);
    })
})

trois.addEventListener('click',()=>{
    if ( nombre2 != null) {
        console.log("Vous ne pouvez pas miser sur deux chiffres !")
    } else{
        nombre2 = 3;
        trois.style.backgroundColor = "rgb(236, 42, 42)" ; 
    }
    trois.addEventListener('dblclick',()=>{
        nombre2 = null ;  
        trois.style.backgroundColor = "rgb(32, 32, 32)" ; 
        console.log(nombre2);
    })
})

quatre.addEventListener('click',()=>{
    if ( nombre2 != null) {
        console.log("Vous ne pouvez pas miser sur deux chiffres !")
    } else{
        nombre2 = 4;
       quatre.style.backgroundColor = "rgb(236, 42, 42)" ; 
       console.log(nombre2);
    }
    quatre.addEventListener('dblclick',()=>{
        nombre2 = null ;  
        quatre.style.backgroundColor = "rgb(32, 32, 32)" ; 
        console.log(nombre2);
    })
})

cinq.addEventListener('click',()=>{
    if ( nombre2 != null) {
        console.log("Vous ne pouvez pas miser sur deux chiffres !")
    } else{
        nombre2 = 5;
        cinq.style.backgroundColor = "rgb(236, 42, 42)" ;
        console.log(nombre2); 
    }
    cinq.addEventListener('dblclick',()=>{
        nombre2 = null ;  
        cinq.style.backgroundColor = "rgb(32, 32, 32)" ; 
        console.log(nombre2);
    })
})

six.addEventListener('click',()=>{
    if ( nombre2 != null) {
        console.log("Vous ne pouvez pas miser sur deux chiffres !")
    } else{
        nombre2 = 6;
        six.style.backgroundColor = "rgb(236, 42, 42)" ;
        console.log(nombre2);
    }
    six.addEventListener('dblclick',()=>{
        nombre2 = null ;  
        six.style.backgroundColor = "rgb(32, 32, 32)" ; 
        console.log(nombre2);
    })
})



lancer.addEventListener("click",()=>{
    if(!nombre2){
        erreur.textContent = "Veuillez placer vos jetons !";
        erreur.style.color = "red";
    }
    else{
        erreur.textContent = "";
        let Int = setInterval(()=>{
            nombre = Math.floor(Math.random()*6) + 1;
            carre.textContent = nombre;
            console.log(" le resultat est " + nombre);
            console.log(" vous avez misé sur " + nombre2)
           
        },10)
    
        setTimeout(()=>{
            clearInterval(Int);
            if(nombre !== nombre2){
                alert2.textContent = "Essayez encore !" ; 
            }
            else{
                alert2.textContent = "Vous avez gagné !" ; 
            }
        },1000)
    }
   
});

aide.addEventListener('click',()=>{

    if(explication){
        main.style.visibility = "hidden";
        aide.textContent = "Compris ! ";
        cacher.style.visibility = "visible";
    }else{
        main.style.visibility = "visible";
        aide.textContent = "Comment jouez ?";
        cacher.style.visibility = "hidden";
    }
    
    explication = !explication ;
})