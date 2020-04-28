// //reference https://muffinman.io/uploading-files-using-fetch-multipart-form-data/

// const uploadButton = document.getElementById('uploadBtn') ;
// uploadButton.addEventListener("click", evt => {
//     const fileInput = document.getElementById('uploadImage');
   
//     const formData = new FormData();
//     formData.append('file', fileInput.files[0]);
    
//     const options = {
//       method: 'POST',
//       headers: {
//         'x-api-key': "5e4b134f-fea1-4c4f-be86-2aabae37c132"
//         },
//       body: formData
//     };
//     console.log(options);
//     fetch('https://api.thecatapi.com/v1/images/upload', options)
//     .then(res => {
//         console.log(res);
//     }).catch((err) => console.log(err.message));

// });
