function time(){   

    var date = new Date();  // Date object to be created 

    var hrs = date.getHours();  // 24 hrs 
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var AMPM = '' ;     // string variable 


    
    
    document.getElementById('mins').innerText = min + '\n'+ ' mins';
    document.getElementById('sec').innerText = sec + '\n'+' secs';
    

    if (hrs > 12 ){
        hrs =  hrs - 12  ;
        AMPM = 'PM';  // 
        document.getElementById('hours').innerText = hrs +   '\n'+ ' hour';
        document.getElementById('AMPM').innerText = AMPM;

    }
    else {
        document.getElementById('hours').innerText = hrs +   '\n'+ ' hour';
        AMPM = 'AM';
        document.getElementById('AMPM').innerText = AMPM;
    }
 

    
}

time();
setInterval( time , 1000) // for refreshing in 1sec


// For image Changing Code 

function getTimeDetails(){


    // For time Calculation 
    var date1 = new Date();
    var hrs1 = date1.getHours();
    var min1 = date1.getMinutes();
    var sec1 = date1.getSeconds();
    var AMPM1 = '' ;   
    
    document.getElementById('mins').innerText = min1 + '\n'+ ' mins';
    document.getElementById('sec').innerText = sec1 + '\n'+' secs';
    
  

    if ( hrs1> 12 ){
        hrs1 =  hrs1 - 12  ;
        AMPM1 = 'PM';
        document.getElementById('hours').innerText = hrs1 +   '\n'+ ' hour';
        document.getElementById('AMPM').innerText = AMPM1;

    }
    else {
        document.getElementById('hours').innerText = hrs1 +   '\n'+ ' hour';
        AMPM1= 'AM';
        document.getElementById('AMPM').innerText = AMPM1;
    }
 

    var takeWakeUpValue = document.getElementById('wakeUpTimeId').value;
    var LunchTimeValue = document.getElementById('LunchTimeId').value;
    var NightTimeValue = document.getElementById('NightTimeId').value;
    var SetNapTimeValue = document.getElementById('SetNapTimeId').value;
    
    // Setting value on Page 

   document.getElementById('Wake').innerText ="Wake Up Time : " + takeWakeUpValue;
    document.getElementById('lunch').innerText ="Lunch Time : " + LunchTimeValue;
    document.getElementById('nap').innerText ="Nap Time : " +  SetNapTimeValue;
    document.getElementById('night').innerText ="Night Time : " +NightTimeValue ;


    // Code for Image Change 
                      // 7AM - 8AM  // [7AM , - , 8AM]
    var arrWakeTime = takeWakeUpValue.toString().split(" "); // 
    var arrLunchTime = LunchTimeValue.toString().split(" ");
    var arrNapTime = SetNapTimeValue.toString().split(" ");
    var arrNightTime = NightTimeValue.toString().split(" ");


    console.log('Wake Up Time : ' ,   arrWakeTime);
    console.log('Lunch Time  ', arrLunchTime);
    console.log('Night Time   ', arrNightTime);
    console.log('Nap Time is  ', arrNapTime);
    
    var img = '';
   // 7AM === 7AM

    if ( (arrWakeTime[0] === arrLunchTime[0]  === arrNapTime[0] ===  arrNightTime [0]) === (hrs1+AMPM1) ){
        console.log("Yes all the times are equal so displaying the welcome home image  ");
        img = "<img  src='./windo.png' alt=''></img>"
    }

   else if (arrWakeTime[0] === (hrs1+AMPM1)){
            img = "<img  src='./windo.png' alt=''>"
            document.getElementById('imageTag').innerHTML  = img;
            document.getElementById('grabSomeBreakfastheading').innerText ="GRAB SOME HEALTHY BREAKFAST    !!!. ";
            document.getElementById('messageParaAsPerTime').innerText ="GOOD MORNING  !! WAKE UP  !!   .";
          
            document.getElementById('imageTag').style.height='300px'
            document.getElementById('imageTag').style.width='390px'
           
            
            console.log("Yes there  is our wake up time  ")


   }

   else if (arrLunchTime[0] === (hrs1+AMPM1)){
        img = "<img  src='./Group 5183.jpg' alt=''>"
        document.getElementById('imageTag').innerHTML  = img;
        document.getElementById('grabSomeBreakfastheading').innerText ="LET'S HAVE SOME LUNCH     !!.  ";
        document.getElementById('messageParaAsPerTime').innerText ="GOOD AFTERNOON !! TAKE SOME SLEEP   !!!!!.  ";
        document.getElementById('imageTag').style.height='300px'
        document.getElementById('imageTag').style.width='390px'
   
    
        console.log("Yes they  is our lunch time  ")
   }


   else if (arrNapTime[0] === (hrs1+AMPM1)){
    img = "<img  src='./lunch_image.png' alt=''>"
    document.getElementById('imageTag').innerHTML  = img;
    document.getElementById('grabSomeBreakfastheading').innerText ="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING  !!!   ";
    document.getElementById('messageParaAsPerTime').innerText ="GOOD EVENING    !!  .";
    document.getElementById('imageTag').style.height='300px'
    document.getElementById('imageTag').style.width='390px'


    console.log("Yes there  is our evening  time  ")
    }


    else if (arrNightTime[0] === (hrs1+AMPM1))
    {
        img = "<img  src='./goodnight_image' alt=''>"
        document.getElementById('imageTag').innerHTML  = img;
        document.getElementById('grabSomeBreakfastheading').innerText
         ="CLOSE YOUR EYES AND GO TO SLEEP !!!!!.";
         document.getElementById('messageParaAsPerTime').innerText="GOOD NIGHT   !!  .. ";
    

        document.getElementById('imageTag').style.height='300px'
        document.getElementById('imageTag').style.width='390px'


        console.log("Yes there  is our night time  ")
    }  
    
}
