"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Transform_Rotate2D {
            constructor(turnsToRotate) {
                this.turnsToRotate = turnsToRotate;
                this._polar = new Geometry.Polar(0, 1, 0);
            }
            // Clonable.
            clone() {
                return new Transform_Rotate2D(this.turnsToRotate);
            }
            overwriteWith(other) {
                this.turnsToRotate = other.turnsToRotate;
                return this; // todo
            }
            // Transform.
            transform(transformable) {
                return transformable; // todo
            }
            transformCoords(coordsToTransform) {
                this._polar
                    .fromCoords(coordsToTransform)
                    .addToAzimuthInTurns(this.turnsToRotate)
                    .wrap()
                    .overwriteCoords(coordsToTransform);
                return coordsToTransform;
            }
        }
        Geometry.Transform_Rotate2D = Transform_Rotate2D;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
