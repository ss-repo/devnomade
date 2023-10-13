import { useEffect } from 'react';
function Cookies(){
   
    async function getIPClient(){
        const response = await fetch('http://api.ipify.org/?format=json');
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }

    useEffect(() => {
        getIPClient().then(data => console.log(data));
      }, []);
    
    return(
        <div className="cookies">
           Cookies
        </div>
    )
}

export default Cookies;