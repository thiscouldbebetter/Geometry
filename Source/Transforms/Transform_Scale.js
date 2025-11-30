"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Transform_Scale {
            constructor(scaleFactors) {
                this.scaleFactors = scaleFactors;
            }
            static fromScalar(scalar) {
                return new Transform_Scale(Geometry.Coords.ones().multiplyScalar(scalar));
            }
            static fromScaleFactor(scaleFactor) {
                return new Transform_Scale(Geometry.Coords.ones().multiplyScalar(scaleFactor));
            }
            static fromScaleFactors(scaleFactors) {
                return new Transform_Scale(scaleFactors);
            }
            clone() {
                return new Transform_Scale(this.scaleFactors.clone());
            }
            overwriteWith(other) {
                this.scaleFactors.overwriteWith(other.scaleFactors);
                return this;
            }
            transform(transformable) {
                return transformable.transform(this);
            }
            transformCoords(coordsToTransform) {
                return coordsToTransform.multiply(this.scaleFactors);
            }
        }
        Geometry.Transform_Scale = Transform_Scale;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
