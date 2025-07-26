// export-to-csv.js
require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");
const { Parser } = require("json2csv");

const Contact = require("./models/contact");

async function exportToCSV() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB");

    const contacts = await Contact.find().lean();
    if (contacts.length === 0) {
      console.log("No contacts found.");
      return;
    }

    const fields = ["name", "email", "message", "createdAt"];
    const json2csv = new Parser({ fields });
    const csv = json2csv.parse(contacts);

    fs.writeFileSync("contacts.csv", csv);
    console.log("contacts.csv exported!");
    process.exit();
  } catch (err) {
    console.error("Error exporting:", err);
    process.exit(1);
  }
}

exportToCSV();