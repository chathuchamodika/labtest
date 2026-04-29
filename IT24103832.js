/*
Student ID: IT24103832
Name: Chamodika J.W.C
*/

$(document).ready(function() {

    // TASK 1 - Page Load & Document Properties
    document.title = "Library Seat Booking - DOM Test";
    console.log("Page URL: file:///C:/Users/User/Desktop/Lab%204/index.html", window.location.href);

    // TASK 2 - Style & Background Manipulation
    $("#pageTitle").css({
        "color": "#147d1b",
        "font-size": "34px"
    });

    setTimeout(function() {
        $("body").css("background-color", "#D3D3D3");
    }, 2000);

    // TASK 3 - Mouse Events & Table Click
    $("#libraryImage").on("mouseover", function() {
        $(this).css("border", "5px solid #0000ff");
    }).on("mouseout", function() {
        $(this).css("border", "none");
    });

    $("#seatTable").on("click", function() {
        alert("You clicked on the Seat Categories table!");
    });

    // TASK 4 - Keyboard & Window Events
    $("#studentName").on("keyup", function() {
        $(this).css("background-color", "#FFFF00");
    });

    $(window).on("resize", function() {
        console.log("Window resized");
    });

    // TASK 5 - Image Preloading & Replacement
    let img1 = "images\library1.jpg";
    let img2 = "images\library2.jpg";
    let current = img1;

    $("#libraryImage").on("dblclick", function() {
        current = (current === img1) ? img2 : img1;
        $(this).attr("src", current);
    });

    // TASK 6 - Form Handling & Dynamic Table
    $("#bookingForm").on("submit", function(event) {
        event.preventDefault();

        let name = $("#studentName").val();
        let email = $("#studentEmail").val();

        // Create new row
        let row = $("<tr></tr>");
        row.append("<td>" + name + "</td>");
        row.append("<td>" + email + "</td>");

        // Add Delete button
        let deleteBtn = $("<button>Delete</button>").on("click", function() {
            row.remove();
        });

        row.append($("<td></td>").append(deleteBtn));
        $("#bookingTable").append(row);

        // Reset form
        $(this)[0].reset();
    });

});
