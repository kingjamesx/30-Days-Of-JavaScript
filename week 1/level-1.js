//Coders Den Task Level 1
var challenge='30 Days Of JavaScript';
console.log(challenge);//print the string
console.log(challenge.length);//print the length
challenge.toUpperCase();//to upper case
challenge.toLowerCase(); //to lower case
challenge.substr(0,2);//first word of string
challenge.substring(0,2)//using the substring
challenge.substr(3,challenge.lenght)//slice 
challenge.includes('Script');// check if it includes script
challenge.split();//split into array
challenge.split(' ');//split at space
'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(',');
challenge.replace('JavaScript','python');//replace js to python
challenge.charAt(15)//char is S 
challenge.charCodeAt('J');//char code of j
challenge.indexOf('a');//first occurence of a 
challenge.lastIndexOf('a')//last occurence of a 
'You cannot end a sentence with because because because is a conjunction'.indexOf('because')//first occurence of because
'You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because')//last occurence of because
'You cannot end a sentence with because because because is a conjunction'.search('because');//position of first because
 ' 30 Days Of JavaScript '.trim();//trim space at beginning and end
challenge.startsWith('30');//return true
challenge.endsWith('t');//return false
challenge.match(/a/gi)//all the a in challenge
'30 Days of'.concat('JavaScript');//concatenation
challenge.repeat(2);