"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Wedge extends Geometry.ShapeBase {
            constructor(vertex, directionMin, angleSpannedInTurns) {
                super();
                this.vertex = vertex;
                this.directionMin = directionMin;
                this.angleSpannedInTurns = angleSpannedInTurns;
                // Helper variable.
                this.rayDirectionMinAsPolar = new Geometry.Polar(0, 1, 0);
            }
            static default() {
                return new Wedge(Geometry.Coords.create(), // vertex
                new Geometry.Coords(1, 0, 0), // directionMin
                .5 // angleSpannedInTurns
                );
            }
            angleAsRangeExtent() {
                var angleStartInTurns = this.directionMin.headingInTurns();
                return new Geometry.RangeExtent(angleStartInTurns, angleStartInTurns + this.angleSpannedInTurns);
            }
            angleInTurnsMax() {
                var returnValue = Geometry.NumberHelper.wrapToRangeMinMax(this.angleInTurnsMin() + this.angleSpannedInTurns, 0, 1);
                return returnValue;
            }
            angleInTurnsMin() {
                return this.rayDirectionMinAsPolar.fromCoords(this.directionMin).azimuthInTurns;
            }
            collider() {
                if (this._collider == null) {
                    this.rayDirectionMinAsPolar = Geometry.Polar.default();
                    this.rayDirectionMaxAsPolar = Geometry.Polar.default();
                    this.rayDirectionMin = Geometry.Coords.create();
                    this.rayDirectionMax = Geometry.Coords.create();
                    this.downFromVertex = Geometry.Coords.create();
                    this.directionMinFromVertex = Geometry.Coords.create();
                    this.directionMaxFromVertex = Geometry.Coords.create();
                    this.planeForAngleMin = Geometry.Plane.create();
                    this.planeForAngleMax = Geometry.Plane.create();
                    this.hemispaces =
                        [
                            Geometry.Hemispace.fromPlane(this.planeForAngleMin),
                            Geometry.Hemispace.fromPlane(this.planeForAngleMax)
                        ];
                    this.shapeGroupAll = Geometry.ShapeGroupAll.fromChildren(this.hemispaces);
                    this.shapeGroupAny = Geometry.ShapeGroupAny.fromChildren(this.hemispaces);
                }
                var angleInTurnsMin = this.angleInTurnsMin();
                var angleInTurnsMax = this.angleInTurnsMax();
                this.rayDirectionMinAsPolar.azimuthInTurns = angleInTurnsMin;
                this.rayDirectionMinAsPolar.overwriteCoords(this.rayDirectionMin);
                this.rayDirectionMaxAsPolar.azimuthInTurns = angleInTurnsMax;
                this.rayDirectionMaxAsPolar.overwriteCoords(this.rayDirectionMax);
                var down = Geometry.Coords.Instances().ZeroZeroOne;
                this.downFromVertex
                    .overwriteWith(this.vertex)
                    .add(down);
                this.directionMinFromVertex
                    .overwriteWith(this.vertex)
                    .add(this.rayDirectionMin);
                this.directionMaxFromVertex
                    .overwriteWith(this.vertex)
                    .add(this.rayDirectionMax);
                this.planeForAngleMin.fromPoints(
                // Order matters!
                this.vertex, this.directionMinFromVertex, this.downFromVertex);
                this.planeForAngleMax.fromPoints(this.vertex, this.downFromVertex, this.directionMaxFromVertex);
                if (this.angleSpannedInTurns < .5) {
                    this._collider = this.shapeGroupAll;
                }
                else {
                    this._collider = this.shapeGroupAny;
                }
                return this._collider;
            }
            // Clonable.
            clone() {
                return new Wedge(this.vertex.clone(), this.directionMin.clone(), this.angleSpannedInTurns);
            }
            overwriteWith(other) {
                this.vertex.overwriteWith(other.vertex);
                this.directionMin.overwriteWith(other.directionMin);
                this.angleSpannedInTurns = other.angleSpannedInTurns;
                return this;
            }
            // Equatable.
            equals(other) {
                var returnValue = (this.vertex.equals(other.vertex)
                    && this.directionMin.equals(other.directionMin)
                    && this.angleSpannedInTurns == other.angleSpannedInTurns);
                return returnValue;
            }
            // Transformable.
            transform(transformToApply) {
                transformToApply.transformCoords(this.vertex);
                return this;
            }
        }
        Geometry.Wedge = Wedge;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
