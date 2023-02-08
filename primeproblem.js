
    let num=13;
    let count=0;
    if(num==1){
        console.log("No");
        return;
    }

    for(let i=2;i<num;i++){
        if(num%i==0){
            count++;
            break;
        }
    }
    if(count==0){
        console.log("Yes");
    }
    else{
        console.log("No");
        
    }
}
