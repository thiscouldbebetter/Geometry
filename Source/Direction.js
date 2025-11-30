"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Direction {
            static Instances() {
                if (Direction._instances == null) {
                    Direction._instances = new Direction_Instances();
                }
                return Direction._instances;
            }
        }
        Geometry.Direction = Direction;
        class Direction_Instances {
            constructor() {
                this.East = Geometry.Coords.fromXY(1, 0);
                this.North = Geometry.Coords.fromXY(0, -1);
                this.Northeast = Geometry.Coords.fromXY(1, -1);
                this.Northwest = Geometry.Coords.fromXY(-1, -1);
                this.South = Geometry.Coords.fromXY(0, 1);
                this.Southeast = Geometry.Coords.fromXY(1, 1);
                this.Southwest = Geometry.Coords.fromXY(-1, 1);
                this.West = Geometry.Coords.fromXY(-1, 0);
                this._ByHeading =
                    [
                        this.East,
                        this.Southeast,
                        this.South,
                        this.Southwest,
                        this.West,
                        this.Northwest,
                        this.North,
                        this.Northeast
                    ];
            }
        }
        Geometry.Direction_Instances = Direction_Instances;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
