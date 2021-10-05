// Clase coche

class Coche {
    constructor(nombre, modelo, imagen) {
        this.nombre = nombre;
        this.modelo = modelo;
        this.imagen = imagen;
        this.velocidad = (Math.floor(Math.random() * 90 + 10));
        this.distancia_px = 0;
    }

    correr() {
        this.distancia_px += this.velocidad;
    }

    reset_km() {
        this.distancia_px=0;
    }
}

// Coches instanciados

let p1 = new Coche('Mate', 'International L170', 'mate.png');
let p2 = new Coche('Rayo', 'Chevrolet Corvete C1 2006', 'rayo.png');
let p3 = new Coche('Rojo', 'Marauder', 'rojo.png');
let p4 = new Coche('Sally', 'Porsche 911 Serie 996', 'sally.png');
let p5 = new Coche('Sargento', "Jeep", 'sargento.png');
let p6 = new Coche('Sheriff', 'Mercury Eight Police Cruiser', 'sheriff.png');
let p7 = new Coche('Flo', 'GM Motorama', 'fio.png');
let p8 = new Coche('Fillmore', 'Volkswagen Combi T1', 'fillmore.png');


// Traductor de texto a objeto

let traductorCoches = {
    "c1": p1,
    "c2": p2,
    "c3": p3,
    "c4": p4,
    "c5": p5,
    "c6": p6,
    "c7": p7,
    "c8": p8,
}

let jugadores = [];

//Elegir coches para la carrera

const elegir = (cocheElegido) => {


    if (jugadores[0] == null || jugadores[1] == null || jugadores[2] ==null || jugadores[3] == null) {
        document.getElementById(cocheElegido).className = "sombra";

        let id_car= 'car_'+ cocheElegido;
        document.getElementById(id_car).className = "car_sombra";
    }

    if (jugadores[0] == null) {
        jugadores[0] = traductorCoches[cocheElegido];

    } else if (jugadores[0] != null && jugadores[1] == null) {
        jugadores[1] = traductorCoches[cocheElegido];

    } else if (jugadores[0] != null && jugadores[1] != null && jugadores[2] == null) {
        jugadores[2] = traductorCoches[cocheElegido];

    } else if (jugadores[0] != null && jugadores[1] != null && jugadores[2] != null && jugadores[3] == null) {
        jugadores[3] = traductorCoches[cocheElegido];

    }

}

//Mostrar los jugadores de la carrera que van a competir

const mostrar_jugadores = () => {

    let f3 = document.getElementById("fase3");
    f3.innerHTML = `
    <div class="row row_participantes">
    <div class="col-12 col_participantes">
        <h1><strong>LOS PARTICIPANTES</strong></h1>
    </div>
</div>
<div class="row row_participantes_img">
    <div class="col col_participantes_img">
        <div class="info_coche">
            <img onclick='elegir("c5")' class="img_corredor" id="c5" src="./img/${jugadores[0].imagen}" alt="">
            <p class="nombre"><strong>Nombre: </strong>${jugadores[0].nombre}</p>
            <p class="modelo"><strong>Modelo: </strong>${jugadores[0].modelo}</p>
        </div>
        <div class="info_coche">
            <img onclick='elegir("c6")' class="img_corredor" id="c6" src="./img/${jugadores[1].imagen}" alt="">
            <p class="nombre"><strong>Nombre: </strong>${jugadores[1].nombre}</p>
            <p class="modelo"><strong>Modelo: </strong>${jugadores[1].modelo}</p>
        </div>
    </div>
</div>
<div class="row row_participantes_img">
    <div class="col col_participantes_img">
        <div class="info_coche">
            <img onclick='elegir("c7")' class="img_corredor" id="c7" src="./img/${jugadores[2].imagen}" alt="">
            <p class="nombre"><strong>Nombre: </strong>${jugadores[2].nombre}</p>
            <p class="modelo"><strong>Modelo: </strong>${jugadores[2].modelo}</p>
        </div>
        <div class="info_coche">
            <img onclick='elegir("c8")' class="img_corredor" id="c8" src="./img/${jugadores[3].imagen}" alt="">
            <p class="nombre"><strong>Nombre: </strong>${jugadores[3].nombre}</p>
            <p class="modelo"><strong>Modelo: </strong>${jugadores[3].modelo}</p>
        </div>
    </div>
</div>
<div class="row row_play">
    <div class="col col_run">
        <button onclick='organizer("4"); inicial_carrera();' id="init_2">INICIAR CARRERA</button>
    </div>
</div>
    `;
}

//Mostrar info de la partida

