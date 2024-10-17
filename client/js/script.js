async function applyjob(event) {
    event.preventDefault()

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let Coverletter = document.getElementById('Coverletter').value;
    let Portfolio = document.getElementById('Portfolio').value;
    let imageInput = document.getElementById('fileupload')


    if (imageInput.files && imageInput.files[0]) {
        const file = imageInput.files[0];
        const reader = new FileReader();

        reader.onloadend = async function () {
            base64ImageString = reader.result;

            let data = {
                name,
                email,
                Coverletter,
                Portfolio,
                imageInput :base64ImageString
            }
            let strdata = JSON.stringify(data);
            console.log("strdata : ", strdata)

            try {

                let response = await fetch('/user', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "Application/json",
                        'Authorization': `Bearer ${token}`
                    },
                    body: strdata,

                });
                console.log("response", response);

                if (response.status === 200) {
                    alert('Employee successfully added ');
                    window.location = `admin.html?login=${token_key}`
                } else {
                    alert('somthing went worg')
                }
            } catch (error) {
                console.log("error", error)
            }
        }
    }


}