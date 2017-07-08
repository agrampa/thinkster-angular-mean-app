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
    })
      .state('posts', {
        url:'/posts/{id}',
        templateUrl: '/posts.html',
        controller: 'PostsCtrl'
      });

    $urlProvider.otherwise('home');
  }
])
.factory('posts', [function(){ // use lower camelCase
  let o = {
    posts: []  // now posts are available to all parts of the site
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
      upvotes: 0,
      comments: [
        {author: 'User 1', body: 'Cool Post!', upvotes: 0},
        {author: 'User 2', body: 'Not cool', upvotes: 0}
      ]
    });
    $scope.title = '';  // clears out after the submit button is clicked
    $scope.link = '';
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };
}])
.controller('PostsCtrl', [
  '$scope',
  '$stateParams',
  'posts',
  function($scope, $stateParams, posts) {
    $scope.post = posts.posts[$stateParams.id];
  }
]);
