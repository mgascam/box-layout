var Card = (function () {
    return function (config) {
        var width = config.width || 200;
        var height = config.height || 300;

        var container = new createjs.Container();

        var shape = new createjs.Shape();
        shape.graphics.beginFill('#bbb').drawRect(0, 0, width, height);

        container.addChild(shape);

        var text = new createjs.Text();
        text.text = config.value;
        text.color = '#000';
        text.font = '30px Arial';
        text.x = 5;

        container.regX = width / 2;

        container.addChild(text);

        return container;
    };
}());