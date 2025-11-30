"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class RandomizerLCG extends Geometry.Randomizer {
            constructor(firstRandom, multiplier, addend, modulus) {
                super();
                this.currentRandom = firstRandom;
                this.multiplier = multiplier || 1103515245;
                this.addend = addend || 12345;
                this.modulus = modulus || Math.pow(2.0, 31);
            }
            static default() {
                return new RandomizerLCG(0.12345, // firstRandom
                1103515245, // multiplier
                12345, // addend
                Math.pow(2.0, 31) // modulus
                );
            }
            static fromSeed(seed) {
                return new RandomizerLCG(seed, null, null, null);
            }
            // Randomizer implementation.
            fraction() {
                this.currentRandom =
                    ((this.multiplier
                        * (this.currentRandom * this.modulus)
                        + this.addend)
                        % this.modulus)
                        / this.modulus;
                return this.currentRandom;
            }
            integerLessThan(max) {
                return Math.floor(this.fraction() * max);
            }
        }
        Geometry.RandomizerLCG = RandomizerLCG;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
