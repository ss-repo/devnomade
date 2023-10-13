import { serviceID, templatesubscribenewsletter, publicKey } from './APIGlobalVariables';

export async function requestSubscribeEmail(data){
    
    const _data = {
        service_id: serviceID,
        template_id: templatesubscribenewsletter,
        user_id: publicKey,
        template_params: {
            'email': data.email,
        }
    };

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(_data)
    };
   
    await fetch('https://api.emailjs.com/api/v1.0/email/send',requestOptions)
    .then(response =>{
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.text();
    })
    .then(result =>{
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });
}