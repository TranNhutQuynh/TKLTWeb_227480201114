document.getElementById('tinh').addEventListener("click", function () {
    var choice = document.getElementById("luachon").value;

    switch (choice) {
        case "1":
            window.location.href = "https://blu.edu.vn";
            break;
        case "2":
            window.location.href = "https://ctu.edu.vn";
            break;
        case "3":
            window.location.href = "https://vndoc.com";
            break;
        default:
            window.location.href = "https://meta.vn";
    }
})