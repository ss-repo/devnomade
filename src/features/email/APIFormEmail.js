
import { serviceID, templatecontactformID, publicKey } from './APIGlobalVariables';

export async function requestAPIFormEmail(data){

    const _data = {
        service_id: serviceID,
        template_id: templatecontactformID,
        user_id: publicKey,
        template_params: {
            'firstName': data.firstName,
            'lastName': data.lastName,
            'email': data.email,
            'phoneNumber': data.phoneNumber,
            'message': data.message
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
    .catch(err => console.log(err));
}