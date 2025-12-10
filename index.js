import OpenAI from "openai"

const openai = new OpenAI()

const form = document.querySelector("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    const formDataObj = Object.fromEntries(formData.entries())
    console.log(formDataObj)

})