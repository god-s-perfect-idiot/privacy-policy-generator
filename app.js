import express from 'express';

const app = express();

app.use(express.json())

app.get('/heartbeat', (req, res, next) => {
    res.json({
        msg: 'up'
    })
})
app.get('/generate/:name', async (req, res, next) => {
    const {
        name
    } = req.params;
    return res.json({
        privacy_policy: `Welcome to ${name} for Android Wear OS! This software is a pay to use Multi-purpose watch face for Wear OS devices. The software was developed using Watch Face Studio released by Samsung. As such, it required more designing than development. As an avid Android user myself, I take privacy very seriously. I know how irritating it is when apps collect your data without your knowledge. Please know that this app does not send any user-related information to me, the developer. As such, There are no privacy or data collection and breach concerns regarding this app as you would over any of the Watch Faces developed using Watch Face Studio. If you find any security vulnerability that has been inadvertently caused by me, or have any question regarding how the app protectes your privacy, please send me an email and I will surely try to fix it/help you. Yours sincerely, Samar Musthafa. Kozhikode, India. samarmusthafa2014@gmail.com`
    })
})

app.listen(process.env.PORT, () => {
    console.log(`server running at ${process.env.PORT}`)
})