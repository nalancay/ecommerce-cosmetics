export const isValidData = (formValue) => {
  const { name, surname, adress } = formValue;
  const isValid = name && surname && adress;

  return isValid;
};

export const isValidEmail = (formValueEmail) => {
  let valid = false;
  const email = formValueEmail;
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexEmail = () => re.test(email);
  if (!email.length) {
    return valid;
  } else if (!regexEmail()) {
    console.log("is not an email");
  } else {
    valid = true;
    return valid;
  }
};

export const isTextFieldEqual = (valueInput1, valueinput2) => {
  let valid = false;
  if (valueInput1 === valueinput2) {
    valid = true;
    return valid;
  }
};

export const isPaymentSelected = (formValuePayment) => {
  let valid = false;
  const payment = formValuePayment;
  if (payment.length) {
    valid = true;
    return valid;
  }
  return valid;
};
