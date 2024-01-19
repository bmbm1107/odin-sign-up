


const fldPass = document.querySelectorAll('input[type="password"]')

for (i of fldPass) {

    i.addEventListener('change', () => {
        if (fldPass[0].value !== fldPass[1].value) {
            for (e of fldPass) {
                e.classList.add('passw-err')
            }
        } else {
            for (e of fldPass) {
                e.classList.remove('passw-err')
            }
        }

    })


}

