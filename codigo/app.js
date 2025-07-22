 
        function repartir(){
            let tablero=document.getElementById("tablero");
            tablero.innerHTML="";
            const TOTAL_CARTAS = 10;
            for(let i=0; i < TOTAL_CARTAS; i++) {
            let carta=document.createElement("img");
            let indice=Math.floor(Math.random()*52) + 1;
            carta.src="imagenes/cartas/Carta"+indice+".jpg";
            tablero.appendChild(carta);
        }
         const audio=new Audio("sonidos/repartir.mp3");
         audio.play().then(() => {
        window.alert("The cards are over");
         });
    }
    function verificar(){
        window.alert("mañana vemos pues");
    }