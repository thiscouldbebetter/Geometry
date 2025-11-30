"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class PathBuilder {
            static Instance() {
                if (this._instance == null) {
                    this._instance = new PathBuilder();
                }
                return this._instance;
            }
            star(numberOfPoints, ratioOfInnerRadiusToOuter) {
                var numberOfVertices = numberOfPoints * 2;
                var turnsPerVertex = 1 / numberOfVertices;
                var polar = new Geometry.Polar(0, 1, 0);
                var vertices = [];
                for (var i = 0; i < numberOfVertices; i++) {
                    polar.radius = (i % 2 == 0 ? 1 : ratioOfInnerRadiusToOuter);
                    var vertex = polar.toCoords();
                    vertices.push(vertex);
                    polar.azimuthInTurns += turnsPerVertex;
                }
                var returnValue = new Geometry.Path(vertices);
                return returnValue;
            }
        }
        Geometry.PathBuilder = PathBuilder;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
