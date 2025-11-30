"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Transform_Orient {
            constructor(orientation) {
                this.orientation = orientation;
                this._components = [Geometry.Coords.create(), Geometry.Coords.create(), Geometry.Coords.create()];
            }
            static fromOrientation(orientation) {
                return new Transform_Orient(orientation);
            }
            static fromOrientationForward(orientationForward) {
                return new Transform_Orient(Geometry.Orientation.fromForward(orientationForward));
            }
            // Clonable.
            clone() {
                return new Transform_Orient(this.orientation.clone());
            }
            overwriteWith(other) {
                this.orientation.overwriteWith(other.orientation);
                return this;
            }
            // Transform.
            transform(transformable) {
                return transformable.transform(this);
            }
            transformCoords(coordsToTransform) {
                var components = this._components;
                var ori = this.orientation;
                var componentXForward = components[0]
                    .overwriteWith(ori.forward)
                    .multiplyScalar(coordsToTransform.x);
                var componentYRight = components[1]
                    .overwriteWith(ori.right)
                    .multiplyScalar(coordsToTransform.y);
                var componentZDown = components[2]
                    .overwriteWith(ori.down)
                    .multiplyScalar(coordsToTransform.z);
                coordsToTransform
                    .overwriteWith(componentXForward)
                    .add(componentYRight)
                    .add(componentZDown);
                return coordsToTransform;
            }
        }
        Geometry.Transform_Orient = Transform_Orient;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
