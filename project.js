check = function () {
    const ider = document.getElementById("id").value;
    const passw = document.getElementById("pass").value;
    if (ider == "admin" && passw == "1234") {

        document.getElementById("content").style.display = 'block';
    } else {
        document.getElementById("content").style.display = 'none';
    }
};

function start() {
    let quizz_data = [{
            title: 'bac ho ten that la gi : ',
            0: 'cung',
            1: 'a',
            2: 'b',
            3: 'c',
            true: 'cung'
        },
        {
            title: 'bac sinh nam nao?',
            0: 1890,
            1: 1900,
            2: 1901,
            3: 1001,
            true: 1890
        },
        {
            title: '1 + 1 = ?',
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            true: 2
        },
        {
            title: '2 + 2 = ?',
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            true: 4
        }
    ];
    // document.getElementById("cauhoi").innerHTML = cauhoi[0].title;
    // document.getElementById("trl1").value = cauhoi[0][0];
    // document.getElementById("trl2").value = cauhoi[0][1];
    // document.getElementById("trl3").value = cauhoi[0][2];
    // document.getElementById("trl4").value = cauhoi[0][3];
    let index = 0;
    let score = 0;
    let isPaused = false;
    let tim = 3000;
    myf = function () {

        if (!isPaused) {
            if (index == quizz_data.length) {

                timer.stop();
                document.getElementById("end").innerHTML = 'ket thuc';
                document.getElementById("diem").innerHTML = 'Diem cua ban : ' + score;
            }
            document.getElementById("question").innerHTML = quizz_data[index].title;
            document.getElementById("answer1").value = quizz_data[index][0];


            document.getElementById("answer2").value = quizz_data[index][1];
            document.getElementById("answer3").value = quizz_data[index][2];
            document.getElementById("answer4").value = quizz_data[index][3];
            index++;
        }
    };
    check_result = function (form_quizz) {

        let a = form_quizz;
        for (let j = 0; j < quizz_data.length; j++) {
            tim = 0;
            if (a == quizz_data[j].true) {
                score++;

            }

        }
        newEvent = document.getElementById('answer1');

    }
    myf();
    // doquizz = setInterval(myf, tim);

    let timer_count = function(){
        let current_timer = document.getElementById('timer');
        current_timer.innerHTML = 3;
        var count_down = setInterval(() => {
            current_timer.innerHTML = current_timer.innerHTML - 1;
            
            console.log(current_timer.innerHTML);
            if(current_timer.innerHTML == 0)
            {
                let stop = clearInterval(count_down)
                myf();
            }
        }, 1000);
    }
    timer_count();
        
    
    var timer = new Timer(function() {
        myf();
    }, 5000);
    function Timer(fn, t) {
        var timerObj = setInterval(fn, t);
        
        this.stop = function () {
            if (timerObj) {
                clearInterval(timerObj);
                timerObj = null;
                clearInterval(count_down);
            }
            return this;
        }

        // start timer using current settings (if it's not already running)
        this.start = function () {
            if (!timerObj) {
                this.stop();
                timerObj = setInterval(fn, t);
                timer_count();
            }
            return this;
        }

        // start with new or original interval, stop current interval
        this.reset = function (newT = t) {
            t = newT;
            return this.stop().start();
        }
    }

    onClick_skip = function () {
        onClick_answer1 = document.getElementById('answer1')
        onClick_answer1.addEventListener('click', () => {
            myf();
            // switch interval to 10 seconds
            timer.reset(3000);

            // stop the timer
            timer.stop();

            // start the timer
            timer.start();
        })
        onClick_answer2 = document.getElementById('answer2')
        onClick_answer2.addEventListener('click', () => {
            myf()
            // switch interval to 10 seconds
            timer.reset(3000);

            // stop the timer
            timer.stop();

            // start the timer
            timer.start();
        })
        onClick_answer3 = document.getElementById('answer3')
        onClick_answer3.addEventListener('click', () => {
            myf()
            // switch interval to 10 seconds
            timer.reset(3000);

            // stop the timer
            timer.stop();

            // start the timer
            timer.start();
        })
        onClick_answer4 = document.getElementById('answer4')
        onClick_answer4.addEventListener('click', () => {
            myf()
            // switch interval to 10 seconds
            timer.reset(3000);

            // stop the timer
            timer.stop();

            // start the timer
            timer.start();
        })
    }

    onClick_skip();

    pause = function () {
        isPaused = true;
        document.getElementById("pl").style.display = 'block';
        document.getElementById("pau").style.display = 'none';
    }
    play = function () {
        isPaused = false;
        document.getElementById("pau").style.display = 'block';
        document.getElementById("pl").style.display = 'none';
    }
}