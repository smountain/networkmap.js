var networkMap = networkMap || {};

networkMap.path = function(svg){
	return svg.path().attr({ 
		fill: 'none',
		stroke: '#000'
	});
};

/* Extending Mootools functionality */

Array.implement('find', function(fn){
	for (var i = 0; i < this.length; i++){
		if (fn.call(this, this[i], i, this)) 
			return this[i];
	}
});

networkMap.isFunction = function(f){
	var getType = {};
	return f && getType.toString.call(f) === '[object Function]';
};