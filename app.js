// Create Express App
const app = require('./config/express-config');
const users = require('./controller/register-controller.js');

users.getUserInfo("eqan");

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
