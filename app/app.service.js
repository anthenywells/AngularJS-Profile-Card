"use strict";

function ProfileService($location) {
  const self = this;
  self.userProfile = {
    name: "Bill",
    contact: "1800hellnaw",
    bio: "live in detroit"
  }
  self.getUserProfile = function(){
    return self.userProfile;
  };
  self.setUserProfile = function(userProfile){
    self.userProfile = userProfile;
    $location.path("/user-profile")
  };
  self.editProfile = function(){
    $location.path("/edit-profile")
  };
}
angular
  .module("ProfileApp")
  .service("ProfileService", ProfileService )