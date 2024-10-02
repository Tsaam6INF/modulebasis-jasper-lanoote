const { login } = require("./admin.js");

function cb(result) {
  console.log(result);
}

// callback function for login function to handle errors and results separately.  This makes the code cleaner and easier to understand.  Note that in a real-world application, you'd want to handle errors in a more robust way, such as logging them to a file or sending an email.  In this example, we simply log the error to the console.  In a production application, you'd want to log the error to a database or file, and possibly send an email to the user.  This would also depend on the specifics of your application and how you want to handle errors.  In this example, we're using a callback function to handle the error and result separately.  This is a common practice in JavaScript, and it allows you to handle errors and results in a separate function, which makes the code cleaner and

login("kleintjes.karel", "test", cb);
// resultaat: fout bij het aanmelden

login("kleintjes.karel", "karel", cb);
// resultaat: kleintjes.karel: lezen - schrijven;

login("dotjes.els", "els", cb);
// resultaat: dotjes.els: lezen;
