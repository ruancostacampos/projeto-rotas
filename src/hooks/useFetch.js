import {useState, useEffect} from 'react';

//custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [itemToDelete, setItemToDelete] = useState(null); 

    const httpConfig = (data, method) => {
        if(method === 'POST'){
            setConfig({
                method: method,
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(data)
            })

            setMethod(method);
        }
        
        if(method === 'DELETE'){
            setConfig({
                method: method,
                headers: {
                    "Content-Type" : "application/json"
                },
            })

            setItemToDelete(data);
            setMethod(method);
        }
    }


    useEffect( () => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const res = await fetch(url)
                const json = await res.json();
                setData(json);
            }catch(error){
                console.log(error.message)
                setError("Houve algum erro ao carregar os dados!");
            }


            setLoading(false);
        }

        fetchData();
    }, [url, method, callFetch])

    //refatorando post
    useEffect( () =>{
      const httpRequest = async () => {

        let json;

        if(method === "POST"){
            let fetchOptions = [url, config]
            const res = await fetch(...fetchOptions);
            json = await res.json();
        }
        if(method === "DELETE"){
            let fetchOptions = [`${url}/${itemToDelete}`, config]
            const res = await fetch(...fetchOptions);
            json = await res.json();;
        }

        setCallFetch(json);
      }

      httpRequest();
    }, [config]);

    return {data, httpConfig, loading, error};
}