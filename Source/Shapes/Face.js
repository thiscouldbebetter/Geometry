"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Face extends Geometry.ShapeBase {
            constructor(vertices) {
                super();
                this.vertices = vertices;
            }
            static fromVertices(vertices) {
                return new Face(vertices);
            }
            box() {
                if (this._box == null) {
                    this._box = Geometry.BoxAxisAligned.create();
                }
                this._box.containPoints(this.vertices);
                return this._box;
            }
            containsPoint(pointToCheck) {
                var face = this;
                var faceNormal = face.plane().normal;
                var displacementFromVertex0ToCollision = Geometry.Coords.create();
                var isPosWithinAllEdgesOfFaceSoFar = true;
                var edges = face.edges();
                for (var e = 0; e < edges.length; e++) {
                    var edgeFromFace = edges[e];
                    var edgeFromFaceVertex0 = edgeFromFace.vertices[0];
                    displacementFromVertex0ToCollision.overwriteWith(pointToCheck).subtract(edgeFromFaceVertex0);
                    var edgeFromFaceTransverse = edgeFromFace.transverse(faceNormal);
                    var displacementProjectedAlongEdgeTransverse = displacementFromVertex0ToCollision.dotProduct(edgeFromFaceTransverse);
                    if (displacementProjectedAlongEdgeTransverse > 0) {
                        isPosWithinAllEdgesOfFaceSoFar = false;
                        break;
                    }
                }
                return isPosWithinAllEdgesOfFaceSoFar;
            }
            edges() {
                if (this._edges == null) {
                    this._edges = [];
                    for (var v = 0; v < this.vertices.length; v++) {
                        var vNext = Geometry.NumberHelper.wrapToRangeMinMax(v + 1, 0, this.vertices.length);
                        var vertex = this.vertices[v];
                        var vertexNext = this.vertices[vNext];
                        var edge = new Geometry.Edge([vertex, vertexNext]);
                        this._edges.push(edge);
                    }
                }
                return this._edges;
            }
            plane() {
                if (this._plane == null) {
                    this._plane = new Geometry.Plane(Geometry.Coords.create(), 0);
                }
                this._plane.fromPoints(this.vertices[0], this.vertices[1], this.vertices[2]);
                return this._plane;
            }
            // Cloneable.
            clone() {
                return new Face(Geometry.ArrayHelper.clone(this.vertices));
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
            transform(transformToApply) {
                Geometry.Transforms.applyTransformToCoordsMany(transformToApply, this.vertices);
                return this;
            }
        }
        Geometry.Face = Face;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
