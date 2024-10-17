let users = require('../db/models/users');
// const usertype = require('../db/models/user_type');
const { success_function, error_function } = require('../util/responseHandler')
const fileUpload = require('../util/upload').fileUpload;
const sendemail = require('../util/sendEmail').sendEmail
const application = require('../util/Email_template/jobApply').application

const dotevn = require('dotenv');
dotevn.config();
    
exports.create1 = async function (req, res) {

    try {
        let body = req.body;
        console.log('body',body);
        let name = req.body.name
        let emails = req.body.email
        let image = req.body.image;
            console.log("image : ", image);


        if (image) {
            let image_path = await fileUpload(image, "users");
            console.log("image_path", image_path);
            body.image = image_path;
                    }
        let content = await application(name,emails)

        await sendemail(emails,"New application",content)

        let userData = await users.create(body);
        console.log('userData',userData);

        let response = success_function({
            success: true,
            statuscode: 200,
            data:userData,
            message: "successfully added..",
            
            
        })
        res.status(response.statuscode).send(response)
        return;

    } catch (error) {

        console.log("error : ", error);
        let response = error_function({
            success: false,
            statuscode: 400,
            message: "error"
            
        })
        res.status(response.statuscode).send(response)
        return;
    }
}
