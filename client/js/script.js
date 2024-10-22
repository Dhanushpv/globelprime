

async function applyJob(event) {
    event.preventDefault();

    // Retrieve input values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let coverLetter = document.getElementById('coverLetter').value;
    let portfolio = document.getElementById('portfolio').value;
    let imageInput = document.getElementById('image');

    if (imageInput.files && imageInput.files[0]) {
        const file = imageInput.files[0];
        const reader = new FileReader();

        reader.onloadend = async function () {
            let base64ImageString = reader.result; // Base64 string of the image

            let data = {
                name,
                email,
                coverLetter,
                portfolio,
                image: base64ImageString  // Changed key to 'image' for clarity
            };
            
            let strData = JSON.stringify(data);
            console.log("Form data: ", strData);

            try {
                let response = await fetch('/user', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: strData,
                });

                console.log("Response", response);

                if (response.status === 200) {
                    alert('Application successfully submitted!');
                } else {
                    alert('Something went wrong. Please try again.');
                }
            } catch (error) {
                console.log("Error:", error);
                alert('Error occurred while submitting the form.');
            }
        };

        reader.readAsDataURL(file); // Start reading the image file as base64
    } else {
        alert('Please select an image.');
    }
}

async function addjob(){

    let jobtitle = document.getElementById('jobtitle').value;
    let joblocation = document.getElementById('joblocation').value
    let jobtime = document.getElementById('jobtime').value
    let salary = document.getElementById('salary').value
    let dateline = document.getElementById('dateline').value
    let job_Discription = document.getElementById('job_Discription').value
    let responsibility = document.getElementById('responsibility').value
    let qualifications = document.getElementById('qualifications').value
    let joblocation = document.getElementById('joblocation').value
    let joblocation = document.getElementById('joblocation').value
}