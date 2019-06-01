//bill tracking page.

//ajax get request to select all bills from a certain user goes here.
//Puts response from ajax into table rows.  Should go in .then function.

//initial load of bill table
// $.ajax({
//     method: "GET",
//     url: "/api/all"

// }).then(function (data) {
//     renderBillTable()
// })

//Clicking on the new-bill-button will add a form to the bottom of the table.
// calculateTotal()

// function calculateTotal() {
//     // var totalAmount = 0;
//     // $("#totals").empty();
//     // var test = $("#amounts").val();
//     // if ("#amounts") {
//     //     totalAmount = totalAmount;
//     // }
//     // console.log(test)

// }

$("body").on("click", "#new-bill-button", function (event) {
    event.preventDefault();

    var newBill = {
        bill_name: $("#bill-name").val().trim(),
        amount: $("#amount").val().trim(),
        due_date: $("#due").val().trim(),
        user_id: 2
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


    // $("#bill-table").append(`
    // <tr id="new-bill-row">
    //     <th>
    //         <form id = "bill-form">
    //             <input id = "bill-name">
    //         </form>
    //     </th>
    //     <th>
    //         <input form = "bill-form" id = "amount">
    //     </th>
    //     <th>
    //         <input form = "bill-form" id = "due">
    //     </th>
    // </tr>`)

    // $("#button-flex").html(`
    // <div id = "cancel-button" class = "button">
    //     <img src = "/assets/img/images/delete.png" width = "18px">
    // </div>
    // <button form = "bill-form" id = "submit-button" class = "button">
    //     <img src = "/assets/img/images/checkmark.png" width = "18px">
    // </button>`)

    // $("#button-flex").css("justify-content", "space-between")
});

$("body").on("click", "#new-receipt-button", function () {
    event.preventDefault();

    var newReceipt = {
        receipt_name: $("#receipt-name").val().trim(),
        amount: $("#amount").val().trim(),
        category: $("#category").val().trim(),
        user_id: 2
    };

    $.ajax("/api/userReceipts", {
        type: "POST",
        data: newReceipt
    }).then(
        function () {

        }
    );
    location.reload();
});

$("body").on("click", "#new-iou-button", function () {
    event.preventDefault();

    var newIou = {
        iou_name: $("#iou-name").val().trim(),
        amount: $("#amount").val().trim(),
        user_id: 2
    };

    $.ajax("/api/userIou", {
        type: "POST",
        data: newIou
    }).then(
        function () {

        }
    );
    location.reload();
});

// Clicking the cancel button removes the form from the bottom of the table
// $("body").on("click", "#cancel-button", function () {
//     $("#new-bill-row").remove();

//     $("#button-flex").html(`
//     <div id = "new-bill-button" class = "button">+</div>`)

//     $("#button-flex").css("justify-content", "right")
// })


//shows edit and delete button where hovering over row and hides them when exiting.
// $("body").on("mouseenter", ".bill-row", function () {
//     let id = $(this).data("id")
//     $(".edit-button").each(function () {
//         if ($(this).data("id") === id) {
//             $(this).css("display", "block")
//         }
//     })
// })

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