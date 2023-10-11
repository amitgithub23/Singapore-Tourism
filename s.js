const nop = document.getElementsByClassName('place')
const p = document.getElementById('np') // no of person
const days = document.getElementById('nd')  // no of days
const ans = document.getElementById('answer');
const na1 = document.getElementById('na');

function getCount(){
    count = 0;
    d =0;
 for (let i = 0; i < nop.length; i++) {
    if(nop[i].checked==true){
       count++
       d = d + parseInt(nop[i].value);
       
    }
    e=[count,d] 
    }  return e;
}

function gettotalcost(){
   a = getCount();
  cost = a[1]*parseInt(p.value)
  return cost;
}

function discount(){
  a1= getCount();
  a2 = gettotalcost();
   
//   calculate 15% only it will be easy for calculation

   if(a1[0]>3){
        dis = a2-(a2*15)/100; 
        return dis; 
      //   if you will not return anything yhan you will get NaN when you print
   } else {
      return 0;
   }

}

function getstaycost(){
   
   if(days.value!==0){
        stc= p.value*days.value*150;
        return stc;
} else {
   return 0;
}
}

function disablenoofdays(){
 
 document.getElementById("nd").style.visibility = "hidden";

days.value = 0;

}
 function show(){
   document.getElementById("nd").style.visibility = "visible";
 }


function calculate(){
   event.preventDefault();
   // o = getCount();
   p1=  gettotalcost();
   q =  discount();
   r=  getstaycost();
   t1 = p1+r;
  
 
   if(q==0){
            a =  (p1+r);
            dis = 0;
         } else{
            a =  (q+r);
            dis = (p1*15)/100;
         }
  


ans.innerHTML = `Hi ${(na1.value).toUpperCase()} </br>
                 You have a group of ${p.value} </br>
                 total cost is ${t1} </br>
                 but you are getting discount of ${dis} </br>
                 Bill after discount ${t1 - dis} </br>
                 your stay cost is ${r} </br>
                  now you have to pay ${a} `;
   
}