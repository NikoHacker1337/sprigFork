/*
@title: BoxCubeGuy
@author: CaptainATW
*/

var x = 0;
const player = "p";
const box = "b";
const goal = "g";
const wall = "w";



setLegend(
  [ player, bitmap`
.11111111111111.
100000000000000L
100000000000000L
100000000000000L
102222000022220L
102222000022220L
102200000022000L
102200000022000L
102222000022220L
100000000000000L
100000000000000L
100000000000000L
100000000000000L
100000000000000L
100000000000000L
.LLLLLLLLLLLLLL.`],
  
  [ box, bitmap`
................
.CCCCCCCCCCCCCC.
.CCCC99999CCCCC.
.CCC9999999CCCC.
.C9CC99999CC9CC.
.C99CC999CC999C.
.C999CC9CC9999C.
.C9999CCC99999C.
.C99999CCC9999C.
.C9999CC9CC999C.
.C999CC999CC99C.
.CC9CC99999CC9C.
.CCCC9999999CCC.
.CCC9999999CCCC.
.CCCCCCCCCCCCCC.
................`],  
  [ goal, bitmap`
................
.....LLLLLL.....
...LL000000LL...
..L0000000000L..
..L0000000000L..
.L000000000000L.
.L000000000000L.
.L000000000000L.
.L000000000000L.
.L000000000000L.
.L000000000000L.
..L0000000000L..
..L0000000000L..
...LL000000LL...
.....LLLLLL.....
................`],
  [ wall, bitmap`
LLLLLLLLLLLLLLLL
L11111111111111L
L10000000000001L
L10000000000001L
L00000000000000L
L00000000000000L
L00000000000000L
L11111111111111L
L00000000000000L
L00000000000000L
L00000000000000L
L10000000000000L
L10000000000001L
L10000000000001L
L11111111111111L
LLLLLLLLLLLLLLLL`],
);

let level = 0;
const levels = [
  map`
p..ww
ww...
...b.
.ww..
.....
g.ww.`,
  map`
.w.w.p
...w.w
...w..
.b.w.g
...w..
w.....
.www..
w....w`,
  map`
wwwwwww
w.....w
w.bgb.w
w.g.g.w
w.bgb.w
w.....w
w.wwwww
w.w...w
w...w.p`,
  map`
...wwww
.b.w...
.......
..www..
p.w.w..
.bwgww.
....w..
..bgwwg`,


];

const currentLevel = levels[level];
setMap(currentLevel);

setSolids([ player, box, wall ]);

setPushables({
  [player]: [box], [box]: [box]

});

// START - PLAYER MOVEMENT CONTROLS

onInput("s", () => {
    setLegend(
  [ player, bitmap`
.11111111111111.
100000000000000L
100000000000000L
100000000000000L
102222000022220L
102222000022220L
102222000022220L
102002000020020L
102002000020020L
100000000000000L
100000000000000L
100000000000000L
100000000000000L
100000000000000L
100000000000000L
.LLLLLLLLLLLLLL.`],
  [ box, bitmap`
................
.CCCCCCCCCCCCCC.
.CCCC99999CCCCC.
.CCC9999999CCCC.
.C9CC99999CC9CC.
.C99CC999CC999C.
.C999CC9CC9999C.
.C9999CCC99999C.
.C99999CCC9999C.
.C9999CC9CC999C.
.C999CC999CC99C.
.CC9CC99999CC9C.
.CCCC9999999CCC.
.CCC9999999CCCC.
.CCCCCCCCCCCCCC.
................`],
  [ goal, bitmap`
................
.....LLLLLL.....
...LL000000LL...
..L0000000000L..
..L0000000000L..
.L000000000000L.
.L000000000000L.
.L000000000000L.
.L000000000000L.
.L000000000000L.
.L000000000000L.
..L0000000000L..
..L0000000000L..
...LL000000LL...
.....LLLLLL.....
................`],
  [ wall, bitmap`
LLLLLLLLLLLLLLLL
L11111111111111L
L10000000000001L
L10000000000001L
L00000000000000L
L00000000000000L
L00000000000000L
L11111111111111L
L00000000000000L
L00000000000000L
L00000000000000L
L10000000000000L
L10000000000001L
L10000000000001L
L11111111111111L
LLLLLLLLLLLLLLLL`],
  );
  getFirst(player).y += 1;

});

