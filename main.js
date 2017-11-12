(function () {
    var stage;
    var cards = [];
    var cardWidth = 200;
    var maxWidth = 290;
    var centerX = document.getElementById('canvas').width / 2;
    var offset = -30;

    function initStage() {
        stage = new createjs.Stage("canvas");
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", stage);
    }

    function initListeners() {
        document.getElementById('submit').addEventListener('click', onSubmit);
    }

    function onSubmit(event) {
        var cardValue = document.querySelector('#value').value;
        addCard(cardValue);
    }

    function addCard(value) {
        var card = Card({value: value.toUpperCase()});
        cards.push(card);
        card.x = centerX;
        stage.addChild(card);
        arrangeCards();
        console.log('Total Cards: ', cards.length);
    }

    function arrangeCards() {
        cards.forEach(function (c, index, cards) {
            c.x = centerX + (cards.length - (index + 1)) * calcOffset();
        });
    }

    function calcOffset() {
        var offset;

        if (cards.length > 4) {
            offset = -(maxWidth - cardWidth) / (cards.length -1);
        } else {
            offset = -30;
        }
        console.log(offset);
        return offset;
    }

    initStage();
    initListeners();
}());

