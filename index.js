const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  var data = {
      "name": {
        "first": "Robert",
        "middle": "",
        "last": "Smith"
      },
      "age": 25,
      "DOB": "-",
      "hobbies": [
      "running",
      "coding",
      "-"
      ],
      "education": {
        "highschool": "N/A",
        "college": "Yale"
      }
  }
  // your code here
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});