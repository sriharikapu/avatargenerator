const Avatar = require('avatar-builder').default;
const avatar = Avatar.githubBuilder(128);
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.json());
const randomAvatarGenerator = require("@fractalsoftware/random-avatar-generator");

// Using default method parameters
// fs.writeFileSync("avatar.svg", randomAvatarGenerator.getRandomAvatar());

async function svgConverter(value){
    // let val = await avatar.create(value).then(buffer => {/* png buffer */ 
    //     return buffer;
    // });
    // return val;

    const avatarData = randomAvatarGenerator.generateRandomAvatarData(value);
    // console.log(avatarData);
    const svgCode = randomAvatarGenerator.getAvatarFromData(avatarData);
    // console.log(svgCode);
    return  svgCode;
} 



app.post('/generateImage', async (req, res) => {
    try
    {
        const buf = await svgConverter(req.body.value);
        // console.log(buf);
        res.send({
            error: 0,
            buf: buf
        });
    } catch(err) {
        console.log('err' + err.message);
        res.status(500).send({
            error: 1,
            error_message: err.message
        });
    }
    finally{
        let imageBufferTimestamp = new Date(Date.now()).toUTCString();
        console.log("Image Buffer Executed at UTC Time : " + imageBufferTimestamp);
    }
});

app.listen(9009, function(err){
    if (!err) {
        console.log("Image Buffer IS RUNNING ON 9009");
    }
});

