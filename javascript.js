"use strict";

// Nimetään painikkeet ja valmiiksi html-tiedostoon luotu div nimeltä list
const addBtn = document.getElementById("add");
const delBtn = document.getElementById("delete");
const list = document.getElementById("list");


function todo() {
    // Input ja textarea arvot muuttujiin
    let inputValue = document.getElementById("input").value;
    let textAreaValue = document.getElementById("textarea").value;

    // Luodaan div-elementti (ns. sisältö div), h3-elementti, sekä textnode input-arvosta
    let content_div = document.createElement("div");    
    let content_h3 = document.createElement("h3");
    let content_title = document.createTextNode(inputValue);

    // Asetetaan tyyli juuri äsken luodulle diville (content_div), jotta teksti ei mene yli rajojen
    content_div.style.overflowWrap = "break-word";
    content_div.style.wordWrap = "break-word";
    content_div.style.hyphens = "auto"; 

    // Luodaan p-elementti ja textnode textarea:n arvosta
    let content_p = document.createElement("p");
    let content_txt = document.createTextNode(textAreaValue);

    // Luodaan div-elementti painikkeille
    let buttons = document.createElement("div");

    // Luodaan Done ja Delete painikkeet, sekä annetaan näille hiukan tyyli- ja tekstimäärittelyjä
    let done = document.createElement("button");
    done.textContent = "Done";
    done.style.fontFamily = "Electrolize";
    done.style.margin = "0.2em";
    let del = document.createElement("button");
    del.textContent = "Delete";
    del.style.fontFamily = "Electrolize";
    del.style.margin = "0.2em";

    // Liitetään Done ja Delete painikkeet aiemmin luotuun painikkeiden diviin
    buttons.appendChild(done);
    buttons.appendChild(del);

    // Liitetään input: textnode h3-elementtiin, minkä jälkeen liitetään h3-elementti aiemmin luotuun div-elementtiin
    content_h3.appendChild(content_title);
    content_div.appendChild(content_h3);

    // Liitetään textarean:n textnode p-elementtiin, minkä jälkeen piilotetaan p-elementti (display: none)
    // Liitetään p-elementti samaan diviin kuin h3-elementtikin
    content_p.appendChild(content_txt);
    content_p.style.display = "none";
    content_div.appendChild(content_p);

    // Liitetään painikkeiden div-elementti samaan diviin kuin h3- ja p-elementti
    content_div.appendChild(buttons);

    // Lisätään painiketoiminnallisuus h3-elementtiin: Togglettaa p-elementin näkyviin ja pois näkyvistä
    content_h3.addEventListener("click", function() {
        (content_p.style.display === "none") ? content_p.style.display = "block" : content_p.style.display = "none";
    });

    // Lisätään painiketoiminnallisuus Done-painikkeeseen: Maalaa title vihreäksi, ikään kuin merkitsee todon tehdyksi
    done.addEventListener("click", function() {
        content_h3.style.transition = "1s";
        content_h3.style.color = "#00FF4D";
        content_p.style.color = "darkgrey";
        content_p.style.textDecoration = "line-through";
    });

    // Lisätään painiketoiminnallisuus Delete-painikkeeseen: Poistaa Delete-painikkeen parent-elementit aina sisältö diviin asti
    del.addEventListener("click", function() {
        this.parentNode.parentNode.remove();
    });

    // Liitetään aiemmin luotu div (sisältö div) sisältöineen "list"-diviin, joka on valmiiksi luotu html-tiedostoon 
    list.appendChild(content_div);
}

// Lisätään painiketoiminnallisuus addBtn-painikkeeseen, joka nimettiin tiedoston alussa
addBtn.addEventListener("click", function() {

    // Jos Title (input-elementti) on tyhjä, niin alert-toiminto käskee käyttäjää syöttämään tiedot edes input-elementtiin
    let input = document.getElementById("input").value;
    (input !== "") ? todo() : alert("Title needed!")

    // Fokusoi input-elementtiin ja tyhjentää input:n ja textarea:n kirjoituskentät
    document.getElementById("input").focus();    
    document.getElementById("input").value = "";
    document.getElementById("textarea").value = "";
});

// Lisätää painiketoiminnallisuus: Tyhjentää koko "list" divin
delBtn.addEventListener("click", function() {
    list.innerHTML = "";
});
