$('.LikeClass').click(function (e) {
    
    var _userID = e.currentTarget.getAttribute('data-id');
    var _postID = e.currentTarget.getAttribute('data-post-id');

  
     $.ajax({
                type: "POST",
                url: "../Profile/Like",
                data: {
                    "UserId": _userID,
                    "PostId": _postID
                },

                dataType: "text",
                success: function (msg) {

                    var color = e.currentTarget.childNodes[1].style.color;
                    if (color == "black") {
                        e.currentTarget.childNodes[1].style.color = "blue";
                    }else {
                        e.currentTarget.childNodes[1].style.color = "black";

                    }



                },
         error: function (req, status, error) {
             alert(error);

                }
            });


});

$('.typeComment').keydown(function (e) {
    var _userID = e.currentTarget.getAttribute('data-id');
    var _postID = e.currentTarget.getAttribute('data-post-id');
    var img = e.currentTarget.getAttribute('data-prof-pic');
    var userName = e.currentTarget.getAttribute('data-name')
    var content;

    if (e.keyCode == 13) {
        
        $.ajax({
            type: "POST",
            url: "../Profile/AddComment",
            data: {
                "UserId": _userID,
                "CommentContent": e.currentTarget.value,
                "PostId": _postID
            },

            dataType: "text",
            success: function (msg) {

                console.log(msg);
                var x = $(".Comments").html();
                //var s = " <div class=\"row p-0 m - 0 mt - 3 Commented\" id="+msg+">< div class=\"col-1\" ><img src=@ProfilePicture class=\"commentPic\" >"+
                //    "</div > <div class=\"col-3 mt-1\" style=\"font-size:small;\"><span class=\"commentedName\">@name"+
                //        "</span><br></div><div class=\"col-7 p-0\" style=\"border: 1px lightblue solid;border-radius: 5px;background-color: lightgray;\">"+
                //"<span class=\"CommentText2\">@i.CommentContent</span></div>@if (i.UserId == Model.Id || item.UserId == Model.Id){" +
                //    " <Select class=\"RemoveCommentSelect col - 1\" style=\"border: none\"><option value=\"\"></option><option value=" +
                //    msg+" class=\"remove_Comment\">Remove Comment</option></Select>}</div>";
                var picture;
                var parentDiv = document.createElement("div");
                parentDiv.classList.add("row");
                parentDiv.classList.add("p-0");
                parentDiv.classList.add("m-0");
                parentDiv.classList.add("mt-3");
                parentDiv.classList.add("Commented");
                parentDiv.id = msg;
                var firstChild = document.createElement("div");
                firstChild.classList.add("col-1");
                firstChild.innerHTML = "<img src="+img+"  class=\"commentPic\">";
                parentDiv.appendChild(firstChild);
                var secondChild = document.createElement("div");
                secondChild.classList.add("col-3");
                secondChild.classList.add("mt-1");
                secondChild.classList.add("commentedNameDiv");
                secondChild.innerHTML = "<span class=\"commentedName\">" + userName+"</span><br>";
                parentDiv.appendChild(secondChild);
                var thirdChild = document.createElement("div");
                thirdChild.classList.add("col-7");
                thirdChild.classList.add("p-0");
                thirdChild.classList.add("CommentText2Div");
                thirdChild.innerHTML = "<span class=\"CommentText2\">" + e.currentTarget.value + "</span>";
                parentDiv.appendChild(thirdChild);

                var fourthChild = document.createElement("select");
                fourthChild.classList.add("RemoveCommentSelect");
                fourthChild.classList.add("col-1");
                fourthChild.innerHTML = "<option value=\"\"></option>< option value = "+msg+" class=\"remove_Comment\" > Remove Comment</option >";

                parentDiv.appendChild(fourthChild);



                //parentDiv.innerHTML = "hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii";

                ////$(".Comments").append(s);
                var commentsDiv = document.querySelector(".Comments");
                commentsDiv.appendChild(parentDiv);
                e.currentTarget.value = "";
               
            },
            error: function (req, status, error) {
                alert(error);

            }
        });
    }
    

});




    $('.RemovePost').change(function () {

        console.log("Here Delete");
        var id = $(this).val();
        var _parent = $(this).parent().parent().parent();
        console.log(_parent);
        $.ajax({
            type: "POST",
            url: "../Profile/RemovePost",
            data: {
                "PostId": id,
            },
            dataType: "text",
            success: function (msg) {
                console.log("Success")
                
                _parent.css("display", "none");
            },
            error: function (req, status, error) {
                alert("Error Happen " + error);
            }
        });
    });


$('.RemoveCommentSelect').change(function () {
        console.log("Here Delete Comment");
    var id = $(this).val();
    console.log(id);
        $.ajax({
            type: "POST",
            url: "../Profile/RemoveComment",
            data: {
                "CommentId": id,
            },

            dataType: "text",
            success: function (msg) {
                console.log("Success");

                $("#" + id).css("display", "none");

            },
            error: function (req, status, error) {
                alert("Error Happen " + error);
            }
        });

    });



