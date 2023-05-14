let btnNext = document.getElementById('next');
btnNext.onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
let btnPrev = document.getElementById('prev');
btnPrev.onclick = function () {
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1])
}