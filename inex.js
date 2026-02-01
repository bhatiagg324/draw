const board = document.getElementById("board");
const clearBtn = document.getElementById("clearBtn");

let state = {
  active: false,
  x: 0,
  y: 0
};

board.addEventListener("mousedown", (e) => {
  state.active = true;
  const pos = getPos(e);
  state.x = pos.x;
  state.y = pos.y;
});

board.addEventListener("mousemove", (e) => {
  if (!state.active) return;

  const pos = getPos(e);
  drawSegment(state.x, state.y, pos.x, pos.y);

  state.x = pos.x;
  state.y = pos.y;
});

window.addEventListener("mouseup", () => {
  state.active = false;
});

// 🗑️ Clear drawing area
clearBtn.addEventListener("click", () => {
  board.innerHTML = "";
});

function drawSegment(x1, y1, x2, y2) {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);

  line.setAttribute("stroke", "black");
  line.setAttribute("stroke-width", "2");
  line.setAttribute("stroke-linecap", "round");

  board.appendChild(line);
}

function getPos(e) {
  const rect = board.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}
