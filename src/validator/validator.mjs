import { check } from 'express-validator';
import User from '../schema/schema.mjs'
import { compareValues } from '../Hashing /hash.mjs';

/**
 * when we add new data before check the through this validation
 */
export const uservalidation = {
    name: {
        notEmpty: {
            errorMessage : "cannot enter empty values",
        },
        isLength :{
            Option: {
                min: 2,
                max: 10,
            },
            errorMessage: "length must be keep 2 between 10",  
        },
        isString: true,
    },
    // Password section
    password: {
        notEmpty :{
            errorMessage: "cannot enter empty values",
        },
        isLength :{
            Option:{
                min: 8,
            },
            errorMessage: "Length must be 8 values",
        },
        
    }
    //we can enter filed by filed validation login here 
};

/**
 * come from user input data /user/api/view
 */

export const validateUserView = [
  check('name')
    .notEmpty()
    .withMessage("Name is required")
    .custom(async (name, password) => {
      // Check if the user exists in the database
      const existingUser = await User.findOne({ name });
      if (!existingUser) {
        throw new Error("Name does not exist in the database");
      }
        // Compare the provided password with the hashed password
        const isMatch = compareValues(password, existingUser.password);
        if (!isMatch) {
        throw new Error("Invalid password");
        }
     }),

  check('password')
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];