"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Transform_None {
            constructor() { }
            static create() {
                return new Transform_None();
            }
            // Transform.
            clone() { return this; } // todo
            overwriteWith(other) {
                return this;
            }
            transform(transformable) {
                return transformable;
            }
            transformCoords(coordsToTransform) {
                return coordsToTransform;
            }
        }
        Geometry.Transform_None = Transform_None;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
