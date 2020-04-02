//$("document").ready(function () {

//    $('.new_Btn').bind("click", function () {
//        $('#html_btn').click();
//    });

//    //PostButton --- Publish Post
//    $(".btn-Post").click(function () {

//        var _postText = $("#createPostArea").val();

//        //var today = new Date();

//        //var dd = String(today.getDate()).padStart(2, '0');
//        //var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//        //var yyyy = today.getFullYear();

//        //today = mm + '/' + dd + '/' + yyyy;

//        if (_postText != "") {
//            $.ajax({
//                type: "POST",
//                url: "Home/Create",
//                data: {
//                    //"PostDateTime": today,
//                    "PostContent": _postText,
//                    "UserId": 2,
//                    "IsDeleted": false
//                },

//                dataType: "text",
//                success: function (msg) {
//                    //console.log("Post id id : " + msg );
//                    //console.log(_postText);
//                    $("#createPostArea").val("");

//                    $(' <div class="createPost2" data-id=' + msg + '><img src ="../img/prof.png" alt = "" class= "PrfilePic" ><span class="ProfileName">Sara Atef</span> <br><span class="PostTime">now</span> <i class="fas fa-users"></i><Select><option value=""></option><option value="" class="RemovePost">Remove Post</option></Select><p class="PostText">' + _postText+'</p><div class="react"><span class="Like" data-id=' + msg + '><i class="far fa-thumbs-up"></i><span class="LikeWord">Like</span></span><span class="Comment"><i class="far fa-comments"></i><span>Comment</span></span></div><hr><div class="comments"><div class="pComment"><div class="CommingComment"><img src="../img/prof.png" alt="" class="commentPic"><textarea name="" id="areaOfComment" placeholder="Type Your Comment Here" class="typeComment" data-id=' + msg +'></textarea></div></div></div></div>').insertAfter('.createPost');
                    
//                    //$(".PostText").text(_postText);
//                },
//                error: function (req, status, error) {
//                    alert("Error Happen " + error);
//                }
//            });

//        }

      
//    });

//    //$(".Comment").click(function () {
//    //    console.log("Comment Focus");
//    //    $(".typeComment").focus();
//    //});
 
$(".ListOfPosts").click(function (e) {


    //if (e.target.classList.contains('Likeclass')) {
    //    console.log("sara test p like");

    //    var _that = $(event.target).parent();
    //    var _userID = $(event.target).attr('data-id');
    //    var _postID = _that.attr('data-id');
    //    var link = '@Url.Action("Like", "Profile")';
    //    console.log(_that + _userID + _postID);
    //    consol.log("this is end of first condotion");

    //            }
        if (e.target.classList.contains('LikeClass')) {
            //console.log($(event.target).parent());
            //var _that = $(event.target).parent();
            var _userID = $(event.target).attr('data-id');
            var _postID = $(event.target).attr('data-post-id');
            console.log(_userID);
            console.log(_postID);

            //$.ajax({
            //    type: "POST",
            //    url: "../Profile/Like",
            //    data: {
            //        "UserId": _userID,
            //        "PostId": _postID
            //    },

            //    dataType: "text",
            //    success: function (msg) {

            //        var color = $(event.target).querySelector('.classblue').children().css("color");
            //        console.log($(event.target).querySelector('.classblue').children());
            //        if (color == "rgb(0, 0, 0)") {
            //            color = "rgb(0,0,1)";
            //            //console.log("inside if");

            //            _that.children().css("color", "blue");



            //        } else {
            //            color = "rgb(0, 0, 0)";

            //            _that.children().css("color", "black");

            //        }

                   

            //    },
            //    error: function (req, status, error) {
            //        console.log(error);

            //    }
            //});

        }


    });


    $(".ListOfPosts").keydown(function (e) {
        //  console.log(e.target);

        var _that = $(event.target);

        var _commentText = $(_that).val();

        console.log(_commentText);

        if (e.target.classList.contains('typeComment')) {
            console.log(_commentText);
            console.log(" Beofore Enter ");
            //console.log($(event.target));
            if (e.keyCode == 13) {
                console.log(_commentText);
                console.log("Enter Suceess");
              
                var _PostID = _that.attr('data-id');
                console.log(_PostID);
                
                if (_commentText != "") {
                    $.ajax({
                        type: "POST",
                        url: "Profile/AddComment",
                        data: {
                            //"CommentDateTime": today,
                            "CommentContent": _commentText,
                            "UserId": 2,
                            "IsDeleted": false,
                            "PostId": _PostID
                        },

                        dataType: "text",
                        success: function (msg) {


                            $('.typeComment').val(" ");
                            var _insertVarElement = _that.parent().parent();

                            $('<div class="commented" id=' + msg + '><img src = "../img/prof.png" alt = "" class= "commentPic" ><p class="commenttext"><span class="CommentedName">Sara Atef</span><br><span><span><Select class="RemoveComment"><option value=""></option><option value=' + msg +' class="RemoveComment">Remove Comment</option></Select><span class="CommentText">' + _commentText+'</span> </p></div>').insertAfter(_insertVarElement);
                            //$(".CommentText").text(_commentText);
                        },
                        error: function (req, status, error) {
                            alert("Error Happen " + error);



                        }
                    });

                }




            }

        }

    });

//    $('.RemovePost').change(function () {

//        console.log("Here Delete");
//        var id = $(this).val();
//        var _parent = $(this).parent();
//        $.ajax({
//            type: "POST",
//            url: "Home/RemovePost",
//            data: {
//                "PostId": id,
//            },
//            dataType: "text",
//            success: function (msg) {
//                console.log("Success")
//                //$("#" + id).css("display", "none");
//                _parent.css("display", "none");
//            },
//            error: function (req, status, error) {
//                alert("Error Happen " + error);
//            }
//        });


//    });

//    $('.RemoveComment').change(function () {
//        console.log("Here Delete Comment");
//        var id = $(this).val();

//        $.ajax({
//            type: "POST",
//            url: "Home/RemoveComment",
//            data: {
//                "CommentId": id,
//            },

//            dataType: "text",
//            success: function (msg) {
//                console.log("Success");

//                $("#" + id).css("display", "none");

//            },
//            error: function (req, status, error) {
//                alert("Error Happen " + error);
//            }
//        });

//    });



//});



