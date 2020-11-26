"use strict";
// PASSWORD CHECKS

checkPasswordRegEx = (password) => {
  const passwordRegEx = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  // Regex for password must contain at least eight characters, at least one number and both lower
  // and uppercase letters and special characters
  return passwordRegEx.test(password);
};

validatePassword = (password) => {
  if (!this.checkPasswordRegEx(password)) {
    delete this.errors.lastError; // Deleted to clean prev errors from others checks
    this.errors.lastError = this.passwordError;
    this.errors.passwordError = this.passwordError;
    return false;
  }
  return true;
};

validateRepeatPassword = (password, repeatPassword) => {
  if (password != repeatPassword) {
    delete this.errors.lastError; // Deleted to clean prev errors from others checks
    this.errors.lastError = this.repeatPasswordError;
    this.errors.repeatPasswordError = this.repeatPasswordError;
    return false;
  }
  return true;
};
