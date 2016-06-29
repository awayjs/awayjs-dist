"use strict";
var BitmapImage2D_1 = require("@awayjs/core/lib/image/BitmapImage2D");
var Rectangle_1 = require("@awayjs/core/lib/geom/Rectangle");
var URLLoader_1 = require("@awayjs/core/lib/net/URLLoader");
var URLLoaderDataFormat_1 = require("@awayjs/core/lib/net/URLLoaderDataFormat");
var URLRequest_1 = require("@awayjs/core/lib/net/URLRequest");
var LoaderEvent_1 = require("@awayjs/core/lib/events/LoaderEvent");
var ParserUtils_1 = require("@awayjs/core/lib/parsers/ParserUtils");
var Debug_1 = require("@awayjs/core/lib/utils/Debug");
var Single2DTexture_1 = require("awayjs-display/lib/textures/Single2DTexture");
var Single2DTextureTest = (function () {
    function Single2DTextureTest() {
        //---------------------------------------
        // Load a PNG
        var _this = this;
        var mipUrlRequest = new URLRequest_1.default('assets/1024x1024.png');
        this.mipLoader = new URLLoader_1.default();
        this.mipLoader.dataFormat = URLLoaderDataFormat_1.default.BLOB;
        this.mipLoader.load(mipUrlRequest);
        this.mipLoader.addEventListener(LoaderEvent_1.default.LOAD_COMPLETE, function (event) { return _this.mipImgLoaded(event); });
    }
    Single2DTextureTest.prototype.mipImgLoaded = function (event) {
        var _this = this;
        var loader = event.target;
        var image = ParserUtils_1.default.blobToImage(loader.data);
        image.onload = function (event) { return _this.onImageLoad(event); };
    };
    Single2DTextureTest.prototype.onImageLoad = function (event) {
        var image = event.target;
        var rect = new Rectangle_1.default(0, 0, image.width, image.height);
        console.log('LoaderEvent', image);
        this.bitmapData = new BitmapImage2D_1.default(image.width, image.height);
        this.bitmapData.draw(image);
        this.target = new Single2DTexture_1.default(this.bitmapData);
        Debug_1.default.log('BitmapImage2D', this.bitmapData);
        Debug_1.default.log('Single2DTexture', this.target);
    };
    return Single2DTextureTest;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHR1cmVzL1NpbmdsZTJEVGV4dHVyZVRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDhCQUEyQixxQ0FBcUMsQ0FBQyxDQUFBO0FBQ2pFLDBCQUF3QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ3pELDBCQUF3QiwrQkFBK0IsQ0FBQyxDQUFBO0FBQ3hELG9DQUFnQyx5Q0FBeUMsQ0FBQyxDQUFBO0FBQzFFLDJCQUF5QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzFELDRCQUEwQixvQ0FBb0MsQ0FBQyxDQUFBO0FBQy9ELDRCQUEwQixxQ0FBcUMsQ0FBQyxDQUFBO0FBQ2hFLHNCQUFxQiw2QkFBNkIsQ0FBQyxDQUFBO0FBRW5ELGdDQUE2Qiw2Q0FBNkMsQ0FBQyxDQUFBO0FBRTNFO0lBTUM7UUFFQyx5Q0FBeUM7UUFDekMsYUFBYTtRQVRmLGlCQTJDQztRQWhDQyxJQUFJLGFBQWEsR0FBRyxJQUFJLG9CQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsU0FBUyxHQUFJLElBQUksbUJBQVMsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLDZCQUFtQixDQUFDLElBQUksQ0FBQztRQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLHFCQUFXLENBQUMsYUFBYSxFQUFFLFVBQUMsS0FBaUIsSUFBSyxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQztJQUU3RyxDQUFDO0lBRU8sMENBQVksR0FBcEIsVUFBcUIsS0FBaUI7UUFBdEMsaUJBTUM7UUFIQSxJQUFJLE1BQU0sR0FBYSxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3BDLElBQUksS0FBSyxHQUFvQixxQkFBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEUsS0FBSyxDQUFDLE1BQU0sR0FBRyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCLENBQUM7SUFDbkQsQ0FBQztJQUVPLHlDQUFXLEdBQW5CLFVBQW9CLEtBQUs7UUFFeEIsSUFBSSxLQUFLLEdBQXVDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFFN0QsSUFBSSxJQUFJLEdBQWEsSUFBSSxtQkFBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHVCQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHlCQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRW5ELGVBQUssQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QyxlQUFLLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0YsMEJBQUM7QUFBRCxDQTNDQSxBQTJDQyxJQUFBIiwiZmlsZSI6InRleHR1cmVzL1NpbmdsZTJEVGV4dHVyZVRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQml0bWFwSW1hZ2UyRFx0XHRmcm9tIFwiYXdheWpzLWNvcmUvbGliL2ltYWdlL0JpdG1hcEltYWdlMkRcIjtcbmltcG9ydCBSZWN0YW5nbGVcdFx0XHRmcm9tIFwiYXdheWpzLWNvcmUvbGliL2dlb20vUmVjdGFuZ2xlXCI7XG5pbXBvcnQgVVJMTG9hZGVyXHRcdFx0ZnJvbSBcImF3YXlqcy1jb3JlL2xpYi9uZXQvVVJMTG9hZGVyXCI7XG5pbXBvcnQgVVJMTG9hZGVyRGF0YUZvcm1hdFx0ZnJvbSBcImF3YXlqcy1jb3JlL2xpYi9uZXQvVVJMTG9hZGVyRGF0YUZvcm1hdFwiO1xuaW1wb3J0IFVSTFJlcXVlc3RcdFx0XHRmcm9tIFwiYXdheWpzLWNvcmUvbGliL25ldC9VUkxSZXF1ZXN0XCI7XG5pbXBvcnQgTG9hZGVyRXZlbnRcdFx0XHRmcm9tIFwiYXdheWpzLWNvcmUvbGliL2V2ZW50cy9Mb2FkZXJFdmVudFwiO1xuaW1wb3J0IFBhcnNlclV0aWxzXHRcdFx0ZnJvbSBcImF3YXlqcy1jb3JlL2xpYi9wYXJzZXJzL1BhcnNlclV0aWxzXCI7XG5pbXBvcnQgRGVidWdcdFx0XHRcdGZyb20gXCJhd2F5anMtY29yZS9saWIvdXRpbHMvRGVidWdcIjtcblxuaW1wb3J0IFNpbmdsZTJEVGV4dHVyZVx0XHRmcm9tIFwiYXdheWpzLWRpc3BsYXkvbGliL3RleHR1cmVzL1NpbmdsZTJEVGV4dHVyZVwiO1xuXG5jbGFzcyBTaW5nbGUyRFRleHR1cmVUZXN0XG57XG5cdHByaXZhdGUgbWlwTG9hZGVyOlVSTExvYWRlcjtcblx0cHJpdmF0ZSBiaXRtYXBEYXRhOkJpdG1hcEltYWdlMkQ7XG5cdHByaXZhdGUgdGFyZ2V0OlNpbmdsZTJEVGV4dHVyZTtcblxuXHRjb25zdHJ1Y3RvcigpXG5cdHtcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIExvYWQgYSBQTkdcblxuXHRcdHZhciBtaXBVcmxSZXF1ZXN0ID0gbmV3IFVSTFJlcXVlc3QoJ2Fzc2V0cy8xMDI0eDEwMjQucG5nJyk7XG5cdFx0dGhpcy5taXBMb2FkZXIgID0gbmV3IFVSTExvYWRlcigpO1xuXHRcdHRoaXMubWlwTG9hZGVyLmRhdGFGb3JtYXQgPSBVUkxMb2FkZXJEYXRhRm9ybWF0LkJMT0I7XG5cdFx0dGhpcy5taXBMb2FkZXIubG9hZChtaXBVcmxSZXF1ZXN0KTtcblx0XHR0aGlzLm1pcExvYWRlci5hZGRFdmVudExpc3RlbmVyKExvYWRlckV2ZW50LkxPQURfQ09NUExFVEUsIChldmVudDpMb2FkZXJFdmVudCkgPT4gdGhpcy5taXBJbWdMb2FkZWQoZXZlbnQpKTtcblxuXHR9XG5cblx0cHJpdmF0ZSBtaXBJbWdMb2FkZWQoZXZlbnQ6TG9hZGVyRXZlbnQpXG5cdHtcblxuXHRcdHZhciBsb2FkZXI6VVJMTG9hZGVyID0gZXZlbnQudGFyZ2V0O1xuXHRcdHZhciBpbWFnZTpIVE1MSW1hZ2VFbGVtZW50ID0gUGFyc2VyVXRpbHMuYmxvYlRvSW1hZ2UobG9hZGVyLmRhdGEpO1xuXHRcdGltYWdlLm9ubG9hZCA9IChldmVudCkgPT4gdGhpcy5vbkltYWdlTG9hZChldmVudCk7XG5cdH1cblxuXHRwcml2YXRlIG9uSW1hZ2VMb2FkKGV2ZW50KVxuXHR7XG5cdFx0dmFyIGltYWdlOkhUTUxJbWFnZUVsZW1lbnQgPSA8SFRNTEltYWdlRWxlbWVudD4gZXZlbnQudGFyZ2V0O1xuXG5cdFx0dmFyIHJlY3Q6UmVjdGFuZ2xlID0gbmV3IFJlY3RhbmdsZSgwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcblxuXHRcdGNvbnNvbGUubG9nKCdMb2FkZXJFdmVudCcsIGltYWdlKTtcblxuXHRcdHRoaXMuYml0bWFwRGF0YSA9IG5ldyBCaXRtYXBJbWFnZTJEKGltYWdlLndpZHRoICwgaW1hZ2UuaGVpZ2h0KTtcblx0XHR0aGlzLmJpdG1hcERhdGEuZHJhdyhpbWFnZSk7XG5cblx0XHR0aGlzLnRhcmdldCA9IG5ldyBTaW5nbGUyRFRleHR1cmUodGhpcy5iaXRtYXBEYXRhKTtcblxuXHRcdERlYnVnLmxvZygnQml0bWFwSW1hZ2UyRCcsIHRoaXMuYml0bWFwRGF0YSk7XG5cdFx0RGVidWcubG9nKCdTaW5nbGUyRFRleHR1cmUnLCB0aGlzLnRhcmdldCk7XG5cdH1cbn0iXSwic291cmNlUm9vdCI6Ii4vdGVzdHMifQ==