export const fileUpload = async (file) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dn1jeryp3/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'Crud imagenes');
    formData.append('file', file);


    const resp = await fetch(cloudUrl, {
        method: 'POST',
        body: formData
    })
    const cloudResp = await resp.json();
    return cloudResp.secure_url;

}

