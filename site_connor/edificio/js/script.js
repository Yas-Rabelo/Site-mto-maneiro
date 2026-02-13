console.log("Vocês são mesmo curiosos, não é? Uma hora vão acabar vendo o que não deveriam...");
console.log("Já que estão aqui, um conselho de amigo: não confiem nos rádios.");

function mostrarResposta(){
    per1.addEventListener("click", () => {
        document.getElementById("per1").style.color = "#e31d16";
        document.getElementById("per2").style.color = "white";
        document.getElementById("per3").style.color = "white";
        document.getElementById("per4").style.color = "white";
        document.getElementById("per5").style.color = "white";
        document.getElementById("per6").style.color = "white";
        document.querySelector("#res1").classList.remove("hide");
        document.querySelector("#res2").classList.add("hide");
        document.querySelector("#res3").classList.add("hide");
        document.querySelector("#res4").classList.add("hide");
        document.querySelector("#res5").classList.add("hide");
        document.querySelector("#res6").classList.add("hide");
    });

    per2.addEventListener("click", () => {
        document.getElementById("per1").style.color = "white";
        document.getElementById("per2").style.color = "#e31d16";
        document.getElementById("per3").style.color = "white";
        document.getElementById("per4").style.color = "white";
        document.getElementById("per5").style.color = "white";
        document.getElementById("per6").style.color = "white";
        document.querySelector("#res1").classList.add("hide");
        document.querySelector("#res2").classList.remove("hide");
        document.querySelector("#res3").classList.add("hide");
        document.querySelector("#res4").classList.add("hide");
        document.querySelector("#res5").classList.add("hide");
        document.querySelector("#res6").classList.add("hide");
    });

    per3.addEventListener("click", () => {
        document.getElementById("per1").style.color = "white";
        document.getElementById("per2").style.color = "white";
        document.getElementById("per3").style.color = "#e31d16";
        document.getElementById("per4").style.color = "white";
        document.getElementById("per5").style.color = "white";
        document.getElementById("per6").style.color = "white";
        document.querySelector("#res1").classList.add("hide");
        document.querySelector("#res2").classList.add("hide");
        document.querySelector("#res3").classList.remove("hide");
        document.querySelector("#res4").classList.add("hide");
        document.querySelector("#res5").classList.add("hide");
        document.querySelector("#res6").classList.add("hide");
    });

    per4.addEventListener("click", () => {
        document.getElementById("per1").style.color = "white";
        document.getElementById("per2").style.color = "white";
        document.getElementById("per3").style.color = "white";
        document.getElementById("per4").style.color = "#e31d16";
        document.getElementById("per5").style.color = "white";
        document.getElementById("per6").style.color = "white";
        document.querySelector("#res1").classList.add("hide");
        document.querySelector("#res2").classList.add("hide");
        document.querySelector("#res3").classList.add("hide");
        document.querySelector("#res4").classList.remove("hide");
        document.querySelector("#res5").classList.add("hide");
        document.querySelector("#res6").classList.add("hide");
    });

    per5.addEventListener("click", () => {
        document.getElementById("per1").style.color = "white";
        document.getElementById("per2").style.color = "white";
        document.getElementById("per3").style.color = "white";
        document.getElementById("per4").style.color = "white";
        document.getElementById("per5").style.color = "#e31d16";
        document.getElementById("per6").style.color = "white";
        document.querySelector("#res1").classList.add("hide");
        document.querySelector("#res2").classList.add("hide");
        document.querySelector("#res3").classList.add("hide");
        document.querySelector("#res4").classList.add("hide");
        document.querySelector("#res5").classList.remove("hide");
        document.querySelector("#res6").classList.add("hide");
    });

    per6.addEventListener("click", () => {
        document.getElementById("per1").style.color = "white";
        document.getElementById("per2").style.color = "white";
        document.getElementById("per3").style.color = "white";
        document.getElementById("per4").style.color = "white";
        document.getElementById("per5").style.color = "white";
        document.getElementById("per6").style.color = "#e31d16";
        document.querySelector("#res1").classList.add("hide");
        document.querySelector("#res2").classList.add("hide");
        document.querySelector("#res3").classList.add("hide");
        document.querySelector("#res4").classList.add("hide");
        document.querySelector("#res5").classList.add("hide");
        document.querySelector("#res6").classList.remove("hide");
    });
}

