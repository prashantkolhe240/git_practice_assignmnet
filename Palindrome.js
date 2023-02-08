 let s='';
 let num=1221;

    let t=num.toString();

    for(let i=t.length-1;i>=0;i--){

        s=s+t[i];

    }

   

    if(s==num)

    console.log("Yes");

    else

    console.log("No");