$(document).ready(function(){

    var config = {
        apiKey: "AIzaSyAp6PwUaBGTKnbAOuaA9Qe74ZJooYVmk4k",
        authDomain: "myperfecttodolist45.firebaseapp.com",
        projectId: "myperfecttodolist45",
        storageBucket: "myperfecttodolist45.appspot.com",
        messagingSenderId: "304111299648",
        appId: "1:304111299648:web:d7571a272689da158bc3a5",
        measurementId: "G-LTJ9G6L155",
        databaseURL: "https://myperfecttodolist45-default-rtdb.firebaseio.com/"

    };

    if (!firebase.apps.length) {
        firebase.initializeApp(config);
     }else {
        firebase.app(); // if already initialized, use that one
     }
    // firebase.initializeApp(config);


    $("#registerBtn").click(function(){

        var email = $("#email").val();
        var password = $("#password").val();

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(){

                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then(function(){
                        window.location.href = "index.html";
                    })

            }).catch(function(error){
                alert(error.message);
        })

    })


})