function showDiv(index) {
    var contentDivs = document.getElementsByClassName("content");
    for (var i = 0; i < contentDivs.length; i++) {
        contentDivs[i].style.display = "none";
    }

    contentDivs[index].style.display = "block";
}

// Show the first div initially
showDiv(0);