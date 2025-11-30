"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class ShapeContainer extends Geometry.ShapeBase {
            constructor(child) {
                super();
                this.child = child;
            }
            static fromChild(child) {
                return new ShapeContainer(child);
            }
            // Clonable.
            clone() {
                return new ShapeContainer(this.child.clone());
            }
            overwriteWith(other) {
                this.child.overwriteWith(other.child);
                return this;
            }
            // Equatable.
            equals(other) {
                return this.child.equals(other.child);
            }
            // ShapeBase.
            normalAtPos(posToCheck, normalOut) {
                return this.child.normalAtPos(posToCheck, normalOut);
            }
            surfacePointNearPos(posToCheck, surfacePointOut) {
                return this.child.surfacePointNearPos(posToCheck, surfacePointOut);
            }
            toBoxAxisAligned(boxOut) {
                return this.child.toBoxAxisAligned(boxOut);
            }
            // Transformable.
            transform(transformToApply) { throw new Error("Not implemented!"); }
        }
        Geometry.ShapeContainer = ShapeContainer;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
