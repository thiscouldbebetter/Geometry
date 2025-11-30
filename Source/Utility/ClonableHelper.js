"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class ClonableHelper {
            static clone(clonableToClone) {
                return (clonableToClone == null ? null : clonableToClone.clone());
            }
        }
        Geometry.ClonableHelper = ClonableHelper;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
