 // Your web app's Firebase configuration
 const firebaseConfig = 
 {
   apiKey: "AIzaSyAASJvjF-tzH9zKlVUUH_Fakew7Vhx9_OU",
   authDomain: "form-953f8.firebaseapp.com",
   databaseURL: "https://form-953f8-default-rtdb.firebaseio.com",
   projectId: "form-953f8",
   storageBucket: "form-953f8.appspot.com",
   messagingSenderId: "317452126605",
   appId: "1:317452126605:web:9e2cda84bfb9a550d055c4"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
  // Initialize var
  const auth = getAuth(app)
  const database = firebase.database()


  //set up reg function
  function reg() {
           var name = document.getElementById('username').value;
            var email = document.getElementById('email').value ;
            var password = document.getElementById('password').value;


    // validate input f
    if (validate_email(email) == false ||validate_password(password) == false) {
        alert('email or pass are out of line')
        return
    }
    auth.createUserWithEmailAndPass(email, password)
    .then(function() {
        //decleration
        var user = auth.currentUser
        // add this to firebase
        var database_ref = database.ref()
        // create user data
        var user_data ={
            email:email,
            last_login : Date.now()
        }

        database_ref.child('users/' +user.uid).set(user_data)



        alert(' user created')
    })
    .catch(function(error){
        var error_code = error_code
        var error_message = error_message

        alert(error_message)
    })

  }
function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true){
        //email is good
        return true
    } else{
        // not good
        return false
    }
}
function validate_password(password) {
    // need more than 6 digit
    if (password <6) {
        return false
    }else{
        return true
    }
}
function validate_field(field){
    if (field==null) {
        return false
    }
    if (field.length <=0) {
        return false
    }else{
        return true
    }

}
