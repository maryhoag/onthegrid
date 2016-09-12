/* The API controller
   Exports 3 methods:
   * post - Creates a new thread
   * list - Returns a list of threads
   * show - Displays a thread and its posts
*/

// var User = require('../models/User.js');
// var Post = require('../models/Post.js');


var api = {
  
  post: function(req, res) {
      //new Post({title: req.body.title, author: req.body.author}).save();
      new Post( {text: req.body.text} );
      console.log('saved');
  },

  list:function(req, res) {
    Post.find(function(err, posts) {
      res.send(posts);
    })
  },

  // first locates a post by title
  show: function(req, res) {
      Posts.findOne({title: req.params.title}, function(error, post) {
            res.send([{post: posts, users: users}]);
      })
  }

};

module.exports = api;

