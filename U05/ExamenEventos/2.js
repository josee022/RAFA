document.addEventListener('keydown', (e) => {
    if (e.key === "A") {
        document.body.style.backgroundColor = "yellow";
    } else if (e.key === "R") {
        document.body.style.backgroundColor = "red";
    } else if (e.key === "N") {
        document.body.style.backgroundColor = "black";
    } else if (e.key === "V") {
        document.body.style.backgroundColor = "green";
    }
});

document.addEventListener('keyup', () => {
    document.body.style.backgroundColor = "white";
});
