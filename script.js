//let tab = [1, 2, 3, 4, 5, 6];
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
let nombre;
let nombre2;

un.addEventListener('click',()=>{
    if ( nombre2 != null) {
        console.log("Vous ne pouvez pas miser sur deux chiffres !")
    } else{
        nombre2 = 1;
        un.style.backgroundColor = "gray" ; 
        console.log(nombre2);
    }
    un.addEventListener('dblclick',()=>{
        nombre2 = null ;  
        un.style.backgroundColor = "whitesmoke" ; 
        console.log(nombre2);
    })
   
})

deux.addEventListener('click',()=>{
    if ( nombre2 != null) {
        console.log("Vous ne pouvez pas miser sur deux chiffres !")
    } else{
        nombre2 = 2;
        deux.style.backgroundColor = "gray" ; 
        console.log(nombre2);
    }
    deux.addEventListener('dblclick',()=>{
        nombre2 = null ;  
        deux.style.backgroundColor = "whitesmoke" ; 
        console.log(nombre2);
    })
})

trois.addEventListener('click',()=>{
    if ( nombre2 != null) {
        console.log("Vous ne pouvez pas miser sur deux chiffres !")
    } else{
        nombre2 = 3;
        trois.style.backgroundColor = "gray" ; 
    }
    trois.addEventListener('dblclick',()=>{
        nombre2 = null ;  
        trois.style.backgroundColor = "whitesmoke" ; 
        console.log(nombre2);
    })
})

quatre.addEventListener('click',()=>{
    if ( nombre2 != null) {
        console.log("Vous ne pouvez pas miser sur deux chiffres !")
    } else{
        nombre2 = 4;
       quatre.style.backgroundColor = "gray" ; 
       console.log(nombre2);
    }
    quatre.addEventListener('dblclick',()=>{
        nombre2 = null ;  
        quatre.style.backgroundColor = "whitesmoke" ; 
        console.log(nombre2);
    })
})

cinq.addEventListener('click',()=>{
    if ( nombre2 != null) {
        console.log("Vous ne pouvez pas miser sur deux chiffres !")
    } else{
        nombre2 = 5;
        cinq.style.backgroundColor = "gray" ;
        console.log(nombre2); 
    }
    cinq.addEventListener('dblclick',()=>{
        nombre2 = null ;  
        cinq.style.backgroundColor = "whitesmoke" ; 
        console.log(nombre2);
    })
})

six.addEventListener('click',()=>{
    if ( nombre2 != null) {
        console.log("Vous ne pouvez pas miser sur deux chiffres !")
    } else{
        nombre2 = 6;
        six.style.backgroundColor = "gray" ;
        console.log(nombre2);
    }
    six.addEventListener('dblclick',()=>{
        nombre2 = null ;  
        six.style.backgroundColor = "whitesmoke" ; 
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
    main.style.visibility = "hidden";
})