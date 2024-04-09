export const checkValidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not valid"; // Return error if email is not valid
  if (!isPasswordValid) return "Password is not valid"; // Return error if password is not valid

  return null; // Return null if both email and password are valid
};


// export const checkValidDataSignUp = (name, email, password) => {
//     const isString = / ;
//       const isEmailValid =
//         /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
//       const isPasswordValid =
//         /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    
// }