module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "username must not be empty";
  }
  if (email.trim() === "") {
    errors.email = "email must not be empty";
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "Email must be a valid email address";
    }
  }
  if (password === "") {
    errors.password = "password must not be empty";
  } else {
    if (password !== confirmPassword) {
      errors.confirmPassword = "password must match";
    }
  }

  return {
    errors,
    // this is checking if the error object has any value on it if not it is valid
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (username, password) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "username must not be empty";
  }
  if (password === "") {
    errors.password = "password must not be empty";
  }
  return {
    errors,
    // this is checking if the error object has any value on it if not it is valid
    valid: Object.keys(errors).length < 1,
  };
};
