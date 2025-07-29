import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is healthy!");
});

app.post("/bfhl", (req, res) => {
  const reqBody = req.body;

  if (!reqBody.data) {
    return res.json({
      is_success: false,
      user_id: "john_doe_17091999",
      email: "john@xyz.com",
      roll_number: "ABCD123",
    });
  }

  const oddNumbers = [];
  const evenNumbers = [];
  const alphabets = [];
  const specialChars = [];

  let sum = 0;
  let alphaConcat = "";

  reqBody.data.forEach((ele) => {
    const num = parseInt(ele);
    if (!isNaN(num)) {
      if (num % 2 === 0) {
        evenNumbers.push(num);
      } else {
        oddNumbers.push(num);
      }
      sum += num;
    } else if (/^[a-zA-Z]$/.test(ele)) {
      alphabets.push(ele.toUpperCase());
      alphaConcat += ele;
    } else {
      specialChars.push(ele);
    }
  });

  const reversedAlpha = alphaConcat
    .split("")
    .reverse()
    .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");

  res.json({
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    odd_numbers: oddNumbers,
    even_numbers: evenNumbers,
    alphabets: alphabets,
    special_characters: specialChars,
    sum: sum.toString(),
    concat_string: reversedAlpha,
  });
});

app.listen(8080, () => {
  console.log("App is started on port 8080");
});
