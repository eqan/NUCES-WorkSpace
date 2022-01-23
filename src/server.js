const cors = require('cors')
const app = require('./config/express');

app.use(cors());

app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"),  (req, res)  => {
    res.send({
      token: 'test123'
    });
  });

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)});