"use strict";
var URLLoader_1 = require("@awayjs/core/lib/net/URLLoader");
var URLLoaderDataFormat_1 = require("@awayjs/core/lib/net/URLLoaderDataFormat");
var URLRequest_1 = require("@awayjs/core/lib/net/URLRequest");
var URLLoaderEvent_1 = require("@awayjs/core/lib/events/URLLoaderEvent");
var ParserUtils_1 = require("@awayjs/core/lib/parsers/ParserUtils");
var IMGLoaderTest = (function () {
    function IMGLoaderTest() {
        //-----------------------------------------------------------------------------------------------
        // load a png
        //-----------------------------------------------------------------------------------------------
        var _this = this;
        this.pngLoader = new URLLoader_1.default();
        this.pngLoader.dataFormat = URLLoaderDataFormat_1.default.BLOB;
        this.pngLoader.addEventListener(URLLoaderEvent_1.default.LOAD_COMPLETE, function (event) { return _this.pngLoaderComplete(event); });
        this.pngLoader.addEventListener(URLLoaderEvent_1.default.LOAD_ERROR, function (event) { return _this.ioError(event); });
        this.pngLoader.load(new URLRequest_1.default('assets/2.png'));
        //-----------------------------------------------------------------------------------------------
        // Load a jpg
        //-----------------------------------------------------------------------------------------------
        this.jpgLoader = new URLLoader_1.default();
        this.jpgLoader.dataFormat = URLLoaderDataFormat_1.default.BLOB;
        this.jpgLoader.addEventListener(URLLoaderEvent_1.default.LOAD_COMPLETE, function (event) { return _this.jpgLoaderComplete(event); });
        this.jpgLoader.addEventListener(URLLoaderEvent_1.default.LOAD_ERROR, function (event) { return _this.ioError(event); });
        this.jpgLoader.load(new URLRequest_1.default('assets/1.jpg'));
        //-----------------------------------------------------------------------------------------------
        // Load file of wrong format
        //-----------------------------------------------------------------------------------------------
        this.noAnImageLoader = new URLLoader_1.default();
        this.noAnImageLoader.dataFormat = URLLoaderDataFormat_1.default.BLOB;
        this.noAnImageLoader.addEventListener(URLLoaderEvent_1.default.LOAD_COMPLETE, function (event) { return _this.noAnImageLoaderComplete(event); });
        this.noAnImageLoader.addEventListener(URLLoaderEvent_1.default.LOAD_ERROR, function (event) { return _this.ioError(event); });
        this.noAnImageLoader.load(new URLRequest_1.default('assets/data.txt'));
        //-----------------------------------------------------------------------------------------------
        // Load image that does not exist
        //-----------------------------------------------------------------------------------------------
        this.wrongURLLoader = new URLLoader_1.default();
        this.wrongURLLoader.dataFormat = URLLoaderDataFormat_1.default.BLOB;
        this.wrongURLLoader.addEventListener(URLLoaderEvent_1.default.LOAD_COMPLETE, function (event) { return _this.wrongURLLoaderComplete(event); });
        this.wrongURLLoader.addEventListener(URLLoaderEvent_1.default.LOAD_ERROR, function (event) { return _this.ioError(event); });
        this.wrongURLLoader.load(new URLRequest_1.default('assets/iDontExist.png'));
    }
    IMGLoaderTest.prototype.pngLoaderComplete = function (e) {
        this.logSuccessfullLoad(e);
        var imgLoader = e.target;
        document.body.appendChild(ParserUtils_1.default.blobToImage(imgLoader.data));
    };
    IMGLoaderTest.prototype.jpgLoaderComplete = function (e) {
        this.logSuccessfullLoad(e);
        var imgLoader = e.target;
        document.body.appendChild(ParserUtils_1.default.blobToImage(imgLoader.data));
    };
    IMGLoaderTest.prototype.noAnImageLoaderComplete = function (e) {
        this.logSuccessfullLoad(e);
    };
    IMGLoaderTest.prototype.wrongURLLoaderComplete = function (e) {
        this.logSuccessfullLoad(e);
    };
    IMGLoaderTest.prototype.logSuccessfullLoad = function (event) {
        var imgLoader = event.target;
        console.log('IMG.Event.Complete', imgLoader.url);
    };
    IMGLoaderTest.prototype.ioError = function (event) {
        var imgLoader = event.target;
        console.log('ioError', imgLoader.url);
    };
    IMGLoaderTest.prototype.abortError = function (event) {
        var imgLoader = event.target;
        console.log('abortError', imgLoader.url);
    };
    return IMGLoaderTest;
}());

