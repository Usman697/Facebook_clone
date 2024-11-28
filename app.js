
var userName;
var email;
var password;
var loginUserName;
var loginPassword;

function signUpForm() {
    userName = document.getElementById('username').value.toLowerCase();
    if (userName.trim() !== '') {
        email = document.getElementById('email').value.toLowerCase();
        if (email.trim() !== '') {
            password = document.getElementById('password').value;
            if (password.trim() !== '') {
                document.getElementById('signUpPage').classList.add('hidden');
                document.getElementById('signInPage').classList.remove('hidden')
            }
            else {
                document.getElementById('password').focus();
            }
        }
        else {
            document.getElementById('email').focus();
        }
    }
    else {
        document.getElementById('username').focus();
    }
    // document.getElementById('signUpPage').classList.add('hidden');
    // document.getElementById('signInPage').classList.remove('hidden')
    console.table(userName, email, password)
}

function loginForm() {
    loginUserName = document.getElementById('loginUserName').value.toLowerCase();
    if (loginUserName === userName) {
        loginPassword = document.getElementById('loginPassword').value;
        if (loginPassword === password) {
            document.getElementById('dashboard').classList.remove('hidden');
            document.getElementById('signInPage').classList.add('hidden');
            document.getElementById('userName').innerText = loginUserName.toUpperCase();
            document.getElementById('userEmailProfile').innerText = email;
            document.getElementById('postUserName').innerText = loginUserName.toUpperCase();

        }
        else {
            alert('Please, Enter Correct Password');
            document.getElementById('loginPassword').value = ''
        }
    }
    else {
        alert('Please, Enter Valid user Name.')
        document.getElementById('loginUserName').value = '';
        document.getElementById('loginPassword').value = ''
    }
}


function postSubmitted() {
    // console.log('abcdefghijklmnop')
    // event.defaultPrevented();
    var postText = document.getElementById('postText').value;
    // console.log(postText)
    var date = new Date().toString().slice(0, 25);
    // console.log(date)
    if (postText.trim() !== '') {
        document.getElementById('postArea').classList.remove('hidden')
        document.getElementById('postArea').innerHTML += (`
        <div class="shadow-xl">
        <div class="flex items-center mt-4 pl-2">
                <img width="52px" src="./asset/Fb logo img.png" alt="logo">
                <div class="ml-4 text-start">
                  <p class="text-lg font-medium">${userName.toUpperCase()}</p>
                  <div class="privacy">
                    <i class="fas fa-user-friends"></i>
                    <span>Friends</span>
                    <i class="fas fa-caret-down"></i>
                  </div>
                  <div class="time">${date}</div>
                </div>
            </div>
            <div class="text-start pl-24 pt-4 pb-4 text-xl">${postText}</div>
            </div>
        `)
        document.getElementById('postText').value = '';
    }
    else {
        alert('filled field!');
        document.getElementById('postText').focus();
    }

}


function logOut() {
    document.getElementById('signUpPage').classList.remove('hidden');
    document.getElementById('signInPage').classList.add('hidden');
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('postArea').classList.add('hidden');
    document.getElementById('postArea').innerHTML = '';
    document.getElementById('loginUserName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}
