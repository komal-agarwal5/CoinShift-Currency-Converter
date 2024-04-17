import { useState } from "react";

function App()
{
    const [rates,setRates]=useStae({});
    const [ratesFetched,setRatesFetched]=useState(false);
    const [amount,setAmount]=useState(0);
    const [fromCurrency,setFromCurrency]=useState("INR");
    const [toCurrency,setToCurrency]=useState("INR");
    const [output,setOutput]=useState(0);

    const getRates =async ()=>{
        try{
            const response=await fetch().then(response=>response.jspn());
            if(response.result==="success")
            {
                setRates(response.conversion_rates);
                setRatesFetched(true);
            }
        }
        catch(error){
            console.error();
        }
    };
    
}