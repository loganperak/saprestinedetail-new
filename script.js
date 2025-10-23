document.getElementById('year').textContent = new Date().getFullYear()
const form = document.getElementById('quote-form')
const note = document.getElementById('form-note')
if (form) {
  form.addEventListener('submit', function(){
    note.textContent = "Thanks! If you don't see a confirmation email, we'll reply within 1 business day."
  })
}
