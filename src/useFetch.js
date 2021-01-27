import { useState, useEffect } from 'react';

// custom hook need to start with word use
// this case useFetch
const useFetch = ( url ) => {

    const [ data, setData ] = useState( null );
    const [ isPending, setIsPending ] = useState( true );
    const [ error, setError ] = useState( null );

    useEffect( ()=> {
        const abortCont = new AbortController();
        setTimeout( ()=> {
            fetch( url, { signal: abortCont.signal } )
                .then( resp => {
                    if( !resp.ok ){
                        throw Error('could not fetch the data')
                    }
                    return resp.json();
                })
                .then( data => {
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                // will trigger only if there is network error
                .catch( err => {
                    if( err.name === 'AbortError' ){
                        console.log('fetch aborted')
                    }
                    else{
                        setIsPending(false);
                        setError(err.message);
                    }
                });
        },500);

        return () => abortCont.abort();
    }, [url]);

    return { data, setData , isPending, error }
}

export default useFetch;