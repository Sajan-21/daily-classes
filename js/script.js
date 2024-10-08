let str = " Hello World";

let strLength = str.length;
console.log("string length : ", strLength);
console.log("to uppercase : ", str.toUpperCase());
console.log("to lowecase : ", str.toLocaleLowerCase());
console.log("string starts with : ", str.startsWith('H'));
console.log("string ends with : ", str.endsWith('d'));


let leftTrimmedValue = str.trimStart();
console.log("left trimmed string : ", leftTrimmedValue);
console.log("length of trimmed value : ", leftTrimmedValue.length);

//arrays

let arr = [10, 20, 30, 40, 50];
console.log("array : ", arr);
console.log("type of array : ", typeof arr);

console.log("third position : ", arr[2]);

arr[0] = 100;
console.log("updated array : ", arr);

arr.push("last");
console.log("pushed array : ", arr);
arr.unshift("first");
console.log("shifted array : ", arr);

arr.pop();
console.log("popped array : ", arr);
arr.shift();
console.log("shifted array : ", arr);

arr.splice(1, 4);
console.log("spliced array : ", arr);

arr.splice(2, 0, 200);
console.log("spliced array 2 : ", arr);
console.log("\n\n\n");

//conditional-statements

{
    let num1 = 10;
    let num2 = 20;

    if (num1 > num2) {
        console.log("num 1 is greater : ", num1);
    }
    else {
        console.log("num 2 is greater : ", num2)
    }

}
console.log("\n\n\n");

//switch

{
    let day = 1;

    switch (day) {
        case 1: console.log("sunday");
            break;
        case 2: console.log("monday");
            break;
        case 3: console.log("tuesday");
            break;
        case 4: console.log("wednesday");
            break;
        case 5: console.log("thursday");
            break;
    }
}
console.log("\n\n\n");

//loop

{
    for (let i = 0; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
        else {
            console.log("0");
        }

    }
}

{
    let str = '';

    for (let i = 0; i <= 5; i++) {
        for (j = 0; j < i; j++) {
            str = str + " *";
        }
        str = str + '\n';
    }
    console.log(str);
}
console.log("\n\n\n");

//functions

//named fns

{
    function named() {
        console.log('named fns');
    }

    named();
}
console.log("\n");

//anonymous fns

{
    const fnsvariable1 = function () {
        console.log("from anonymous");
    }
    fnsvariable1();
}
console.log("\n");

//arrow fns

{
    const fnsvariable2 = () => {
        console.log("from arrow");
    }

    fnsvariable2();
}
console.log("\n");

// fns with arguments and parameters

{
    function argAndParaFns(a, b) {
        console.log("a : ", a);
        console.log("b : ", b);
    }

    argAndParaFns(10, 20);
}
console.log("\n\n\n");

//callback and returning

// {
//     let fnsWithReturn = function callBack (printAandB){
//         printAandB ();

//         let done = function(){
//             console.log("value returned");
//         }

//         return done;
//     }

//     callBack(function (){
//         console.log("a and b");
//     });
// }

// call by value

{
    let a = 10;
    console.log(a);
    function update(a) {
        a = 20;
        console.log(a);
    }
    update(a);
    console.log(a);

}
console.log("\n\n\n");

// closure
{
    function outerfunction() {
        let outerVariable = "outer function variable"
        function innerfunction() {
            function innerfunction1() {
                console.log(outerVariable);
            }
            return innerfunction1;
        }
        return innerfunction;

    }
    let result = outerfunction();
    let result1 = result();
    result1();
}
console.log('\n\n\n');

//event handling

{
    let button = document.getElementById('btn');

    button.addEventListener('click', function () {
        console.log('button clicked');
    });

    button.addEventListener('mouseover', function () {
        console.log('mouse over');
    });

    button.addEventListener('mouseout', function () {
        console.log('mouse out');
    });

    button.addEventListener('mousedown', function () {
        console.log('mouse down');
    });

    button.addEventListener('mouseup', function () {
        console.log('mouse up');
    });

    button.addEventListener('mousemove', function () {
        console.log('mouse moved');
    });

    button.addEventListener('mouseleave', function () {
        console.log('mouse leave');
    });

    button.addEventListener('mouseenter', function () {
        console.log('mouse entered');
    });

    let inp = document.getElementById('name');

    inp.addEventListener('keyup', function () {
        console.log('key upped');
    })

    inp.addEventListener('keydown', function () {
        console.log('key downed');
    })

    inp.addEventListener('keypress', function () {
        console.log('key pressed');
    })


}

