const counter = document.getElementById("counter");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

let count = 0;
counter.textContent = count;

increase.addEventListener("click", () => {
    count+=1;
    counter.textContent = count;
})

decrease.addEventListener("click", () => {
    count-=1;
    counter.textContent = count;
})

reset.addEventListener("click", () => {
    count = 0;
    counter.textContent = count;
})

const form = document.getElementById("form")
const result = document.getElementById("result")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const topic = document.getElementById("topic").value
    const textarea = document.getElementById("textarea").value
    const checkbox = document.getElementById("checkbox").checked

    result.textContent = `name:${name} email:${email} topic:${topic} textarea:${textarea} checkbox:${checkbox}`
})

