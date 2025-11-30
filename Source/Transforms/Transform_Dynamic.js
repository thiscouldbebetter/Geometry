"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Transform_Dynamic {
            constructor(transformTransformable) {
                this.transformTransformable = transformTransformable;
            }
            static fromTransformTransformable(transformTransformable) {
                return new Transform_Dynamic(transformTransformable);
            }
            // Clonable.
            clone() { return this; } // todo
            overwriteWith(other) {
                return this;
            }
            // TransformBase.
            transform(transformable) {
                return this.transformTransformable(transformable);
            }
            transformCoords(coordsToTransform) {
                return coordsToTransform; // todo
            }
        }
        Geometry.Transform_Dynamic = Transform_Dynamic;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
