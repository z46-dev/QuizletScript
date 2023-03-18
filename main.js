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
    const event = new Event("keypress");

    event.shiftKey = char === char.toUpperCase();
    event.key = char;
    event.code = `Key${char.toUpperCase()}`;
    event.which = event.keyCode = String.fromCharCode(char);
    event.bubbles = true;

    console.log(event);

    element.dispatchEvent(event);
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
            textInput.setAttribute("value", answers[0].slice(0, -1));
            alert(`Add a(n) ${answers[0][answers[0].length - 1]} to the end of the input (TextInput EMCA issue)`);
        } else {
            answers.forEach(answer => findAndClick("div", answer));
        }
    } catch (e) {
        console.error("Failed to answer", e);
    }

    //setTimeout(answerForMe, 500);
}