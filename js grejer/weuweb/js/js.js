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

// alert("yeee")


// const imgDiv = document.querySelector("img")
// imgDiv.src = "https://i.kym-cdn.com/entries/icons/original/000/017/403/218_copy.jpg"
// imgDiv.style.marginTop = "50px"
// console.log(imgDiv.src)

// const h1 = document.querySelector("h1")
// h1.textContent = "KAPPA"
// h1.style.color = "red"
// h1.style.fontFamily = "ubuntu mono"

const body = document.body;
const img = document.querySelector('img');
const txt = document.querySelector('h1');
const button = document.querySelector('#knapp');
const n_inp = document.querySelector("#anv")
const p_inp = document.querySelector("#kod")

// button.addEventListener('click', (e) => {
//     console.log(p_inp.value)
//     console.log(n_inp.value)
//     n_inp.value = ""
//     p_inp.value = ""
// })

// body.addEventListener('keydown', (e) => {
//     if (e.keyCode === 13) {
//         console.log(p_inp.value)
//         console.log(n_inp.value)
//         n_inp.value = ""
//         p_inp.value = ""
//     }

// })

let colors = ["green", "yello", "red", "blue", "orange", "black", "pink", "purple"]

body.addEventListener("click", () => {
    img.style.filter = "blur(7px)"
    txt.style.fontSize = "3rem"
    
    let i = Math.floor((Math.random() * colors.length))
    console.log(i + " " + colors[i])

    body.style.backgroundColor = colors[i]

    img.animate([
        {transform: "rotate(180deg)"},
        {
            duration: Infinity,
            delay: 3,
            iterations: Infinity
        }
    ]);

})