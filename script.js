function highlight() {
    // Select all <strong> elements
    let boldWords = document.querySelectorAll("strong");
    
    // Loop through each <strong> and change the text color to green
    boldWords.forEach(function(word) {
        word.style.color = "rgb(0, 128, 0)";
    });
}

function return_normal() {
    // Select all <strong> elements
    let boldWords = document.querySelectorAll("strong");
    
    // Loop through each <strong> and revert text color back to black
    boldWords.forEach(function(word) {
        word.style.color = "rgb(0, 0, 0)";
    });
}
