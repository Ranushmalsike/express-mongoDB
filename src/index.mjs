import express from "express";
import connectDB from "./db/db.mjs";
import dotenv from "dotenv";
import user from "./schema/schema.mjs";
import { uservalidation, validateUserView } from "./validator/validator.mjs"; // Import the User model
import { body, checkSchema, validationResult, matchedData} from "express-validator";

dotenv.config({ path: './.env' });

const PORT = 3000;
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get('/', (req, res) => {
  res.send('Hello mongoDB');
});

// Input values into database
app.post('/user/api', checkSchema(uservalidation), async (req, res) => {
  const requestvalide = validationResult(req);
  if(!requestvalide) return res.status(400).send({ error: requestvalide.array().message });
  
  const { body } = req;

  const newObjUser = new user(body);

  try {
    const saveUser = await newObjUser.save();
    return res.status(200).json(saveUser);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
});

// Check values available in database
app.post("/user/api/view", validateUserView, async (req, res) => {
  console.log("Request body:", req.body);

  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }

  // Return success response
  const matchResult = matchedData(req);
  return res.status(200).send({ message: "Request successful", data: matchResult });
});

app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
