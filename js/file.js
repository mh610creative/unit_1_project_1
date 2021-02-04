// Page loads, DOM loads, User reads page
document.addEventListener('DOMContentLoaded', console.log ('DOM Loaded'));

// Identify page elements
let name = document.querySelector('#fname');
let bday = document.querySelector('#bday');
let male = document.querySelector('#male');
let female = document.querySelector('#female');
let nonbinary = document.querySelector('#nonbinary');
// let form = Array.from(document.querySelectorAll('#userinput input')).reduce((acc, input) => ({...acc,[input.id]: input.value}), {});
let form = document.getElementById('userInput');

// User enters Form Data, types in form

name.addEventListener('input', (e) => {
    let delay= setInterval((console.log('name was entered'), 5000));
    clearInterval(delay);
})
bday.addEventListener('input', (e) =>{
    let delay= setInterval((console.log('bday was entered'), 50000));
    clearInterval(delay);
})
female.addEventListener('click', (e) =>{
    let delay= setInterval((console.log('female clicked'), 5000));
    clearInterval(delay);
})
male.addEventListener('click', (e) =>{
    let delay= setInterval((console.log('male clicked'), 5000));
    clearInterval(delay);
})
nonbinary.addEventListener('click', (e) =>{
    let delay= setInterval((console.log('non-binary clicked'), 5000));
    clearInterval(delay);
})

//  check for above, form validation, used required tag in html

// function checkData() {
//     // submit event listener
// if (name.value === '' || bday.value === ''){
//     console.log('form incomplete')
//     return false
// } else if(male.click === false){
//     console.log('form incomplete')
//     return false
// } else if(female.click === false){
//     console.log('form incomplete')
//     return false
// } else if(nonbinary.click === false){
//     console.log('form incomplete')
//     return false
// } else {
//     console.log('form complete')
//     return true
// }
// };

// User clicks Submit button

// userInput.addEventListener('submit', (e) =>{
//     let delay= setInterval((console.log('submit clicked'), 5000));
//     clearInterval(delay);
//     checkData();
//     if(checkData() === false){
//     e.preventDefault();
//     }
// })



// convert form into string
// let finalData = ''; 
// userInput.addEventListener('submit', (e) => {
//     // let selectedValue;
//     e.preventDefault();
//     // console.log (typeof name.value);
//     // console.log(typeof bday.value);
//     // const rbs = document.querySelectorAll("input[name='gender']");
//     // for(const rb of rbs){
//     //         if(rb.checked){
//     //             selectedValue = rb.value;
//     //             break;
//     //         }
//     //     }
//     // alert(selectedValue);
//     // console.log(typeof e.target.gender.value);
//     let output += name.value.concat("-" + bday.value + "-" + e.target.gender.value);
//     finalData.push(output);
// });
// console.log(finalData)


let data = new FormData();
document.addEventListener('DOMContentLoaded', () => {
       data.append('name' , '  ');
       data.append('birthday' , '   ');
       data.append('gender', '   ');
       console.log(Array.from(data));
       for (let obj of data){
           console.log(obj)
       }
});

// let submitUrl = '    ';
userInput.addEventListener('submit', (e) => {
     e.preventDefault();
     data.name = name.value;
     data.birthday = bday.value;
     data.gender = e.target.gender.value;
     console.log(data); 
     let url = 'http://api.giphy.com/v1/gifs/search?api_key=MLFmfU4e8qjHa3zT7ojvbq4I4B1NMYqN&limit=3&q=';
     url = url.concat(data.name + "-" + data.birthday + "-" + data.gender);
     console.log(url);
     getData(url);
    });

// brock said i could make all of the above parameter value updates for data into another function, look into after completing alpha functionality if 
// time permits

    function getData(url) {
    fetch(url)
    .then(function(data) {
      return data.json();
    })
    .then(function(json) {
      let posts = json.data;
      console.log(posts);
      document.querySelector('.formBox').removeChild(form);
      document.querySelector('h3').innerText = 'BINGO! GIF DNA!';
      showResults(posts);

    })
    
}

