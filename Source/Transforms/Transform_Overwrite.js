"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Transform_Overwrite {
            constructor(transformableToOverwriteWith) {
                this.transformableToOverwriteWith = transformableToOverwriteWith;
            }
            clone() {
                return this; // todo
            }
            overwriteWith(other) {
                return this; // todo
            }
            transform(transformable) {
                transformable.overwriteWith(this.transformableToOverwriteWith);
                return transformable;
            }
            transformCoords(coordsToTransform) {
                return coordsToTransform;
            }
        }
        Geometry.Transform_Overwrite = Transform_Overwrite;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
