
// basic password validation for  at least 8 digits, 1 uppercase, 1 number and 1 special character
export const isPasswordValid = (rule, value, callback) => {
    if (value && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value) !== undefined) {
      callback("Password policy failed'!");
    } else {
      callback();
    }
  };
// basic 3 character validation
  export const minThreeCharRequired = (rule, value, callback) => {
    if (value && value.length < 2) {
      callback("At least three characters required");
    } else {
      callback();
    }
  };
