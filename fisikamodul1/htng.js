addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("btn1").click();
    }
});

const pp = document.getElementById("pp");
const overlay = document.getElementById("overlay");
const exitBtn = document.getElementById("btn2");

exitBtn.addEventListener("click", sp);

function sp() {
    pp.style.display = "block";
    overlay.style.display = "block";
}

function resN() {
    pp.style.display = "none";
    overlay.style.display = "none";
}

function resY() {
    location.reload();
}



// =========================== DATA CAL ======================== //

function cal1() {
    const rows = [7, 6, 5];

    rows.forEach(row => {
        const n = row;

        const i1 = parseFloat(document.getElementById(`I${n}1`).value) || 0; 
        const i2 = parseFloat(document.getElementById(`I${n}1`).value) || 0; 
        const i3 = parseFloat(document.getElementById(`I${n}1`).value) || 0; 
        const i4 = parseFloat(document.getElementById(`I${n}1`).value) || 0; 
        const i5 = parseFloat(document.getElementById(`I${n}1`).value) || 0;
        
        const xtot = (i1 + i2 + i3 + i4 + i5);
        document.getElementById(`i${n}x`).innerText = xtot.toExponential(2);
        
        const xrat = xtot / 5;
        document.getElementById(`i${n}r`).innerText = xrat.toExponential(2);

        
    })
}

function ht3() {
    const rows = [
        { id: 1, l: 0.5, d: 0.2 },
        { id: 2, l: 1, d: 0.2 },
    ];

    rows.forEach(row => {
        const n = row.id;
        const l = row.l;
        const d = row.d;

        const y1 = parseFloat(document.getElementById(`3y${n}1`).value) || 0;
        const y2 = parseFloat(document.getElementById(`3y${n}2`).value) || 0;
        const y3 = parseFloat(document.getElementById(`3y${n}3`).value) || 0;

        const lambda1 = (d * y1) / (l * 1);
        const lambda2 = (d * y2) / (l * 2);
        const lambda3 = (d * y3) / (l * 3);

        document.getElementById(`3l${n}1`).innerText = lambda1.toExponential(2);
        document.getElementById(`3l${n}2`).innerText = lambda2.toExponential(2);
        document.getElementById(`3l${n}3`).innerText = lambda3.toExponential(2);

        const rata = (lambda1 + lambda2 + lambda3) / 3;
        document.getElementById(`3la${n}`).innerText = rata.toExponential(2);

        const ksr = ((rata - lteori) / lteori) / 100;
        document.getElementById(`3k0${n}`).innerText = ksr.toFixed(2) + "%";
    });
}


function bijiNgitung() {
    cal1();
}
