
// select id 
let menu = document.getElementById('menu');
let cross = document.getElementById('cross');
let sidebar = document.getElementById('sidebar');


menu.addEventListener('click', function () {
    sidebar.style.right = "0px";
    sidebar.style.display = "block";
});

cross.addEventListener('click', function () {
    sidebar.style.display = "none";
})
