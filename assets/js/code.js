


function calc() {


    let SumFromUser = +SumInput.value;
    let startSumFromUser =+SumInput.value;
    let rate = +rateInput.value/100/12;  // месячная ставка кредитования
    let term = +termInput.value;
    let sumPercent =0;
    let sumPaymentBodyInMonth= 0;
    let overpayment=0;
    
    let chekBody=0;
   
    let a=[]; //сумма аннуитета
    let b =[];// тело кредита
    let d =[];//% в месяц
    let f = [];// остаток по телу кредита
    let numberMonth =[];

    SumAnnuitInMonth = Math.round(( SumFromUser * ( rate*(1+rate)**term ) / ( (1+rate)**term-1 ) )*100)/100 ;
    //SumAnnuitInMonth.toFixed(2);
    
    // % в мес  sumPercent = rate*SumFromUser
    
    for (let i=1; i <= term; i++ ){


        //сумма процентов  в мес
        sumPercent = Math.round( (rate*SumFromUser)*100 )/100;
        //sumPercent.toFixed(2);

        // месячная сумма тела кредита
        sumPaymentBodyInMonth= Math.round( (SumAnnuitInMonth-sumPercent)*100 )/100; 
        //sumPaymentBodyInMonth.toFixed(2);


        // сумма тела кредита за полный срок
        chekBody = Math.round( (chekBody + sumPaymentBodyInMonth)*100 )/100; 
        //chekBody.toFixed(2);

        // остаток по телу кредита
        SumFromUser= Math.round( (SumFromUser-sumPaymentBodyInMonth)*100)/100; 
        //SumFromUser.toFixed(2);

        //сумма переплаты
        overpayment = Math.round( (overpayment+sumPercent)*100)/100; 
        //overpayment.toFixed(2);


       // fullAnnuit = SumAnnuitInMonth*i;

        if (i == term )   {

            if (SumFromUser>0){
                SumAnnuitInMonth = Math.round( (SumAnnuitInMonth+SumFromUser)*100)/100;
               // sumPercent.toFixed(2);
                chekBody = chekBody+ SumFromUser;
                //chekBody.toFixed(2);
                SumFromUser = SumFromUser-SumFromUser;
                //SumFromUser.toFixed(2);
                
        
            } else {

                SumAnnuitInMonth = Math.round( (SumAnnuitInMonth+SumFromUser)*100)/100;
               // sumPercent.toFixed(2);
                chekBody = chekBody+ SumFromUser;
                //chekBody.toFixed(2);
                SumFromUser = SumFromUser-SumFromUser;
                //SumFromUser.toFixed(2);

            }
        }   

        a.push(SumAnnuitInMonth);
        b.push(sumPaymentBodyInMonth);
        d.push(sumPercent);
        f.push(SumFromUser);
        numberMonth.push(i);

       

        

            
            
           

       

        numberPeriodResult.innerHTML=`${numberMonth.join(' ')}`;
        annuitSumResult.innerHTML=`${a.join(' ')}`;
        paymentBodySumInMonthResult.innerHTML=`${b.join(' ')}`;

        sumPersentResult.innerHTML=`${d.join(' ')}`;
        saldoBodySumResult.innerHTML=`${f.join(' ')}`;
        overpaySumResult.innerHTML=`${overpayment}`;


        
       
        console.log(`Месяц ${i}`);
        console.log(`Сумма аннуитета: ${a}`);

        console.log(`Сумма выплат по телу: ${b}`);
        
        console.log(`Сумма процентов ${d}`);

        console.log(`Остаток по телу кредита ${f}`);

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

