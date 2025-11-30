"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Path {
            constructor(points) {
                this.points = points;
            }
            static arrowOfWidthAndLength(width, length) {
                var backOffset = Geometry.Coords.fromXY(-1, 0).multiplyScalar(length);
                var rightOffset = Geometry.Coords.fromXY(0, 1).multiplyScalar(width / 2);
                return new Path([
                    Geometry.Coords.fromXY(0, 0), // tip
                    backOffset.clone().add(rightOffset),
                    backOffset.clone().subtract(rightOffset)
                ]);
            }
            static default() {
                // For rapid prototyping.
                return Path.fromDimension(10);
            }
            static fromDimension(dimension) {
                // For rapid prototyping.
                return new Path([
                    Geometry.Coords.fromXY(-1, 0).multiplyScalar(dimension),
                    Geometry.Coords.fromXY(1, 0).multiplyScalar(dimension),
                    Geometry.Coords.fromXY(0, 1).multiplyScalar(dimension),
                ]);
            }
            static fromPoints(points) {
                return new Path(points);
            }
            static fromPointsRelative(pointsRelative) {
                var offsetSoFar = Geometry.Coords.zeroes();
                var pointsAbsolute = [];
                for (var i = 1; i < pointsRelative.length; i++) {
                    var pointRelative = pointsRelative[i];
                    offsetSoFar.add(pointRelative);
                    var pointAbsolute = offsetSoFar.clone();
                    pointsAbsolute.push(pointAbsolute);
                }
                return new Path(pointsAbsolute);
            }
            // Clonable.
            clone() {
                return new Path(Geometry.ArrayHelper.clone(this.points));
            }
            overwriteWith(other) {
                Geometry.ArrayHelper.overwriteWith(this.points, other.points);
                return this;
            }
            // Transformable.
            transform(transformToApply) {
                Geometry.Transforms.applyTransformToCoordsMany(transformToApply, this.points);
                return this;
            }
        }
        Geometry.Path = Path;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
