


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
    let arr= [];

    SumAnnuitInMonth = Math.round(( SumFromUser * ( rate*(1+rate)**term ) / ( (1+rate)**term-1 ) )*100)/100 ;
    
    
    // % в мес  sumPercent = rate*SumFromUser
    
    for (let i=1; i <= term; i++ ){


        //сумма процентов  в мес
        sumPercent = Math.round( (rate*SumFromUser)*100 )/100;
        

        // месячная сумма тела кредита
        sumPaymentBodyInMonth= Math.round( (SumAnnuitInMonth-sumPercent)*100 )/100; 
        


        // сумма тела кредита за полный срок
        chekBody = Math.round( (chekBody + sumPaymentBodyInMonth)*100 )/100; 
        

        // остаток по телу кредита
        SumFromUser= Math.round( (SumFromUser-sumPaymentBodyInMonth)*100)/100; 
        

        //сумма переплаты
        overpayment = Math.round( (overpayment+sumPercent)*100)/100; 
        

        if (i == term )   {

            if (SumFromUser>0){
                SumAnnuitInMonth = Math.round( (SumAnnuitInMonth+SumFromUser)*100)/100;
                
                
                chekBody = chekBody+ SumFromUser;
                
                
                SumFromUser = SumFromUser-SumFromUser;
                
                
        
            } else {

                SumAnnuitInMonth = Math.round( (SumAnnuitInMonth+SumFromUser)*100)/100;
                
                
                chekBody = chekBody+ SumFromUser;
                
                SumFromUser = SumFromUser-SumFromUser;
                

            }
        }   

        a.push(SumAnnuitInMonth);
        b.push(sumPaymentBodyInMonth);
        d.push(sumPercent);
        f.push(SumFromUser);
        numberMonth.push(i);

               
       
        console.log(`Месяц ${i}`);
        console.log(`Сумма аннуитета: ${a}`);

        console.log(`Сумма выплат по телу: ${b}`);
        
        console.log(`Сумма процентов ${d}`);

        console.log(`Остаток по телу кредита ${f}`);

        console.log(`Переплата ${overpayment}`);
        console.log(`Тело кредита ${chekBody}`);
        //console.log(`Тело кредита+ переплата по % ${fullAnnuit}`);

        
    }


    arr = [a, b, d, f];


    for (let i =0; i < arr.length; i++){

        for (let j=0; j<arr[i].length; j++) {
            arr[i][j]=arr[i][j].toFixed(2);
        }

    }
       
    
        numberPeriodResult.innerHTML=`${numberMonth.join('<br/>')}`;
        annuitSumResult.innerHTML=`${a.join('<br/>')}`;
        paymentBodySumInMonthResult.innerHTML=`${b.join('<br/>')}`;
    
        sumPersentResult.innerHTML=`${d.join('<br/>')}`;
        saldoBodySumResult.innerHTML=`${f.join('<br/>')}`;
        overpaySumResult.innerHTML=`${overpayment}`;

 
    

        

        console.log(`Сумма аннуитета: ${SumAnnuitInMonth}`);

        console.log(`Сумма процентов ${sumPercent}`);

        console.log(`Остаток по телу кредита ${SumFromUser}`);

        console.log(`Переплата ${overpayment}`);
        console.log(`Тело кредита ${chekBody}`);
        //console.log(`Тело кредита+ переплата по % ${fullAnnuit}`);

    

    

    



 

    

}

