'use strict';

var app = angular.module("twitchApp");

app.factory("twitch", function($http){

  function getURL(type, username){
    return "https://wind-bow.glitch.me/twitch-api/" + type + '/' + username;
  };

  var getUser = function(username){
    var url = getURL("users", username);
    return $http.get(url)
                .then(function(response){
                  return [username, response.data];
                });
  };

  var getStream = function(username){
    var url = getURL("streams", username);
    return $http.get(url)
                .then(function(response){
                  return [username, response.data];
                });
  };
  
  return {
    getUser: getUser,
    getStream: getStream
  };
});