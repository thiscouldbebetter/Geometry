"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class ShapeBase {
            throwNotImplementedError() {
                throw new Error("Should be implemented in subclass.");
            }
            collider() { return null; }
            containsPoint(pointToCheck) { throw new Error("Should be implemented in subclass."); }
            normalAtPos(posToCheck, normalOut) { throw new Error("Should be implemented in subclass."); }
            pointRandom(randomizer) { throw new Error("Should be implemented in subclass."); }
            surfacePointNearPos(posToCheck, surfacePointOut) { throw new Error("Should be implemented in subclass."); }
            toBoxAxisAligned(boxOut) { throw new Error("Should be implemented in subclass."); }
            // Clonable.
            clone() { throw new Error("Should be implemented in subclass."); }
            overwriteWith(other) { throw new Error("Should be implemented in subclass."); }
            // Equatable.
            equals(other) { throw new Error("Should be implemented in subclass."); }
            // Transformable.
            transform(transformToApply) { throw new Error("Should be implemented in subclass."); }
        }
        Geometry.ShapeBase = ShapeBase;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
