var app = angular.module('HexToRgbConverter', []);

app.controller('convertController', function ($scope) {
	$scope.CallHexToRgb = function(hex_value){
		if(hex_value.length == 4 || hex_value.length == 7)
		{
		var wvalue = $scope.HexToRgb(hex_value);
		$scope.rgbValue = "rgb("+ wvalue.r + "," + wvalue.g + "," + wvalue.r + ")";
		}
	}

    $scope.HexToRgb = function (hex) {
    	var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
	        return r + r + g + g + b + b;
	    });

	    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	    return result ? {
	        r: parseInt(result[1], 16),
	        g: parseInt(result[2], 16),
	        b: parseInt(result[3], 16)
	    } : null;
    }

});