const showResults = (input) => {
    for(let i=0; i<3; i++){
        let gif = document.createElement('img');
        document.querySelector('.formBox').appendChild(gif);
        gif.setAttribute('class', 'gif');
        gif.setAttribute('src', input[i].images.fixed_width.url);
    }
    }












































// showResults(cloneJson);
// const showResults = () => {
//     for(let i=0; i<3; i++){
//         let gif = document.createElement('img');
//         gif.setAttribute('class', 'gif');
//         gif.setAttribute('src', posts[i].url);
//     }
//     }
// show results is function to call inside, the scoping is issue again, tacking the results into getData function is raising the security protocol

// function showResults(input) {
// for(let i=0; i<3; i++){
//     let gif = document.createElement('img');
//     gif.setAttribute('class', 'gif');
//     gif.setAttribute('src', posts[i].url);
// }
// }


// userInput.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const formData = new FormData(this);   
//     const data = {}
//     Array.from(formData.entries()).forEach((item)=>{
//       data[item[0]] = item[1]
//     })
    
//     console.log(data)
//   })




// function genderConv() {
//     let str = "  ";
// let isChecked = radioButton.Checked;
// if (isChecked) {
//     str=radioButton1.Text
// } else if {
//     str=radioButton2.Text;
// }   else {
//  str=radioButton3.Text;
// }
// }
// genderConv()

// form.addEventListener("submit", (e) => {
// let data = new FormData(form);
// let output = " ";
// for(const entry of data){
//     output = output + entry[0] + "=" + entry[1] + "\r";
// };
// newArr.innerText = output;
// e.preventDefault();
// console.log(newArr);
// }, false); 

// let formData = userInput.serializeJSON;
// let jsonString = JSON.stringify(formData);
// setInterval(console.log(jsonString),10000);





// filled() {
// e.preventDefault();
// const rbs = document.querySelectorAll("input[name='gender']");
// let selectedValue;
// let object = {
//     filledName: name.value,
//     filledBday: bday.value,
//     filledRadio: selectedValue,
// };
// for(const rb of rbs){
//     if(rb.checked){
//         selectedValue = rb.value;
//         break;
//     }
// }
// formData.push(object);
// }
// let formData = [];
// console.log(formData.value);


// const rbs = document.querySelectorAll("input[name='gender']");
// let selectedValue;
// for(const rb of rbs){
//     if(rb.checked){
//         selectedValue = rb.value;
//         break;
//     }
// }
// console.log(selectedValue)

// fetch request goes inside the preventdefault callback function for user input
// const url = 'http://api.giphy.com/v1/gifs/translate/?api_key=MLFmfU4e8qjHa3zT7ojvbq4I4B1NMYqN';
// fetch(url, {
//     method: 'GET',
//     'api_key': 'MLFmfU4e8qjHa3zT7ojvbq4I4B1NMYqN',
//     'username': 'mh610creative'
// });

// })
// .then(res => {
//     if (res.ok) {
//         console.log('SUCCESS')
// } else {
//     console.log("Not successful")
// }
// res.json()
// })
// .then(data => console.log(data))
// .catch(error => console.log('ERROR'))





// THE ABOVE WORKS, but i have to change the fetch url parameter for search "&s=" for each field of the form, dont know if the translate feature will return 4 at once so does that mean looping fetch requests?
// .then(res => {
//     if (res.ok) {
//         console.log('SUCCESS')
// } else {
//     console.log("Not successful")
// }
// res.json()
// })
// .then(data => console.log(data))
// .catch(error => console.log('ERROR'))

// request.get('http://api.giphy.com/v1/gifs/translate' , { 'api_key': 'MLFmfU4e8qjHa3zT7ojvbq4I4B1NMYqN', 'user': 'mh610creative'});


// let giphyKey = 'MLFmfU4e8qjHa3zT7ojvbq4I4B1NMYqN';
// let url = 'http://api.giphy.com/v1/gifs/translate'


// fetch data, get it, parse it to create elements in JS to manipulate DOM


// Form disappears

// DOM Manipulation - replace HTML code with JS or delete HTML and insert JS






// Form is replaced by GIFs pulled by API,Fetch AJAX Data here






// User clicks other links on page maybe




// from mario, function for API call is only invoked on-click OR be stored only locally inside the event listener
