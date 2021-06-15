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
var IsAnyElementInViewport = /** @class */ (function (_super) {
    __extends(IsAnyElementInViewport, _super)
    function IsAnyElementInViewport() {
        return _super !== null && _super.apply(this, arguments) || this
    }
    IsAnyElementInViewport.prototype.isAnyElementInViewport = function (el) {
        var rect = el.getBoundingClientRect()
        // DOMRect { x: 8, y: 8, width: 100, height: 100, top: 8, right: 108, bottom: 108, left: 8 }
        var windowHeight = (window.innerHeight || document.documentElement.clientHeight)
        var windowWidth = (window.innerWidth || document.documentElement.clientWidth)
        // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
        var vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0)
        var horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0)
        return (vertInView && horInView)
    }
    IsAnyElementInViewport = __decorate([
        Component
    ], IsAnyElementInViewport)
    return IsAnyElementInViewport
}(Vue))
export default IsAnyElementInViewport
