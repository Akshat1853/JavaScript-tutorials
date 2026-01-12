// Loops in Javascript

// Repeat krne ko loops kahte hai
// Types of loops

// 1. For loop
// 2. While
// 3. For each
// 4. For in
// 5. do while

for(let i = 1; i < 10; i++){
    console.log("Hui Hui");
}

let i = 1;
while(i < 33){
    console.log(i);
    i++;
}

let j = 12;
do{
    console.log("Hello");
    j++;
}while(j < 2);

for(let i = 1; i < 201; i++)
{
    console.log(i);
    if(i == 32){
        break;
    }
}

for(let i = 1; i < 201; i++)
{
    console.log(i);
    if(i == 32){
        continue;
    }
}

for(let i = 1; i < 11; i++)
{
    console.log(`5 * ${i} = ${5 * i}`);
}