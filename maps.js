//Copyright © 2013 Austin Dizzy <dizzy@wow.com>
//This work is free. You can redistribute it and/or modify it under the
//terms of the Do What The Fuck You Want To Public License, Version 2,
//as published by Sam Hocevar. See LICENSE file for more details.

$(function(){

	$.noConflict();

	var mapStuff;

	jQuery(".NavBar_modeSelectorControlContainer").append("<a href='#' class='NavBar_button NavBar_toolButton btn tb' target='_blank' id='mapsToGoogleThingy' style='width: auto;'>Open in Google Maps</a>");

	jQuery(document).bind("mousewheel wheel DOMMouseScroll.zoom click load",function(){
		mapStuff = jQuery.parseJSON(document.getElementById("MapControl_MapControl").value.replace(/'/g, "\""));
		console.log(mapStuff);
		
		jQuery("#mapsToGoogleThingy").attr("href", "https://maps.google.com/maps?t=m&ll="+mapStuff.C.Latitude+"%2C"+mapStuff.C.Longitude+"&z="+mapStuff.Z+((jQuery(".infobox-title").text() || jQuery("#srchstitle").text()) ? "&q="+(jQuery(".infobox-title").clone().children().remove().end().text() || jQuery("#srchstitle").text()) : ""));
	});

	jQuery("#mapsToGoogleThingy").click(function(){
		jQuery(this).attr("href", "https://maps.google.com/maps?t=m&ll="+mapStuff.C.Latitude+"%2C"+mapStuff.C.Longitude+"&z="+mapStuff.Z+((jQuery(".infobox-title").text() || jQuery("#srchstitle").text()) ? "&q="+(jQuery(".infobox-title").clone().children().remove().end().text() || jQuery("#srchstitle").text()) : ""));
		var a = jQuery("<a>").attr("href", jQuery(this).attr("href")).attr("target", "_blank").appendTo("body");
        	a[0].click();
        	a[0].remove();
	});
});
