

class mvc {
    constructor(model,view,controller){
        console.log("mvc class");

        this.model = model;
        this.view = view;
        this.controller = controller;

        this.model.view = view;
        this.model.controller = controller;

        this.view.model = model;
        this.view.controller = controller;

        this.controller.model = model;
        this.controller.view = view;

        this.model.initialise();
        this.view.initialise();
        this.controller.initialise();
    }
}

class Model {

  

    constructor(){
        console.log("model class");

        
        
    }

    chaîne (){

        return ["Tf1","France 2","France 3","Canal +","France 5"," M6 "," Arte "," D8 "," W9 "," TMC "];
    }


    liens(){

         return ["programme-tf1-19.html","programme-france-2-6.html","programme-france-3-7.html","programme-canalplus-2.html","programme-france-5-9.html","programme-m6-12.html","programme-arte-337.html","programme-c8-4.html","programme-w9-24.html","programme-tmc-21.html"];
    }
     
    algorithme(){

            const algorithme = document.getElementsByTagName("button");
            for(let i = 0  ; i < algorithme.length ; i++){
            algorithme[i].addEventListener("click", () => this.controller.charge());

            }
        }

    initialise(){
        console.log("model init");
         }
    }

        
class View {

  
    constructor(element){
        console.log("view class");
        this.affichage = element; 
      
        
       
        
    }

    initialise(){
        console.log("view init");
    }

//fonction : créer les boutons [chaînes].
bouton(chaîne){
    
    chaîne.forEach(e => {
        let initialisation = document.createElement("button");
        initialisation.innerText = e;
        initialisation.classList.add("btn");
        this.affichage.appendChild(initialisation);
        initialisation.addEventListener("mouseup" , () => this.controller.charge());
        return initialisation;
        })
    }
// fonction : renvoie la page avec le programme journalier de la chaîne.

    newpage(page){
    
        const algorithme = document.getElementsByTagName("button");
        for(let i = 0  ; i < algorithme.length ; i++){
        algorithme[i].addEventListener("click", () => window.open("https://www.programme-tv.net/programme/chaine/"+page[i]));
        document.location.reload(true);
        }
       
    } 

}



        
class Controller {

    

    constructor(){
        console.log("controller class ");
    }

    initialise(){
        console.log("controller init");
        this.view.bouton(this.model.chaîne());
    
    }

    charge(){
        
    this.view.newpage(this.model.liens());
    }
}

// partie load().

let modelc = new Model();
let viewc = new View(document.body);
let controllerc = new Controller();

const mvcc = new mvc(modelc,viewc,controllerc);

