"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class ShapeNone extends Geometry.ShapeBase {
            static Instance() {
                if (this._instance == null) {
                    this._instance = new ShapeNone();
                }
                return this._instance;
            }
            // Clonable.
            clone() {
                return new ShapeNone();
            }
            overwriteWith(other) {
                return this;
            }
            // Equatable
            equals(other) { return false; }
            // ShapeBase.
            containsPoint(pointToCheck) {
                return false;
            }
            // Transformable.
            transform(transformToApply) { return this; }
        }
        Geometry.ShapeNone = ShapeNone;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
