


function calc() {


    let SumFromUser = +SumInput.value;
    let startSumFromUser =+SumInput.value;
    let rate = +rateInput.value/100/12;  // месячная ставка кредитования
    let term = +termInput.value;
    let sumPercent =0;
    let sumPaymentBodyInMonth= 0;
    let overpayment=0;
    let lastBodyPayment=0;
    let chekBody=0;
    let fullAnnuit =0;
    let lastPersent =0;

    SumAnnuitInMonth = Math.round((SumFromUser * ( rate*(1+rate)**term ) / ( (1+rate)**term-1 ) )*100)/100;
    
    // % в мес  sumPercent = rate*SumFromUser
    
    for (let i=1; i <= term; i++ ){


        //сумма процентов  в мес
        sumPercent = Math.round( (rate*SumFromUser)*100 )/100;

        // месячная сумма тела кредита
        sumPaymentBodyInMonth= Math.round( (SumAnnuitInMonth-sumPercent)*100)/100; 

        // сумма тела кредита за полный срок
        chekBody = Math.round( (chekBody + sumPaymentBodyInMonth)*100 )/100; 

        // остаток по телу кредита
        SumFromUser= Math.round( (SumFromUser-sumPaymentBodyInMonth)*100 )/100; 

        //сумма переплаты
        overpayment = Math.round( (overpayment+sumPercent)*100)/100; 


       // fullAnnuit = SumAnnuitInMonth*i;

        if (i == term )   {

            if (SumFromUser>0){
                sumPercent = Math.round( (sumPercent+SumFromUser)*100 )/100;
                chekBody = chekBody+ SumFromUser;
                SumFromUser = SumFromUser-SumFromUser;
                
        
            }
        }   

        
        annuitSumResult.innerHTML=`${SumAnnuitInMonth}`;
        sumPersentResult.innerHTML=`${sumPercent}`;
        saldoBodySumResult.innerHTML=`${SumFromUser}`;


        
       
        console.log(`Месяц ${i}`);

        console.log(`Сумма аннуитета: ${SumAnnuitInMonth}`);

        console.log(`Сумма процентов ${sumPercent}`);

        console.log(`Остаток по телу кредита ${SumFromUser}`);

        console.log(`Переплата ${overpayment}`);
        console.log(`Тело кредита ${chekBody}`);
        //console.log(`Тело кредита+ переплата по % ${fullAnnuit}`);








    }

   



    
        
   

    
    

        

        console.log(`Сумма аннуитета: ${SumAnnuitInMonth}`);

        console.log(`Сумма процентов ${sumPercent}`);

        console.log(`Остаток по телу кредита ${SumFromUser}`);

        console.log(`Переплата ${overpayment}`);
        console.log(`Тело кредита ${chekBody}`);
        //console.log(`Тело кредита+ переплата по % ${fullAnnuit}`);

    

    

    



 

    

}

