import "../css/style.css";

import {cpfGenerator} from "../js/class/cpfGenerator";

(function (){
    let cpf = new cpfGenerator();
    let $p = document.querySelector(".result");
    
    $p.innerHTML = cpf.init();

    document.addEventListener("click", function(e){
        e.preventDefault();
        if(e.target.className === 'init') {
            cpf = new cpfGenerator();
            $p.innerHTML = cpf.init();
        }
    })
})();

