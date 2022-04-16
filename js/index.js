navbar = document.querySelector('.navbar-dark')
x = 0
s1 = 0
s0 = 0
m1 = 0
m0 = 0

window.addEventListener('scroll', function (e) {
    const lastPosition = window.scrollY
    if (lastPosition > 50) {
        navbar.classList.add('active')
    } else if (navbar.classList.contains('active')) {
        navbar.classList.remove('active')
    } else {
        navbar.classList.remove('active')
    }
})

function showContador() {
    document.getElementById('counter').style.display = 'none';
    pauseContador()
    startContador()
    setTimeout(function () {
        document.getElementById('counter').style.display = 'flex';
    }, 1000);

}

function hiddenContador() {
    pauseContador();
    document.getElementById('counter').style.display = 'none';
}


function startContador() {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    let dayFirstValue = -1
    let hoursFirstValue = -1
    let minutesFirstValue = -1
    let secondsFirstValue = -1

    const lineDay = document.getElementById('counterRow');

    let count_down = new Date('04/08/2023 11:00:00').getTime();
    x = setInterval(() => countDown(), second);
    let auxs1 = 0
    let auxs0 = 0
    let auxm1 = 0
    let auxm0 = 0

    function changeNumberSecond1() {
        while (auxs1 < -72) {
            document.getElementById(`second1`).style.top = `${auxs1}px`
            document.getElementById(`second1-next`).style.top = `${auxs1}px`
            auxs1 = auxs1 - 2
        }
        auxs1 = 0
    }

    function changeNumberSecond0() {
        while (auxs0 < -72) {
            document.getElementById(`second0`).style.top = `${auxs0}px`
            document.getElementById(`second0-next`).style.top = `${auxs0}px`
            auxs0 = auxs0 - 2
        }
        auxs0 = 0
    }

    function changeNumberMinute1() {
        document.getElementById(`minute1`).style.top = `${auxm1}px`
        document.getElementById(`minute1-next`).style.top = `${auxm1}px`
        auxm1 = auxm1 - 2

        if (auxm1 < -72) {
            clearInterval(m1)
            auxm1 = 0
        }
    }

    function changeNumberMinute0() {
        document.getElementById(`minute0`).style.top = `${auxm0}px`
        document.getElementById(`minute0-next`).style.top = `${auxm0}px`
        auxm0 = auxm0 - 2

        if (auxm0 < -72) {
            clearInterval(m0)
            auxm0 = 0
        }
    }


    function countDown() {
        let now = new Date(Date.now()).getTime();
        let diff = count_down - now;
        let dayValue = Math.floor(diff / day).toString()
        let hoursValue = new Intl.NumberFormat("pt-br", { minimumIntegerDigits: 2 }).format(Math.floor(diff % day / hour));
        let minutesValue = new Intl.NumberFormat("pt-br", { minimumIntegerDigits: 2 }).format(Math.floor(diff % hour / minute));
        let secondsValue = new Intl.NumberFormat("pt-br", { minimumIntegerDigits: 2 }).format(Math.floor(diff % minute / second));

        if (dayFirstValue != dayValue || dayFirstValue == -1) {
            dayFirstValue = dayValue
            const arrayDays = dayValue.split("")
            arrayDays.forEach((value, index) => {
                document.getElementById(`day${index}`).innerText = `${value}`
            })
        }

        if (hoursFirstValue != hoursValue || hoursFirstValue == -1) {
            hoursFirstValue = hoursValue
            const arrayHours = hoursValue.split("")
            arrayHours.forEach((value, index) => {
                document.getElementById(`hour${index}`).innerText = `${value}`
            })
        }

        if (minutesFirstValue != minutesValue || hoursFirstValue == -1) {
            minutesFirstValue = minutesValue
            const arrayMinutes = minutesValue.split("")
            if (arrayMinutes[1] == 0) {
                changeNumberMinute0()
            }
            changeNumberMinute1()
            arrayMinutes.forEach((value, index) => {
                document.getElementById(`minute${index}`).innerText = `${value}`
                document.getElementById(`minute${index}`).style.top = 0
                document.getElementById(`minute${index}-next`).style.top = 0
                if (index == 1) {
                    document.getElementById(`minute${index}-next`).innerText = `${value - 1 == - 1 ? 9 : value - 1}`
                } else {
                    document.getElementById(`minute${index}-next`).innerText = `${value - 1 == - 1 ? 5 : value - 1}`

                }
            })
        }

        if (secondsFirstValue != secondsValue || secondsFirstValue == -1) {
            secondsFirstValue = secondsValue
            const arraySeconds = secondsValue.split("")
            if (arraySeconds[1] == 0) {
                changeNumberSecond0()
            }
            changeNumberSecond1()
            arraySeconds.forEach((value, index) => {
                document.getElementById(`second${index}`).innerText = `${value}`
                document.getElementById(`second${index}`).style.top = 0
                document.getElementById(`second${index}-next`).style.top = 0
                if (index == 1) {
                    document.getElementById(`second${index}-next`).innerText = `${value - 1 == - 1 ? 9 : value - 1}`
                } else {
                    document.getElementById(`second${index}-next`).innerText = `${value - 1 == - 1 ? 5 : value - 1}`

                }
            })
        }

    }

}

function pauseContador() {
    clearInterval(x)
    clearInterval(s0)
    clearInterval(s1)
    clearInterval(m0)
    clearInterval(m1)
}

function handleVisibilityChange() {
    if (document.hidden) {
        hiddenContador();
    } else {
        showContador();
    }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);
