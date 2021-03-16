const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/authenticateUser", (req, res, next) => {
  console.log(req.body);
  if (req.body.user.id === 'MEAN_POC' && req.body.user.password === 'PASSWORD') {
    res.status(200).json({
      success: "true",
      isUserAuthenticated: "true",
      customerid: "IJ101"
    });
  } else {
    res.status(200).json({
      success: "true",
      isUserAuthenticated: "false"
    });
  }
});

app.post("/api/retrieveUserDetails", (req, res, next) => {
   res.status(200).json({
    success: "true",
    customer: {
      id: "IJ101",
      name: "Jim Smith",
      last_login: "14 March 2021",
      balance: "$3000",
      transaction: [
        {
          date: "10 March 2021",
          desc: "Room rent",
          amount: "$75"
        },
        {
          date: "11 March 2021",
          desc: "Dinner",
          amount: "$20"
        }
      ]
    }
  });
});

app.post("/api/retrieveTeamDetails", (req, res, next) => {
  res.status(200).json({
     teammembers: [
       {
         id: "1",
         personName: "Beng Tiong Tang"
       },
       {
        id: "2",
        personName: "Niraj Kumar Jha"
      },
      {
        id: "3",
        personName: "Siddharth Pandey"
      },
      {
        id: "4",
        personName: "Jatin Suri"
      },
      {
        id: "5",
        personName: "Parasmani Jain"
      },
      {
        id: "6",
        personName: "Saurabh Nilegaonkar"
      },
      {
        id: "7",
        personName: "Bhawana Sarma"
      },
      {
        id: "8",
        personName: "Vimlesh Singh"
      }
    ]
 });
});

module.exports = app;
