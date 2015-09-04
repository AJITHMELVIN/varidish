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
$("logout-button").click(function (event) {
    logout();
});
//****************************************************************************************************************************
//                                                         Helpers
//****************************************************************************************************************************
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
    var userName = $("#uname").val();
    var password = $("#pwd").val();

    Parse.User.logIn(userName, password, {
        success: function (user) {
            loginSuccess();
        },
        error: function (user, error) {
            console.log("login failed" + error.message);
            loginError(error);

        }
    });
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