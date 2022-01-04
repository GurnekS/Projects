/*
Skyline assigment
SDEV117
11/3/21
Author Gurnek Singh
this file draws a skyline on a canvas
 */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const WATER_HGT = 100;
const GROUND_HGT = 10;
const CVS_WIDTH = 600;
const CVS_HEIGHT = 400;
const BUILD_WIDTH = 55;
const BUILD_MIN_H = 30;
const BUILD_MAX_H = 150;
const FONT_OFFSET = 40;
const FONT_WIDTH = 120;
const WINDOW_SIZE = 5;
const NUM_BUILDINGS = 15;


scene();

function scene() {
    canvas.setAttribute('width', '' + CVS_WIDTH);
    canvas.setAttribute('height', '' + CVS_HEIGHT);

    drawBackground();
    drawWater();
    drawGround();
    drawSkyline();
    text();

}

function text() {
    ctx.font = FONT_OFFSET + 'px serif';
    ctx.fillText('Seattle', CVS_WIDTH - FONT_WIDTH, FONT_OFFSET, FONT_WIDTH);
}


function drawBackground() {
    ctx.fillStyle = '#3898FF';
    ctx.fillRect(0, 0, CVS_WIDTH, CVS_HEIGHT);

}

function drawWater() {
    ctx.fillStyle = '#013565';
    ctx.fillRect(0, CVS_HEIGHT - WATER_HGT, CVS_WIDTH, WATER_HGT);
}

function drawGround() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, CVS_HEIGHT - WATER_HGT - GROUND_HGT, CVS_WIDTH, GROUND_HGT);
}

function drawSkyline() {
    for (let i = 0; i < NUM_BUILDINGS; i++) {
        drawBuilding();
    }
}

function drawBuilding() {
    ctx.fillStyle = 'black';
    const x = random(0, CVS_WIDTH - BUILD_WIDTH);
    const height = random(BUILD_MIN_H, BUILD_MAX_H);
    const width = BUILD_WIDTH;
    const y = CVS_HEIGHT - GROUND_HGT - WATER_HGT - height;
    ctx.fillRect(x, y, width, height);
    drawWindows(x, y, width, height);


}

function drawWindows(buildX, buildY, buildWidth, buildHeight) {
    ctx.fillStyle = 'white';
    const totalColumns = getNumberOfWindows(buildWidth);
    const totalRows = getNumberOfWindows(buildHeight);
    for (let windowRow = 0; windowRow < totalRows; windowRow++) {
        for (let windowColumn = 0; windowColumn < totalColumns; windowColumn++) {
            let windowX = buildX + WINDOW_SIZE * 2 + windowColumn * WINDOW_SIZE * 2;
            let windowY = buildY + WINDOW_SIZE * 2 + windowRow * WINDOW_SIZE * 2;
            ctx.fillRect(windowX, windowY, WINDOW_SIZE, WINDOW_SIZE);
        }
    }

}

function getNumberOfWindows(length) {
    let window_space = (length - 4 * WINDOW_SIZE) / WINDOW_SIZE;
    return Math.floor(window_space / 2) + 1;


}

function random(low, high) {
    return Math.random() * (high - low + 1) + low;
}