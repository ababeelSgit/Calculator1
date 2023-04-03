
let dis = document.getElementById('screen');

const del = () => {
    dis.value = '';
}

const show = (n) => {
    dis.value += n;



}

const calc = () => {
    dis.value = eval(dis.value);
}

