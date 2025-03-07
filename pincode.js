function validatePin(pin) {
    let pinRegex = /^[0-9]{5}[0-9]$/;
    if (pinRegex.test(pin)) {
      console.log(pin + " is a valid PIN");
    } else {
      console.log(pin + " is an invalid PIN");
    }
  }
  
  validatePin("400088");
  validatePin("123456");
  
  validatePin("400088B");
  validatePin("400088#");
  validatePin("40008A");
  validatePin("1234");