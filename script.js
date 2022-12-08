var container = document.getElementById("animate");
var emoji = ["👋🏻"];
var circles = [];

for (var i = 0; i < 15; i++) {
    addCircle(i * 150, [10 + 0, 500], emoji[Math.floor(Math.random() * emoji.length)]);
    addCircle(i * 150, [10 + 0, -500], emoji[Math.floor(Math.random() * emoji.length)]);
    addCircle(i * 150, [10 - 100, -500], emoji[Math.floor(Math.random() * emoji.length)]);
    addCircle(i * 150, [10 + 100, 500], emoji[Math.floor(Math.random() * emoji.length)]);
    addCircle(i * 150, [10 - 200, -500], emoji[Math.floor(Math.random() * emoji.length)]);
    addCircle(i * 150, [10 + 200, 100], emoji[Math.floor(Math.random() * emoji.length)]);
    addCircle(i * 150, [10 - 300, -100], emoji[Math.floor(Math.random() * emoji.length)]);
    addCircle(i * 150, [10 + 300, 100], emoji[Math.floor(Math.random() * emoji.length)]);
}

function addCircle(delay, range, color) {
    setTimeout(function () {
        var c = new Circle(
            range[0] + Math.random() * range[1],
            80 + Math.random() * 4,
            color,
            {
                x: -0.15 + Math.random() * 0.3,
                y: 1 + Math.random() * 1,
            },
            range
        );
        circles.push(c);
    }, delay);
}

function Circle(x, y, c, v, range) {
    var _this = this;
    this.x = x;
    this.y = y;
    this.color = c;
    this.v = v;
    this.range = range;
    this.element = document.createElement("span");
    /*this.element.style.display = 'block';*/
    this.element.style.opacity = 0;
    this.element.style.position = "absolute";
    this.element.style.fontSize = "20px";
    this.element.style.color = "hsl(" + ((Math.random() * 360) | 0) + ",80%,50%)";
    this.element.innerHTML = c;
    container.appendChild(this.element);

    this.update = function () {
        if (_this.y > 1800) {
            _this.y = 80 + Math.random() * 4;
            _this.x = _this.range[0] + Math.random() * _this.range[1];
        }
        _this.y += _this.v.y;
        _this.x += _this.v.x;
        this.element.style.opacity = 1;
        this.element.style.transform = "translate3d(" + _this.x + "px, " + _this.y + "px, 0px)";
        this.element.style.webkitTransform = "translate3d(" + _this.x + "px, " + _this.y + "px, 0px)";
        this.element.style.mozTransform = "translate3d(" + _this.x + "px, " + _this.y + "px, 0px)";
    };
}

function animate() {
    for (var i in circles) {
        circles[i].update();
    }
    requestAnimationFrame(animate);
}

setTimeout(() => {
    animate();
}, 500);

var checkbox = document.querySelector("input");
let redText = document.getElementById("r1");
let redText1 = document.getElementById("r2");
let redText2 = document.getElementById("r3");
let redText3 = document.getElementById("r4");
let redText4 = document.getElementById("r5");
let redText5 = document.getElementById("r6");
let redText6 = document.getElementById("r7");
let main = document.getElementById("main");
let blueText = document.getElementById("b1");
let blueText1 = document.getElementById("b2");
let blueText2 = document.getElementById("b3");
let blueText3 = document.getElementById("b4");

checkbox.addEventListener("change", function () {
    if (this.checked) {
        main.style.background = "#232946";
        redText.style.color = "#eebbc3";
        redText1.style.color = "#eebbc3";
        redText2.style.color = "#eebbc3";
        redText3.style.color = "#eebbc3";
        redText4.style.color = "#eebbc3";
        redText5.style.color = "#eebbc3";
        redText6.style.color = "#eebbc3";
        blueText.style.color = "#b8c1ec";
        blueText1.style.color = "#b8c1ec";
        blueText2.style.color = "#b8c1ec";
        blueText3.style.color = "#b8c1ec";
        redText.addEventListener("mouseover", function () {
            redText.style.color = "#b8c1ec";
        });
        redText.addEventListener("mouseout", function () {
            redText.style.color = "#eebbc3";
        });
        redText2.addEventListener("mouseover", function () {
            redText2.style.color = "#b8c1ec";
        });
        redText2.addEventListener("mouseout", function () {
            redText2.style.color = "#eebbc3";
        });
        redText3.addEventListener("mouseover", function () {
            redText3.style.color = "#b8c1ec";
        });
        redText3.addEventListener("mouseout", function () {
            redText3.style.color = "#eebbc3";
        });
        redText1.addEventListener("mouseover", function () {
            redText1.style.color = "#b8c1ec";
        });
        redText1.addEventListener("mouseout", function () {
            redText1.style.color = "#eebbc3";
        });
        redText6.addEventListener("mouseover", function () {
            redText6.style.color = "#b8c1ec";
        });
        redText6.addEventListener("mouseout", function () {
            redText6.style.color = "#eebbc3";
        });
    } else {
        redText.style.color = "#e45858";
        redText1.style.color = "#e45858";
        redText2.style.color = "#e45858";
        redText3.style.color = "#e45858";
        redText4.style.color = "#e45858";
        redText5.style.color = "#e45858";
        redText6.style.color = "#e45858";
        main.style.background = "#fffffe";
        blueText.style.color = "#6246ea";
        blueText1.style.color = "#6246ea";
        blueText2.style.color = "#6246ea";
        blueText3.style.color = "#6246ea";
        redText.addEventListener("mouseover", function () {
            redText.style.color = "#6246ea";
        });
        redText.addEventListener("mouseout", function () {
            redText.style.color = "#e45858";
        });
        redText2.addEventListener("mouseover", function () {
            redText2.style.color = "#6246ea";
        });
        redText2.addEventListener("mouseout", function () {
            redText2.style.color = "#e45858";
        });
        redText3.addEventListener("mouseover", function () {
            redText3.style.color = "#6246ea";
        });
        redText3.addEventListener("mouseout", function () {
            redText3.style.color = "#e45858";
        });
        redText1.addEventListener("mouseover", function () {
            redText1.style.color = "#6246ea";
        });
        redText1.addEventListener("mouseout", function () {
            redText1.style.color = "#e45858";
        });
        redText6.addEventListener("mouseover", function () {
            redText6.style.color = "#6246ea";
        });
        redText6.addEventListener("mouseout", function () {
            redText6.style.color = "#e45858";
        });
    }
});
redText.addEventListener("mouseover", function () {
    redText.style.color = "#6246ea";
});
redText.addEventListener("mouseout", function () {
    redText.style.color = "#e45858";
});
redText2.addEventListener("mouseover", function () {
    redText2.style.color = "#6246ea";
});
redText2.addEventListener("mouseout", function () {
    redText2.style.color = "#e45858";
});
redText3.addEventListener("mouseover", function () {
    redText3.style.color = "#6246ea";
});
redText3.addEventListener("mouseout", function () {
    redText3.style.color = "#e45858";
});
redText1.addEventListener("mouseover", function () {
    redText1.style.color = "#6246ea";
});
redText1.addEventListener("mouseout", function () {
    redText1.style.color = "#e45858";
});
redText6.addEventListener("mouseover", function () {
    redText6.style.color = "#6246ea";
});
redText6.addEventListener("mouseout", function () {
    redText6.style.color = "#e45858";
});
