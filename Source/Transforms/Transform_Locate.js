"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Transform_Locate {
            constructor(loc) {
                this.loc = loc || Geometry.Disposition.create();
                this.transformOrient = new Geometry.Transform_Orient(null);
                this.transformTranslate = new Geometry.Transform_Translate(null);
            }
            static create() {
                return new Transform_Locate(Geometry.Disposition.create());
            }
            static fromDisposition(loc) {
                return new Transform_Locate(loc);
            }
            clone() {
                return new Transform_Locate(this.loc.clone());
            }
            overwriteWith(other) {
                this.loc.overwriteWith(other.loc);
                return this;
            }
            transform(transformable) {
                return transformable.transform(this);
            }
            transformCoords(coordsToTransform) {
                this.transformOrient.orientation = this.loc.orientation;
                this.transformOrient.transformCoords(coordsToTransform);
                this.transformTranslate.displacement = this.loc.pos;
                this.transformTranslate.transformCoords(coordsToTransform);
                return coordsToTransform;
            }
        }
        Geometry.Transform_Locate = Transform_Locate;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
