 // Your web app's Firebase configuration.
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
    apiKey: "AIzaSyCWxW0gEXVWvVCdZXYERqHTx6eqcJl6l90",
    authDomain: "canteen-status-45757.firebaseapp.com",
    databaseURL: "https://canteen-status-45757-default-rtdb.firebaseio.com",
    projectId: "canteen-status-45757",
    storageBucket: "canteen-status-45757.appspot.com",
    messagingSenderId: "485236838100",
    appId: "1:485236838100:web:0f1772e4fec5a837f8b541"
 };
 
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 // firebase.analytics(); 
  const auth = firebase.auth();
  
  function signUp(){
     var Email= document.getElementById("email");
     var pass= document.getElementById("password");
     const promise = auth.createUserWithEmailAndPassword(Email.value,pass.value);
     promise.catch(e => alert(e.message +" Try again."));// alert us if any error occur i.e wrong format of email or password is < 6 characters
     promise.then(user => {
         console.log(user);
         alert("Signed Up");
         window.location.href="final2.html";
         localStorage.setItem("current",Email.value);
     })}
  
  function signIn(){
     var Email=document.getElementById("email");
     var pass=document.getElementById("password");
 const promise = auth.signInWithEmailAndPassword(Email.value,pass.value);
 promise.catch(e => alert(e.message));
 promise.then(user => {
     console.log("Signed In as " + Email.value);
     window.location.href="final2.html";
     localStorage.setItem("current",Email.value);
 })
 }
 
 function SignOut() {	
  auth.signOut().then(() => {
      alert("Thankyou...");
      window.location.href="noteslogin.html";
      localStorage.removeItem("current");
  })
 }
  function reset() {
     var emailAddress=document.getElementById("passreset");
     if(emailAddress !=""){
         const resetreq = auth.sendPasswordResetEmail(emailAddress.value);
         resetreq.then(function () {
             alert("We sent an email with a link to get back into your account.");
         })
         resetreq.catch(e => alert(e.message));
     }
  }
 
 
 
 
 
 
 
 
 
 
 
 