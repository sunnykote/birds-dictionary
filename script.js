window.onload = function () {
    const birdsList = document.createElement('ul'); // Create a list for the birds
    birdsData.forEach(bird => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>Лацінская назва:</strong> ${bird["Лацінская  назва"]} <br>
                     <strong>Русская назва:</strong> ${bird["Руская назва"]} <br>
                     <strong>Беларуская назва:</strong> ${bird["Беларуская назва"]}`;
      birdsList.appendChild(li);
    });
    document.body.appendChild(birdsList); // Add the list to the body
  };
  