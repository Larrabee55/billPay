//bill tracking page.

$("body").on("click", "#new-bill-button", function (event) {
    event.preventDefault();

    var newBill = {
        bill_name: $("#bill-name").val().trim(),
        amount: $("#amount").val().trim(),
        due_date: $("#due").val().trim(),
        user_id: $("#userID").text()
    };
    console.log(newBill)

    $.ajax("/api/userBills", {
        type: "POST",
        data: newBill
    }).then(
        function () {

            location.reload();
        }
    );
});

$("body").on("click", "#new-receipt-button", function () {
    event.preventDefault();

    var newReceipt = {
        receipt_name: $("#receipt-name").val().trim(),
        amount: $("#amount").val().trim(),
        category: $("#category").val().trim(),
        user_id: $("#userID").text()
    };

    $.ajax("/api/userReceipts", {
        type: "POST",
        data: newReceipt

    });
    location.reload();
});

$("body").on("click", "#new-iou-button", function () {
    event.preventDefault();

    var newIou = {
        iou_name: $("#iou-name").val().trim(),
        amount: $("#amount").val().trim(),
        user_id: $("#userID").text()
    };

    $.ajax("/api/userIou", {
        type: "POST",
        data: newIou
    });
    location.reload();
});


$(".delete-bill-button").on("click", function () {
    var id = $(this).data("id");
    $.ajax("/api/userBills/" + id, {
        type: "DELETE"
    }).then(
        function () {
            location.reload();
        }
    );
});
$(".delete-receipt-button").on("click", function () {
    var id = $(this).data("id");
    $.ajax("/api/userReceipts/" + id, {
        type: "DELETE"
    }).then(
        function () {
            location.reload();
        }
    );
});
$(".delete-iou-button").on("click", function () {
    var id = $(this).data("id");
    $.ajax("/api/userIou/" + id, {
        type: "DELETE"
    }).then(
        function () {
            location.reload();
        }
    );
});



// $("body").on("mouseleave", ".bill-row", function () {
//     let id = $(this).data("id")
//     $(".edit-button").each(function () {
//         if ($(this).data("id") === id) {
//             $(this).css("display", "none")
//         }
//     })

//     $(".delete-button").each(function () {
//         if ($(this).data("id") === id) {
//             $(this).css("display", "none")
//         }
//     })

// })

//adjusts opacity when user hovers over or leaves buttons.  (could probably be done with less code in css)
$("body").on("mouseenter", ".edit-button", function () {
    $(this).css("opacity", "1")
})

$("body").on("mouseleave", ".edit-button", function () {
    $(this).css("opacity", ".3")
})

$("body").on("mouseenter", ".delete-button", function () {
    $(this).css("opacity", "1")
})

$("body").on("mouseleave", ".delete-button", function () {
    $(this).css("opacity", ".3")
})

$("body").on("mouseenter", ".button", function () {
    $(this).css("opacity", "1")
})

$("body").on("mouseleave", ".button", function () {
    $(this).css("opacity", ".5")
})

//inserting row into bill table by clicking the submit button
// $("body").on("click", "#submit-button", function (event) {
//     event.preventDefault();
//     $.ajax({
//         method: "POST",
//         url: "/api/addBill",
//         data: {
//             billName: $("#bill-name").val(),
//             amount: $("#amount").val(),
//             due: $("#due").val()
//         }
//     }).then(function (data) {

//     })
// })

// $("body").on("click", ".delete-button", function (event) {
//     $.ajax({
//         method: "DELETE",
//         url: "/api/deleteBill",
//         data: {
//             id: $(this).data("id")
//         }
//     }).then(function (data) {
//         renderBillTable(data);
//     })
// })

$("#money-icon").on("click", function () {
    window.location = window.location + "receipt"
})

$("#iou-icon").on("click", function () {
    window.location = window.location + "iou"
})

$("#math").on("click", function () {
    var rate = $("#rate").val();
    var hours = $("#hours").val();
    var income = rate * hours;
    var yearlyRate = income * 52;

    $("#output").text("$" + yearlyRate);
})

$("#submit").on("click", function (res) {
    var creds = {
        username: $("#username").val(),
        password: $("#password").val()
    };

    console.log(creds);
    $.ajax(`/api/userCreds`, {
        type: "POST",
        data: creds
    }).then(function (data) {
        console.log(data)
        if (data.auth == true) {
            // location.assign(location.host+"/home")
            // console.log(location.href)
            // console.log(window.location)
            window.location = location.origin + "/home/" + data.data[0].id

            // $.ajax(`/home`,{
            //     type:"get"
            // }).then(function(data){

            // })
        }

    })
    window.location = location.origin + "/"
})