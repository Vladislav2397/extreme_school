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
var Resize = /** @class */ (function (_super) {
    __extends(Resize, _super)
    function Resize() {
        var _this = _super !== null && _super.apply(this, arguments) || this
        _this.resize = {
            prevWidth: null,
            currentWidth: null,
            callback: null
        }
        return _this
    }
    Resize.prototype.addResizeWidthEvent = function (callback) {
        this.getResizeWidth()
        this.resize.callback = callback
        window.addEventListener('resize', this.onWindowWidthResize)
    }
    Resize.prototype.removeResizeWidthEvent = function () {
        window.removeEventListener('resize', this.onWindowWidthResize)
    }
    Resize.prototype.onWindowWidthResize = function () {
        this.resize.prevWidth = this.resize.currentWidth
        this.resize.currentWidth = window.innerWidth
        if (this.resize.prevWidth !== this.resize.currentWidth) {
            this.resize.callback()
        }
    }
    Resize.prototype.getResizeWidth = function () {
        this.resize.currentWidth = window.innerWidth
        this.resize.prevWidth = window.innerWidth
    }
    Resize = __decorate([
        Component
    ], Resize)
    return Resize
}(Vue))
export default Resize
