"use strict";
angular
  .module("ProfileApp")
  .config(["$routeProvider", function($routeProvider) {
    $routeProvider
      .when("/", {
        template: "<comp-one></comp-one>"
      })
      .when("/user-profile", {
        template: "<comp-one></comp-one>"
      })
      .when("/edit-profile", {
        template: "<comp-two></comp-two>"
      })
  }]);