//current time + recursive

// {

//     function putZero(value){
//         if(value<10){
//             value = '0'+value;
//         }else{
//             value;
//         }

//         return value;

//     }

//     function show(){
//         let dt=new Date();
//         console.log(dt);

//         let hr=dt.getHours();
//         console.log(hr);

//         if(hr>12){
//         console.log("pm");
//         }else{
//         console.log("am");
//         }
//         let time = document.getElementById('time');
//         console.log('time : ',time);
//         time.innerHTML = putZero(hr) + ':' + putZero(dt.getMinutes()) + ":" + putZero(dt.getSeconds());

//         setTimeout(show,1000);
//     }

//     show();
// }
console.log("\n\n\n");

//destructuring
{
    let arr = [1, 2, 3, 4, 5];
    console.log('array : ', arr);

    let [a, b, c, d, e] = arr;
    console.log('a : ', a);
    console.log("c : ", c);
    console.log("e : ", e);

    //metrix

    let mtx = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]
    console.log(mtx);

    let [row1, row2, [g, h, i]] = mtx;
    console.log("row 1 : ", row1);
    console.log("row 2 : ", row2);
    // console.log("row 3 : ",row3);
    console.log("g : ", g);
    console.log("h : ", h);
    console.log("i : ", i);

    let obj = {
        name: "saj",
        email: "saj@gmail.com",
        address: {
            city: "wki",
            pincode: "680589",
        }
    }
    let { name, email, address: { city, pincode } } = obj;
    console.log("name : ", name);
    console.log("city : ", city);

}
console.log("\n\n\n");


//array methods
{

    let arr = [1, 2, 3, 4, 5];

    arr.forEach((item) => {
        console.log(item);
    });

    let resultFind = arr.find((item) => {
        return item > 3;
    })
    console.log("result of find : ", resultFind);

    let resultFilter = arr.filter((item) => {
        return item > 3;
    });
    console.log("result of filter : ", resultFilter);

    let resultMap = arr.map((item) => {
        return item;
    });
    console.log("result of map : ", resultMap);

    let resultReduce = arr.reduce((total, item) => {
        return total + item;
    }, 0);
    console.log("result of reduce", resultReduce);

}
console.log('\n\n\n');

//this keyWord
{

    console.log("this : ", this);
    console.log('\n');

    let obj = {
        name: "samsu",
        email: "samsuvinsu@gmail.com",
        age: 21,
        printage: function () {
            console.log("function execution started...");
            console.log("age : ", this.age);
            return 0;
        }
    }
    console.log("obj : ", obj);
    console.log("name : ", obj.name);
    console.log("email : ", obj.email);
    console.log("printage : ", obj.printage());
    console.log('\n');

    function greet() {
        // console.log("message 1 : ",message1);
        // console.log("message 2 : ",message2);

        console.log("this inside the function greet : ", this);
        console.log("this . name : ", this.name);

    }
    // greet.call(obj,"dhanush","aneetta");
    // greet.apply(obj,[]);
    let output = greet.bind(obj)
    output();

}
console.log("\n\n\n");

//constructor function
{

    function person(name, age, bounty) {
        this.name = name;
        this.age = age;
        this.bounty = bounty;

        this.greetings = function () {
            console.log(`hi ${this.name}, your age is ${this.age}.`);
        }
    }
    let person1 = new person("garp", 65);
    person1.greetings();

    person1.job = "navy admiral";
    console.log("person 1 : ", person1);

    let person2 = new person("garp", 65, "5 billion");
    console.log("person 2 : ", person2);


    person.prototype.getBounty = function () {
        console.log(`hi ${this.name}, your age is ${this.age} and your bounty is ${this.bounty}`);
    }
    person2.getBounty();


}
console.log("\n\n\n");

