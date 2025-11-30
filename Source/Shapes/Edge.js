"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Edge extends Geometry.ShapeBase {
            constructor(vertices) {
                super();
                this.vertices = vertices || [Geometry.Coords.create(), Geometry.Coords.create()];
                this._direction = Geometry.Coords.create();
                this._displacement = Geometry.Coords.create();
                this._transverse = Geometry.Coords.create();
            }
            static create() {
                return new Edge(null);
            }
            static fromVertex0And1(vertex0, vertex1) {
                return new Edge([vertex0, vertex1]);
            }
            direction() {
                return this._direction.overwriteWith(this.displacement()).normalize();
            }
            displacement() {
                return this._displacement.overwriteWith(this.vertices[1]).subtract(this.vertices[0]);
            }
            length() {
                return this.displacement().magnitude();
            }
            projectOntoOther(other) {
                var otherVertices = other.vertices;
                var otherVertex0 = otherVertices[0];
                var otherDirection = other.direction();
                var otherTransverse = other.transverse(Geometry.Coords.Instances().ZeroZeroOne);
                for (var i = 0; i < this.vertices.length; i++) {
                    var vertex = this.vertices[i];
                    vertex.subtract(otherVertex0);
                    vertex.overwriteWithDimensions(vertex.dotProduct(otherDirection), vertex.dotProduct(otherTransverse), 0);
                }
                return this;
            }
            transverse(faceNormal) {
                return this._transverse.overwriteWith(this.direction()).crossProduct(faceNormal);
            }
            // string
            toString() {
                return this.vertices.toString();
            }
            // Cloneable.
            clone() {
                return new Edge(Geometry.ArrayHelper.clone(this.vertices));
            }
            overwriteWith(other) {
                Geometry.ArrayHelper.overwriteWith(this.vertices, other.vertices);
                return this;
            }
            // Equatable
            equals(other) {
                return Geometry.ArrayHelper.equals(this.vertices, other.vertices);
            }
            // ShapeBase.
            toBoxAxisAligned(boxOut) {
                return boxOut.containPoints(this.vertices);
            }
            // Transformable.
            transform(transformToApply) { throw new Error("Not implemented!"); }
        }
        Geometry.Edge = Edge;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
