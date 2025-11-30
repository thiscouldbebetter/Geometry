"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Ray {
            constructor(vertex, direction) {
                this.vertex = vertex;
                this.direction = direction;
            }
            static fromVertexAndDirection(vertex, direction) {
                return new Ray(vertex, direction);
            }
        }
        Geometry.Ray = Ray;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
