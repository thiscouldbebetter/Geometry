"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class ShapeGroupAny extends Geometry.ShapeBase {
            constructor(children) {
                super();
                this.children = children;
                this._displacement = Geometry.Coords.create();
                this._surfacePointForChild = Geometry.Coords.create();
            }
            static fromChildren(children) {
                return new ShapeGroupAny(children);
            }
            // Clonable.
            clone() {
                return new ShapeGroupAny(Geometry.ArrayHelper.clone(this.children));
            }
            overwriteWith(other) {
                Geometry.ArrayHelper.overwriteWith(this.children, other.children);
                return this;
            }
            // Equatable.
            equals(other) {
                var thisAndOtherAreEqualSoFar = (this.children.length == other.children.length);
                if (thisAndOtherAreEqualSoFar) {
                    for (var i = 0; i < this.children.length; i++) {
                        var childOfThis = this.children[i];
                        var childOfOther = other.children[i];
                        var childrenOfThisAndOtherAreEqual = childOfThis.equals(childOfOther);
                        if (childrenOfThisAndOtherAreEqual == false) {
                            thisAndOtherAreEqualSoFar = false;
                            break;
                        }
                    }
                }
                return thisAndOtherAreEqualSoFar;
            }
            // ShapeBase.
            surfacePointNearPos(posToCheck, surfacePointOut) {
                var distanceMinSoFar = Number.POSITIVE_INFINITY;
                for (var i = 0; i < this.children.length; i++) {
                    var shape = this.children[i];
                    shape.surfacePointNearPos(posToCheck, this._surfacePointForChild);
                    var distanceFromPosToCheck = this._displacement.overwriteWith(this._surfacePointForChild).subtract(posToCheck).magnitude();
                    if (distanceFromPosToCheck < distanceMinSoFar) {
                        distanceMinSoFar = distanceFromPosToCheck;
                        surfacePointOut.overwriteWith(this._surfacePointForChild);
                    }
                }
                return surfacePointOut;
            }
            // Transformable.
            transform(transformToApply) {
                this.children.forEach((x) => x.transform(transformToApply));
                return this;
            }
        }
        Geometry.ShapeGroupAny = ShapeGroupAny;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