mostrar_partida = () => {

    let info_coches = document.getElementById("info_coches");
    info_coches.innerHTML = `
    <div class="col-3 col_km">
        <h2>${jugadores[0].nombre}</h2>
        <p>${jugadores[0].modelo}</p>
    </div>
    <div class="col-3 col_km">
        <h2>${jugadores[1].nombre}</h2>
        <p>${jugadores[1].modelo}</p>
    </div>
    <div class="col-3 col_km">
        <h2>${jugadores[2].nombre}</h2>
        <p>${jugadores[2].modelo}</p>
    </div>
    <div class="col-3 col_km">
        <h2>${jugadores[3].nombre}</h2>
        <p>${jugadores[3].modelo}</p>
    </div>
    `;

    let img_coches = document.getElementById("img_coches");
    img_coches.innerHTML = `
    <div class="col-12 col_coches">
            <img src="./img/${jugadores[0].imagen}" class="img_carrera" alt="">
            <img src="./img/${jugadores[1].imagen}" class="img_carrera" alt="">
            <img src="./img/${jugadores[2].imagen}" class="img_carrera" alt="">
            <img src="./img/${jugadores[3].imagen}" class="img_carrera" alt="">
    </div>
    `;

}

//Cambio los elementos de sitios cuando corren los coches

const inicial_carrera = () => {

    mostrar_partida();

    const distancia_KM = parseInt(document.getElementById("pista").offsetWidth) -170;

    const j1 = document.createElement('div');
    const j2 = document.createElement('div');
    const j3 = document.createElement('div');
    const j4 = document.createElement('div');

    let corredor1 = 0;
    let corredor2 = 0;
    let corredor3 = 0;
    let corredor4 = 0;

    j1.id = 'p1'
    j2.id = 'p2'
    j3.id = 'p3'
    j4.id = 'p4'

    j1.className = "p1";
    j2.className = "p2";
    j3.className = "p3";
    j4.className = "p4";


    let titulo_ganador = document.getElementById("ganador");
    let img_ganador = document.getElementById("img_ganador");

    document.body.addEventListener('keydown', function (event) {


        if (jugadores[0].distancia_px < distancia_KM && jugadores[1].distancia_px < distancia_KM && jugadores[2].distancia_px < distancia_KM && jugadores[3].distancia_px < distancia_KM) {

            if (event.keyCode === 32) {

                corredor1 = ( (j1.style.left.replace('px', '')=='') ) ? 300 : j1.style.left.replace('px', ''); 
                j1.style.left = `${+corredor1 + jugadores[0].velocidad}px`;
                jugadores[0].correr();

                corredor2 = ( (j2.style.left.replace('px', '')=='') ) ? 300 : j2.style.left.replace('px', ''); 
                j2.style.left = `${+corredor2 + jugadores[1].velocidad}px`;
                jugadores[1].correr();

                corredor3 = ( (j3.style.left.replace('px', '')=='') ) ? 300 : j3.style.left.replace('px', ''); 
                j3.style.left = `${+corredor3 + jugadores[2].velocidad}px`;
                jugadores[2].correr();

                corredor4 = ( (j4.style.left.replace('px', '')=='') ) ? 300 : j4.style.left.replace('px', ''); 
                j4.style.left = `${+corredor4 + jugadores[3].velocidad}px`;
                jugadores[3].correr();


                if (jugadores[0].distancia_px >= distancia_KM) {
                    titulo_ganador.innerHTML = jugadores[0].nombre + ' ha ganado la carrera!';
                    img_ganador.src = `./img/${jugadores[0].imagen}`;

                } else if (jugadores[1].distancia_px >= distancia_KM) {
                    titulo_ganador.innerHTML = jugadores[1].nombre + ' ha ganado la carrera!';
                    img_ganador.src = `./img/${jugadores[1].imagen}`;

                } else if (jugadores[2].distancia_px >= distancia_KM) {
                    titulo_ganador.innerHTML = jugadores[2].nombre + ' ha ganado la carrera!';
                    img_ganador.src = `./img/${jugadores[2].imagen}`;

                } else if (jugadores[3].distancia_px >= distancia_KM) {
                    titulo_ganador.innerHTML = jugadores[3].nombre + ' ha ganado la carrera!';
                    img_ganador.src = `./img/${jugadores[3].imagen}`;
                }
            }
        }
    })

    document.getElementById("pista").appendChild(j1)
    document.getElementById("pista").appendChild(j2)
    document.getElementById("pista").appendChild(j3)
    document.getElementById("pista").appendChild(j4)
}

//Quita los elementos de los coches

const limpia_coches = () => {

    corredor1 = 0;
    corredor2 = 0;
    corredor3 = 0;
    corredor4 = 0;

    document.getElementById("p1").remove();
    document.getElementById("p2").remove();
    document.getElementById("p3").remove();
    document.getElementById("p4").remove();

    p1.reset_km();
    p2.reset_km();
    p3.reset_km();
    p4.reset_km();
    p5.reset_km();
    p6.reset_km();
    p7.reset_km();
    p8.reset_km();

}

//Limpia los datos de la partida

const limpia_partida = () => {


    jugadores = [];

    document.getElementById("c1").className = "img_coche";
    document.getElementById("c2").className = "img_coche";
    document.getElementById("c3").className = "img_coche";
    document.getElementById("c4").className = "img_coche";
    document.getElementById("c5").className = "img_coche";
    document.getElementById("c6").className = "img_coche";
    document.getElementById("c7").className = "img_coche";
    document.getElementById("c8").className = "img_coche";
    
    location.reload();

}
