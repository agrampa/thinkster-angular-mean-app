var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';

  $scope.posts = [
    {title: 'post 1', upvotes: 5},
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 15},
    {title: 'post 4', upvotes: 9},
    {title: 'post 5', upvotes: 4}
  ];

  $scope.addPost = function() {
    if($scope.title === '') return; // makes sure title is entered, instead of adding a blank post
    $scope.posts.push({title: $scope.title, upvotes: 4});
    $scope.title = '';  // clears out after the submit button is clicked
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };
}]);
