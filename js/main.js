

const organizer = (arg_O) => {

    let fasewant = "fase" + arg_O;
    let arrFases = ["fase1", "fase2", "fase3", "fase4" , "fase5"];
    arrFases = arrFases.filter(val => !fasewant.includes(val));


    document.getElementById(fasewant).style.display = "block";
    for (let _f of arrFases) {
        document.getElementById(_f).style.display = "none";
    }


}

