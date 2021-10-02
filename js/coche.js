////////////////class car//////////////////////////////////////////////////////

class Coche {
    constructor(nombre, modelo, imagen) {
        this.nombre = nombre;
        this.modelo = modelo;
        this.imagen = imagen;
        this.velocidad = (Math.floor(Math.random() * 90 + 10));
        this.km_recorridos = 0;
    }

    correr() {
        this.km_recorridos += this.velocidad;
    }
}

//////////////declaration variables//////////////////////////////////////////////
let p1 = new Coche('Mate', 'International L170', 'mate.png');
let p2 = new Coche('Rayo', 'Chevrolet Corvete C1 2006', 'rayo.png');
let p3 = new Coche('Rojo', 'Marauder', 'rojo.png');
let p4 = new Coche('Sally', 'Porsche 911 Serie 996', 'sally.png');
let p5 = new Coche('Sargento', "Jeep", 'sagento.png');
let p6 = new Coche('Sheriff', 'Mercury Eight Police Cruiser', 'sheriff.png');
let p7 = new Coche('Flo', 'GM Motorama', 'fio.png');
let p8 = new Coche('Fillmore', 'Volkswagen Combi T1', 'fillmore.png');

///////////traductor/////////////////////////////////////////////////////////////
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

let jugador_1 = "";
let jugador_2 = "";
let jugador_3 = "";
let jugador_4 = "";

const elegir = (cocheElegido) => {

    if (jugador_1 == "" || jugador_2 == "" || jugador_3 == "" || jugador_4 == "") {
        document.getElementById(cocheElegido).className = "dark";
    }

    if (jugador_1 == "") {
        jugador_1 = traductorCoches[cocheElegido];

    } else if (jugador_1 != "" && jugador_2 == "") {
        jugador_2 = traductorCoches[cocheElegido];

    } else if (jugador_1 != "" && jugador_2 != "" && jugador_3 == "") {
        jugador_3 = traductorCoches[cocheElegido];

    } else if (jugador_1 != "" && jugador_2 != "" && jugador_3 != "" && jugador_4 == "") {
        jugador_4 = traductorCoches[cocheElegido];

    }

}

//////////////////////////// CARRERA //////////////////////////////////////

const result = () => {

    mostrar_partida()
 
    const distancia_KM = parseInt(document.getElementById("pista").offsetWidth) - 110;

    const j1 = document.createElement('div')
    const j2 = document.createElement('div')
    const j3 = document.createElement('div')
    const j4 = document.createElement('div')

    j1.id = 'p1'
    j1.style.cssText = `
        position: fixed;
        top: 350px;
        left: 300px;
        clip-path: polygon(55% 10%, 69% 36%, 100% 44%, 100% 70%, 77% 87%, 52% 69%, 26% 87%, 0% 70%, 0 45%, 23% 10%);
        background-color: black;
        width: 4em;
        height: 2em;
    `
    j2.id = 'p2'
    j2.style.cssText = `
        position: fixed;
        top: 415px;
        left: 300px;
        clip-path: polygon(55% 10%, 69% 36%, 100% 44%, 100% 70%, 77% 87%, 52% 69%, 26% 87%, 0% 70%, 0 45%, 23% 10%);
        background-color: black;
        width: 4em;
        height: 2em;
    `
    j3.id = 'p3'
    j3.style.cssText = `
        position: fixed;
        top: 485px;
        left: 300px;
        clip-path: polygon(55% 10%, 69% 36%, 100% 44%, 100% 70%, 77% 87%, 52% 69%, 26% 87%, 0% 70%, 0 45%, 23% 10%);
        background-color: black;
        width: 4em;
        height: 2em;
    `
    j4.id = 'p4'
    j4.style.cssText = `
        position: fixed;
        top: 550px;
        left: 300px;
        clip-path: polygon(55% 10%, 69% 36%, 100% 44%, 100% 70%, 77% 87%, 52% 69%, 26% 87%, 0% 70%, 0 45%, 23% 10%);
        background-color: black;
        width: 4em;
        height: 2em;
    `

    let titulo_ganador = document.getElementById("ganador");
    let img_ganador = document.getElementById("img_ganador");

    console.log('empieza la carrera');

    document.body.addEventListener('keydown', function (event) {

        console.log('corre');

        if (jugador_1.km_recorridos < distancia_KM && jugador_2.km_recorridos < distancia_KM && jugador_3.km_recorridos < distancia_KM && jugador_4.km_recorridos < distancia_KM) {

            if (event.keyCode === 87) {

                const corredor1 = j1.style.left.replace('px', '')
                j1.style.left = `${+corredor1 + jugador_1.velocidad}px`
                jugador_1.correr()

                const corredor2 = j2.style.left.replace('px', '')
                j2.style.left = `${+corredor2 + jugador_2.velocidad}px`
                jugador_2.correr()

                const corredor3 = j3.style.left.replace('px', '')
                j3.style.left = `${+corredor3 + jugador_3.velocidad}px`
                jugador_3.correr()

                const corredor4 = j4.style.left.replace('px', '')
                j4.style.left = `${+corredor4 + jugador_4.velocidad}px`
                jugador_4.correr()


                if (jugador_1.km_recorridos >= distancia_KM) {
                    titulo_ganador.innerHTML = jugador_1.nombre + ' ha ganado la carrera!';
                    img_ganador.src=`./img/${jugador_1.imagen}`;

                } else if (jugador_2.km_recorridos >= distancia_KM) {
                    titulo_ganador.innerHTML = jugador_2.nombre + ' ha ganado la carrera!';
                    img_ganador.src=`./img/${jugador_2.imagen}`;

                } else if (jugador_3.km_recorridos >= distancia_KM) {
                    titulo_ganador.innerHTML = jugador_3.nombre + ' ha ganado la carrera!';
                    img_ganador.src=`./img/${jugador_3.imagen}`;

                } else if (jugador_4.km_recorridos >= distancia_KM) {
                    titulo_ganador.innerHTML = jugador_4.nombre + ' ha ganado la carrera!';
                    img_ganador.src=`./img/${jugador_4.imagen}`;
                }
            }
        }
    })

    document.body.appendChild(j1)
    document.body.appendChild(j2)
    document.body.appendChild(j3)
    document.body.appendChild(j4)
}


