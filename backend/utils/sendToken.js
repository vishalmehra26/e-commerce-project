const sendToken = (user, statusCode, res) => {
    // Assuming you have a secret key stored in an environment variable
    const secretKey = 'WFFWf15115U842UGUBWF81EE858UYBY51BGBJ5E51Q';

    console.log('yaha tka run')
    console.log('token',user.getJWTToken('WFFWf15115U842UGUBWF81EE858UYBY51BGBJ5E51Q'))

    const token = user.getJWTToken(secretKey); // Pass the secret key to the function

    const options = {
        expires: new Date(
            Date.now() + 15 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        user,
        token,
    });
}

module.exports = sendToken;
