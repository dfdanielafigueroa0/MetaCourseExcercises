/*
Example 1
for (var year= 2023; year < 2025; year ++){
    console.log(year);
    for (var month= 6; month < 9; month++){
        console.log(month);
    }
}


Multiplication Tables


for (var multiplicador= 1; multiplicador <= 9; multiplicador ++){
    for (var multiplicando = 1; multiplicando <=9; multiplicando ++){
        console.log(multiplicador, 'por', multiplicando, 'es igual a: ',
         multiplicador*multiplicando)
    }
}



var cubes = 'ABCDEFG';

for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}


for (i=1; i<=10; i++){
    if (i==1){
        console.log('Gold Medal')
    }
    else if (i==2){
        console.log('Silver Medal')
    }
    else if (i==3){
        console.log('Bronze Medal')
    }
    else console.log(i)
    
    
}

*/

for (var i=1; i<=10; i++) {

    switch (i) {
    
    case 1:
        console.log('Gold Medal')
        break
    
    case 2:
        console.log('Silver Medal')
        break
    
    case 3: 
        console.log('Bronze Medal')
        break
    
    default: 
         console.log(i)
         break
    
        } 

    }