//cunstructor in class
{
    class person {
        name;
        age;
        bounty;

        constructor(name, age, bounty) {
            this.name = name;
            this.age = age;
            this.bounty = bounty;
        }

        greetings = function () {
            console.log(`hi ${this.name}, your age is ${this.age}.`);
        }

    }

    let person1 = new person("sanji", 22, "5 billion");
    person1.greetings();

    person1.bounty = "5 billion";
    // console.log(person.bounty);

    person.prototype.getbounty = function () {
        console.log(`hi ${this.name}, your age is ${this.age}.and bounty ${this.bounty}`);
    }

    person1.getbounty();

}
console.log("\n\n\n");

// Inheritance

{

    class Animal {

        name;

        constructor(name) {
            this.name = name;
        }

        walking() {
            console.log(`${this.name} is walking.`);
        }
    }

    class Dog extends Animal {

        color;

        constructor(name, color) {
            super(name);// Super keyword is used to access the parent class (class animal) constructor properties - rule.
            this.color = color;
        }

        //method overriding
        walking() {
            console.log(`my ${this.color} coloured ${this.name} is running.`);
        }

    }

    let dog1 = new Dog("tommy", "brown");
    dog1.walking();


}
console.log("\n\n\n");

//setters and getters
{
    class Cars {
        name;
        color;

        constructor(name) {
            this.name = name;
        }

        info() {
            console.log(`${this.color} ${this.name}`);
        }

        set Color(color) {
            this.color = color;
        }

        get Color() {
            return this.color;
        }

    }


    let car1 = new Cars("BMW");
    car1.info();
    car1.color = "blue";
    car1.info();

}
console.log("\n\n\n");

//
{
    class Button {
        button;

        constructor(content){
            this.button = document.createElement('button');
            this.button.innerHTML = content;
            document.body.appendChild(this.button);
        }

        set width(width){
            this.button.style.width = width + 'px';
        }
        get width(){
            return this.button.style.width;
        }
        set height(height){
            this.button.style.height = height + 'px';
        }
        get height(){
            this.button.style.height;
        }

        onClick (fns) {
            this.button.onclick = fns;
        }

    }

    let button1 = new Button ('click');
    console.log(button1);

    button1.width = 100;
    button1.height = 100;

    button1.onClick(function(){
        console.log("button clicked...");
    });

    class BlackButton extends Button {

        constructor (content) {
            super(content);
            this.button.style.background = "black";
            this.button.style.color = "white";
        }

        onClick (fn) {
            this.button.onclick = function () {
                console.log("this : ",this);
                console.log("this.button : ",this.button);
                this.button.style.padding = 10 + 'px';
                fn();
            }.bind(this);
        }
    }

    let Black = new BlackButton ("click here");

    Black.onClick (function () {
        console.log("button clicked...");
    });
    
}
console.log("\n\n\n");

//client server processes
{

    let xhr = new XMLHttpRequest ();
    console.log(xhr);

    xhr.open('get','https://jsonplaceholder.typicode.com/users');

    document.getElementById('cs').onclick = function () {
        xhr.send();
    }

    xhr.onreadystatechange = function () {
        console.log("readyState : ",xhr.readyState);

        if(xhr.readyState===4){
            console.log(xhr.status);
            if(xhr.status===200){

                let response = xhr.response;
                console.log(response);
                console.log(typeof(response));

                let datas = JSON.parse(response);
                console.log("datas : ",datas);

                let dataContainer = document.getElementById('dataContainer');
                console.log("dataContainer : ",dataContainer);

                let rows = '';
                
                for (let i  = 0 ; i< datas.length; i++) {
                    rows = rows + `
                    <tr>
                    <td>${datas[i].name}</td>
                    <td>${datas[i].username}</td>
                    <td>${datas[i].email}</td>
                    <td>${datas[i].website}</td>
                    </tr>
                    `

                }

                console.log("rows : ",rows);

                dataContainer.innerHTML = rows;
                
            }
        }
    }

}
console.log("\n\n\n");

