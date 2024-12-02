function toggleHeart(event, icon) {
    event.preventDefault();
    event.stopPropagation();

    const regularHeart = icon.classList.contains('fa-regular');
    const solidHeart = icon.classList.contains('fa-solid');

    if (regularHeart) {
      icon.classList.add('d-none');
      icon.nextElementSibling.classList.remove('d-none');
    } else if (solidHeart) {
      icon.classList.add('d-none');
      icon.previousElementSibling.classList.remove('d-none');
    }
  }

  let taxSwitch = document.getElementById('flexSwitchCheckDefault');
  taxSwitch.addEventListener('click', () => {
    let taxInfo = document.getElementsByClassName('tex-info');
    for (info of taxInfo) {
      if (info.style.display != 'inline') {
        info.style.display = 'inline';
      } else {
        info.style.display = 'none';
      }
    }
  });