for (let i = 0 ; i <=100;i++){
      if (i%3==0){
          console.log('Crackle');
        } else  if (i%5==0){
          console.log('Pop');
        } else if (i%5==0 || i%3==0){
          console.log('CracklePop');
       } else{
          console.log(i); }
}
