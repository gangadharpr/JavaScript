let goToMovie=(success,failure)=>{
    let amount=200;
    if(amount>=700){
        success("go to movie")
    }
    else{
        failure("do not go to pg")
    }
}

goToMovie((msg)=>{
    console.log(msg)},
    (err)=>{
        console.error(err)
})