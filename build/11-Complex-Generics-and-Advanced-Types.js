var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DataPoint = /** @class */ (function () {
    function DataPoint(value) {
        this.value = value;
    }
    return DataPoint;
}());
var NumberPoint = /** @class */ (function (_super) {
    __extends(NumberPoint, _super);
    function NumberPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberPoint.prototype.compareTo = function (other) {
        return this.value - other;
    };
    return NumberPoint;
}(DataPoint));
var points = [new NumberPoint(10), new NumberPoint(5)];
points.sort(function (a, b) { return a.value.compareTo(b.value); }); // Works seamlessly
// Key Concepts:
// Generic Constraints: extends Comparable<T> ensures only comparable types are used.
// Interface Implementation: NumberPoint must provide a compareTo method.
// Type Inference: TypeScript figures out the types when creating NumberPoint instances.
