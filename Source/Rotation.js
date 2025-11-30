"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Rotation {
            constructor(axis, angleInTurnsRef) {
                this.axis = axis;
                this.angleInTurnsRef = angleInTurnsRef;
            }
            angleInTurns() {
                return this.angleInTurnsRef.value;
            }
            transformCoords(coordsToTransform) {
                // hack - Assume axis is (0, 0, 1).
                var polar = new Geometry.Polar(0, 0, 0).fromCoords(coordsToTransform);
                polar.azimuthInTurns = Geometry.NumberHelper.wrapToRangeMinMax(polar.azimuthInTurns + this.angleInTurns(), 0, 1);
                return polar.overwriteCoords(coordsToTransform);
            }
            transformOrientation(orientation) {
                return orientation.forwardSet(this.transformCoords(orientation.forward));
            }
            // Clonable.
            clone() {
                return new Rotation(this.axis.clone(), this.angleInTurnsRef.clone());
            }
            overwriteWith(other) {
                this.axis.overwriteWith(other.axis);
                this.angleInTurnsRef.overwriteWith(other.angleInTurnsRef);
                return this;
            }
        }
        Geometry.Rotation = Rotation;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