onInput("a", () => {

  setLegend(
  [ player, bitmap`
.11111111111111.
100000000000000L
100000000000000L
100000000000000L
102222000022220L
102222000022220L
100022000000220L
100022000000220L
102222000022220L
100000000000000L
100000000000000L
100000000000000L
100000000000000L
100000000000000L
100000000000000L
.LLLLLLLLLLLLLL.`],
  [ box, bitmap`
................
.CCCCCCCCCCCCCC.
.CCCC99999CCCCC.
.CCC9999999CCCC.
.C9CC99999CC9CC.
.C99CC999CC999C.
.C999CC9CC9999C.
.C9999CCC99999C.
.C99999CCC9999C.
.C9999CC9CC999C.
.C999CC999CC99C.
.CC9CC99999CC9C.
.CCCC9999999CCC.
.CCC9999999CCCC.
.CCCCCCCCCCCCCC.
................`],
  [ goal, bitmap`
................
.....LLLLLL.....
...LL000000LL...
..L0000000000L..
..L0000000000L..
.L000000000000L.
.L000000000000L.
.L000000000000L.
.L000000000000L.
.L000000000000L.
.L000000000000L.
..L0000000000L..
..L0000000000L..
...LL000000LL...
.....LLLLLL.....
................`],
  [ wall, bitmap`
LLLLLLLLLLLLLLLL
L11111111111111L
L10000000000001L
L10000000000001L
L00000000000000L
L00000000000000L
L00000000000000L
L11111111111111L
L00000000000000L
L00000000000000L
L00000000000000L
L10000000000000L
L10000000000001L
L10000000000001L
L11111111111111L
LLLLLLLLLLLLLLLL`],
  );
  getFirst(player).x -= 1;
});

onInput("d", () => {

  setLegend(
  [ player, bitmap`
.11111111111111.
100000000000000L
100000000000000L
100000000000000L
102222000022220L
102222000022220L
102200000022000L
102200000022000L
102222000022220L
100000000000000L
100000000000000L
100000000000000L
100000000000000L
100000000000000L
100000000000000L
.LLLLLLLLLLLLLL.`],
  [ box, bitmap`
................
.CCCCCCCCCCCCCC.
.CCCC99999CCCCC.
.CCC9999999CCCC.
.C9CC99999CC9CC.
.C99CC999CC999C.
.C999CC9CC9999C.
.C9999CCC99999C.
.C99999CCC9999C.
.C9999CC9CC999C.
.C999CC999CC99C.
.CC9CC99999CC9C.
.CCCC9999999CCC.
.CCC9999999CCCC.
.CCCCCCCCCCCCCC.
................`],
  [ goal, bitmap`
................
.....LLLLLL.....
...LL000000LL...
..L0000000000L..
..L0000000000L..
.L000000000000L.
.L000000000000L.
.L000000000000L.
.L000000000000L.
.L000000000000L.
.L000000000000L.
..L0000000000L..
..L0000000000L..
...LL000000LL...
.....LLLLLL.....
................`],
  [ wall, bitmap`
LLLLLLLLLLLLLLLL
L11111111111111L
L10000000000001L
L10000000000001L
L00000000000000L
L00000000000000L
L00000000000000L
L11111111111111L
L00000000000000L
L00000000000000L
L00000000000000L
L10000000000000L
L10000000000001L
L10000000000001L
L11111111111111L
LLLLLLLLLLLLLLLL`],
  );
  getFirst(player).x += 1;
});

onInput("w", () => {
    setLegend(
  [ player, bitmap`
.11111111111111.
100000000000000L
100000000000000L
100000000000000L
102002000020020L
102002000020020L
102222000022220L
102222000022220L
102222000022220L
100000000000000L
100000000000000L
100000000000000L
100000000000000L
100000000000000L
100000000000000L
.LLLLLLLLLLLLLL.`],
  [ box, bitmap`
................
.CCCCCCCCCCCCCC.
.CCCC99999CCCCC.
.CCC9999999CCCC.
.C9CC99999CC9CC.
.C99CC999CC999C.
.C999CC9CC9999C.
.C9999CCC99999C.
.C99999CCC9999C.
.C9999CC9CC999C.
.C999CC999CC99C.
.CC9CC99999CC9C.
.CCCC9999999CCC.
.CCC9999999CCCC.
.CCCCCCCCCCCCCC.
................`],
  [ goal, bitmap`
................
.....LLLLLL.....
...LL000000LL...
..L0000000000L..
..L0000000000L..
.L000000000000L.
.L000000000000L.
.L000000000000L.
.L000000000000L.
.L000000000000L.
.L000000000000L.
..L0000000000L..
..L0000000000L..
...LL000000LL...
.....LLLLLL.....
................`],
  [ wall, bitmap`
LLLLLLLLLLLLLLLL
L11111111111111L
L10000000000001L
L10000000000001L
L00000000000000L
L00000000000000L
L00000000000000L
L11111111111111L
L00000000000000L
L00000000000000L
L00000000000000L
L10000000000000L
L10000000000001L
L10000000000001L
L11111111111111L
LLLLLLLLLLLLLLLL`],
  );
  getFirst(player).y -= 1;
});


// END - PLAYER MOVEMENT CONTROLS

onInput("j", () => {
  const currentLevel = levels[level];
  if (currentLevel !== undefined) {
    clearText("");
    setMap(currentLevel);
  }
});

afterInput(() => {
  // count the number of tiles with goals
  const targetNumber = tilesWith(goal).length;
  
  // count the number of tiles with goals and boxes
  const numberCovered = tilesWith(goal, box).length;

  if (numberCovered === targetNumber) {
    // increase the current level number
    level = level + 1;

    const currentLevel = levels[level];

    // make sure the level exists and if so set the map
    if (currentLevel !== undefined) {
      setMap(currentLevel);
    } else {
      addText("you win!", { y: 4, color: color`3` });
    }
  }
});
