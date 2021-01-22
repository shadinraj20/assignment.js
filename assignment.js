    
    
    
    
    // // first function
      function kilometerToMeter (meter){
          var kilometer = meter/1000;
          return kilometer;
      }
      var khulnaToDhaka = kilometerToMeter (127000);
      console.log(khulnaToDhaka);
          
  
      // 2nd function
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
    
 
     //3rd function   
    function hotelCost(cost){
    var hotel= 0;
    if(cost<=10){
      hotel = cost*100;
    }
    else if(cost<=20){
      var firstpart = 10*100;
      var remaining = cost-10;
      var secondpart = remaining*80;
        hotel = firstpart + secondpart;
      }
      else{
        var firstpart  = 10*100;
        var secondpart = 10*80;
        var remaining  =  cost-20;
        var thirdpart  = remaining *50;
        hotel = firstpart + secondpart +thirdpart; 
     }
      return hotel;
     }
        var result =  hotelCost(6);
        console.log(result);


    // 4th function
    var friends = ["Humayun", 'Shadin', 'Naem Bhuiyan'];
    function megaFriend(friends) {
      var maxFriend ='';
      for(var i = 0; i < friends.length; i++) {
        if(maxFriend.length < friends[i].length) {
          maxFriend = friends[i];
        }
      }

      return maxFriend;
    }
    var result = megaFriend(friends);
    console.log(result);

  

  
