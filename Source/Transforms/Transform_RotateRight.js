"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Transform_RotateRight {
            constructor(quarterTurnsToRotate) {
                this.quarterTurnsToRotate = quarterTurnsToRotate;
            }
            static fromQuarterTurnsToRotate(quarterTurnsToRotate) {
                return new Transform_RotateRight(quarterTurnsToRotate);
            }
            // Clonable.
            clone() {
                return new Transform_RotateRight(this.quarterTurnsToRotate);
            }
            overwriteWith(other) {
                this.quarterTurnsToRotate = other.quarterTurnsToRotate;
                return this;
            }
            // Transform.
            transform(transformable) {
                return transformable.transform(this);
            }
            transformCoords(coordsToTransform) {
                for (var i = 0; i < this.quarterTurnsToRotate; i++) {
                    var temp = coordsToTransform.x;
                    coordsToTransform.x = 0 - coordsToTransform.y;
                    coordsToTransform.y = temp;
                }
                return coordsToTransform;
            }
        }
        Geometry.Transform_RotateRight = Transform_RotateRight;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
