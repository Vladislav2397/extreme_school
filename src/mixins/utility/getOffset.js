var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p] }
        return extendStatics(d, b)
    }
    return function (d, b) {
        extendStatics(d, b)
        function __() { this.constructor = d }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __())
    }
})()
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function') r = Reflect.decorate(decorators, target, key, desc)
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
    return c > 3 && r && Object.defineProperty(target, key, r), r
}
import { Component, Vue } from 'vue-property-decorator'
var GetOffset = /** @class */ (function (_super) {
    __extends(GetOffset, _super)
    function GetOffset() {
        return _super !== null && _super.apply(this, arguments) || this
    }
    GetOffset.prototype.getOffset = function (el) {
        var rect = el.getBoundingClientRect()
        var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    GetOffset = __decorate([
        Component
    ], GetOffset)
    return GetOffset
}(Vue))
export default GetOffset
