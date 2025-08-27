


const priceList = document.querySelector('.price');
priceList.innerText = 'Price: $35.000USD';

const mainDoc = document.getElementById('main');

mainDoc.addEventListener('click', function (e) {
  if (e.target && e.target.classList.contains('buy')) {
    const box = e.target.closest('.box');
    const counter = box.querySelector('.counter');
    let count = parseInt(counter.innerText);
    count++;
    counter.innerText = `${count} ${count===1? 'pc' : 'pcs'}`;
  }
});



  

