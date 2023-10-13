import Swal from 'sweetalert2';

export const fireAlert = (icon,title) =>{
    Swal.fire({
        position: 'center',
        color: 'white',
        background:'#1A17DD',
        iconColor: 'rgba(23,221,125,1)',
        icon: icon,
        title: title,
        showConfirmButton: false,
        timer: 2000
    })
}

