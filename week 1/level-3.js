'Love is the best thing in this world. Some found their love and some are still looking for their love.'.match(/love/gi).length//1
'You cannot end a sentence with because because because is a conjunction'.match(/because/gi).length//2
    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    sentence.replace(/[%,$,@,&,#,;]/gi,'')//3 teaching 

'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'.match(/\d+/g).reduce((a,b)=>(+a)+(+b))//4