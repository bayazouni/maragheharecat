function addComment() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var comment = document.getElementById("comment").value;

  var newComment = "<p><strong>" + name + ":</strong> " + comment + "</p>";

  var commentsList = document.getElementById("comments-list");
  commentsList.innerHTML += newComment;

  document.getElementById("comment-form").reset();
}