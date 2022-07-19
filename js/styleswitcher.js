/**	STYLE SWITCHER
 *************************************************** **/
jQuery(document).ready(function() {
    "use strict";

    jQuery("#hideSwitcher, #showSwitcher").click(function() {

        if (jQuery("#showSwitcher").is(":visible")) {

            var _identifier = "#showSwitcher";
            jQuery("#switcher").animate({
                "margin-left": "0px"
            }, 500).show();
            createCookie("switcher_visible", 'true', 365);

        } else {

            var _identifier = "#switcher";
            jQuery("#showSwitcher").show().animate({
                "margin-left": "0"
            }, 500);
            createCookie("switcher_visible", 'false', 365);

        }

        jQuery(_identifier).animate({
            "margin-left": "-500px"
        }, 500, function() {
            jQuery(this).hide();
        });

    });

});
var docean = $('#3docean');
var activeden = $('#activeden');
var audiojungle = $('#audiojungle');
var codecanyon = $('#codecanyon');
var graphicriver = $('#graphicriver');
var themeforest = $('#themeforest');
var photodune = $('#photodune');
$('#is_dark').on('click', function() {
    if (docean.length) {
        document.getElementById('3docean').src = 'img/logos-slider/3docean-dark-background.png';
    }
    if (activeden.length) {
        document.getElementById('activeden').src = 'img/logos-slider/activeden-dark-background.png';
    }
    if (audiojungle.length) {
        document.getElementById('audiojungle').src = 'img/logos-slider/audiojungle-dark-background.png';
    }
    if (codecanyon.length) {
        document.getElementById('codecanyon').src = 'img/logos-slider/codecanyon-dark-background.png';
    }
    if (graphicriver.length) {
        document.getElementById('graphicriver').src = 'img/logos-slider/graphicriver-dark-background.png';
    }
    if (photodune.length) {
        document.getElementById('photodune').src = 'img/logos-slider/photodune-dark-background.png';
    }
    if (themeforest.length) {
        document.getElementById('themeforest').src = 'img/logos-slider/themeforest-dark-background.png';
    }
});
$('#is_light').on('click', function() {
    if (docean.length) {
        document.getElementById('3docean').src = 'img/logos-slider/3docean-light-background.png';
    }
    if (activeden.length) {
        document.getElementById('activeden').src = 'img/logos-slider/activeden-light-background.png';
    }
    if (audiojungle.length) {
        document.getElementById('audiojungle').src = 'img/logos-slider/audiojungle-light-background.png';
    }
    if (codecanyon.length) {
        document.getElementById('codecanyon').src = 'img/logos-slider/codecanyon-light-background.png';
    }
    if (graphicriver.length) {
        document.getElementById('graphicriver').src = 'img/logos-slider/graphicriver-light-background.png';
    }
    if (photodune.length) {
        document.getElementById('photodune').src = 'img/logos-slider/photodune-light-background.png';
    }
    if (themeforest.length) {
        document.getElementById('themeforest').src = 'img/logos-slider/themeforest-light-background.png';
    }
});

function setActiveStyleSheet(title) {
    var i, a, main;
    for (i = 0;
        (a = document.getElementsByTagName("link")[i]); i++) {
        if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
            a.disabled = true;
            if (a.getAttribute("title") == title) {
                a.disabled = false;
            }
        }
    }

    // DARK SKIN
    var color_skin = readCookie('color_skin');
    if (color_skin == 'dark') {
        jQuery("#css_dark_skin").remove();
        jQuery("head").append('<link id="css_dark_skin" href="assets/css/layout-dark.css" rel="stylesheet" type="text/css" title="dark" />');
        jQuery("#is_dark").trigger('click');
        jQuery("a.logo img").attr('src', 'assets/images/logo_dark.png');
    }
}

function getActiveStyleSheet() {
    var i, a;
    for (i = 0;
        (a = document.getElementsByTagName("link")[i]); i++) {
        if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) {
            return a.getAttribute("title");
        }
    }

    return null;
}

function getPreferredStyleSheet() {
    var i, a;
    for (i = 0;
        (a = document.getElementsByTagName("link")[i]); i++) {
        if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("rel").indexOf("alt") == -1 && a.getAttribute("title")) {
            return a.getAttribute("title");
        }
    }

    return null;
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + ";";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }

        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }

    return null;
}


