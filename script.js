// Function to update the time every second
function updateTime() {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#timeElement");
    timeText.innerHTML = currentTime;
}

updateTime();
setInterval(updateTime, 1000);

// Make the MES window draggable
dragElement(document.getElementById("MES"));

// Make the moviesAndShows window draggable
dragElement(document.getElementById("moviesAndShows"));

// Make the quickHelloVideo window draggable
dragElement(document.getElementById("quickHelloVideo"));

// Set z-index to keep track of window order
var zIndexCounter = 1;

function bringToFront(element) {
    zIndexCounter++;
    element.style.zIndex = zIndexCounter;
}

function dragElement(element) {
    var initialX = 0;
    var initialY = 0;
    var currentX = 0;
    var currentY = 0;

    // Select the header that will act as the draggable area
    var header = document.getElementById(element.id + "Header");
    if (header) {
        header.onmousedown = startDragging;
    } else {
        element.onmousedown = startDragging;
    }

    element.addEventListener("mousedown", function() {
        bringToFront(element);
    });

    function startDragging(e) {
        e = e || window.event;
        e.preventDefault();
        initialX = e.clientX;
        initialY = e.clientY;
        document.onmouseup = stopDragging;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        currentX = initialX - e.clientX;
        currentY = initialY - e.clientY;
        initialX = e.clientX;
        initialY = e.clientY;
        element.style.top = (element.offsetTop - currentY) + "px";
        element.style.left = (element.offsetLeft - currentX) + "px";
    }

    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Function to open the MES window
document.getElementById("welcomeopen").onclick = function() {
    var mainWindow = document.getElementById("MES");
    mainWindow.style.display = "block";
    bringToFront(mainWindow);
};

// Function to close the MES window
document.getElementById("welcomeclose").onclick = function() {
    document.getElementById("MES").style.display = "none";
};

// Function to open the moviesAndShows window
function openMoviesAndShows() {
    var moviesWindow = document.getElementById("moviesAndShows");
    moviesWindow.style.display = "block";
    bringToFront(moviesWindow);
}

// Function to close the moviesAndShows window
document.getElementById("moviesAndShowsClose").onclick = function() {
    document.getElementById("moviesAndShows").style.display = "none";
};

// Function to open the quickHelloVideo window
function openMEVID() {
    var quickHelloVideoWindow = document.getElementById("quickHelloVideo");
    quickHelloVideoWindow.style.display = "block";
    bringToFront(quickHelloVideoWindow);
}

// Function to close the quickHelloVideo window
document.getElementById("quickHelloClose").onclick = function() {
    document.getElementById("quickHelloVideo").style.display = "none";
};
