
const form = document.getElementById("trip-form")
const data = {}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const elements = form.elements
    for (let i = 0; i < elements.length - 1; i++) {
        data[elements[i].name] = elements[i].value
    }
    alert(`New trip created
        Name: ${data.name},
        date: ${data.date},
        price ${data.price},
        duration: ${data.duration}
        description: ${data.description},
        start: ${data.start},
        end: ${data.end}`)
})