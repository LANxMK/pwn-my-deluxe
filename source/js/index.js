var headerTapCounter = 0;

currentFirmware = function(userAgent) {
    return userAgent.match(/\OS (.*?)\ like/)[1].replaceAll("_", ".");
};

function EasterEgg() {
    headerTapCounter++;
    if (headerTapCounter == 10) {
        $('section.header .title h1').html('Mantisus')
        $('body').removeClass('default').addClass('sus')
    }
}


async function pwnMe() { 
	if (location.protocol === "https:") {
	  if (
		navigator.userAgent.includes("iPhone") ||
		navigator.userAgent.includes("iPad")
	  ) {
		if (navigator.userAgent.includes("Macintosh")) {
		  alert("MacOS is not supported");
		  return;
		}
		
		if (currentFirmware(navigator.userAgent).startsWith("14.5")) {
		  socket.emit("log_normal", "Starting exploitation for iOS 14.5");
		  await kickstart145();
		  return;
		}
		
		if (currentFirmware(navigator.userAgent).startsWith("14.6")) {
		  socket.emit("log_normal", "Starting exploitation for iOS 14.6");
		  var iframe = document.createElement("iframe");
		  iframe.style.display = "none";
		  iframe.src = "./pwn_14.6.html";
		  document.body.appendChild(iframe);
		  return;
		}
	  } else {
		alert("Detected a unsupported version/device");
		socket.emit("error", "Detected a unsupported version/device");
		return;
	  }
	} else {
	  document.getElementById("jbButton").disabled = true;
	  alert("exploitation only works over https");
	}
};

if (
    navigator.userAgent.includes("iPhone") ||
    navigator.userAgent.includes("iPad")
) {
    if (currentFirmware(navigator.userAgent).startsWith("14.5")) {
        console.log("Starting exploitation for iOS 14.5");
        $('section.info .comp .content').html('Your iPhone on iOS 14.5 is compatible with Manticore')
    }

    if (currentFirmware(navigator.userAgent).startsWith("14.6")) {
        console.log("Starting exploitation for iOS 14.6");
        $('section.info .comp .content').html('Your iPhone on iOS 14.6 is comaptible with Manticore')
    }
} else {
    console.log("error", "Detected a unsupported version/device");
    $('section.info .comp .content').html('Cannot detect device/version.')
};

if (navigator.userAgent.includes("Windows")) {
    console.log("Windows is not supported");
    $('section.info .comp .content').html('You are using Windows you idiot, what are you doing.')
}

const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    doc.style.setProperty("--app-height-neg", `-${window.innerHeight}px`);
    doc.style.setProperty("--app-width", `${window.innerWidth}px`);
};

window.addEventListener("resize", appHeight);
appHeight();

// window.onload = () => {
//	//force redirect to https
//	if (window.location.protocol !== "https:") {
//		window.location.protocol = "https:";
//	}
// }

$(document).ready(function() {

    console.log("document loaded");
    $("section.header").addClass('load');

    // prep-start
    setTimeout(function() {
        $("body").addClass('start');
        $("section.header").removeClass('load');
        console.log("prep animation");
    }, 100);

    // Start Animation
    setTimeout(function() {
        $("section.header").addClass('start');
        $("body").removeClass('start').addClass('loading');
        console.log("started animation");
    }, 1000);

    // prep-end Animation
    setTimeout(function() {
        $("body").removeClass('loading').addClass('finalizing');
    }, 2000);

    // End Animation
    setTimeout(function() {
        $("section.header").removeClass('start');
        $("body").removeClass('finalizing').addClass('loaded');
        console.log("finished animation");
    }, 3000);

    // sike, it did not end lmao. move all elements up now.
    setTimeout(function() {
        $("body").addClass('home');
        console.log("really finished the animation this time.");
    }, 4100);

    // show badges
    setTimeout(function() {
        $(".badge").removeClass('hidden');
        console.log("showing badges");
    }, 5100);


    if ((navigator.userAgent).includes("Windows")) {
        console.log("detected Mozilla");
    };

    if ((navigator.userAgent).includes("Mac")) {
        console.log("detected Mac");
    };

    /* swipe up - open */
    $('section.info').swipeup(function(e) {
        console.log('swiped up .info');
        $('section.info .options').addClass("active");
        $('body').addClass("options");
        $('section.header').addClass('hidden');
        $('section.content').addClass('hidden');
    });

    /* tap - open */
    $('section.info .options').tap(function(e) {
        if (!$(this).hasClass('active')) {
            $('section.info .options').addClass("active");
            $('body').addClass("options");
            $('section.header').addClass('hidden');
            $('section.content').addClass('hidden');
            console.log('pushed .options');
        };
    });

    /* swipe - close */
    $('section.info .options').swipedown(function(e) {
        console.log('swiped down .options');
        $('section.info .options').removeClass("active");
        $('body').removeClass("options");
        $('section.header').removeClass('hidden');
        $('section.content').removeClass('hidden');
    });

    $('section.info .options .head .button').bind('click', function(ev) {
        console.log('pushed .button');
        $('section.info .options').removeClass("active");
        $('body').removeClass("options");
        $('section.header').removeClass('hidden');
        $('section.content').removeClass('hidden');
    });

    //* Options - Select Manager
    $('.manager').click(function() {
        if ($('.manager').hasClass('active')) {
            $('.manager').removeClass('active');
        };
        $(this).addClass('active');
    });
});

