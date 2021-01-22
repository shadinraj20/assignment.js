    // // first function
    // function kilometerToMeter (meter){
    //     var kilometer = meter/1000;
    //     return kilometer;
    // }
    // var khulnaToDhaka = kilometerToMeter (127000);
    // console.log(khulnaToDhaka);
        
   // second function
   function budgetCalculator(watch, phone, laptop){
   var product = 0;
   if(watch<=10){
    product = watch * 50;
   }else if(watch<=10){
    var watch = 10*50;
    var remaining = watch-10; 
    var phone = remaining * 100;
    product = watch + phone;
   }else{
    var watch = 10*50;
    var phone = 10*100;
    var remaining = phone-20;
    var laptop =  remaining *300;
    product = watch + phone + laptop;
   }
    return product;
   }
   var result = budgetCalculator(20,  20, 15);
   console.log(result);
   
  
