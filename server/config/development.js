const config ={
    port: process.env.PORT || 3001,
    hostUrl: 'http://localhost:3000',
    databaseURI: 'mongodb://127.0.0.1:27017/blog-practice',
    databaseOption: null,
    jwt: {
        jwtSecret: process.env.JWT_SECRET || 'cody_bolg_jwttoken',
        jwtTokenExpiresIn: '30 days',
    },
}

export default config