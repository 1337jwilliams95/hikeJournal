
export const verifyEmail = email => {
  return email && email.includes("@") && email.includes(".");
};

export const verifyPasswordsSame = (password, confirmPassword) => {
  return password === confirmPassword;
};

export const verifyPassword = password => {
  return password.length >= 8;
};