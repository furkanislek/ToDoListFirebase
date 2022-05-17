$(document).ready(function(){

    var config = {
        apiKey: "**************",
        authDomain: "myperfecttodolist45.firebaseapp.com",
        projectId: "myperfecttodolist45",
        storageBucket: "myperfecttodolist45.appspot.com",
        messagingSenderId: "**********",
        appId: "******************",
        measurementId: "***********",
        databaseURL: "https://myperfecttodolist45-default-rtdb.firebaseio.com/"
    };
    
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
     }else {
        firebase.app(); // if already initialized, use that one
     }

    $("#loginBtn").click(function(){

        var email = $("#email").val();
        var password = $("#password").val();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function(){
                window.location.href = "index.html";
            }).catch(function(error){
                alert(error.message);
        })


    })

})
