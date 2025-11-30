"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class RandomizerSystem extends Geometry.Randomizer {
            // Uses the built-in JavaScript randomizer.
            constructor() {
                super();
            }
            static Instance() {
                if (RandomizerSystem._instance == null) {
                    RandomizerSystem._instance = new RandomizerSystem();
                }
                return RandomizerSystem._instance;
            }
            fraction() {
                return Math.random();
            }
            integerLessThan(max) {
                return Math.floor(this.fraction() * max);
            }
        }
        Geometry.RandomizerSystem = RandomizerSystem;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
