class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    init() {
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image, 0, 0);
        };
        image.src = "/images/maps/DemoLower.png";

        const x = 5;
        const y = 6;
        const hero = new Image();
        hero.onload = () => {
            this.ctx.drawImage(
                hero,
                0, //startXCut
                0, //startYCut
                32, //widthCut
                32, //heightCut
                x * 16 - 8, //posX
                y * 16 - 18, //posY
                32, //width
                32 //height
                );
        };
        hero.src = "/images/characters/people/hero.png";
    }
}