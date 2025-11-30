"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Transform_TranslateInvert {
            constructor(displacement) {
                this.displacement = displacement;
            }
            clone() {
                return new Transform_TranslateInvert(this.displacement.clone());
            }
            overwriteWith(other) {
                this.displacement.overwriteWith(other.displacement);
                return this;
            }
            transform(transformable) {
                return transformable; // todo
            }
            transformCoords(coordsToTransform) {
                return coordsToTransform.subtract(this.displacement);
            }
        }
        Geometry.Transform_TranslateInvert = Transform_TranslateInvert;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
