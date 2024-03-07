function button(value) {
    document.getElementById('hisoblovchi').value += value;
}
function tozalovchi() {
    document.getElementById('hisoblovchi').value = '';
}
function Kalkulyator() {
    let a = document.getElementById('hisoblovchi').value;
    let b = eval(a);
    document.getElementById('hisoblovchi').value = b;
}