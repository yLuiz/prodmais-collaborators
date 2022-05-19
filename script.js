const cardList = document.getElementById('container-cards')

const collaborators = [

  {
    name: "James Saboia",
    occupation: "Desenvolvedor Android",
    githubName: "jamessaboia",
    linkedinName: "james-saboia",
    instagramName: "james.saboia",
  },

  {
    name: "Affonso Ruiz",
    occupation: "FullStack",
    githubName: "RuizHenrique01",
    linkedinName: "affonsoruiz",
    instagramName: "ruiz_affonso",
  },

  {
    name: "Luiz Victor",
    occupation: "FullStack",
    githubName: "yLuiz",
    linkedinName: "yluiz",
    instagramName: "luiz_.v",
  },

  {
    name: "Caio Barroncas",
    occupation: "AppSec",
    githubName: "barroncasadc",
    linkedinName: "caio-barroncas-594b7815b",
    instagramName: "cbarroncas",
  },

  {
    name: "Lucas Sessi",
    occupation: "Designer",
    githubName: "Lucas-Sessi",
    linkedinName: "yluizlucas-sessi",
    instagramName: "lucas_sessi",
  },

  {
    name: "João Wezen",
    occupation: "Tester",
    githubName: "victorWezen",
    linkedinName: "joão-wezen-608a85225",
    instagramName: "victor_wezen",
  },

  {
    name: "Nicolas Baracho",
    occupation: "Tester",
    githubName: "NBaracho",
    linkedinName: "nicolas-baracho-185259107",
    instagramName: "imnickb",
  },

  {
    name: "Yann Matheus",
    occupation: "Social Media",
    githubName: "Yannmask",
    linkedinName: "yann-matheus-77aaa51bb",
    instagramName: "yannmask",
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
      <div class="card-border-top"></div>
      <div class="card-photo">
        <div class="photo-container">
          <div class="photo-border"></div>
          <img id="photo-${coll.githubName}" src="" alt="" />
        </div>
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