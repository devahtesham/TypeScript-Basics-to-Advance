"use strict";
var Numerics;
(function (Numerics) {
    Numerics[Numerics["A"] = 0] = "A";
    // A = 1,
    Numerics[Numerics["B"] = 1] = "B";
    Numerics[Numerics["C"] = 2] = "C";
    Numerics[Numerics["D"] = 3] = "D";
})(Numerics || (Numerics = {}));
var Mix;
(function (Mix) {
    Mix["TOP"] = "TOP";
    Mix["DOWN"] = "DOWN";
    Mix["BOTTOM"] = "BOTTOM";
    Mix["LEFT"] = "LEFT";
    Mix["RIGHT"] = "RIGHT";
    Mix[Mix["x"] = 10] = "x";
    Mix[Mix["y"] = 22.3] = "y";
})(Mix || (Mix = {}));
// console.log(Numerics.A);
// console.log(Numerics.B);
// console.log(Numerics.C);
// console.log(Numerics.D);
console.log(Mix.x);
