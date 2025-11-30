"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Transform_Multiple {
            constructor(children) {
                this.children = children;
            }
            static fromChildren(children) {
                return new Transform_Multiple(children);
            }
            clone() {
                return new Transform_Multiple(this.children.map(x => x.clone())); // todo
            }
            overwriteWith(other) {
                for (var i = 0; i < this.children.length; i++) {
                    this.children[i].overwriteWith(other.children[i]);
                }
                return this;
            }
            transform(transformable) {
                for (var i = 0; i < this.children.length; i++) {
                    var child = this.children[i];
                    transformable.transform(child);
                }
                return transformable;
            }
            transformCoords(coordsToTransform) {
                for (var i = 0; i < this.children.length; i++) {
                    var child = this.children[i];
                    child.transformCoords(coordsToTransform);
                }
                return coordsToTransform;
            }
        }
        Geometry.Transform_Multiple = Transform_Multiple;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
