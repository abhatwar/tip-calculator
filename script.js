function test(){
    console.log("clicked");

    var a=document.getElementById("billamt").value;
    var b=document.getElementById("peopleamt").value;
    var e=document.getElementById("option").value;

if(a=='' || b==''|| c=='' ){
    alert("you have to put the the amount");
}

    var d=a*e;
    console.log(d);

   var c = parseInt(d)+parseInt(a);
   console.log(c);

   var t=c/b;

   var f=c-a;
   console.log(f);

   var g=f/b;
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




  
