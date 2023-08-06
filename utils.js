const utils = {
    asGridCoord(x,y) {
        return `${x*16},${y*16}`;
    },

    emitEvent(name, detail){
        const event = new CustomEvent(name, {
            detail
        });
        document.dispatchEvent(event);
    },

    nextPosition(initialX, initialY, direction) {
        let x = initialX;
        let y = initialY;
        const size = 16;
        if(direction === "up") {
            y -= size;
        } else if (direction === "down") {
            y += size;
        } else if (direction === "left") {
            x -= size;
        } else if (direction === "right") {
            x += size;
        }
        return {x, y};
    },

    oppositeDirection(direction) {
        if(direction === "left") return "right";
        if(direction === "right") return "left";
        if(direction === "up") return "down";
        return "up";
    },

    withGrid(n) {
        return n * 16;
    }
}