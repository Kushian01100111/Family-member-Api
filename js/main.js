document.querySelector('button').addEventListener('click', apiRequests);

async function apiRequests(){
    const memberName = document.querySelector('input').value;
    try{
        const res = await fetch(`https://family-api-100devs.herokuapp.com/api/${memberName}`)
        const data = await res.json()

        console.log(data)
        document.querySelector('.name').innerText = memberName + ' ' + data.surname
        if(data.surname === 'unknown'){
            document.querySelector('.isAMember').innerText = data.relationship
        }else{
            document.querySelector('.isAMember').innerText = "I have a relative with that name"
        }
    }catch(error){
        console.log(error)
    }

}