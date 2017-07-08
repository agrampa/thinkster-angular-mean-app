'use strict';

angular.module('flapperNews', ['ui.router'])
.config([
  '$stateProvider',
  '$urlProvider',
  function($stateProvider, $urlProvider){
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl:'/home.html',
        controller: 'MainCtrl'
    });
    $urlProvider.otherwise('home');
  }
])
.factory('posts', [function(){ // use lower camelCase
  let o = {
    posts: [{title: 'hello', link: '', upvotes: 0}]  // now posts are available to all parts of the site
  };
  return o;
}])
.controller('MainCtrl', [
'$scope',
'posts',
function($scope, posts){
  $scope.test = 'Hello world!';

  $scope.posts = posts.posts;

  $scope.addPost = function() {
    if($scope.title === '') return; // makes sure title is entered, instead of adding a blank post
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 4
    });
    $scope.title = '';  // clears out after the submit button is clicked
    $scope.link = '';
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };
}]);
