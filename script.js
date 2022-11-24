function test(){
    console.log("clicked");

    var a=document.getElementById("billamt").value;
    var b=document.getElementById("peopleamt").value;
    var e=document.getElementById("option").value;

if(a=='' || b==''|| c=='' ){
    alert("you have to put the the amount");
}

    var d=a*e;//total tip
    console.log(d);

   var c = parseInt(d)+parseInt(a);//total bill with tip
   console.log(c);

   var t=c/b;  //total bill distribution per candidate

   var f=c-a;     //tip only=total bill-billamount
   console.log(f);

   var g=f/b;  //tip distribution
   console.log(g);



   var k=document.createElement('div')

   k.innerHTML='Total amount of bill ='+ c + ', Bill amount per person ='+ t + ',tip per person is = '+g;
   
   let o=document.getElementById("tip");
   o.appendChild(k);

   clearText()

}
function clearText(){
document.getElementById("billamt").value='';
document.getElementById("peopleamt").value='';

}




  
