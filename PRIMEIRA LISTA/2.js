function triang (lado1 = 1, lado2 = 1, lado3 = 1){

    if (lado1 === lado2 && lado1 === lado3){
        if (lado2 === lado3){
            console.log("Equilatero\n");
            
        }
        console.log("Isosceles\n");
    }
    else {
        console.log("Escaleno\n");
    }
}

triang();