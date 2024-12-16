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
        isString : true,
    }
    //we can enter filed by filed validation login here 
};