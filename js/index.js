const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; Nuriye ${thisYear}`;
footer.appendChild(copyright);

const skills = ['HTML','CSS','JavaScript','Git','GitHub'];
const skillsSection = document.getElementById('skills');
const skillList = skillsSection.querySelector('ul');
for(let i=0; i<skills.length; i++){
    let item = document.createElement('li');
    item.textContent = skills[i];
    skillList.append(item);
}

const messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    console.log(name,email,message);

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a><span> wrote : ${message}</span>`;

    const removeButton = document.createElement('button');
    removeButton.innerHTML ="remove";
    removeButton.setAttribute('type' , 'button');

    removeButton.addEventListener('click', (e) => {
        const entry = newMessage.querySelector('button').parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
});

fetch('https://api.github.com/users/nuriyealp/repos')
  .then(response => response.json())
  .then(load => {
    const projectSection = document.getElementById("projects");
    const projectList= projectSection.querySelector("ul");
    for (let i = 0; i < load.length; i++) {
        const project = document.createElement("li");
        project.innerText = load[i].name;
        projectList.appendChild(project);
    }   
  })