// WELCOME TO MOS EISLEY CANTINA. WOULD YOU LIKE TO RESERVE A TABLE?

// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Tables (DATA)
// =============================================================
var openTables = [];
var reservedTables = [];
var waitList = [];

var tables = [
  {
    routeName: "table1",
    name: "Table 1",
    partyName: "",
    seats: 6,
  },
  {
    routeName: "table2",
    name: "Table 2",
    partyName: "",
    seats: 4,
  },  {
    routeName: "table3",
    name: "Table 3",
    partyName: "",
    seats: 2,
  },  {
    routeName: "table4",
    name: "Table 1",
    partyName: "",
    seats: 4,
  },  {
    routeName: "table5",
    name: "Table 1",
    partyName: "",
    seats: 2,
  },
];

// Routes
// =============================================================

// Basic route that sends the user first to the homepage
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

// Displays all tables
app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

// Displays a single table, or returns false
app.get("/api/tables/:table", function(req, res) {
  var chosen = req.params.table;

  console.log(chosen);

  for (var i = 0; i < tables.length; i++) {
    if (chosen === tables[i].routeName) {
      return res.json(tables[i]);
    }
  }

  return res.json(false);
});

// Create New Reservations - takes in JSON input
app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newTable = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newtable.routeName = newtable.name.replace(/\s+/g, "").toLowerCase();

  console.log(newtable);

  characters.push(newtable);

  res.json(newtable);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
