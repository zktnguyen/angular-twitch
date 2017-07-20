var app = angular.module("twitchApp");
app.controller("MainController", function($scope, twitch){
  $scope.title = "Twitch.TV API Stream List";
  $scope.users = { 
  "Doublelift" :
    {
      name: "Doublelift",
      logo: null,
      stream: "https://twitch.tv",
      statusIcon: null,
      status: null
    },
  "ESL_SC2" :
    {
      name: "ESL_SC2",
      logo: null,
      stream: "https://twitch.tv",
      statusIcon: null,
      status: null
    },
  "freecodecamp" :
    {
      name: "freecodecamp",
      logo: null,
      stream: "https://twitch.tv",
      statusIcon: null,
      status: null
    },
  "OgamingSC2" :
    {
      name: "OgamingSC2",
      logo: null,
      stream: "https://twitch.tv",
      statusIcon: null,
      status: null
    },
  "cretetion" :
    {
      name: "cretetion",
      logo: null,
      stream: "https://twitch.tv",
      statusIcon: null,
      status: null
    },
  "storbeck" :
    {
      name: "storbeck",
      logo: null,
      stream: "https://twitch.tv",
      statusIcon: null,
      status: null
    },
  "brunofin" :
    {
      name: "brunofin",
      logo: null,
      stream: "https://twitch.tv",
      statusIcon: null,
      status: null
    },
  "habathcx" :
    {
      name: "habathcx",
      logo: null,
      stream: "https://twitch.tv",
      statusIcon: null,
      status: null
    },
  "RobotCaleb" :
    {
      name: "RobotCaleb",
      logo: null,
      stream: "https://twitch.tv",
      statusIcon: null,
      status: null
    },
  "noobs2ninjas" :
    {
      name: "noobs2ninjas",
      logo: null,
      stream: "https://twitch.tv",
      statusIcon: null,
      status: null
    },
  "comster404" :
    {
      name: "comster404",
      logo: null,
      stream: "https://twitch.tv",
      statusIcon: null,
      status: null
    },
  "dfx":
    {
      name: "dfx",
      logo: null,
      stream: "https://twitch.tv",
      statusIcon: null,
      status: null
    }
};
  $scope.lists = ['All', 'Online', 'Offline'];
  $scope.activeList = $scope.lists[0];
  
  var onError = function(error) {
    $scope.error = "Could not fetch data";
  };

  var onStreamComplete = function(data) {
    var username = data[0];
    var userData = data[1];
    if (userData.stream){
      $scope.users[username].statusIcon = "glyphicon glyphicon-play-circle";
      $scope.users[username].status = "Online";
    }
    else {
      $scope.users[username].statusIcon = "glyphicon glyphicon-off";
      $scope.users[username].status = "Offline";
    }
  }

  $scope.setActive = function(list) {
    $scope.activeList = list;
  }

  var onComplete = function(data) {
    var username = data[0];
    var userData = data[1];
    console.log(userData);
    if (userData.error){
      $scope.users[username].stream = "https://twitch.tv/unavailable_user";
      $scope.users[username].logo = "https://via.placeholder.com/120";
    }
    else {
      $scope.users[username].stream = "https://twitch.tv/" + userData.name;
      $scope.users[username].logo = userData.logo || "https://via.placeholder.com/120";
      $scope.users[username].name = userData.name;
    }
    twitch.getStream(username).then(onStreamComplete, onError);
  };

  for (var key in $scope.users) {
    if ($scope.users.hasOwnProperty(key)) {
      twitch.getUser(key).then(onComplete, onError);  
    }
}
});