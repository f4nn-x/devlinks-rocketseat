function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //if(html.classList.contains('light')) {
  //html.classList.remove('light')
  //} else {
  //html.classList.add('light')
  //}

  //mudando a imagem de acordo com o dark e light mode

  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-2.png')
  } else {
    img.setAttribute('src', './assets/avatar.png')
  }

  if(html.classList.contains('light')) {
    img.setAttribute('alt', 'foto de perfil jim helpert')
  } else {
    img.setAttribute('alt', 'foto de perfil jim helpert e dwight schrute')
  }
}

