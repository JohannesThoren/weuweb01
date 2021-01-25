/*
 *   Copyright (c) 2021 Johannes Thorén
 *   All rights reserved.

 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 */

const knapp = document.querySelector('#knapp')
const div = document.querySelector('#content')
const nr1 = document.querySelector('#nr1')  
const nr2 = document.querySelector('#nr2')
const nr1_lol = document.querySelector('#lol')
const nr1_btn = document.querySelector('#nr1_btn')  
const nr2_btn = document.querySelector('#nr2_btn')

nr2.remove()


nr1_btn.addEventListener('click', ()=> {
    nr2.remove()
    div.appendChild(nr1)
})
nr2_btn.addEventListener('click', ()=> {
    div.appendChild(nr2)
    nr1.remove()

})

knapp.addEventListener('click', (e) => {
    const img = document.createElement('img')
    img.src = "https://i.kym-cdn.com/photos/images/original/001/713/710/dac.jpg"
    img.alt = ""
    img.class = "bild"

    const text = document.createElement('p')
    text.innerText = "POG!"

    const img_div = document.createElement('div')

    const ta_bort = document.createElement('button')
    ta_bort.innerText = "ta bort"
    ta_bort.addEventListener('click', () => {
        ta_bort.parentElement.remove()
    })

    img_div.appendChild(img)
    img_div.appendChild(text)
    img_div.appendChild(ta_bort)

    nr1_lol.appendChild(img_div)
})