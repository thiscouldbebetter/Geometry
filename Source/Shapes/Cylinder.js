"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Cylinder {
            constructor(center, radius, length) {
                this.center = center;
                this.radius = radius;
                this.length = length;
                this.lengthHalf = this.length / 2;
            }
        }
        Geometry.Cylinder = Cylinder;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