//regular expressions
{
    let str1 = "the cat is white color";
    let str2 = "i am 21 years old";
    let str3 = "rat eats fish";
    let str4 = `
    hello
    good meat
    is always good
    hai 
    `

    const regexp1 = /a/;
    const result1 = regexp1.test(str1); // checking the letter a is present in str1 or not
    console.log(result1); //result is true
    
    const regexp2 = /A/i;
    const result2 = regexp2.test(str1); // checking the letter A is present or not. I stands for case insensitive.
    console.log(result2); //result is true

    const regexp3 = /[abc]y/;
    const result3 = regexp3.test(str2); // checking the letter A is present or not. I stands for case insensitive.
    console.log(result3); //result is true

    const regexp7 = /^rat/i;
    const result7 = regexp7.test(str3); // check if str3 starts with 'rat'
    console.log(result7);//result true

    const regexp8 = /fish$/i;
    const result8 = regexp8.test(str3); // check if str3 ends with 'fish'
    console.log(result8);//result true

    const regexp9 = /^good/im;
    const result9 = regexp9.test(str4); // m-flag represents multiline matching
    console.log("result 9 : ",result9); //result false

    const regexp10 = /good$/im;
    const result10 = regexp10.test(str4); // m-flag represents multiline matching
    console.log("result 10 : ",result10); // result true

    const regexp11 = /fishes?/im;//word or character before ? is optional for matching
    const result11 = regexp11.test(str3);//it matches both fish and fishes, 's' is optional
    console.log("result 11 : ",result11);// false

    const regexp12 = /fish(es)?/im;
    const result12 = regexp12.test(str3);// '()' represents groups
    console.log("result 12 : ",result12);// true

    const regexp13 = /fishes*$/i;
    const result13 = regexp13.test(str3);//it matches both fishes and fish, 'es' is optional
    console.log("result 13 : ",result13);// false

    const regexp14 = /fishes+$/i;
    const result14 = regexp14.test(str3);// the letter before '+' also can occur multiple times in a string, but atleast one occurance is required
    console.log("result 14 : ",result14);// false

    const regexp15 = /fish.$/i;
    const result15 = regexp15.test(str3);// here it matches fishe, '.' represents any type of character 
    console.log("result 15 : ",result15);

    let str5 = "hello.world"

    const regexp23 = /L{2}o$/i; // "o" should be exactly after 2 L's.
    const result23 = regexp23.test(str5);
    console.log("result 23 : ",result23);

    const regexp24 = /L{2,4}o$/i; // 'o' should be exactly after between 2 to 4 L's
    const result24 = regexp24.test(str5);
    console.log("result 24 : ",result24);

    const regexp25 = /HEL{2,4}o$/i; // 'o' should be exactly after between 2 to 4 L's and 'o' is required
    const result25 = regexp25.test(str5);
    console.log("result 25 : ",result25);

    const regexp26 = /Hel{2,}o$/i; // 2 or more 'L' is required
    const result26 = regexp26.test(str5);
    console.log("result 26 : ",result26);

    const regexp27 = /\d/i; // if there is any digits, it will be true, else it will be false.
    const result27 = regexp26.test(str5);
    console.log("result 27 : ",result27);

    const regexp28 = /\D/i; // if there is any non digits it will be true, if there is only digits it will be falls
    const result28 = regexp28.test(str5);
    console.log("result 28 : ",result28);

    const regexp29 = /./i; // if there is a '.' or anything it will match
    const result29 = regexp29.test(str5);
    console.log("result 29 : ",result29);

    const regexp30 = /\./; // if there is any '.' in the string it match, else it will be false
    const result30 = regexp30.test(str5);
    console.log("result 30 : ",result30);

    // date validation

    //1

    let str6 = '15-10-2002';

    const regexpForDate = /^\d{1,2}-\d{1,2}-\d{4}$/i; // string should start with 1 to 2 digits, then after '-' 1 to 2 digits, then after '-' string ends with 4 digits.
    const result31 = regexpForDate.test(str6);
    console.log("result 31 : ",result31);

    

}
