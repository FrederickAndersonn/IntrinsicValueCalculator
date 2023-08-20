function count(){
    var cashFlow = parseFloat(document.getElementById('cash-flow').value);
    var debt = parseFloat(document.getElementById('debt').value);
    var investments = parseFloat(document.getElementById('investments').value);
    var discount = parseFloat(document.getElementById('discount').value);
    var growth5 = parseFloat(document.getElementById('growth5').value);
    var growth10 = parseFloat(document.getElementById('growth10').value);
    var growth20 = parseFloat(document.getElementById('growth20').value);
    var shares = parseFloat(document.getElementById('shares').value);
    let last = 0;
    let last1 = 0;
    let last2 = 0

    for(i=0; i<21; i++){
        for(i=1; i<6; i++){
            cashFlow = cashFlow*(1+growth5)
            discountFactor = (1/(1+discount)**i)
            let now = cashFlow*discountFactor
            last = last + now
            document.getElementById('pv1').value = (last).toFixed(2)
            }
        for(i=6; i<11; i++){
            cashFlow = cashFlow*(1+growth10)
            discountFactor = (1/(1+discount)**i)
            let now1 = cashFlow*discountFactor
            last1 = last1 + now1
            document.getElementById('pv2').value = (last1 + last).toFixed(2);
            }
         for(i=11; i<21; i++){
           cashFlow = cashFlow*(1+growth20)
            discountFactor = (1/(1+discount)**i)
            let now2 = cashFlow*discountFactor
            last2 = last2 + now2
            document.getElementById('pv3').value = (last2 + last1 + last).toFixed(2);
         }
        
        
    } 
     var pv3 = parseFloat(document.getElementById('pv3').value);
    
     document.getElementById('intrinsic-before').value = (pv3/shares).toFixed(2);

   
     document.getElementById('dps').value = (debt/shares).toFixed(2);

     document.getElementById('plus').value = (investments/shares).toFixed(2);
    
     var plus = parseFloat(document.getElementById('plus').value);
     var intrinsicBefore = parseFloat(document.getElementById('intrinsic-before').value);
     var dps = parseFloat(document.getElementById('dps').value);
     
     document.getElementById('intrinsic-final').value = (intrinsicBefore-dps+plus).toFixed(2);

     var intrinsicFinal = parseFloat(document.getElementById('intrinsic-final').value);
     var lastPrice = parseFloat(document.getElementById('pricenow').value);
     document.getElementById('premium').value = 
     (((lastPrice-intrinsicFinal)/intrinsicFinal)*100).toFixed(2) + '%';
}    

