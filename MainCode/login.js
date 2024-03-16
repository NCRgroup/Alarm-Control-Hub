var firebaseConfig = {
    apiKey: "AIzaSyCnVJx2wX0x6VN339h1yTlxNrtLN5MAfRg",
    authDomain: "ncr-alarm-hub-login.firebaseapp.com",
    projectId: "ncr-alarm-hub-login",
  storageBucket: "ncr-alarm-hub-login.appspot.com",
  messagingSenderId: "517102115945",
  appId: "1:517102115945:web:980c6a86a77b93f8fad6f8",
  measurementId: "G-0YNBV3LZZL"
};
firebase.initializeApp(firebaseConfig);

// Example: Handling login with email and password
function handleLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            // User signed in successfully
            var user = userCredential.user;
            console.log("User logged in:", user.email);
            // Redirect to dashboard or another page
        })
        .catch(function(error) {
            // Handle login error
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error("Login error:", errorMessage);
        });
}

// Example: Handling user registration
function handleRegistration() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            // New user registered successfully
            var user = userCredential.user;
            console.log("User registered:", user.email);
            // Redirect to profile setup or another page
        })
        .catch(function(error) {
            // Handle registration error
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error("Registration error:", errorMessage);
        });
}
