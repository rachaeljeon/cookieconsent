const modal = document.getElementById('modal')
const consentForm = document.getElementById('consent-form')
const xBtn = document.getElementById('modal-close-btn')
const submitBtn = document.getElementById('modal-btn')
const declineBtn = document.getElementById('decline-btn')
const modalBtns = document.getElementById('modal-btns')

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

consentForm.addEventListener('submit', function(e){

    e.preventDefault()

    document.getElementById('modal-inner').innerHTML = 
    `
        <div class="modal-inner-loading">
            <img src="images/loading.gif" class="loading">
            <p id="upload-text">Uploading your data to the dark web...</p>
        </div>
    `

    setTimeout(function(){

        document.getElementById('modal-inner').innerHTML = 
        `
            Making the sale...
        `
    }, 1500)

    const consentFormData = new FormData(consentForm)
    const fullName = consentFormData.get('fullName')

    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = 
        `
            <h2>Thanks <span class="modal-display-name">${fullName}</span>, for your info! </h2>
            <p>We've kept your info permanently :)</p>
            <div class="laughing-gif">
                <img src="images/laughing.gif"> 
            </div>
        `
        xBtn.disabled = false
    }, 3000)
})

xBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

/* Swap the Accept and Decline buttons */
declineBtn.addEventListener('mouseenter', function(){
    modalBtns.classList.toggle('modal-btns-reverse')
})