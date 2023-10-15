// $.getJSON("http://cpv2api.com/posts/published/j-w-v", function(resp){
// 	if(resp.success){
// 		for (var i = 0; i < resp.data.length; i++) {
//     $('.posts ul').append('<li><a target="_blank" href="' + resp.data[i].link +'">' + resp.data[i].title + ' <span> ' +resp.data[i].views+ ' views</span> </a></li>');
//     }
// 	}
// });

// $.getJSON("https://cpv2api.com/pens/showcase/j-w-v", function(resp){
// 	if(resp.success){
// 		for (var i = 0; i < 5; i++) {
//     $('.pens ul').append('<li><a target="_blank" href="' + resp.data[i].link +'">' + resp.data[i].title + ' <span> ' +resp.data[i].views+ ' views</span> </a></li>');
//     }
// 	}
// });

const params = new URLSearchParams(window.location.search);
const convertion = {
  USD: [(9.99 / 9.99), "$", "US Dollar"],
  EUR: [(11.99 / 9.99), "€", "Euro"],
  CAD: [(12.99 / 9.99), "$", "Canadian Dollar"],
  AUD: [(13.99 / 9.99), "$", "Australian Dollar"],
  NZD: [(15.99 / 9.99), "$", "New Zealand Dollar"],
  GBP: [(8.99 / 9.99), "£", "British Pound"],
  MXN: [(249.00 / 9.99), "$", "Mexican Peso"],
  CLP: [(8900.00 / 9.99), "$", "Chilean Peso"],
  HKD: [(78.00 / 9.99), "$", "Hong Kong Dollar"],
  
  TX1: [0.7, "R$", "30% Tax"],
  TX2: [0.6, "R$", "40% Tax"],
};


particlesJS("particles-js", {
  particles: {
    number: {
      value: 33,
      density: {
        enable: true,
        value_area: 1420.4657549380909
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "triangle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.06313181133058181,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 11.83721462448409,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});

$("select.dropdown").each(function () {
  var dropdown = $("<div />").addClass("dropdown selectDropdown");

  $(this).wrap(dropdown);

  var label = $("<span />")
    .text($(this).attr("placeholder"))
    .insertAfter($(this));
  var list = $("<ul />");

  $(this)
    .find("option")
    .each(function () {
      list.append($("<li />").append($("<a />").text($(this).text())));
    });

  list.insertAfter($(this));

  if ($(this).find("option:selected").length) {
    label.text($(this).find("option:selected").text());
    list
      .find("li:contains(" + $(this).find("option:selected").text() + ")")
      .addClass("active");
    $(this).parent().addClass("filled");
  }
});

$(document).on("click touch", ".selectDropdown ul li a", function (e) {
  e.preventDefault();
  var dropdown = $(this).parent().parent().parent();
  var active = $(this).parent().hasClass("active");
  var label = active
    ? dropdown.find("select").attr("placeholder")
    : $(this).text();

  dropdown.find("option").prop("selected", false);
  dropdown.find("ul li").removeClass("active");

  dropdown.toggleClass("filled", !active);
  dropdown.children("span").text(label);

  if (!active) {
    dropdown
      .find("option:contains(" + $(this).text() + ")")
      .prop("selected", true);
    $(this).parent().addClass("active");
  }

  dropdown.removeClass("open");
});

$(".dropdown > span").on("click touch", function (e) {
  var self = $(this).parent();
  self.toggleClass("open");
});

$(document).on("click touch", function (e) {
  var dropdown = $(".dropdown");
  if (dropdown !== e.target && !dropdown.has(e.target).length) {
    dropdown.removeClass("open");
  }
});
// BORDER COLOR
const textInputs = document.querySelectorAll('input[type="text"]');
textInputs.forEach(function (input) {
  input.addEventListener("mouseenter", function () {
    input.style.borderColor = "#23C4F8";
  });

  input.addEventListener("mouseleave", function () {
    input.style.borderColor = "#2F3545";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const inputElement = document.getElementById("numberHere");
  const resultElement = document.getElementById("resultHere");

  const fromDropdown = document.getElementById("fromDropdown");
  const toDropdown = document.getElementById("toDropdown");
  
  const robuxValue = params.get("robux");
  const devexedValue = params.get("devexed");
  const moneyValue = params.get("money");
  if (robuxValue != null) {
    inputElement.value = robuxValue
  }
    if (devexedValue === "true") {
    fromDropdown.textContent = "Devexed robux"
    fromDropdown.value = "devexed_robux"
  }
    if (moneyValue != null && convertion[moneyValue]) {
    toDropdown.textContent = convertion[moneyValue][2] + "(" + convertion[moneyValue][0] + ")"
    toDropdown.value = moneyValue
  }
  
  function calcul() {
    const fromCurrency = fromDropdown.value;
    const toCurrency = toDropdown.value;
    
    // Parse the input value as a number
    const inputValue = parseFloat(inputElement.value);

    // Perform currency conversion based on the selected options
    let calcul = "NaN";
    let money = "$";
    
    if (toCurrency == "TX1" || toCurrency == "TX2") {
      calcul = inputValue * convertion[toCurrency][0];
      money = convertion[toCurrency][1];
      
    } else {
      if (fromCurrency == "robux") {
        calcul = inputValue * (9.99 / 800); // Replace with your conversion rate
        if (convertion[toCurrency]) {
          calcul *= convertion[toCurrency][0];
          money = convertion[toCurrency][1];
        }
      }

      if (fromCurrency == "devexed_robux") {
        calcul = inputValue * (105 / 30000); // Replace with your conversion rate
        if (convertion[toCurrency]) {
          calcul *= convertion[toCurrency][0];
          money = convertion[toCurrency][1];
        }
      }
    }

    // Set the result in the resultElement's value property
    if (isNaN(calcul)) {
      resultElement.value = "NaN " + money;
    } else {
      resultElement.value = calcul.toFixed(2) + " " + money;
    }
  }

  inputElement.addEventListener("input", calcul);
  setInterval(calcul, 100);
});
