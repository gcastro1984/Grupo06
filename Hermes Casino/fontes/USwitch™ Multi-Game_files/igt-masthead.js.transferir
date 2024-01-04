$(function () {
    var width2 = $("body").width();
    if (width2 < 1200) {
        $("#igt-mobile-nav-show").click(function () {
            $(".igt-masthead-flyout-expanded").removeClass("igt-masthead-flyout-expanded").slideUp();
            $(this).toggleClass("mobile-nav-is-shown");
            $("body").toggleClass("igt-meganav-flyout-shown");
            if ($(this).hasClass("mobile-nav-is-shown")) {
                $("#igt-mobile-nav").delay(200).slideDown();
                $("#igt-masthead-flyout").addClass("igt-masthead-expanded");
                $(".subnav-header-child-pages-wrapper").removeClass("active");
                $(".subnav-header-child-pages-container").removeClass("show");
                $(".showingchild").removeClass("showingchild").parent().removeClass("hidingchildlink");
            } else {
                $("#igt-mobile-nav").delay(200).slideUp();
                $("#igt-masthead-flyout").removeClass("igt-masthead-expanded");
            }
        });

        $(".igt-mobile-nav-button").each(function () {
            var showTargetFlyout = $(this).attr("data-igt-mobile-nav-target");
            $(this).click(function () {
                $("#igt-masthead-flyout>div").slideUp();
                $(".subnav-header-child-pages-wrapper").removeClass("active").find(".showingchild").removeClass("showingchild");
                $(".subnav-header-child-pages-container").slideUp('fast');
                $(".subnav-header-child-pages-container").removeClass("show");
                $("#" + showTargetFlyout).addClass("igt-masthead-flyout-expanded").delay(200).slideDown('slow', 'swing');
            });
        });

        $("#igt-masthead-flyout button.back-to-main").each(function () {
            $(this).click(function () {
                $("#igt-masthead-flyout>div").removeClass("igt-masthead-flyout-expanded").slideUp();
                $(".subnav-header-child-pages-wrapper").removeClass("active").find(".showingchild").removeClass("showingchild");
                $(".subnav-header-child-pages-container").slideUp('fast');
                $(".subnav-header-child-pages-container").removeClass("show");
                $("#igt-mobile-nav").delay(200).slideDown('slow', 'swing');
                $(".subnav-header-link").slideUp('fast');
                $(".showingchild").removeClass("showingchild").parent().removeClass("hidingchildlink");
            });
        });

        $(".subnav-header-column.subnav-header-child-pages .subnav-header-child-pages-button").each(function () {
            $(this).click(function () {
                $(this).parent().toggleClass("hidingchildlink");
                $(this).toggleClass("showingchild");
            });
        });
    } else {
        $(".igt-masthead-main-links>a").each(function () {
            var igtLinkTarget = $(this).attr("data-igt-hover-flyout-target");
            $(this).hover(
                function () {
                    $("#igt-masthead-flyout>div").hide();
                    $(igtLinkTarget).slideDown('swing');
                    $(".igt-masthead-main-links>a.igt-main-nav-active").removeClass("igt-main-nav-active");
                    $(this).addClass("igt-main-nav-active");
                    $(".user-login-status-dropdown-links.showdropdown").removeClass("showdropdown");
                    $("#igt-masthead-flyout").removeClass("igt-not-showing-flyout");
                    var igtTopNavHeight = $("#igt-masthead-top").height();
                    var igtMainNavHeight = $("#igt-masthead-main-flyout").height();
                    var igtFlyoutHeight = $(igtLinkTarget).find(".igt-meganav-flyout-box").height();
                    var igtBlueBarHeight = igtTopNavHeight + igtMainNavHeight;
                    var igtMastheadTotalHeight = igtFlyoutHeight + igtBlueBarHeight;
                    $("#igt-masthead").attr("data-height", igtMastheadTotalHeight);
                    $("#igt-masthead-main-flyout").addClass("igt-masthead-expanded");
                    if (!$(this).hasClass("dropdown-toggle")) {
                        $("#igt-masthead-main-flyout").addClass("igt-not-showing-flyout");
                        $("#igt-masthead-main-flyout").removeClass("igt-masthead-expanded");
                        $("body.igt-meganav-flyout-shown").removeClass("igt-meganav-flyout-shown");
                    }
                },
                function () { }
            );
        });

        $("#igt-masthead, #igt-masthead-main-flyout").hover(function () { }, function () {
            $("#igt-masthead-flyout>div").hide();
            $(".igt-masthead-main-links>a").removeClass("igt-main-nav-active");
            $("#igt-masthead-flyout").addClass("igt-not-showing-flyout");
            $("#igt-masthead-main-flyout").removeClass("igt-masthead-expanded");
            $("body.igt-meganav-flyout-shown").removeClass("igt-meganav-flyout-shown");
        });

        $("#igt-masthead-top").hover(function () {
            $("#igt-masthead-flyout>div").hide();
            $(".igt-masthead-main-links>a").removeClass("igt-main-nav-active");
            $("#igt-masthead-flyout").addClass("igt-not-showing-flyout");
            $("#igt-masthead-main-flyout").removeClass("igt-masthead-expanded");
            $("body.igt-meganav-flyout-shown").removeClass("igt-meganav-flyout-shown");
        }, function () { });

        $(".user-login-status-dropdown>button").click(function () {
            $(this).next().toggleClass("showdropdown");
            $("#igt-masthead-top").toggleClass("showingdropdown");
            $(".igt-masthead-main-search").hide();
            $(".igt-masthead-main-menu").show();
            $(".igt-masthead-main-search-button").show();
            $("#igt-masthead-main").removeClass("showingsearch");
            $("#igt-masthead-flyout").addClass("igt-not-showing-flyout");
            $("#igt-masthead-main-flyout").removeClass("igt-masthead-expanded");
            $("body.igt-meganav-flyout-shown").removeClass("igt-meganav-flyout-shown");
        });

        $("#igt-masthead-main-flyout, #igt-masthead-top.showingdropdown, .content.scroll_area, .showingdropdown").click(function(){
            $("#igt-masthead-top .showdropdown").removeClass("showdropdown");
            $(this).removeClass("showingdropdown");
        });
    }

    $("#show-search-box").click(function () {
        $(".igt-masthead-main-search").show();
        $(".igt-masthead-main-menu").hide();
        $(".igt-masthead-main-search-button").hide();
        $("#igt-masthead-main").addClass("showingsearch");
        $("#igt-masthead-flyout>div").hide();
        $(".igt-masthead-main-links>a").removeClass("igt-main-nav-active");
        $("#igt-masthead-flyout").addClass("igt-not-showing-flyout");
        $("#igt-masthead-main-flyout").removeClass("igt-masthead-expanded");
        $("body.igt-meganav-flyout-shown").removeClass("igt-meganav-flyout-shown");
    });

    $("#hide-search-box").click(function () {
        $(".igt-masthead-main-search").hide();
        $(".igt-masthead-main-menu").show();
        $(".igt-masthead-main-search-button").show();
        $("#igt-masthead-main").removeClass("showingsearch");
        $("#igt-masthead-flyout").addClass("igt-not-showing-flyout");
        $("#igt-masthead-main-flyout").removeClass("igt-masthead-expanded");
        $("body.igt-meganav-flyout-shown").removeClass("igt-meganav-flyout-shown");
    });

    var width = $("body").width();
    if (width > 1200) {
        // nada
    }
});
//const { get, event } = require("jquery");
window.igtLoginLogout = function (options) {
	// Settings:
	const defaults = {
		loggedInUserFirstName: "",
		loginUrl: "",
		logoutUrl: "",
		createAccountUrl: "",
		yourProfileUrl: "",
	};
	const settings = $.extend({}, defaults, options);
	// Selectors:
	const $userFirstNameWrappers = $(".igt-user-first-name-wrapper");
	const $loginLinks = $("a.igt-login-link");
	const $logoutLinks = $("a.igt-logout-link");
	const $createAccountLinks = $("a.igt-create-account-link");
	const $yourProfileLinks = $("a.igt-your-profile-link");
	// Main
	$userFirstNameWrappers.text(settings.loggedInUserFirstName);
	// Handlers:
	$loginLinks.on("click", function (event) {
		window.location = settings.loginUrl;
		event.stopPropatation();
		return false;
	});
	$logoutLinks.on("click", function (event) {
		window.location = settings.logoutUrl;
		event.stopPropatation();
		return false;
	});
	$createAccountLinks.on("click", function (event) {
		window.location = settings.createAccountUrl;
		event.stopPropatation();
		return false;
	});
	$yourProfileLinks.on("click", function (event) {
		window.location = settings.yourProfileUrl;
		event.stopPropatation();
		return false;
	});
};
window.igtMastheadSearch = function (options) {
	// Settings:
	const defaults = {
		siteSearchUrl: "",
		gameSearchUrl: "",
		programSearchUrl: "",
        enableAutocomplete: false,
	};
	const settings = $.extend({}, defaults, options);
	// Selectors:
	const $selectControl = $("div.igt-masthead-main-search select.global_search_drop_down_list");
	const $textBoxControl = $("div.igt-masthead-main-search input.global_search_text_box");
	const $submitControl = $("div.igt-masthead-main-search input[type=button]");
	// Handler Functions:
	const submitSearch = function () {
		var escapedText = escape($textBoxControl.val().replace(/[^a-zA-Z0-9 $&\'_-]/g, ""));
		switch ($selectControl.val()) {
			case "games":
				window.location = settings.gameSearchUrl + "#gs:category=0||" + escapedText;
				break;
			case "par":
				window.location = settings.programSearchUrl + "?search=" + escapedText;
				break;
			default:
			case "site":
				window.location = settings.siteSearchUrl + "?searchterm=" + escapedText;
				break;
		}
	};
	// Handlers:
	$submitControl.on("click", submitSearch);
	$textBoxControl.on("keydown", function (e) {
		if (e.keyCode === 13) {
			$submitControl.focus().trigger("click");
			return false;
		}
    });
    var pageName = ($("body").attr("data-pagename") + "").toLowerCase();
    if (settings.enableAutocomplete && pageName !== "site search") {
        $textBoxControl.autocomplete({
            source: function (request, response) {
                $.ajax({
                    url: "/igt/Search/GetSuggestion?term=" + escape($textBoxControl.val().replace(/[^a-zA-Z0-9 $&\'_-]/g, "")) + "&count=30",
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    dataFilter: function (data) { return data; },
                    success: function (data) {
                        response(data);
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        //alert(textStatus);
                        console.error("An error has happened in autocomplete AJAX call: " + textStatus);
                    }
                });
            },
            minLength: 2
        });
        $(document).on("click", "div.ui-menu-item-wrapper", function () {
            $submitControl.focus().trigger("click");
            return true;
        });
        $selectControl.on("change", function () {
		    switch ($selectControl.val()) {
			    case "games":
			    case "par":
                    $textBoxControl.autocomplete("disable");
                    break;
			    default:
			    case "site":
                    $textBoxControl.autocomplete("enable");
				    break;
		    }
        });
    }
};
$(function () {
    var $mastheadWrappter = $("#igt-masthead");
    var userIsLoggedIn = $mastheadWrappter.attr("data-userIsLoggedIn") === "true";
    var hideUserFirstName = $mastheadWrappter.attr("data-hideUserFirstName") === "true";
    var hideUserLoginLogout = $mastheadWrappter.attr("data-hideUserLoginLogout") === "true";
    var hideGlobalSearch = $mastheadWrappter.attr("data-hideGlobalSearch") === "true";
    if (!hideGlobalSearch) {
        $("#show-search-box").css("display", "");
    }
    if (hideUserLoginLogout) {
        // Do nothing, Login / Logout hidden by default.
    }
    else if (!userIsLoggedIn) {
        $(".user-is-logged-out-container").css("display", "");
    }
    else if (hideUserFirstName) {
        $(".user-is-logged-in-noname-container").css("display", "");
    }
    else {
        $(".user-is-logged-in-container").css("display", "");
    }
    // Footer collapse code for "Licenses" link:
    $("#footer_legal_link").click(function () {
        $("#footer_legal").toggle();
        $(this).toggleClass("showLegal");
        return false;
    });
});
