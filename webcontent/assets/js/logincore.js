/*
Varidish Login and session management core methods
developer           :Ajith Melvin Kuriakose
last modified date  :4th September 2015
Key reviews
*
*
*
*
*/

//initialize
Parse.initialize("w5V5aWn9B9PGmTMeUh5poxzU25cYtg9HeRS7I8T1", "IFSPsVLxturBRyaj1xDwOTes5GTdOyvwsFcGtz5o");
setCurrentUser();

//****************************************************************************************************************************
//                                                         Listeners
//****************************************************************************************************************************

/*$("#test-form").submit(function (event) {
    event.preventDefault();
    saveRestaurant();
});*/

$("#login-form").submit(function (event) {
    event.preventDefault();
    login();

});
$("#logout-button").click(function (event) {
    logout();
});
//****************************************************************************************************************************
//                                                         Helpers
//****************************************************************************************************************************
function setCurrentUser() {
    var currUser = Parse.User.current();
    if(currUser)
        {
            var userName=currUser.getUsername()
            $("#logged-in-wrap").html("logged in as "+userName);
        }
    else
        {
            $("#logged-in-wrap").html("please login");
        }
     
    
//    if(isLoggedIn)
//        {
//            $("logged-in-div").show();
//        }
//    else
//        {
//            $("logged-in-div").hide();
//        }
    
}
function login() {
    var userName = $("#uname").val();
    var password = $("#pwd").val();

    Parse.User.logIn(userName, password, {
        success: function (user) {
            loginSuccess();
        },
        error: function (user, error) {
            loginError(error);
        }
    });
}

function logout() {
    console.log("Performing submit");

        //logout current user
        if ( Parse.User.current() ) {
            Parse.User.logOut();

            // check if really logged out
            if (Parse.User.current())
                console.log("Failed to log out!");
            
        }

        // do redirect
        //window.location.replace("Sign_In.html");
        // or
        setCurrentUser();
        window.location.href = "testredirect.html";
}


function loginSuccess() {
    console.log("login Successful");
}

function loginError(error) {
    console.log("login failed" + error.message);
}

/*function saveRestaurant() {
    var menu = Parse.Object.extend("MENU");
    var resID = $("#field1").val();
    var mNotes = $("#field2").val();

    var newMenu = new menu();
    newMenu.set("Restaurant_id", resID);
    newMenu.set("Menu_notes", mNotes);

    newMenu.save({
        success: function () {

        },
        error: function (Error) {
            {
                console.log("error" + Error.message);
            }
        }
    });
}*/
//helper functions end