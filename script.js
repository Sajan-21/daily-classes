let str = " Hello World";

let strLength = str.length;
console.log("string length : ",strLength);
console.log("to uppercase : ",str.toUpperCase());
console.log("to lowecase : ",str.toLocaleLowerCase());
console.log("string starts with : ",str.startsWith('H'));
console.log("string ends with : ",str.endsWith('d'));


let leftTrimmedValue = str.trimStart();
console.log("left trimmed string : ", leftTrimmedValue);
console.log("length of trimmed value : ", leftTrimmedValue.length);

//arrays

let arr = [10,20,30,40,50];
console.log("array : ",arr);
console.log("type of array : ",typeof arr);

console.log("third position : ",arr[2]);

arr[0]=100;
console.log("updated array : ",arr);

arr.push("last");
console.log("pushed array : ",arr);
arr.unshift("first");
console.log("shifted array : ",arr);

arr.pop();
console.log("popped array : ",arr);
arr.shift();
console.log("shifted array : ",arr);

arr.splice(1,4);
console.log("spliced array : ",arr);

arr.splice(2,0,200);
console.log("spliced array 2 : ",arr);

//conditional-statements

{
    let num1=10;
    let num2=20;

    if(num1>num2){
        console.log("num 1 is greater : ",num1);
    }
    else{
        console.log("num 2 is greater : ",num2)
    }

}

//switch

{
    let day=1;

    switch(day){
        case 1 : console.log("sunday");
        break;
        case 2 : console.log("monday");
        break;
        case 3 : console.log("tuesday");
        break;
        case 4 : console.log("wednesday");
        break;
        case 5 : console.log("thursday");
        break;
    }
}

//loop

{
    for(let i=0; i<=10; i++){
        if(i%2==0){
            console.log(i);
        }
        else{
            console.log("0");
        }
        
    }
}

{
    let str = '';

    for(let i=0; i<=5; i++){
        for(j=0; j<i; j++){
            str = str + " *";
        }
        str = str + '\n';
    }
    console.log(str);
}

//functions

//named fns

{
    function named(){
        console.log('named fns');
    }

    named();
}

//anonymous fns

{
    const fnsvariable1 = function(){
        console.log("from anonymous");
    }
    fnsvariable1();
}

//arrow fns

{
    const fnsvariable2 = ()=> {
        console.log("from arrow");
    }

    fnsvariable2();
}

// fns with arguments and parameters

{
    function argAndParaFns (a,b) {
        console.log("a : ",a);
        console.log("b : ",b);
    }

    argAndParaFns (10,20);
}

//callback and returning

{
    let fnsWithReturn = function callBack (printAandB){
        printAandB ();

        let done = function(){
            console.log("value returned");
        }

        return done;
    }

    callBack(function fnsandb(){
        console.log("a and b");
    })
}



