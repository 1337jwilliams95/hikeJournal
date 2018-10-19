
export const verifyEmail = email => {
  return email && email.includes("@") && email.includes(".") ? "" : "Email seems invalid. Should include '@' and '.'";
};

export const verifyPasswordsSame = (password, confirmPassword) => {
  return password === confirmPassword ? "" : "Passwords do not match!";
};

export const verifyPassword = password => {
  return password.length >= 8 ? "" : "Passwords must be at least 8 characters long!";
};