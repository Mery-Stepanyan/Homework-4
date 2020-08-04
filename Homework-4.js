//////////////convert a given string into an array of word

const firstArray = str =>{
    let secondArray= []
    str=str.split(" ");
    secondArray.push(str)
    return secondArray
}
console.log(firstArray("Hello World"));

////////////////////////Return the biggest digit of a number
const bd = n =>{
    let i;
    let j= 0;
    for (i=0; i<n ;i++){
        i = n%10; n=(n-i)/10;
        if(i > j){
            j = i;}
    }
    return j;
}
console.log(bd(729));
/////////////Split values of two given arrays into two groups
const f=(array1,array2)=>{
    const n1=[];
    const n2=[];
    const newArray=[];
        for(let i=0;i<array2.length;i++){
            if(!array2[i]){
                n1.push(array1[i])
            }
            else{
          n2.push(array1[i])
            }
        }
        newArray.push(n1,n2);
        return newArray;
    }
console.log(f([11, 15, 7, 589, 62], [true,true, true, false, true]))


//////////////////////////////////////palindrome

const palindrome = str =>{
    let counter=0;
    for(let i=0;i<str.length/2;i++){
        if (str[i] != str[str.length - i - 1]) {
        return false;
        }
        else
        {counter++;
        }}
        if (counter == str.length / 2) {
        return true;
   }
}
console.log(palindrome('abba'));