import express from "express";
import connectDB from "./db/db.mjs";
import dotenv from "dotenv";
import user from "./schema/schema.mjs";
import { uservalidation } from "./validator/validator.mjs"; // Import the User model
import {body, checkSchema, validationResult} from "express-validator";

dotenv.config({ path: './.env' });

const PORT = 3000;
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get('/', (req, res) => {
  res.send('MongoDB connection established successfully!');
});

app.post('/user/api', checkSchema(uservalidation), async (req, res) => {
  const requestvalide = validationResult(req);
  if(!requestvalide) return res.status(400).send({ error: requestvalide.array() });
  
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

app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