$(document).ready(function() {
    //Badges
    const globalState = {
        badges: [
            { name: 'WEB', bg: '#2196f3', color: 'white' },
            { name: 'Beta', bg: '#f44336', color: 'white' },
            { name: 'Deluxe', bg: '#9c27b0', color: 'white' },
            { name: 'PRO', bg: '#ffc107', color: 'white' },
            { name: 'DEV', bg: '#009688', color: 'white' },
            { name: 'EGG', bg: '#9e9e9e', color: 'white' }
        ],
        themes: [
            { name: 'default'},
            { name: 'really-dark'},
            { name: 'manti'},
            { name: 'goon'},
            { name: 'viola'},
            { name: 'sus'}
        ],
        settings: [
            { area: 'tweaks'},
            { area: 'themes'}
        ],
        managers: [{
                title: 'Cydia',
                bg: 'url("https://upload.wikimedia.org/wikipedia/commons/8/8b/Cydia_logo.png")',
                color: '#fff',
            },
            {
                title: 'Sileo',
                bg: 'url("https://getsileo.app/img/icon.png")',
                color: '',
            },
            {
                title: 'Zebra',
                bg: 'url("https://getzbra.com/assets/zeeb.svg")',
                color: '',
            },
            {
                title: 'Saily',
                bg: 'url("https://sailyteam.github.io/img/icon.png")',
                color: '',
            }
        ],
        tweaks: [{
                title: 'Restore RootFS',
                icon: 'rays',
                bg: '#FF910B',
                color: '#fff',
            },
            {
                title: 'Disable Updates',
                icon: 'lock_slash_fill',
                bg: '#007EFD',
                color: '',
            },
            {
                title: 'Max Memory Limit',
                icon: 'shift_fill',
                bg: '#007EFD',
                color: '',
            },
            {
                title: 'Load Tweaks',
                icon: 'shippingbox_fill',
                bg: '#2FCB55',
            },
            {
                title: 'Load Deamons',
                icon: 'rocket',
                bg: '#2FCB55',
            },
            {
                title: 'Show Log Window',
                icon: 'square_favorites_fill',
                bg: '#c76666',
            },
            {
                title: 'Disable Screen Time',
                icon: 'hourglass',
                bg: '',
            },
        ]
    };

    //Insert badges
    function badge(badges) {
        let html = '';
        badges.map((badge) => {
            html += `<div class="hidden badge" style=" background: ${badge.bg}; color: ${badge.color};">${badge.name}</div>`;
        });
        $('.header .title .top .badges').append(html);
    };
    setTimeout(function() {
        badge(globalState.badges, $('.header .title .top .badges'));
    }, 4400);

    //Set category items
    function settings(settings) {
        let html = '';
        settings.map((setting) => {
            html += `<div class="section ${setting.area}"></div>`;
        })
        $('section.info .options .content').append(html);
    };

    //Set sub-category items - options
    function tweaks(tweaks) {
        let html = '';
        tweaks.map((tweak) => {
            html += `<div class="tweak" data-tweak="${'tweak' + sanearString(tweak.title)}">
	            <div class="wrap-icon"><div class="icon" style="background: ${tweak.bg};"><i class="f7-icons" style="color: ${tweak.color};">${tweak.icon}</i></div></div>
	            <div class="wrap-title"><p class="title">${tweak.title}</p></div>
	            <div class="wrap-toggle"><div class="toggle"><div class="arrow"><i class="f7-icons">chevron_right</i></div><div class="switch"></div></div></div>
	        </div>
	        <div class="seperator"></div>`;
        });
        $('section.info .options .content .tweaks').append(html);
        $("section.info .options .content .tweaks").children(".seperator:last-child").remove();
    };

    //Set category items - themes
    $(document).ready(function() {
        $('section.info .options .content .section.themes').append(`
            <div class="theme" data-tweak="themes"> 
                <div class="wrap-icon"><div class="icon" style="background: #FF910B;"><i class="f7-icons" style="color: white;">paintbrush_fill</i></div></div>
                <div class="wrap-title"><p class="title">Themes</p></div>
                <div class="wrap-toggle"><div class="toggle"><div class="arrow"><i class="f7-icons">chevron_right</i></div><div class="switch"></div></div></div>
            </div>`
        );
    });
    settings(globalState.settings);
    tweaks(globalState.tweaks);
    function sanearString(string) {
        return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, '');
    };
});