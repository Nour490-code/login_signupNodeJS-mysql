const form = document.getElementById('form');
const email = document.getElementById('email');
const pass = document.getElementById('pass');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try{
        const data = await fetch('/login',{
            method:'POST',
            body: JSON.stringify({
                email: email.value,
                password: pass.value
            }),
            headers:{'Content-Type':'application/json'}
        })
        const result = await data.json();
        console.log(result)
        const errDiv =  document.getElementById('err');
        result.length > 0 ? location.assign('/dashboard') : errDiv.textContent = 'Wrong email or password'
    }catch(err){
        console.log(err)
    }
});