var L11_Canvas;
(function (L11_Canvas) {
    var objekte = (function () {
        function objekte() {
        }
        objekte.prototype.paint = function () {
            this.WasserSand(260); //Wasser und sand
            this.Stein(-190, 450); //Stein links mittig
            this.Kiste(259, 410, 70, 30); //Kiste rechts mittig
            this.Deckel(260, 410); //DeckelSchatztruhe mittig
            this.Wasserpflanze1(20, 480); //Wasserpflanzen links unten
            this.Wasserpflanze2(40, 470);
            this.Wasserpflanze3(60, 490);
            this.Wasserpflanze4(85, 490);
            this.Wasserpflanze5(70, 462);
        };
        //----KISTE-------------------------------------------------------------------------
        objekte.prototype.Kiste = function (_x, _y, _width, _height) {
            L11_Canvas.crc2.fillStyle = "rgb(51,20,0)";
            L11_Canvas.crc2.fillRect(_x, _y, _width, _height);
        };
        //----DECKEL-------------------------------------------------------------------------
        objekte.prototype.Deckel = function (_x, _y) {
            L11_Canvas.crc2.beginPath();
            L11_Canvas.crc2.fillStyle = "rgb(51,20,0)";
            L11_Canvas.crc2.moveTo(_x, _y);
            L11_Canvas.crc2.bezierCurveTo(_x - 70, _y + 10, _x - 80, _y - 40, _x - 80, _y - 60);
            L11_Canvas.crc2.closePath();
            L11_Canvas.crc2.stroke();
            L11_Canvas.crc2.fill();
        };
        //----WASSER UND SAND-------------------------------------------------------------------------
        objekte.prototype.WasserSand = function (_sandHeight) {
            L11_Canvas.crc2.fillStyle = "rgb(135,  206, 235 )";
            L11_Canvas.crc2.fillRect(0, 0, L11_Canvas.crc2.canvas.width, L11_Canvas.crc2.canvas.height);
            L11_Canvas.crc2.fillStyle = "rgb(255, 228, 196)";
            L11_Canvas.crc2.fillRect(0, L11_Canvas.crc2.canvas.height - _sandHeight, L11_Canvas.crc2.canvas.width, L11_Canvas.crc2.canvas.height);
        };
        //----WASSERPFLANZEN-------------------------------------------------------------------------
        objekte.prototype.Wasserpflanze1 = function (_x, _y) {
            L11_Canvas.crc2.beginPath();
            L11_Canvas.crc2.fillStyle = "rgb(0, 100, 0)";
            L11_Canvas.crc2.moveTo(_x, _y);
            L11_Canvas.crc2.quadraticCurveTo(_x - 20, _y - 100, _x + 20, _y - 80);
            L11_Canvas.crc2.quadraticCurveTo(_x - 20, _y - 120, _x - 10, _y);
            L11_Canvas.crc2.lineTo(_x, _y);
            L11_Canvas.crc2.fill();
        };
        objekte.prototype.Wasserpflanze2 = function (_x, _y) {
            L11_Canvas.crc2.beginPath();
            L11_Canvas.crc2.fillStyle = "rgb(43, 139, 34)";
            L11_Canvas.crc2.moveTo(_x, _y);
            L11_Canvas.crc2.quadraticCurveTo(_x - 20, _y - 160, _x + 20, _y - 100);
            L11_Canvas.crc2.quadraticCurveTo(_x - 20, _y - 170, _x - 10, _y);
            L11_Canvas.crc2.lineTo(_x, _y);
            L11_Canvas.crc2.fill();
        };
        objekte.prototype.Wasserpflanze3 = function (_x, _y) {
            L11_Canvas.crc2.beginPath();
            L11_Canvas.crc2.fillStyle = "rgb(69, 139, 0)";
            L11_Canvas.crc2.moveTo(_x, _y);
            L11_Canvas.crc2.quadraticCurveTo(_x - 20, _y - 140, _x + 20, _y - 90);
            L11_Canvas.crc2.quadraticCurveTo(_x - 40, _y - 170, _x - 10, _y);
            L11_Canvas.crc2.lineTo(_x, _y);
            L11_Canvas.crc2.fill();
        };
        objekte.prototype.Wasserpflanze4 = function (_x, _y) {
            L11_Canvas.crc2.beginPath();
            L11_Canvas.crc2.fillStyle = "rgb(0, 205, 0)";
            L11_Canvas.crc2.moveTo(_x, _y);
            L11_Canvas.crc2.quadraticCurveTo(_x - 20, _y - 160, _x + 20, _y - 100);
            L11_Canvas.crc2.quadraticCurveTo(_x - 20, _y - 170, _x - 10, _y);
            L11_Canvas.crc2.lineTo(_x, _y);
            L11_Canvas.crc2.fill();
        };
        objekte.prototype.Wasserpflanze5 = function (_x, _y) {
            L11_Canvas.crc2.beginPath();
            L11_Canvas.crc2.fillStyle = "rgb(110, 139, 61)";
            L11_Canvas.crc2.moveTo(_x, _y);
            L11_Canvas.crc2.quadraticCurveTo(_x - 20, _y - 160, _x + 20, _y - 100);
            L11_Canvas.crc2.quadraticCurveTo(_x - 20, _y - 190, _x - 5, _y);
            L11_Canvas.crc2.lineTo(_x, _y);
            L11_Canvas.crc2.fill();
        };
        //----STEIN-------------------------------------------------------------------------
        objekte.prototype.Stein = function (_x, _y) {
            L11_Canvas.crc2.beginPath();
            L11_Canvas.crc2.fillStyle = "rgb(64, 64, 64)";
            L11_Canvas.crc2.moveTo(_x, _y);
            L11_Canvas.crc2.lineTo(_x + 120, _y - 100);
            L11_Canvas.crc2.lineTo(_x + 150, _y - 140);
            L11_Canvas.crc2.lineTo(_x + 200, _y - 140);
            L11_Canvas.crc2.lineTo(_x + 200, _y - 140);
            L11_Canvas.crc2.lineTo(_x + 250, _y - 70);
            L11_Canvas.crc2.lineTo(_x + 300, _y - 40);
            L11_Canvas.crc2.lineTo(_x + 325, _y + 10);
            L11_Canvas.crc2.lineTo(_x + 175, _y + 10);
            L11_Canvas.crc2.lineTo(_x, _y);
            L11_Canvas.crc2.closePath();
            L11_Canvas.crc2.stroke();
            L11_Canvas.crc2.fill();
        };
        return objekte;
    }());
    L11_Canvas.objekte = objekte;
})(L11_Canvas || (L11_Canvas = {}));
//# sourceMappingURL=objekte.js.map