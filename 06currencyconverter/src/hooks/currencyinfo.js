import {useEffect, useState} from "react"


function useCurrencyInfo(currency){

    const [data, setData] = useState({})

    async function  funfun(currency){
        const res = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        const response = await res.json() ;
        setData(response[currency])
    }

    useEffect(()=>{
        funfun(currency)
    }, [currency])
    
    return data
}

export default useCurrencyInfo;