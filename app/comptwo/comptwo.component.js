"use strict";
const compTwo = {
  template: `
  <p class="edit-p">Use the form below to update your profile</p>

  <div class="edit-form">
  <label for="name">Name</label>
  <input type="text"
    ng-model="$ctrl.userProfile.name"
    >
    
  <label for="contact">Contact</label>
  <input type="text"
    ng-model="$ctrl.userProfile.contact"
    >

  <label for="bio">Bio</label>
  <input type="text"
    ng-model="$ctrl.userProfile.bio"
    >

  <button 
  ng-click="$ctrl.update($ctrl.userProfile);"
  >Update</button>
  </div>
  `,
  controller: ["ProfileService", function(ProfileService){
    const vm = this;
    vm.$onInit = function(){
      vm.userProfile = ProfileService.getUserProfile();
    };
    vm.update = function(userProfile){
      ProfileService.setUserProfile(userProfile);
    }
  }]
};

angular.module("ProfileApp").component("compTwo", compTwo)
