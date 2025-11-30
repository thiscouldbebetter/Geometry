"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class ShapeInverse extends Geometry.ShapeBase {
            constructor(child) {
                super();
                this.child = child;
            }
            // Clonable.
            clone() {
                return new ShapeInverse(this.child.clone());
            }
            overwriteWith(other) {
                this.child.overwriteWith(other.child);
                return this;
            }
            // Equatable
            equals(other) { return this.child.equals(other.child); }
            // ShapeBase.
            containsPoint(pointToCheck) {
                return (this.child.containsPoint(pointToCheck) == false);
            }
            normalAtPos(posToCheck, normalOut) {
                return this.child.normalAtPos(posToCheck, normalOut).invert();
            }
            surfacePointNearPos(posToCheck, surfacePointOut) {
                return this.child.surfacePointNearPos(posToCheck, surfacePointOut);
            }
            // Transformable.
            transform(transformToApply) { throw new Error("Not implemented!"); }
        }
        Geometry.ShapeInverse = ShapeInverse;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
