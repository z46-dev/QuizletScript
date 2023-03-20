function findAndClick(selector, text) {
    [...document.querySelectorAll(selector)].forEach(element => {
        if (element.textContent === text) {
            element.click();
        }
    });
}

function autoComplete(text) {
    const input = document.querySelector("input[type=text]"); // Placeholder if outdated?
}

function getInput() {
    return document.querySelector("input[type=text]");
}

function fireTypingEvent(char, element) {
    return new Promise(resolve => {
        {
            const event = new Event("keydown");

            event.shiftKey = char === char.toUpperCase();
            event.key = char;
            event.code = `Key${char.toUpperCase()}`;
            event.which = event.keyCode = String.fromCharCode(char);
            event.bubbles = true;

            element.dispatchEvent(event);
        }
        setTimeout(() => {
            const event = new Event("keyup");

            event.shiftKey = char === char.toUpperCase();
            event.key = char;
            event.code = `Key${char.toUpperCase()}`;
            event.which = event.keyCode = String.fromCharCode(char);
            event.bubbles = true;

            element.dispatchEvent(event);
        }, 100);
        setTimeout(resolve, 250);
    });
}

function getTextOfQuestion() {
    let parentElement = document.querySelector("div[data-testid='Question Text']"),
        currentElement = parentElement;

    while (currentElement.children && currentElement.children.length > 0) {
        if (currentElement.textContent) {
            return currentElement.textContent;
        }

        currentElement = currentElement.children[0];
    }
    return currentElement.textContent;
}

async function load(href) {
    const win = window.open(href);

    return new Promise(function (resolve, reject) {
        win.addEventListener("load", function onload() {
            let cards = [],
                cardMap = new Map();

            win.document.body.querySelectorAll(".TermText").forEach((arg, i) => {
                if (i % 2 === 0) {
                    cards.push({
                        term: arg.innerText,
                        definition: "Not found"
                    });
                } else {
                    cards[cards.length - 1].definition = arg.innerText;
                }
            });

            win.close();

            cards.forEach(function mapToAMap(card) {

                let oldTerm = cardMap.get(card.term) ?? [],
                    oldDefinition = cardMap.get(card.definition) ?? [];

                cardMap.set(card.term, [...oldTerm, card.definition]);
                cardMap.set(card.definition, [...oldDefinition, card.term]);
            });

            resolve(cardMap);
        });
    });
}

const cards = await load(window.top.location.href.split("/").slice(0, -1).join("/"));

async function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function answerForMe() {
    try {
        let question = getTextOfQuestion(),
            answers = cards.get(question);

        if (!answers) {
            throw new Error("Fucky Wucky!");
        }

        if (answers.length > 1) {
            console.warn("Hey, this question has two possible answers! If it is a typing one, it will use the first. If it is a matching one, it will find the first corresponding answer on the page.");
        }

        let textInput = getInput();

        if (textInput) {
            textInput.focus();

            textInput.value = answers[0];
            textInput.textContent = answers[0];
        } else {
            answers.forEach(answer => findAndClick("div", answer));
        }
    } catch (e) {
        console.error("Failed to answer", e);
    }

    //setTimeout(answerForMe, 500);
}