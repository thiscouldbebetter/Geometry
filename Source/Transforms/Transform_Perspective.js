"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Transform_Perspective {
            constructor(focalLength) {
                this.focalLength = focalLength;
            }
            // Clonable.
            clone() {
                return new Transform_Perspective(this.focalLength);
            }
            overwriteWith(other) {
                this.focalLength = other.focalLength;
                return this;
            }
            transform(transformable) {
                return transformable; // todo
            }
            transformCoords(coordsToTransform) {
                var distanceAlongCameraForward = coordsToTransform.z;
                coordsToTransform.multiplyScalar(this.focalLength);
                if (distanceAlongCameraForward != 0) {
                    coordsToTransform.divideScalar(distanceAlongCameraForward);
                }
                coordsToTransform.z = distanceAlongCameraForward;
                return coordsToTransform;
            }
        }
        Geometry.Transform_Perspective = Transform_Perspective;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
