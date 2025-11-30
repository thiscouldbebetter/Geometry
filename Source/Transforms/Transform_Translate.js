"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Transform_Translate {
            constructor(displacement) {
                this.displacement = displacement;
            }
            static fromDisplacement(displacement) {
                return new Transform_Translate(displacement);
            }
            displacementSet(value) {
                this.displacement.overwriteWith(value);
                return this;
            }
            // transform
            clone() {
                return this; // todo
            }
            overwriteWith(other) {
                return this; // todo
            }
            transform(transformable) {
                return transformable.transform(this);
            }
            transformCoords(coordsToTransform) {
                return coordsToTransform.add(this.displacement);
            }
        }
        Geometry.Transform_Translate = Transform_Translate;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
