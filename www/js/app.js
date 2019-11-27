function checkPermission(){
    window.FirebasePlugin.hasPermission(function(hasPermission){
        if (hasPermission)
            alert("Permission to receive notification is granted.");
        else
            alert("Permission to receive notification is NOT granted.");
    });
}

function grantPermissionIos(){
    window.FirebasePlugin.grantPermission(function(){
        alert("Permission is granted for iOS");    
    }, function(error){
        alert(error);
    });
}

function setBadgeNumber(){
    var n = 5;
    window.FirebasePlugin.setBadgeNumber(n);
    alert("Set Badge Number to " + n);
}

function getBadgeNumber(){
    window.FirebasePlugin.getBadgeNumber(function(n) {
        alert("Badge Number is " + n);
    });
}

function setScreenName(){
    var page="FirebaseHome";
    window.FirebasePlugin.setScreenName(page);
    alert(page + " screen is tracked.");
}

function setUserId(){
    //Change your unique user ID here
    var myUserId="35009a79-1a05-49d7-b876-2b884d0f825b";
    window.FirebasePlugin.setUserId("user_id");
    alert("UserID is set to: " + myUserId);
}

function unregister(){
    window.FirebasePlugin.unregister(function(){
        alert("Stop receiving push notifications."); 
    }, function(error){
        alert(error);
    });
}

document.addEventListener('deviceready', function() {
  $('#check-permission').click(checkPermission);
  $('#grant-permission-ios').click(grantPermissionIos);
  $('#set-badge-number').click(setBadgeNumber);
  $('#get-badge-number').click(getBadgeNumber);
  $('#set-screen-name').click(setScreenName);
  $('#user-id').click(setUserId);
  $('#unregister').click(unregister);
});
