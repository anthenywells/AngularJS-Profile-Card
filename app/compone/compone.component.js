"use strict";
const compOne = {
  template: `
  <div class="profile-img">
  <img src="mario.png" alt="mario">
  </div>

  <div class="profile">
  <p>{{$ctrl.userProfile.name}}</p> 
  <p>{{$ctrl.userProfile.contact}}</p>  
  <p>{{$ctrl.userProfile.bio}}</p>
  
  <button 
  ng-click="$ctrl.edit();"
  >Edit</button>
  </div>
  `,  
  controller: ["ProfileService", function(ProfileService){
    const vm = this;
    vm.$onInit = function(){
      vm.userProfile = ProfileService.getUserProfile();
    };
    vm.edit = function(){
      ProfileService.editProfile();
    }
  }]
};

angular.module("ProfileApp").component("compOne", compOne)