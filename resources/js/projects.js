const proyectosContainer = document.querySelector('.column');
console.log(proyectos);
console.log(proyectosContainer);

  proyectos.forEach(proyecto => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project_card');

    const projectCardImage = document.createElement('div');
    projectCardImage.classList.add('project_card_image');
    projectCardImage.innerHTML = `<div class="project_card_image_bg" style="background-image: url('${proyecto.imagen}');"></div>`;
    projectCard.appendChild(projectCardImage);

    const projectCardContent = document.createElement('div');
    projectCardContent.classList.add('project_card_content');

    const projectCardTitle = document.createElement('div');
    projectCardTitle.classList.add('project_card_title');
    projectCardTitle.innerHTML = `
        <h3>
            <a href="${proyecto.url}" target="_blank">${proyecto.titulo}<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </h3>`;
    projectCardContent.appendChild(projectCardTitle);
    

    const projectCardText = document.createElement('div');
    projectCardText.classList.add('project_card_text');
    projectCardText.innerHTML = `<p>${proyecto.descripcion}</p>`;
    projectCardContent.appendChild(projectCardText);

    const projectCardTech = document.createElement('div');
    projectCardTech.classList.add('project_card_tech');

    const techList = proyecto.technology.map(tech => `<li class="project_card_tech_item">${tech}</li>`).join('');
    projectCardTech.innerHTML = `<ul class="project_card_tech_list">${techList}</ul>`;
    projectCardContent.appendChild(projectCardTech);

    projectCard.appendChild(projectCardContent);

    proyectosContainer.appendChild(projectCard);
  });