//# sourceMappingURL=data:application/json;base64,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LEdBQTlCLFVBQStCLENBQWdCO1FBRTlDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU8sMENBQWtCLEdBQTFCLFVBQTJCLEtBQW9CO1FBRTlDLElBQUksU0FBUyxHQUFhLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVPLCtCQUFPLEdBQWYsVUFBZ0IsS0FBb0I7UUFFbkMsSUFBSSxTQUFTLEdBQWEsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVPLGtDQUFVLEdBQWxCLFVBQW1CLEtBQW9CO1FBRXRDLElBQUksU0FBUyxHQUFhLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRixvQkFBQztBQUFELENBOUZBLEFBOEZDLElBQUEiLCJmaWxlIjoibmV0L0lNR0xvYWRlclRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVVJMTG9hZGVyXHRcdFx0ZnJvbSBcImF3YXlqcy1jb3JlL2xpYi9uZXQvVVJMTG9hZGVyXCI7XG5pbXBvcnQgVVJMTG9hZGVyRGF0YUZvcm1hdFx0ZnJvbSBcImF3YXlqcy1jb3JlL2xpYi9uZXQvVVJMTG9hZGVyRGF0YUZvcm1hdFwiO1xuaW1wb3J0IFVSTFJlcXVlc3RcdFx0XHRmcm9tIFwiYXdheWpzLWNvcmUvbGliL25ldC9VUkxSZXF1ZXN0XCI7XG5pbXBvcnQgVVJMTG9hZGVyRXZlbnRcdFx0ZnJvbSBcImF3YXlqcy1jb3JlL2xpYi9ldmVudHMvVVJMTG9hZGVyRXZlbnRcIjtcbmltcG9ydCBQYXJzZXJVdGlsc1x0XHRcdGZyb20gXCJhd2F5anMtY29yZS9saWIvcGFyc2Vycy9QYXJzZXJVdGlsc1wiO1xuXG5jbGFzcyBJTUdMb2FkZXJUZXN0XG57XG5cdHByaXZhdGUgcG5nTG9hZGVyOlVSTExvYWRlcjtcblx0cHJpdmF0ZSBqcGdMb2FkZXI6VVJMTG9hZGVyO1xuXHRwcml2YXRlIG5vQW5JbWFnZUxvYWRlcjpVUkxMb2FkZXI7XG5cdHByaXZhdGUgd3JvbmdVUkxMb2FkZXI6VVJMTG9hZGVyO1xuXG5cdGNvbnN0cnVjdG9yKClcblx0e1xuXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIGxvYWQgYSBwbmdcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0XG5cdFx0dGhpcy5wbmdMb2FkZXIgPSBuZXcgVVJMTG9hZGVyKCk7XG5cdFx0dGhpcy5wbmdMb2FkZXIuZGF0YUZvcm1hdCA9IFVSTExvYWRlckRhdGFGb3JtYXQuQkxPQjtcblx0XHR0aGlzLnBuZ0xvYWRlci5hZGRFdmVudExpc3RlbmVyKFVSTExvYWRlckV2ZW50LkxPQURfQ09NUExFVEUsIChldmVudDpVUkxMb2FkZXJFdmVudCkgPT4gdGhpcy5wbmdMb2FkZXJDb21wbGV0ZShldmVudCkpO1xuXHRcdHRoaXMucG5nTG9hZGVyLmFkZEV2ZW50TGlzdGVuZXIoVVJMTG9hZGVyRXZlbnQuTE9BRF9FUlJPUiwgKGV2ZW50OlVSTExvYWRlckV2ZW50KSA9PiB0aGlzLmlvRXJyb3IoZXZlbnQpKTtcblx0XHR0aGlzLnBuZ0xvYWRlci5sb2FkKG5ldyBVUkxSZXF1ZXN0KCdhc3NldHMvMi5wbmcnKSk7XG5cblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gTG9hZCBhIGpwZ1xuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcblx0XHR0aGlzLmpwZ0xvYWRlciA9IG5ldyBVUkxMb2FkZXIoKTtcblx0XHR0aGlzLmpwZ0xvYWRlci5kYXRhRm9ybWF0ID0gVVJMTG9hZGVyRGF0YUZvcm1hdC5CTE9CO1xuXHRcdHRoaXMuanBnTG9hZGVyLmFkZEV2ZW50TGlzdGVuZXIoVVJMTG9hZGVyRXZlbnQuTE9BRF9DT01QTEVURSwgKGV2ZW50OlVSTExvYWRlckV2ZW50KSA9PiB0aGlzLmpwZ0xvYWRlckNvbXBsZXRlKGV2ZW50KSk7XG5cdFx0dGhpcy5qcGdMb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcihVUkxMb2FkZXJFdmVudC5MT0FEX0VSUk9SLCAoZXZlbnQ6VVJMTG9hZGVyRXZlbnQpID0+IHRoaXMuaW9FcnJvcihldmVudCkpO1xuXHRcdHRoaXMuanBnTG9hZGVyLmxvYWQobmV3IFVSTFJlcXVlc3QoJ2Fzc2V0cy8xLmpwZycpKTtcblxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBMb2FkIGZpbGUgb2Ygd3JvbmcgZm9ybWF0XG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdFxuXHRcdHRoaXMubm9BbkltYWdlTG9hZGVyID0gbmV3IFVSTExvYWRlcigpO1xuXHRcdHRoaXMubm9BbkltYWdlTG9hZGVyLmRhdGFGb3JtYXQgPSBVUkxMb2FkZXJEYXRhRm9ybWF0LkJMT0I7XG5cdFx0dGhpcy5ub0FuSW1hZ2VMb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcihVUkxMb2FkZXJFdmVudC5MT0FEX0NPTVBMRVRFLCAoZXZlbnQ6VVJMTG9hZGVyRXZlbnQpID0+IHRoaXMubm9BbkltYWdlTG9hZGVyQ29tcGxldGUoZXZlbnQpKTtcblx0XHR0aGlzLm5vQW5JbWFnZUxvYWRlci5hZGRFdmVudExpc3RlbmVyKFVSTExvYWRlckV2ZW50LkxPQURfRVJST1IsIChldmVudDpVUkxMb2FkZXJFdmVudCkgPT4gdGhpcy5pb0Vycm9yKGV2ZW50KSk7XG5cdFx0dGhpcy5ub0FuSW1hZ2VMb2FkZXIubG9hZChuZXcgVVJMUmVxdWVzdCgnYXNzZXRzL2RhdGEudHh0JykpO1xuXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIExvYWQgaW1hZ2UgdGhhdCBkb2VzIG5vdCBleGlzdFxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHRcblx0XHR0aGlzLndyb25nVVJMTG9hZGVyID0gbmV3IFVSTExvYWRlcigpO1xuXHRcdHRoaXMud3JvbmdVUkxMb2FkZXIuZGF0YUZvcm1hdCA9IFVSTExvYWRlckRhdGFGb3JtYXQuQkxPQjtcblx0XHR0aGlzLndyb25nVVJMTG9hZGVyLmFkZEV2ZW50TGlzdGVuZXIoVVJMTG9hZGVyRXZlbnQuTE9BRF9DT01QTEVURSwgKGV2ZW50OlVSTExvYWRlckV2ZW50KSA9PiB0aGlzLndyb25nVVJMTG9hZGVyQ29tcGxldGUoZXZlbnQpKTtcblx0XHR0aGlzLndyb25nVVJMTG9hZGVyLmFkZEV2ZW50TGlzdGVuZXIoVVJMTG9hZGVyRXZlbnQuTE9BRF9FUlJPUiwgKGV2ZW50OlVSTExvYWRlckV2ZW50KSA9PiB0aGlzLmlvRXJyb3IoZXZlbnQpKTtcblx0XHR0aGlzLndyb25nVVJMTG9hZGVyLmxvYWQobmV3IFVSTFJlcXVlc3QoJ2Fzc2V0cy9pRG9udEV4aXN0LnBuZycpKTtcblx0fVxuXG5cdHByaXZhdGUgcG5nTG9hZGVyQ29tcGxldGUoZTpVUkxMb2FkZXJFdmVudClcblx0e1xuXHRcdHRoaXMubG9nU3VjY2Vzc2Z1bGxMb2FkKGUpO1xuXHRcdFxuXHRcdHZhciBpbWdMb2FkZXI6VVJMTG9hZGVyID0gZS50YXJnZXQ7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChQYXJzZXJVdGlscy5ibG9iVG9JbWFnZShpbWdMb2FkZXIuZGF0YSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBqcGdMb2FkZXJDb21wbGV0ZShlOlVSTExvYWRlckV2ZW50KVxuXHR7XG5cdFx0dGhpcy5sb2dTdWNjZXNzZnVsbExvYWQoZSk7XG5cblx0XHR2YXIgaW1nTG9hZGVyOlVSTExvYWRlciA9IGUudGFyZ2V0O1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoUGFyc2VyVXRpbHMuYmxvYlRvSW1hZ2UoaW1nTG9hZGVyLmRhdGEpKTtcblx0fVxuXG5cdHByaXZhdGUgbm9BbkltYWdlTG9hZGVyQ29tcGxldGUoZTpVUkxMb2FkZXJFdmVudClcblx0e1xuXHRcdHRoaXMubG9nU3VjY2Vzc2Z1bGxMb2FkKGUpO1xuXHR9XG5cblx0cHJpdmF0ZSB3cm9uZ1VSTExvYWRlckNvbXBsZXRlKGU6VVJMTG9hZGVyRXZlbnQpXG5cdHtcblx0XHR0aGlzLmxvZ1N1Y2Nlc3NmdWxsTG9hZChlKTtcblx0fVxuXG5cdHByaXZhdGUgbG9nU3VjY2Vzc2Z1bGxMb2FkKGV2ZW50OlVSTExvYWRlckV2ZW50KVxuXHR7XG5cdFx0dmFyIGltZ0xvYWRlcjpVUkxMb2FkZXIgPSBldmVudC50YXJnZXQ7XG5cdFx0Y29uc29sZS5sb2coJ0lNRy5FdmVudC5Db21wbGV0ZScsIGltZ0xvYWRlci51cmwpO1xuXHR9XG5cblx0cHJpdmF0ZSBpb0Vycm9yKGV2ZW50OlVSTExvYWRlckV2ZW50KVxuXHR7XG5cdFx0dmFyIGltZ0xvYWRlcjpVUkxMb2FkZXIgPSBldmVudC50YXJnZXQ7XG5cdFx0Y29uc29sZS5sb2coJ2lvRXJyb3InLCBpbWdMb2FkZXIudXJsKTtcblx0fVxuXG5cdHByaXZhdGUgYWJvcnRFcnJvcihldmVudDpVUkxMb2FkZXJFdmVudClcblx0e1xuXHRcdHZhciBpbWdMb2FkZXI6VVJMTG9hZGVyID0gZXZlbnQudGFyZ2V0O1xuXHRcdGNvbnNvbGUubG9nKCdhYm9ydEVycm9yJywgaW1nTG9hZGVyLnVybCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii4vdGVzdHMifQ==