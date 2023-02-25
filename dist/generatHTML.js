function team(arrAssets){
    const fillHTML = [];
    const managerPortion = (manager) => {
        let htmlManager = `
        <div class="manager-card container bg-danger mb-2 col-sm-12 col-md-4 col-lg-2">
            <h2 class="manager-name container">${manager.name}</h2>
            <h5>Manager</h5>
            <ul class="manager-info">
                <li class="id">ID: ${manager.id}</li>
                <li class="email">Email: <a href="mailto: ${manager.email}">${manager.email}</a></li>
                <li class="office-number">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
        `;
        fillHTML.push(htmlManager)
    };

    const engineerPortion = (engineer) => {
        let htmlEngineer =`
        <div class="engineer card container bg-success mb-2  col-sm-12 col-md-4 col-lg-2">
            <h2 class="engineer-name card-title container">${engineer.name}</h2>
            <h5>Engineer</h5>
            <ul class="engineer-info container">
                <li class="id">ID: ${engineer.id}</li>
                <li class="engineer-email">Email: <a href="mailto: ${engineer.email}">${engineer.email}</a></li>
                <li class="engineer-username">Github: <a href="https://github.com/${engineer.gitHub}"></a>${engineer.gitHub}</li>
            </ul>
        </div>
        `;
        fillHTML.push(htmlEngineer)
    };

    const internPortion = (intern) => {
        let htmlIntern =`
        <div class="container intern-card bg-warning mb-2  col-sm-12 col-md-4 col-lg-2">
        <h2 class="intern-name container">${intern.name}</h2>
        <h5>Intern</h5>
        <ul class="intern-info container">
            <li class="intern-id ">ID: ${intern.id}</li>
            <li class="intern-email ">Email: <a href="mailto: ${intern.email}">${intern.email}</a></li>
            <li class="intern-school">School: ${intern.school}</li>
        </ul>
    </div>
    `;
    fillHTML.push(htmlIntern)
    };

    for (let i = 0; i < arrAssets.length; i++) {
        if (arrAssets[i].getRole() == 'Manager') {
            managerPortion(arrAssets[i]);
        }
        if (arrAssets[i].getRole() == 'Engineer') {
            engineerPortion(arrAssets[i]);
        }
        if (arrAssets[i].getRole() == 'Intern') {
            internPortion(arrAssets[i]);
        }
    }
    return fillHTML.join("")
}

function generateHTML(arrAssets) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="Description" content="Enter your description here" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
    <link rel="stylesheet" href="./assets/css/style.css" />
    <title>Challenge 10</title>
</head>
<header>
    <h1 class="">Employee Quick Overview</h1>
</header>
<main>
<div class="gap-1 d-flex flex-row flex-wrap ">
   ${team(arrAssets)}
   </div>
</main>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"></script>

</html>
    `;
}

module.exports = generateHTML;