const limpia_coches = () => {

    document.getElementById("p1").style.display = "none";
    document.getElementById("p2").style.display = "none";
    document.getElementById("p3").style.display = "none";
    document.getElementById("p4").style.display = "none";

}


const mostrar_jugadores = () => {

    let f3 = document.getElementById("fase3");
    f3.innerHTML = `
    <div class="row row_participantes">
    <div class="col-12 col_participantes">
        <h1>LOS PARTICIPANTES</h1>
    </div>
</div>
<div class="row row_participantes_img">
    <div class="col col_participantes_img">
        <div class="info_coche">
            <img onclick='elegir("c5")' class="img_corredor" id="c5" src="./img/${jugador_1.imagen}" alt="">
            <p class="nombre"><strong>Nombre: </strong>${jugador_1.nombre}</p>
            <p class="modelo"><strong>Modelo: </strong>${jugador_1.modelo}</p>
        </div>
        <div class="info_coche">
            <img onclick='elegir("c6")' class="img_corredor" id="c6" src="./img/${jugador_2.imagen}" alt="">
            <p class="nombre"><strong>Nombre: </strong>${jugador_2.nombre}</p>
            <p class="modelo"><strong>Modelo: </strong>${jugador_2.modelo}</p>
        </div>
    </div>
</div>
<div class="row row_participantes_img">
    <div class="col col_participantes_img">
        <div class="info_coche">
            <img onclick='elegir("c7")' class="img_corredor" id="c7" src="./img/${jugador_3.imagen}" alt="">
            <p class="nombre"><strong>Nombre: </strong>${jugador_3.nombre}</p>
            <p class="modelo"><strong>Modelo: </strong>${jugador_3.modelo}</p>
        </div>
        <div class="info_coche">
            <img onclick='elegir("c8")' class="img_corredor" id="c8" src="./img/${jugador_4.imagen}" alt="">
            <p class="nombre"><strong>Nombre: </strong>${jugador_4.nombre}</p>
            <p class="modelo"><strong>Modelo: </strong>${jugador_4.modelo}</p>
        </div>
    </div>
</div>
<div class="row row_play">
    <div class="col col_run">
        <button onclick='organizer("4"); result();' id="init_2">INICIAR CARRERA</button>
    </div>
</div>
    `;
}


mostrar_partida = () =>{

    let info_coches = document.getElementById("info_coches");
    info_coches.innerHTML = `
    <div class="col-3 col_km">
        <h2>${jugador_1.nombre}</h2>
        <p>10 km recorridos</p>
    </div>
    <div class="col-3 col_km">
        <h2>${jugador_2.nombre}</h2>
        <p>13 km recorridos</p>
    </div>
    <div class="col-3 col_km">
        <h2>${jugador_3.nombre}</h2>
        <p>10 km recorridos</p>
    </div>
    <div class="col-3 col_km">
        <h2>${jugador_4.nombre}</h2>
        <p>13 km recorridos</p>
    </div>
    `;

    let img_coches = document.getElementById("img_coches");
    img_coches.innerHTML = `
    <div class="col-12 col_coches">
            <img src="./img/${jugador_1.imagen}" class="img_carrera" alt="">
            <img src="./img/${jugador_2.imagen}" class="img_carrera" alt="">
            <img src="./img/${jugador_3.imagen}" class="img_carrera" alt="">
            <img src="./img/${jugador_4.imagen}" class="img_carrera" alt="">
    </div>
    `;

}