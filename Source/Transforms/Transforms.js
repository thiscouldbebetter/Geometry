"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Transforms {
            static applyTransformToCoordsArrays(transformToApply, coordsArraysToTransform) {
                if (coordsArraysToTransform == null) {
                    return;
                }
                for (var i = 0; i < coordsArraysToTransform.length; i++) {
                    var coordsArray = coordsArraysToTransform[i];
                    Transforms.applyTransformToCoordsMany(transformToApply, coordsArray);
                }
            }
            static applyTransformToCoordsMany(transformToApply, coordsSetToTransform) {
                for (var i = 0; i < coordsSetToTransform.length; i++) {
                    transformToApply.transformCoords(coordsSetToTransform[i]);
                }
            }
        }
        Geometry.Transforms = Transforms;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
