const cardList = document.getElementById('container-cards')

const collaborators = [
  {
    name: "João Wezen",
    occupation: "Gerente de projeto",
    githubName: "victorWezen",
    avatarAlternative: "",
    linkedinName: "joão-wezen-608a85225",
    instagramName: "victor_wezen",
  },
  
  {
    name: "James Saboia",
    occupation: "Desenvolvedor Android",
    githubName: "jamessaboia",
    avatarAlternative: "",
    linkedinName: "james-saboia",
    instagramName: "james.saboia",
  },

  {
    name: "Affonso Ruiz",
    occupation: "Full Stack",
    githubName: "RuizHenrique01",
    avatarAlternative: "",
    linkedinName: "affonsoruiz",
    instagramName: "ruiz_affonso",
  },
  
  {
    name: "Luiz Victor",
    occupation: "Full Stack",
    githubName: "yLuiz",
    avatarAlternative: "",
    linkedinName: "yluiz",
    instagramName: "luiz_.v",
  },
  
  {
    name: "Caio Barroncas",
    occupation: "AppSec",
    githubName: "barroncasadc",
    avatarAlternative: "",
    linkedinName: "caio-barroncas-594b7815b",
    instagramName: "cbarroncas",
  },
  
  {
    name: "Luís Eduardo",
    occupation: "Front-end",
    githubName: "eduardobnhr",
    avatarAlternative: "./assets/img/luiseduardo.jpg",
    linkedinName: "luís-eduardo-martins-071632236",
    instagramName: "leduaardo_",
  },

  {
    name: "Lucas Sessi",
    occupation: "UX/UI",
    githubName: "Lucas-Sessi",
    avatarAlternative: "",
    linkedinName: "yluizlucas-sessi",
    instagramName: "lucas_sessi",
  },
  

  {
    name: "Cristian Cordovil",
    occupation: "UX/UI",
    githubName: "Crisrianrc",
    avatarAlternative: "./assets/img/cristian.jpg",
    linkedinName: "cristian-cordovil-ba9b79236",
    instagramName: "cristian_cordovil",
  },

  {
    name: "Arley Valente",
    occupation: "UX/UI",
    githubName: "",
    avatarAlternative: "./assets/img/arley.jpg",
    linkedinName: "arley-v-oliveira",
    instagramName: "_harley_valente_",
  },

  {
    name: "Lucas Garcia",
    occupation: "UX/UI",
    githubName: "",
    avatarAlternative: "./assets/img/lucasharrisson.jpg",
    linkedinName: "lucas-garcia-195b9015b",
    instagramName: "lucs.grana",
  },


  {
    name: "Nicolas Baracho",
    occupation: "QA",
    githubName: "NBaracho",
    avatarAlternative: "",
    linkedinName: "nicolas-baracho-185259107",
    instagramName: "imnickb",
  },

  {
    name: "Yann Matheus",
    occupation: "QA",
    githubName: "Yannmask",
    avatarAlternative: "",
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
    const cardPhoto = document.getElementById(`photo-${coll.instagramName}`)
    cardPhoto.src = avatar

    if (!avatar) cardPhoto.src = coll.avatarAlternative
  })
  

  cardList.innerHTML += `
    <li class="card">
      <div class="card-border-top"></div>
      <div class="card-photo">
        <div class="photo-container">
          <div class="photo-border">
          </div>
          <div class="bg-photo-border"></div>
          <img id="photo-${coll.instagramName}" src="" alt="" />
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