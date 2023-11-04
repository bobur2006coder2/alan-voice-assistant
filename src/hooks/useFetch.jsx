import { useEffect, useState } from "react"

export const useFetch=(url)=>{
    const [data,setData]=useState(null)
    const [isLoading,setloading]=useState(false)
    const [error,setError]=useState(null)
    useEffect(()=>{
    const fetchData= async()=>{
        setloading(true)
        try{
            const res= await fetch(url)
            if(!res?.ok){
               throw new Error (res.statusText)
            }
            const data= await res.json()
            setData(data)
        }catch(err){
            setError("404 NotFound")
            setloading(false)
        }
        setloading(false)
    }
    fetchData()
    },[url])
    return {data,isLoading,error}
}