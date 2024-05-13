function func(event){
    event.preventDefault();

    let nome = event.target[0].value;
    let email = event.target[1].value;

    let tr = document.createElement("tr");

    let td_nome = document.createElement("td");
    td_nome.innerHTML = nome;

    let td_email = document.createElement("td");
    td_email.innerHTML = email;

    tr.appendChild(td_nome);
    tr.appendChild(td_email);

    let tbody = document.querySelector("body > section:nth-child(3) > table > tbody");
    tbody.appendChild(tr);

    console.log({
        nome,email
    });
}

