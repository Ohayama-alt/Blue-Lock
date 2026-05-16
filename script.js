const questions =
    document.querySelectorAll(".question");

let currentQuestion = 0;

const scores = {

    bastard: 0,

    manshine: 0,

    barcha: 0,

    juventus: 0,

    pxg: 0
};

function answer(team) {

    scores[team]++;

    questions[currentQuestion]
        .classList
        .remove("active");

    currentQuestion++;

    if (currentQuestion < questions.length) {

        questions[currentQuestion]
            .classList
            .add("active");

    } else {

        showResult();
    }
}

function showResult() {

    document.getElementById("quiz")
        .style.display = "none";

    const resultBox =
        document.getElementById("result");

    resultBox
        .classList
        .remove("hidden");

    let winner = "";

    let max = -1;

    for (let team in scores) {

        if (scores[team] > max) {

            max = scores[team];

            winner = team;
        }
    }

    const title =
        document.getElementById("result-title");

    const text =
        document.getElementById("result-text");

    const image =
        document.getElementById("result-image");

    switch (winner) {

        case "bastard":

            title.innerText =
                "BASTARD MÜNCHEN";

            image.src =
                "https://us.oricon-group.com/upimg/sns/1000/1578/img1200/6b9f62fe119a62b30dfa3cc221f804fd.jpg";

            text.innerText =
                "Devore e destrua a coroa do seu time, monte o SEU império.";

            break;

        case "manshine":

            title.innerText =
                "MANSHINE CITY";

            image.src =
                "https://us.oricon-group.com/upimg/detail/1000/1578/img660/eb78de007dee2c9877121315ee6aaf96.jpg";

            text.innerText =
                "Use de seu corpo como sua principal arma, destrua seus inimigos, alcance SEU objetivo.";

            break;

        case "barcha":

            title.innerText =
                "FC BARCHA";

            image.src =
                "https://us.oricon-group.com/upimg/detail/1000/1578/img660/fe5114d8770a3b59b23716f0ba87f6bb.jpg";

            text.innerText =
                "Seja imprevisivel, criativo, demonstre do por que você chegou até aqui, se torne em SEU demônio.";

            break;

        case "juventus":

            title.innerText =
                "Ubers";

            image.src =
                "https://us.oricon-group.com/upimg/detail/1000/1578/img660/5ffd301242839ecb23912dda906db02e.jpg";

            text.innerText =
                "Seja racional, jogue em time, demonstre suas capacidades em grupo, seja racional.. Mostre o SEU intelecto.";

            break;

        case "pxg":

            title.innerText =
                "PARIS X GEN";

            image.src =
                "https://us.oricon-group.com/upimg/detail/1000/1578/img660/6e347dace14915a1c1e6e7a9c1b5a27c.jpg";

            text.innerText =
                "Seja uma estrela, jogue como uma pessoa imprevisivel, demonstre seu brilho individual, seja egoista e demonstre o SEU verdadeiro ego.";

            break;
    }
}