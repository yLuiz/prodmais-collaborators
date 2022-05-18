const cardList = document.getElementById('container-cards')

const collaborators = [
  {
    name: "Luiz Victor",
    occupation: "Back-end",
    githubName: "yLuiz",
    linkedinName: "yluiz",
    instagramName: "luiz_.v",
  },

  {
    name: "Affonso Ruiz",
    occupation: "Back-end",
    githubName: "RuizHenrique01",
    linkedinName: "affonsoruiz",
    instagramName: "ruiz_affonso",
  },

  {
    name: "Lucas Sessi",
    occupation: "Designer",
    githubName: "Lucas-Sessi",
    linkedinName: "yluizlucas-sessi",
    instagramName: "lucas_sessi",
  },

  {
    name: "James Saboia",
    occupation: "Front-end",
    githubName: "jamessaboia",
    linkedinName: "james-saboia",
    instagramName: "james.saboia",
  },
]
  
collaborators.map((coll) => {

  const url = `https://api.github.com/users/${coll.githubName}`

  fetch(url)
  .then(res => res.json())
  .then(data => {
    const avatar = data.avatar_url
    const cardPhoto = document.getElementById(`photo-${coll.githubName}`)
    cardPhoto.src = avatar
  })

  cardList.innerHTML += `
    <li class="card">
      <div class="card-photo">
        <img id="photo-${coll.githubName}" src="" alt="Foto" />
      </div>
      <div class="description">
        <div class="about">
          <h2>${coll.name}</h2>
          <p>${coll.occupation}</p>
        </div>
        <div class="socials">
          <ul class="socials-list">
            <li class="social-item">
              <a 
                href="https://github.com/${coll.githubName}" 
                target="_blank"
              >
                <img src="./assets/github.svg" alt="Github logo"/>
              </a>
            </li>

            <li class="social-item">
              <a 
                href="https://www.linkedin.com/in/${coll.linkedinName}" 
                target="_blank"
              >
                <img src="./assets/linkedin.svg" alt="LinkedInd logo"/>
              </a>
            </li>

            <li class="social-item">
              <a 
                href="https://www.instagram.com/${coll.instagramName}" 
                target="_blank"
              >
                <img src="./assets/instagram.svg" alt="Instagram logo"/>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </li>
  
  `
})