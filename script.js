document.getElementById('learn-more-btn').addEventListener('click', function() {
    alert('The Buji Phone offers cutting-edge technology, amazing camera capabilities, and a sleek design. Stay tuned for more details!');
});

document.getElementById('buy-now-btn').addEventListener('click', function() {
    alert('“Less Waiting, More Updating.”');
});


const deg = document.querySelector('.deg');
deg.addEventListener('mouseover', () => {
  deg.style.transform = 'scale(1.1)';
  deg.style.transition = 'transform 0.5s ease-in-out';
});

deg.addEventListener('mouseout', () => {
  deg.style.transform = 'scale(1)';
  deg.style.transition = 'transform 0.5s ease-in-out';
});