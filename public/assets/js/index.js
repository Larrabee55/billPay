
//bill tracking page.

//ajax get request to select all bills from a certain user goes here.
//Puts response from ajax into table rows.  Should go in .then function.
var renderBillTable = function(data){
    $("#bill-table").html(`
    <tr>
        <th><b>Bills</b></th>
        <th><b>Amount</b></th>
        <th><b>Due</b></th>
    </tr>`)

    for(let i = 0; i < data.length; i++){
        $("#bill-table").append(`
        <tr data-id = "${i}" class = "bill-row">
            <th>${data[i].billName}</th>
            <th>${data[i].amount}</th>
            <th position= "relative">${data[i].due}
                <img class = "edit-button" data-id = "${i}" src="assets/images/edit.png" width= "18px">
                <img class = "delete-button" data-id = "${i}" src="assets/images/delete.png" width= "16px">
            </th>
        </tr>`)
    }
}

//initial load of bill table
$.ajax({
    method:"GET",
    url:"/api/getBillTable"

}).then(function(data){
    renderBillTable()
})

//Clicking on the new-bill-button will add a form to the bottom of the table.
$("body").on("click","#new-bill-button",function(){
    $("#bill-table").append(`
    <tr id="new-bill-row">
        <th>
            <form id = "bill-form">
                <input id = "bill-name">
            </form>
        </th>
        <th>
            <input form = "bill-form" id = "amount">
        </th>
        <th>
            <input form = "bill-form" id = "due">
        </th>
    </tr>`)

    $("#button-flex").html(`
    <div id = "cancel-button" class = "button">
        <img src = "assets/images/delete.png" width = "18px">
    </div>
    <button form = "bill-form" id = "submit-button" class = "button">
        <img src = "assets/images/checkmark.png" width = "18px">
    </button>`)

    $("#button-flex").css("justify-content","space-between")
})

// Clicking the cancel button removes the form from the bottom of the table
$("body").on("click","#cancel-button",function(){
    $("#new-bill-row").remove();
    
    $("#button-flex").html(`
    <div id = "new-bill-button" class = "button">+</div>`)

    $("#button-flex").css("justify-content","right")
})


//shows edit and delete button where hovering over row and hides them when exiting.
$("body").on("mouseenter",".bill-row",function(){
    let id = $(this).data("id")
    $(".edit-button").each(function(){
        if($(this).data("id") === id){
            $(this).css("display","block")
        }
    })
    
    $(".delete-button").each(function(){
        if($(this).data("id") === id){
            $(this).css("display","block")
        }
    })

})
 
$("body").on("mouseleave",".bill-row",function(){
    let id = $(this).data("id")
    $(".edit-button").each(function(){
        if($(this).data("id") === id){
            $(this).css("display","none")
        }
    })
    
    $(".delete-button").each(function(){
        if($(this).data("id") === id){
            $(this).css("display","none")
        }
    })
    
})
 
//adjusts opacity when user hovers over or leaves buttons.  (could probably be done with less code in css)
$("body").on("mouseenter",".edit-button",function(){
    $(this).css("opacity","1")
})

$("body").on("mouseleave",".edit-button",function(){
    $(this).css("opacity",".3")
})
 
$("body").on("mouseenter",".delete-button",function(){
    $(this).css("opacity","1")
})

$("body").on("mouseleave",".delete-button",function(){
    $(this).css("opacity",".3")
})
 
$("body").on("mouseenter",".button",function(){
    $(this).css("opacity","1")
})
 
$("body").on("mouseleave",".button",function(){
    $(this).css("opacity",".5")
})

//inserting row into bill table by clicking the submit button
$("body").on("click","#submit-button",function(event){
    event.preventDefault();
    $.ajax({
        method: "POST",
        url: "/api/addBill",
        data: {
            billName: $("#bill-name").val(),
            amount: $("#amount").val(),
            due: $("#due").val()
        }
    }).then(function(data){

    })
})

$("body").on("click",".delete-button",function(event){
$.ajax({
    method: "DELETE",
    url: "/api/deleteBill",
    data: {
        id: $(this).data("id")
    }
}).then(function(data){
    renderBillTable(data);
})
})
