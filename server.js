const app = require('./src/app')

const PORT = 3300

const server = app.listen(PORT, () => {
    console.log(`social-network start with ${PORT}`);
})