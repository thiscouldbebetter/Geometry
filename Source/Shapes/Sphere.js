"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Sphere extends Geometry.ShapeBase {
            constructor(center, pointOnSurface) {
                super();
                this.center = center;
                this.pointOnSurface = pointOnSurface;
                // Helper variables.
                this._displacement = Geometry.Coords.create();
                this._pointRandom = Geometry.Coords.create();
            }
            static default() {
                return new Sphere(Geometry.Coords.create(), Geometry.Coords.fromXYZ(1, 0, 0));
            }
            static fromCenterAndPointOnSurface(center, pointOnSurface) {
                return new Sphere(center, pointOnSurface);
            }
            static fromCenterAndRadius(center, radius) {
                return new Sphere(center, Geometry.Coords.fromXYZ(radius, 0, 0).add(center));
            }
            static fromRadius(radius) {
                return new Sphere(Geometry.Coords.zeroes(), Geometry.Coords.fromXYZ(radius, 0, 0));
            }
            static fromRadiusAndCenter(radius, center) {
                return Sphere.fromCenterAndRadius(center, radius);
            }
            cachedValuesClear() {
                this._radius = null;
                return this;
            }
            containsOther(other) {
                var displacementOfOther = this._displacement
                    .overwriteWith(other.center)
                    .subtract(this.center);
                var distanceOfOther = displacementOfOther.magnitude();
                var returnValue = (distanceOfOther + other.radius() <= this.radius());
                return returnValue;
            }
            containsPoint(pointToCheck) {
                var displacement = this._displacement
                    .overwriteWith(pointToCheck)
                    .subtract(this.center);
                var distanceFromCenter = displacement.magnitude();
                var radius = this.radius();
                var containsPoint = (distanceFromCenter < radius);
                return containsPoint;
            }
            pointRandom(randomizer) {
                // todo
                // This implementation favors points near the center.
                var polar = Geometry.Polar.fromRadius(this.radius());
                var returnValue = polar
                    .random(null)
                    .overwriteCoords(this._pointRandom)
                    .add(this.center);
                return returnValue;
            }
            radius() {
                if (this._radius == null) {
                    this._radius =
                        this._displacement
                            .overwriteWith(this.pointOnSurface)
                            .subtract(this.center)
                            .magnitude();
                }
                return this._radius;
            }
            // Clonable.
            clone() {
                return new Sphere(this.center.clone(), this.pointOnSurface.clone());
            }
            overwriteWith(other) {
                this.center.overwriteWith(other.center);
                this.pointOnSurface.overwriteWith(other.pointOnSurface);
                return this;
            }
            // Equatable.
            equals(other) {
                return (this.center.equals(other.center) && this.radius == other.radius);
            }
            // ShapeBase.
            normalAtPos(posToCheck, normalOut) {
                return normalOut.overwriteWith(posToCheck).subtract(this.center).normalize();
            }
            surfacePointNearPos(posToCheck, surfacePointOut) {
                return surfacePointOut.overwriteWith(posToCheck); // todo
            }
            toBoxAxisAligned(boxOut) {
                if (boxOut == null) {
                    boxOut = Geometry.BoxAxisAligned.create();
                }
                var diameter = this.radius() * 2;
                boxOut.size.overwriteWithDimensions(diameter, diameter, diameter);
                return boxOut;
            }
            // Transformable.
            transform(transformToApply) {
                transformToApply.transformCoords(this.center);
                transformToApply.transformCoords(this.pointOnSurface);
                this.cachedValuesClear();
                return this;
            }
        }
        Geometry.Sphere = Sphere;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
