"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Transform_DimensionsSwap {
            constructor(dimensionIndices) {
                this.dimensionIndices = dimensionIndices;
            }
            clone() { return this; } // todo
            overwriteWith(other) {
                return this; // todo
            }
            transform(transformable) {
                return transformable; // todo
            }
            transformCoords(coordsToTransform) {
                var dimensionIndex0 = this.dimensionIndices[0];
                var dimensionIndex1 = this.dimensionIndices[1];
                var dimension0 = coordsToTransform.dimensionGet(dimensionIndex0);
                var dimension1 = coordsToTransform.dimensionGet(dimensionIndex1);
                coordsToTransform.dimensionSet(dimensionIndex0, dimension1);
                coordsToTransform.dimensionSet(dimensionIndex1, dimension0);
                return coordsToTransform;
            }
        }
        Geometry.Transform_DimensionsSwap = Transform_DimensionsSwap;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
