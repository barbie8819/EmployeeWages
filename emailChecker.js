function validateEmail(email){
    let emailRegex = /^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;
    if(emailRegex.test(email)){
      console.log(email+ " is Valid Email ✅ ");
    }else{
      console.log(email+ "is Not Valid Email ❌");
    }
  }
  
  validateEmail("abc@bridgelabz.co");
  validateEmail("abc.xyz@bridgelabz.co.in");
  validateEmail("abc@bridgela.com");
  
  validateEmail("abc@.co.in");
  validateEmail("abc.xyz@bridgelabz.co.gov");
  validateEmail("abc@bridgelabz.c");
  validateEmail("abc..xyz@bridgelabz.cin");
  validateEmail("abc@bridgelabz..co.in");
  validateEmail("abc@bridgelabz.c@o.in");