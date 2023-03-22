import { useState, useEffect } from "react";

function useGet(url) {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        fetch(
            (`https://social-network-cffc1-default-rtdb.firebaseio.com/${url}.json`)
        )
        .then(response => response.json())
        .then((data) => {
            const dataArr = [];

            for (const key in data) {
                const value = {
                    id: key,
                    ...data[key]
                };

                dataArr.push(value);
            }
            setIsLoading(false);
            setData(dataArr);
        })
    }, [url]);


    return { error, isLoading, data };
}

export default useGet;



//Use this instead? Yes i think so

// const useFetch = (url) => {
//     const [status, setStatus] = useState('idle');
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         if (!url) return;
//         const fetchData = async () => {
//             setStatus('fetching');
//             const response = await fetch(url);
//             const data = await response.json();
//             setData(data);
//             setStatus('fetched');
//         };

//         fetchData();
//     }, [url]);

//     return { status, data };
// };


//OR
//Using axios 

// const useGetRequest = url => {
//     const [data, setData] = useState([]);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [error, setError] = useState(null);
  
//     useEffect(() => {
//       const fetchData = () => {
//         axios
//           .get(url)
//           .then(response => {
//             setIsLoaded(true);
//             setData(response.data);
//           })
//           .catch(error => {
//             setError(error);
//           });
//       };
//       fetchData();
//     }, [url]);
  
//     return { error, isLoaded, data };
//   };