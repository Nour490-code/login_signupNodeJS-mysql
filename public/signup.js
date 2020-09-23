const form = document.getElementById('form');
const email = document.getElementById('email');
const pass = document.getElementById('pass');

form.addEventListener('submit', async (e) => {
    try{
        const data = await fetch('/signup',{
            method:'POST',
            body: JSON.stringify({
                email: email.value,
                password: pass.value
            }),
            headers:{'Content-Type':'application/json'}
        })
    }catch(err){
        console.log(err)
    }
});