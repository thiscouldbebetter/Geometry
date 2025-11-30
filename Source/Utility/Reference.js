"use strict";
var ThisCouldBeBetter;
(function (ThisCouldBeBetter) {
    var Geometry;
    (function (Geometry) {
        class Reference {
            constructor(value) {
                this.value = value;
            }
            static fromValue(value) {
                return new Reference(value);
            }
            get() {
                return this.value;
            }
            set(valueToSet) {
                this.value = valueToSet;
                return this.value;
            }
            // Clonable.
            clone() {
                return new Reference(this.value);
            }
            overwriteWith(other) {
                this.value = other.value;
                return this;
            }
        }
        Geometry.Reference = Reference;
    })(Geometry = ThisCouldBeBetter.Geometry || (ThisCouldBeBetter.Geometry = {}));
})(ThisCouldBeBetter || (ThisCouldBeBetter = {}));
