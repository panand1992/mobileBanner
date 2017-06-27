(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['nbMobileBanner'], factory);
    } else {
        // Browser globals
        root.nbMobileBanner = factory(root.options);
    }
}(window, function(options) {

    var nbMobileBanner = {

		initialize : function(options){
			
		}
    }

    return nbMobileBanner;

}));
