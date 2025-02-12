const express = require("express");
// const fetch = require("node-fetch");
const fetch = require("node-fetch");

const app = express();

// Start the server
app.listen(3009, () => {
  console.log("Server is running on port 3009");
});

// Define a route to fetch and return data
app.get("/", async (req, res) => {
  const data = await fetch("https://fakestoreapi.com/products");
  const data_json = await data.json();
  //   res.send(data_json);
  //   res.send(req.query.cat)
  var cat = req.query.cat;
  var filter_data;
  switch (cat) {
    case "men":
      filter_data = data_json.filter((val) => {
        return val.category == "men's clothing";
      });
      break;
    case "women":
      filter_data = data_json.filter((val) => {
        return val.category == "women's clothing";
      });
      break;
    case "women":
      filter_data = data_json.filter((val) => {
        return val.category == "women's clothing";
      });
      break;
    case "jewel":
      filter_data = data_json.filter((val) => {
        return val.category == "jewelery";
      });
      break;
    case "elec":
      filter_data = data_json.filter((val) => {
        return val.category == "electronics";
      });
      break;
    default:
      filter_data = data_json;
      break;
  }
  res.send(filter_data);
});
