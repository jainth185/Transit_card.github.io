const firebaseConfig = {
  apiKey: "AIzaSyAnt3JSGAxH-i1B4ZOF1yKEJ3j5kC_ajBQ",
  authDomain: "transit-card12.firebaseapp.com",
  projectId: "transit-card12",
  storageBucket: "transit-card12.appspot.com",
  messagingSenderId: "121590752754",
  appId: "1:121590752754:web:66941ab97b4629bbf2b76b"
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//Variable to access database collection
const db = firestore.collection("Form");

//Get Submit Form
let submitButton = document.getElementById("submit");

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
//Prevent Default Form Submission Behavior
e.preventDefault();

//Get Form Values
let name = document.getElementById("name").value;
let age = document.getElementById("age").value;
let phno = document.getElementById("phno").value;
let dob = document.getElementById("dob").value;
let gender = document.getElementById("gender").value;
let adhar = document.getElementById("adhar").value;
let drno = document.getElementById("drno").value;
let city = document.getElementById("city").value;
let district = document.getElementById("district").value;
let pincode = document.getElementById("pincode").value;
let category = document.getElementById("category").value;

firestore
  .collection("Form")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      const fn = doc.data().name;
      if (firstName === fn) {
        console.log("Already Exists");
      }

      // console.log("data", doc.data().fname);
    });
  });
//Save Form Data To Firebase
db.doc()
  .set({
    name: name,
    age: age,
    phno: phno,
    dob:dob,
    gender:gender,
    adhar:adhar,
    drno:drno,
    city :city,
    district:district,
    pincode:pincode,
    category:category
    
  })
  .then(() => { })
  .catch((error) => {
    console.log(error);
  });

//alert
alert("Your Form Has Been Submitted Successfully");

//clear form after submission
function clearForm() {
  document.getElementById("clearFrom").reset();
}
clearForm()
});