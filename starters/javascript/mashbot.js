let canvas;
let ctx;
let appWidth;
let appHeight;

// called by NOOPBOT on window.onload
function start_app() {

  // size canvas to window
  sizeCanvas();

  //set up a ticker to refresh page automatically.
  let speed = 300; // how often screen refreshes, in milliseconds.
  let ticker = NOOPBOT_TICK_SETUP(draw, speed);

  //fire a draw event.
  draw();

  //redraw when canvas is clicked.
  canvas.addEventListener('click', draw);
}

function sizeCanvas() {
  appWidth = window.innerWidth;
  appHeight = window.innerHeight;
  canvas = document.getElementById('canvas');
  ctx = NOOPBOT_SETUP_CANVAS( { canvas: canvas, bgColor:'#ffffff' });
}

function draw() {
  //get the data!
  NOOPBOT_FETCH({
    API: 'mashbot',
    count: 1000,
    width: appWidth,
    height: appHeight,
    size: 360,
    apis:'vexbot,polybot',
    seed: 'ff00a2,00baff',
  }, drawSet);
}

function drawSet(responseJson) {
  let { hexbot, polybot, vexbot } = responseJson;
  let colors = hexbot.map(function(color) { return color.value});

  polybot.forEach(function(polygon) {
    drawPolygon(ctx, polygon, colors);
  })
  vexbot.forEach(function(vector) {
    drawVector(ctx, vector, colors)
  })
}

function drawPolygon(ctx, points, colors) {

  // randomly choose fill color and alpha
  ctx.fillStyle = NOOPBOT_DECIDE(colors);
  ctx.globalAlpha = Math.random();

  // draw the polygon
  ctx.beginPath();
  let firstPoint = points.shift();
  ctx.moveTo(firstPoint.x, firstPoint.y);

  points.forEach(function(point) {
    ctx.lineTo(point.x, point.y);
  });

  // fill polygon
  ctx.fill();
}

function drawVector(ctx, points, colors) {

  // randomly choose fill color and alpha
  ctx.strokeStyle = NOOPBOT_DECIDE(colors);
  ctx.globalAlpha = Math.random();
  ctx.lineWidth = NOOPBOT_RANDOM(1,4);
  let {a, b} = points;

  // draw line
  ctx.beginPath();
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);

  // stroke line
  ctx.stroke();

}

// listen if browser changes size.
window.onresize = function(event){
  sizeCanvas();
  draw();
};
