function test() {
    console.log("clicked");

    var BillAmount = document.getElementById("billamt").value;

    var Peoples = document.getElementById("peopleamt").value;
    
    var Options = document.getElementById("option").value;

    if (BillAmount == '' || Peoples == '') {

        alert("you have to put the amount");
        return;

    }

    var TotalTax = BillAmount * Options;

    console.log(TotalTax);

    var TotalAmount = parseInt(TotalTax) + parseInt(BillAmount);

    console.log(TotalAmount);

    var PerCandidateamt = TotalAmount / Peoples;

    var PerCandidateTax = TotalTax / Peoples;
    PerCandidateTax=PerCandidateTax.toFixed(2);

    console.log(PerCandidateTax);


    tn=document.getElementById("tip");


    var element1 = document.createElement('div')
    element1.innerHTML = 'Total amount of bill =' + TotalAmount + ', Bill amount per person =' + PerCandidateamt + ',tip per person is = ' + PerCandidateTax;

    tn.appendChild(element1);
    
    
    clearText();


function clearText() {
    document.getElementById("billamt").value = '';
    document.getElementById("peopleamt").value = '';


}
}




  
