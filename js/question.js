let col = document.querySelectorAll('.col');
for (let i of col) {
  i.addEventListener('mouseenter', function (event) {
    event.currentTarget.classList.add('active');
    for (let a of col) {
      if (i !== a) {
        a.classList.toggle('deactive');
      }
    }
  })

  i.addEventListener('mouseleave', function (event) {
    event.currentTarget.classList.remove('active');
    for (let a of col) {
      if (i !== a) {
        a.classList.toggle('deactive');
      }
    }
  })



}
