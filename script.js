const loadProfile = () => {
    const userInput = document.getElementById('user-input');
    const userName = userInput.value;
    userInput.value = '';
    if (userName == '') {
        alert('Please Enter Your Github User Name')
    }
    else {
        const url = `https://api.github.com/users/${userName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayUser(data))
    }


}

const displayUser = user => {
    console.log(user);
    const userContainer = document.getElementById('user-container');
    if (user.message == "Not Found") {
        console.log('Hello');
        userContainer.textContent = '';
        userContainer.innerHTML = `
        <img class="col-6 col-md-3 mx-auto mt-5" src="github-logo.png" alt="">
        <h2 class="text-white text-center mt-3">User Not Found</h2>
        `
    }
    else {
        const userContainer = document.getElementById('user-container');
        userContainer.textContent = '';
        userContainer.innerHTML = `
       <img class="mt-5 rounded-circle" src="${user.avatar_url}" alt="">
    `
        const h2 = document.createElement('h2');
        h2.classList.add('text-white', 'text-center', 'mt-2');
        h2.innerText = (user.name).toUpperCase();
        const p1 = document.createElement('p');
        p1.classList.add('text-white', 'text-center', 'mt-2', 'fst-italic', 'col-12', 'col-md-6', 'mx-auto');
        p1.innerText = user.bio;
        const p2 = document.createElement('p');
        p2.classList.add('text-white', 'text-center', 'mt-2', 'fst-italic');
        p2.innerText = `Location: ${user.location}`;
        userContainer.appendChild(h2);
        userContainer.appendChild(p1);
        userContainer.appendChild(p2);
    }
}