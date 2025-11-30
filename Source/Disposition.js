"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Disposition {
            constructor(pos, orientation, placeName) {
                this.pos = pos || Geometry.Coords.create();
                if (orientation == null) {
                    orientation = Geometry.Orientation.Instances().ForwardXDownZ.clone();
                }
                this.orientation = orientation;
                this.placeNameSet(placeName);
                this.vel = Geometry.Coords.create();
                this.accel = Geometry.Coords.create();
                this.force = Geometry.Coords.create();
                this.spin = Geometry.Rotation.fromAxisAndAngleInTurns(this.orientation.down, 0);
                this.timeOffsetInTicks = 0;
                this._accelDirection = Geometry.Coords.create();
                this._velDirection = Geometry.Coords.create();
            }
            static create() {
                return new Disposition(Geometry.Coords.create(), Geometry.Orientation.default(), null);
            }
            static default() {
                return Disposition.create();
            }
            static from2(pos, orientation) {
                return new Disposition(pos, orientation, null);
            }
            static fromOrientation(orientation) {
                return new Disposition(Geometry.Coords.zeroes(), orientation, null);
            }
            static fromPos(pos) {
                return new Disposition(pos, Geometry.Orientation.default(), null);
            }
            static fromPosAndOri(pos, ori) {
                return new Disposition(pos, ori, null);
            }
            static fromPosAndOrientation(pos, ori) {
                return new Disposition(pos, ori, null);
            }
            static fromPosAndVel(pos, vel) {
                var returnValue = Disposition.fromPos(pos);
                returnValue.vel = vel;
                return returnValue;
            }
            static fromPosOrientationAndPlaceName(pos, orientation, placeName) {
                return new Disposition(pos, orientation, placeName);
            }
            accelDirection() {
                return this._accelDirection.overwriteWith(this.accel).normalize();
            }
            clear() {
                this.pos.clear();
                this.vel.clear();
                this.accel.clear();
                this.force.clear();
                return this;
            }
            equals(other) {
                var placeName = this.placeName();
                var otherPlaceName = other.placeName();
                var returnValue = (placeName == otherPlaceName
                    && this.pos.equals(other.pos)
                    && this.orientation.equals(other.orientation));
                return returnValue;
            }
            placeName() {
                return this._placeName;
            }
            placeNameSet(value) {
                this._placeName = value;
                return this;
            }
            velDirection() {
                return this._velDirection.overwriteWith(this.vel).normalize();
            }
            velSet(value) {
                this.vel.overwriteWith(value);
                return this;
            }
            // Clonable.
            clone() {
                var returnValue = new Disposition(this.pos.clone(), this.orientation.clone(), this.placeName());
                returnValue.vel = this.vel.clone();
                returnValue.accel = this.accel.clone();
                returnValue.force = this.force.clone();
                returnValue.spin = this.spin.clone();
                returnValue.timeOffsetInTicks = this.timeOffsetInTicks;
                return returnValue;
            }
            overwriteWith(other) {
                var otherPlaceName = other.placeName();
                this.placeNameSet(otherPlaceName);
                this.pos.overwriteWith(other.pos);
                this.orientation.overwriteWith(other.orientation);
                this.vel.overwriteWith(other.vel);
                this.accel.overwriteWith(other.accel);
                this.force.overwriteWith(other.force);
                this.spin.overwriteWith(other.spin);
                this.timeOffsetInTicks = other.timeOffsetInTicks;
                return this;
            }
            // strings
            toString() {
                return this.pos.clone().round().toString();
            }
        }
        Geometry.Disposition = Disposition;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