/** ********************************************************************************************************** **/
/** ********************************************************************************************************** **/
/** ********************************************************************************************************** **/

/**
	@ON LOAD
**/
window.onload = function(e) {

    // COLOR SCHEME
    var cookie = readCookie("style");
    var title = cookie ? cookie : getPreferredStyleSheet();
    setActiveStyleSheet(title);

    // SWITCHER OPEN|CLOSED
    var switcher_visible = 'false';
    if (switcher_visible != 'false') {
        jQuery("#showSwitcher").trigger('click');
    }

    // DARK OR LIGHT
    var is_dark = readCookie('is_dark');
    if (is_boxed == 'true') {
        jQuery('body').removeClass('dark');
        jQuery('body').addClass('dark');
        jQuery("#is_dark").trigger('click');
    }

    // BOXED or WIDE
    var is_boxed = readCookie('is_boxed');
    if (is_boxed == 'true') {
        jQuery('body').removeClass('boxed');
        jQuery('body').addClass('boxed');
        jQuery("#is_boxed").trigger('click');
    }

}


/**
	COLOR SKIN [light|dark]
**/
jQuery("input.dark_switch").bind("click", function() {
    var boxed_switch = jQuery(this).attr('value');

    if (boxed_switch == 'dark') {
        jQuery("body").removeClass('dark');
        jQuery("body").addClass('dark');
        createCookie("is_dark", 'true', 365);
    } else {
        jQuery("body").removeClass('dark');
        createCookie("is_dark", '', -1);
        jQuery('body').removeClass('transparent');
    }
});





/**
	LAYOUT STYLE [wide|boxed]
**/
jQuery("input.boxed_switch").bind("click", function() {
    var boxed_switch = jQuery(this).attr('value');

    if (boxed_switch == 'boxed') {
        jQuery("body").removeClass('boxed');
        jQuery("body").addClass('boxed');
        // createCookie("is_boxed", 'true', 365);
    } else {
        jQuery("body").removeClass('boxed');
        // createCookie("is_boxed", '', -1);
        jQuery('body').removeClass('transparent');
    }
});



/**
	SEPARATOR STYLE [Normal|Skew|Reversed Skew|Double Diagonal|Big Triangle]
**/
jQuery("input.separator_switch").bind("click", function() {
    var separator_switch = jQuery(this).attr('value');

    if (separator_switch == 'skew') {
        jQuery("body").removeClass('reversed-skew');
        jQuery("body").removeClass('double-diagonal');
        jQuery("body").removeClass('big-triangle');
        jQuery("body").removeClass('normal');
        jQuery("body").addClass('skew');
        createCookie("is_skew", 'true', 365);
    } else if (separator_switch == 'reversed-skew') {
        jQuery("body").removeClass('skew');
        jQuery("body").removeClass('double-diagonal');
        jQuery("body").removeClass('big-triangle');
        jQuery("body").removeClass('normal');
        jQuery("body").addClass('reversed-skew');
        createCookie("is_reversed_skew", 'true', 365);
    } else if (separator_switch == 'double-diagonal') {
        jQuery("body").removeClass('skew');
        jQuery("body").removeClass('reversed-skew');
        jQuery("body").removeClass('big-triangle');
        jQuery("body").removeClass('normal');
        jQuery("body").addClass('double-diagonal');
        createCookie("is_double_diagonal", 'true', 365);
    } else if (separator_switch == 'big-triangle') {
        jQuery("body").removeClass('skew');
        jQuery("body").removeClass('reversed-skew');
        jQuery("body").removeClass('double-diagonal');
        jQuery("body").removeClass('normal');
        jQuery("body").addClass('big-triangle');
        createCookie("is_big_triangle", 'true', 365);
    } else {
        jQuery("body").removeClass('skew');
        jQuery("body").removeClass('reversed-skew');
        jQuery("body").removeClass('double-diagonal');
        jQuery("body").removeClass('big-triangle');
        jQuery("body").addClass('normal');
        createCookie("is_big_triangle", 'true', 365);
    }
});