//busca faq
function busca(){
    var resposta = document.getElementById("buscafaq").value;
    //alert("Resposta: " + resposta)

    if(resposta.toLowerCase() == "sangue"){
        document.querySelector("#resSangue").classList.remove("hide");
        document.querySelector("#resMorte").classList.add("hide");
        document.querySelector("#resConhecimento").classList.add("hide");
        document.querySelector("#resEnergia").classList.add("hide");
        document.querySelector("#resLamina").classList.add("hide");
        document.querySelector("#resSalvador").classList.add("hide");
        document.querySelector("#resSanguinario").classList.add("hide");
        document.querySelector("#resAmelia").classList.add("hide");
        document.querySelector("#resArtifice").classList.add("hide");
        document.querySelector("#resVerissimo").classList.add("hide");
        document.querySelector("#resEtte").classList.add("hide");
        document.querySelector("#resIchiro").classList.add("hide");
        document.querySelector("#resSilas").classList.add("hide");
        document.querySelector("#resConnor").classList.add("hide"); 
        document.querySelector("#resCharlie").classList.add("hide");
        document.querySelector("#resSam").classList.add("hide");
        document.querySelector("#resRemaguara").classList.add("hide");
        document.querySelector("#resBiblioteca").classList.add("hide");
        document.querySelector("#resEdificio").classList.add("hide");
    }
    else if(resposta.toLowerCase() == "morte"){
        document.querySelector("#resMorte").classList.remove("hide");
        document.querySelector("#resSangue").classList.add("hide");
        document.querySelector("#resConhecimento").classList.add("hide");
        document.querySelector("#resEnergia").classList.add("hide");
        document.querySelector("#resLamina").classList.add("hide");
        document.querySelector("#resSalvador").classList.add("hide");
        document.querySelector("#resSanguinario").classList.add("hide");
        document.querySelector("#resAmelia").classList.add("hide");
        document.querySelector("#resArtifice").classList.add("hide");
        document.querySelector("#resVerissimo").classList.add("hide");
        document.querySelector("#resEtte").classList.add("hide");
        document.querySelector("#resIchiro").classList.add("hide");
        document.querySelector("#resSilas").classList.add("hide");
        document.querySelector("#resConnor").classList.add("hide"); 
        document.querySelector("#resCharlie").classList.add("hide");
        document.querySelector("#resSam").classList.add("hide");
        document.querySelector("#resRemaguara").classList.add("hide");
        document.querySelector("#resBiblioteca").classList.add("hide");
        document.querySelector("#resEdificio").classList.add("hide");
    }
    else if(resposta.toLowerCase() == "conhecimento"){
        document.querySelector("#resConhecimento").classList.remove("hide");
        document.querySelector("#resSangue").classList.add("hide");
        document.querySelector("#resMorte").classList.add("hide");
        document.querySelector("#resEnergia").classList.add("hide");
        document.querySelector("#resLamina").classList.add("hide");
        document.querySelector("#resSalvador").classList.add("hide")
        document.querySelector("#resSanguinario").classList.add("hide");
        document.querySelector("#resAmelia").classList.add("hide");
        document.querySelector("#resArtifice").classList.add("hide");
        document.querySelector("#resVerissimo").classList.add("hide");
        document.querySelector("#resEtte").classList.add("hide");
        document.querySelector("#resIchiro").classList.add("hide");
        document.querySelector("#resSilas").classList.add("hide");
        document.querySelector("#resConnor").classList.add("hide"); 
        document.querySelector("#resCharlie").classList.add("hide");
        document.querySelector("#resSam").classList.add("hide");
        document.querySelector("#resRemaguara").classList.add("hide");
        document.querySelector("#resBiblioteca").classList.add("hide");
        document.querySelector("#resEdificio").classList.add("hide");
    }
    else if(resposta.toLowerCase() == "energia"){
        document.querySelector("#resEnergia").classList.remove("hide");
        document.querySelector("#resSangue").classList.add("hide");
        document.querySelector("#resMorte").classList.add("hide");
        document.querySelector("#resConhecimento").classList.add("hide");
        document.querySelector("#resLamina").classList.add("hide");
        document.querySelector("#resSalvador").classList.add("hide");
        document.querySelector("#resSanguinario").classList.add("hide");
        document.querySelector("#resAmelia").classList.add("hide");
        document.querySelector("#resArtifice").classList.add("hide");
        document.querySelector("#resVerissimo").classList.add("hide");
        document.querySelector("#resEtte").classList.add("hide");
        document.querySelector("#resIchiro").classList.add("hide");
        document.querySelector("#resSilas").classList.add("hide");
        document.querySelector("#resConnor").classList.add("hide"); 
        document.querySelector("#resCharlie").classList.add("hide");
        document.querySelector("#resSam").classList.add("hide");
        document.querySelector("#resRemaguara").classList.add("hide");
        document.querySelector("#resBiblioteca").classList.add("hide");
        document.querySelector("#resEdificio").classList.add("hide");
    }
    else if(resposta.toLowerCase() == "medo"){
        alert(" ");
    }
    else if(resposta.toLowerCase() == "lâmina" || resposta.toLowerCase() == "a lâmina"){
        document.querySelector("#resLamina").classList.remove("hide");
        document.querySelector("#resSalvador").classList.add("hide");
        document.querySelector("#resSanguinario").classList.add("hide")
        document.querySelector("#resAmelia").classList.add("hide");
        document.querySelector("#resArtifice").classList.add("hide");
        document.querySelector("#resVerissimo").classList.add("hide");
        document.querySelector("#resEtte").classList.add("hide");
        document.querySelector("#resIchiro").classList.add("hide");
        document.querySelector("#resSilas").classList.add("hide");
        document.querySelector("#resConnor").classList.add("hide");
        document.querySelector("#resCharlie").classList.add("hide");
        document.querySelector("#resSam").classList.add("hide");
        document.querySelector("#resSangue").classList.add("hide");
        document.querySelector("#resMorte").classList.add("hide");
        document.querySelector("#resConhecimento").classList.add("hide");
        document.querySelector("#resEnergia").classList.add("hide");
        document.querySelector("#resRemaguara").classList.add("hide");
        document.querySelector("#resBiblioteca").classList.add("hide");
        document.querySelector("#resEdificio").classList.add("hide");
    }
    else if(resposta.toLowerCase() == "salvador" || resposta.toLowerCase() == "o salvador"){
        document.querySelector("#resSalvador").classList.remove("hide");
        document.querySelector("#resLamina").classList.add("hide");
        document.querySelector("#resSanguinario").classList.add("hide");
        document.querySelector("#resAmelia").classList.add("hide");
        document.querySelector("#resArtifice").classList.add("hide");
        document.querySelector("#resVerissimo").classList.add("hide")
        document.querySelector("#resEtte").classList.add("hide");
        document.querySelector("#resIchiro").classList.add("hide");
        document.querySelector("#resSilas").classList.add("hide");
        document.querySelector("#resConnor").classList.add("hide");
        document.querySelector("#resCharlie").classList.add("hide");
        document.querySelector("#resSam").classList.add("hide");
        document.querySelector("#resSangue").classList.add("hide");
        document.querySelector("#resMorte").classList.add("hide");
        document.querySelector("#resConhecimento").classList.add("hide");
        document.querySelector("#resEnergia").classList.add("hide");
        document.querySelector("#resRemaguara").classList.add("hide");
        document.querySelector("#resBiblioteca").classList.add("hide");
        document.querySelector("#resEdificio").classList.add("hide");
    }
    else if(resposta.toLowerCase() == "sanguinário" || resposta.toLowerCase() == "o sanguinário"){
        document.querySelector("#resSanguinario").classList.remove("hide");
        document.querySelector("#resLamina").classList.add("hide");
        document.querySelector("#resSalvador").classList.add("hide");
        document.querySelector("#resAmelia").classList.add("hide");
        document.querySelector("#resArtifice").classList.add("hide");
        document.querySelector("#resVerissimo").classList.add("hide");
        document.querySelector("#resEtte").classList.add("hide");
        document.querySelector("#resIchiro").classList.add("hide");
        document.querySelector("#resSilas").classList.add("hide");
        document.querySelector("#resConnor").classList.add("hide");
        document.querySelector("#resCharlie").classList.add("hide");
        document.querySelector("#resSam").classList.add("hide");
        document.querySelector("#resSangue").classList.add("hide");
        document.querySelector("#resMorte").classList.add("hide");
        document.querySelector("#resConhecimento").classList.add("hide");
        document.querySelector("#resEnergia").classList.add("hide");
        document.querySelector("#resRemaguara").classList.add("hide");
        document.querySelector("#resBiblioteca").classList.add("hide");
        document.querySelector("#resEdificio").classList.add("hide");
    }
    else if(resposta.toLowerCase() == "amelia" || resposta.toLowerCase() == "amelia graham"){
        document.querySelector("#resAmelia").classList.remove("hide");
        document.querySelector("#resSanguinario").classList.add("hide");
        document.querySelector("#resLamina").classList.add("hide");
        document.querySelector("#resSalvador").classList.add("hide");
        document.querySelector("#resArtifice").classList.add("hide");
        document.querySelector("#resVerissimo").classList.add("hide");
        document.querySelector("#resEtte").classList.add("hide");
        document.querySelector("#resIchiro").classList.add("hide");
        document.querySelector("#resSilas").classList.add("hide");
        document.querySelector("#resConnor").classList.add("hide");
        document.querySelector("#resCharlie").classList.add("hide");
        document.querySelector("#resSam").classList.add("hide");
        document.querySelector("#resSangue").classList.add("hide");
        document.querySelector("#resMorte").classList.add("hide");
        document.querySelector("#resConhecimento").classList.add("hide");
        document.querySelector("#resEnergia").classList.add("hide");
        document.querySelector("#resRemaguara").classList.add("hide");
        document.querySelector("#resBiblioteca").classList.add("hide");
        document.querySelector("#resEdificio").classList.add("hide");
    }
    else if(resposta.toLowerCase() == "artífice" || resposta.toLowerCase() == "a artífice"){
        document.querySelector("#resArtifice").classList.remove("hide");
        document.querySelector("#resSanguinario").classList.add("hide");
        document.querySelector("#resLamina").classList.add("hide");
        document.querySelector("#resSalvador").classList.add("hide");
        document.querySelector("#resAmelia").classList.add("hide");
        document.querySelector("#resVerissimo").classList.add("hide");
        document.querySelector("#resEtte").classList.add("hide");
        document.querySelector("#resIchiro").classList.add("hide");
        document.querySelector("#resSilas").classList.add("hide");
        document.querySelector("#resConnor").classList.add("hide");
        document.querySelector("#resCharlie").classList.add("hide");
        document.querySelector("#resSam").classList.add("hide");
        document.querySelector("#resSangue").classList.add("hide");
        document.querySelector("#resMorte").classList.add("hide");
        document.querySelector("#resConhecimento").classList.add("hide");
        document.querySelector("#resEnergia").classList.add("hide");
        document.querySelector("#resRemaguara").classList.add("hide");
        document.querySelector("#resBiblioteca").classList.add("hide");
        document.querySelector("#resEdificio").classList.add("hide");
    }
    else if(resposta.toLowerCase() == "veríssimo"){
        document.querySelector("#resVerissimo").classList.remove("hide");
        document.querySelector("#resArtifice").classList.add("hide");
        document.querySelector("#resSanguinario").classList.add("hide");
        document.querySelector("#resLamina").classList.add("hide");
        document.querySelector("#resSalvador").classList.add("hide");
        document.querySelector("#resAmelia").classList.add("hide");
        document.querySelector("#resEtte").classList.add("hide");
        document.querySelector("#resIchiro").classList.add("hide");
        document.querySelector("#resSilas").classList.add("hide");
        document.querySelector("#resConnor").classList.add("hide");
        document.querySelector("#resCharlie").classList.add("hide");
        document.querySelector("#resSam").classList.add("hide");
        document.querySelector("#resSangue").classList.add("hide");
        document.querySelector("#resMorte").classList.add("hide");
        document.querySelector("#resConhecimento").classList.add("hide");
        document.querySelector("#resEnergia").classList.add("hide");
        document.querySelector("#resRemaguara").classList.add("hide");
        document.querySelector("#resBiblioteca").classList.add("hide");
        document.querySelector("#resEdificio").classList.add("hide");
    }
    else if(resposta.toLowerCase() == "silhouette"){
        document.querySelector("#resEtte").classList.remove("hide");
        document.querySelector("#resVerissimo").classList.add("hide");
        document.querySelector("#resArtifice").classList.add("hide");
        document.querySelector("#resSanguinario").classList.add("hide");
        document.querySelector("#resLamina").classList.add("hide");
        document.querySelector("#resSalvador").classList.add("hide");
        document.querySelector("#resAmelia").classList.add("hide");
        document.querySelector("#resIchiro").classList.add("hide");
        document.querySelector("#resSilas").classList.add("hide");
        document.querySelector("#resConnor").classList.add("hide");
        document.querySelector("#resCharlie").classList.add("hide");
        document.querySelector("#resSam").classList.add("hide");
        document.querySelector("#resSangue").classList.add("hide");
        document.querySelector("#resMorte").classList.add("hide");
        document.querySelector("#resConhecimento").classList.add("hide");
        document.querySelector("#resEnergia").classList.add("hide");
        document.querySelector("#resRemaguara").classList.add("hide");
        document.querySelector("#resBiblioteca").classList.add("hide");
        document.querySelector("#resEdificio").classList.add("hide");
    }
    else if(resposta.toLowerCase() == "ichiro"){
        document.querySelector("#resIchiro").classList.remove("hide");
        document.querySelector("#resEtte").classList.add("hide");
        document.querySelector("#resVerissimo").classList.add("hide");
        document.querySelector("#resArtifice").classList.add("hide");
        document.querySelector("#resSanguinario").classList.add("hide");
        document.querySelector("#resLamina").classList.add("hide");
        document.querySelector("#resSalvador").classList.add("hide");
        document.querySelector("#resAmelia").classList.add("hide");
        document.querySelector("#resSilas").classList.add("hide");
        document.querySelector("#resConnor").classList.add("hide");
        document.querySelector("#resCharlie").classList.add("hide");
        document.querySelector("#resSam").classList.add("hide");
        document.querySelector("#resSangue").classList.add("hide");
        document.querySelector("#resMorte").classList.add("hide");
        document.querySelector("#resConhecimento").classList.add("hide");
        document.querySelector("#resEnergia").classList.add("hide");
        document.querySelector("#resRemaguara").classList.add("hide");
        document.querySelector("#resBiblioteca").classList.add("hide");
        document.querySelector("#resEdificio").classList.add("hide");
    }
    else if(resposta.toLowerCase() == "silas"){
        document.querySelector("#resSilas").classList.remove("hide");
        document.querySelector("#resIchiro").classList.add("hide");
        document.querySelector("#resEtte").classList.add("hide");
        document.querySelector("#resVerissimo").classList.add("hide");
        document.querySelector("#resArtifice").classList.add("hide");
        document.querySelector("#resSanguinario").classList.add("hide");
        document.querySelector("#resLamina").classList.add("hide");
        document.querySelector("#resSalvador").classList.add("hide");
        document.querySelector("#resAmelia").classList.add("hide");
        document.querySelector("#resConnor").classList.add("hide");
        document.querySelector("#resCharlie").classList.add("hide");
        document.querySelector("#resSam").classList.add("hide");
        document.querySelector("#resSangue").classList.add("hide");
        document.querySelector("#resMorte").classList.add("hide");
        document.querySelector("#resConhecimento").classList.add("hide");
        document.querySelector("#resEnergia").classList.add("hide");
        document.querySelector("#resRemaguara").classList.add("hide");
        document.querySelector("#resBiblioteca").classList.add("hide");
        document.querySelector("#resEdificio").classList.add("hide");
    }
    else if(resposta.toLowerCase() == "connor"){
        document.querySelector("#resConnor").classList.remove("hide");
        document.querySelector("#resSilas").classList.add("hide");
        document.querySelector("#resIchiro").classList.add("hide");
        document.querySelector("#resEtte").classList.add("hide");
        document.querySelector("#resVerissimo").classList.add("hide");
        document.querySelector("#resArtifice").classList.add("hide");
        document.querySelector("#resSanguinario").classList.add("hide");
        document.querySelector("#resLamina").classList.add("hide");
        document.querySelector("#resSalvador").classList.add("hide");
        document.querySelector("#resAmelia").classList.add("hide");
        document.querySelector("#resCharlie").classList.add("hide");
        document.querySelector("#resSam").classList.add("hide");
        document.querySelector("#resSangue").classList.add("hide");
        document.querySelector("#resMorte").classList.add("hide");
        document.querySelector("#resConhecimento").classList.add("hide");
        document.querySelector("#resEnergia").classList.add("hide");
        document.querySelector("#resRemaguara").classList.add("hide");
        document.querySelector("#resBiblioteca").classList.add("hide");
        document.querySelector("#resEdificio").classList.add("hide");
    }
    else if(resposta.toLowerCase() == "charlie"){
        document.querySelector("#resCharlie").classList.remove("hide");
        document.querySelector("#resConnor").classList.add("hide");
        document.querySelector("#resSilas").classList.add("hide");
        document.querySelector("#resIchiro").classList.add("hide");
        document.querySelector("#resEtte").classList.add("hide");
        document.querySelector("#resVerissimo").classList.add("hide");
        document.querySelector("#resArtifice").classList.add("hide");
        document.querySelector("#resSanguinario").classList.add("hide");
        document.querySelector("#resLamina").classList.add("hide");
        document.querySelector("#resSalvador").classList.add("hide");
        document.querySelector("#resAmelia").classList.add("hide");
        document.querySelector("#resSam").classList.add("hide");
        document.querySelector("#resSangue").classList.add("hide");
        document.querySelector("#resMorte").classList.add("hide");
        document.querySelector("#resConhecimento").classList.add("hide");
        document.querySelector("#resEnergia").classList.add("hide");
        document.querySelector("#resRemaguara").classList.add("hide");
        document.querySelector("#resBiblioteca").classList.add("hide");
        document.querySelector("#resEdificio").classList.add("hide");
    }
    else if(resposta.toLowerCase() == "sam" || resposta.toLowerCase() == "samantha"){
        document.querySelector("#resSam").classList.remove("hide");
        document.querySelector("#resCharlie").classList.add("hide");
        document.querySelector("#resConnor").classList.add("hide");
        document.querySelector("#resSilas").classList.add("hide");
        document.querySelector("#resIchiro").classList.add("hide");
        document.querySelector("#resEtte").classList.add("hide");
        document.querySelector("#resVerissimo").classList.add("hide");
        document.querySelector("#resArtifice").classList.add("hide");
        document.querySelector("#resSanguinario").classList.add("hide");
        document.querySelector("#resLamina").classList.add("hide");
        document.querySelector("#resSalvador").classList.add("hide");
        document.querySelector("#resAmelia").classList.add("hide");
        document.querySelector("#resSangue").classList.add("hide");
        document.querySelector("#resMorte").classList.add("hide");
        document.querySelector("#resConhecimento").classList.add("hide");
        document.querySelector("#resEnergia").classList.add("hide");
        document.querySelector("#resRemaguara").classList.add("hide");
        document.querySelector("#resBiblioteca").classList.add("hide");
        document.querySelector("#resEdificio").classList.add("hide");
    }
    else if(resposta.toLowerCase() == "remaguara"){
        document.querySelector("#resRemaguara").classList.remove("hide");
        document.querySelector("#resSam").classList.add("hide");
        document.querySelector("#resCharlie").classList.add("hide");
        document.querySelector("#resConnor").classList.add("hide");
        document.querySelector("#resSilas").classList.add("hide");
        document.querySelector("#resIchiro").classList.add("hide");
        document.querySelector("#resEtte").classList.add("hide");
        document.querySelector("#resVerissimo").classList.add("hide");
        document.querySelector("#resArtifice").classList.add("hide");
        document.querySelector("#resSanguinario").classList.add("hide");
        document.querySelector("#resLamina").classList.add("hide");
        document.querySelector("#resSalvador").classList.add("hide");
        document.querySelector("#resAmelia").classList.add("hide");
        document.querySelector("#resSangue").classList.add("hide");
        document.querySelector("#resMorte").classList.add("hide");
        document.querySelector("#resConhecimento").classList.add("hide");
        document.querySelector("#resEnergia").classList.add("hide");
        document.querySelector("#resBiblioteca").classList.add("hide");
        document.querySelector("#resEdificio").classList.add("hide");
    }
    else if(resposta.toLowerCase() == "culto do livro" || resposta.toLowerCase() == "clube do livro" || 
            resposta.toLowerCase() == "biblioteca" || resposta.toLowerCase() == "lorenzo"){
        document.querySelector("#resBiblioteca").classList.remove("hide");
        document.querySelector("#resRemaguara").classList.add("hide");
        document.querySelector("#resEdificio").classList.add("hide");
        document.querySelector("#resSam").classList.add("hide");
        document.querySelector("#resCharlie").classList.add("hide");
        document.querySelector("#resConnor").classList.add("hide");
        document.querySelector("#resSilas").classList.add("hide");
        document.querySelector("#resIchiro").classList.add("hide");
        document.querySelector("#resEtte").classList.add("hide");
        document.querySelector("#resVerissimo").classList.add("hide");
        document.querySelector("#resArtifice").classList.add("hide");
        document.querySelector("#resSanguinario").classList.add("hide");
        document.querySelector("#resLamina").classList.add("hide");
        document.querySelector("#resSalvador").classList.add("hide");
        document.querySelector("#resAmelia").classList.add("hide");
        document.querySelector("#resSangue").classList.add("hide");
        document.querySelector("#resMorte").classList.add("hide");
        document.querySelector("#resConhecimento").classList.add("hide");
        document.querySelector("#resEnergia").classList.add("hide");
    }
    else if(resposta.toLowerCase() == "edifício graham"){
        document.querySelector("#resEdificio").classList.remove("hide");
        document.querySelector("#resSam").classList.add("hide");
        document.querySelector("#resCharlie").classList.add("hide");
        document.querySelector("#resConnor").classList.add("hide");
        document.querySelector("#resSilas").classList.add("hide");
        document.querySelector("#resIchiro").classList.add("hide");
        document.querySelector("#resEtte").classList.add("hide");
        document.querySelector("#resVerissimo").classList.add("hide");
        document.querySelector("#resArtifice").classList.add("hide");
        document.querySelector("#resSanguinario").classList.add("hide");
        document.querySelector("#resLamina").classList.add("hide");
        document.querySelector("#resSalvador").classList.add("hide");
        document.querySelector("#resAmelia").classList.add("hide");
        document.querySelector("#resSangue").classList.add("hide");
        document.querySelector("#resMorte").classList.add("hide");
        document.querySelector("#resConhecimento").classList.add("hide");
        document.querySelector("#resEnergia").classList.add("hide");
        document.querySelector("#resRemaguara").classList.add("hide");
        document.querySelector("#resBiblioteca").classList.add("hide");
    }
    else{
        alert("Por favor, insira uma dúvida válida!")
    }
}