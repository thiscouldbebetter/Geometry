"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Point extends Geometry.ShapeBase {
            constructor(pos) {
                super();
                this.pos = pos;
            }
            static default() {
                return new Point(Geometry.Coords.create());
            }
            static fromPos(pos) {
                return new Point(pos);
            }
            containsOther(other) {
                return this.equals(other);
            }
            containsPoint(pointToCheck) {
                return this.pos.equals(pointToCheck);
            }
            pointRandom(randomizer) {
                return this.pos.clone();
            }
            // Clonable.
            clone() {
                return new Point(this.pos.clone());
            }
            overwriteWith(other) {
                this.pos.overwriteWith(other.pos);
                return this;
            }
            // Equatable.
            equals(other) {
                return this.pos.equals(other.pos);
            }
            // ShapeBase.
            surfacePointNearPos(posToCheck, surfacePointOut) {
                return this.pos.clone();
            }
            toBoxAxisAligned(boxOut) {
                boxOut.size.clear(); // Will this work?
                return boxOut;
            }
            // Transformable.
            coordsGroupToTransform() {
                return [this.pos];
            }
            transform(transformToApply) {
                transformToApply.transformCoords(this.pos);
                return this;
            }
        }
        Geometry.Point = Point;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
