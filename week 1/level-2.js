//level 2 coders den
console.log("'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")//1
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"")//2
typeof '10'//3,string 
typeof +'10'//3,converted to number 
parseFloat('9.8')//not 10
Math.ceil(parseFloat('9.8'))//4,now 10
'python'.includes('on')&&'jargon'.includes('on') //5
'I hope this course is not full of jargon'.includes('jargon')//6
Math.floor(Math.random()*101);//7
Math.floor(Math.random()*(100-50)+50);//8
Math.floor(Math.random()*256);//9
'javascript'.charAt(Math.floor(Math.random()*'javascript'.length))//10
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log("1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27\n 4 1 4 16 64 \n 5 1 5 25 125")//11
'You cannot end a sentence with because because because is a conjunction'.substr(31,23);//12