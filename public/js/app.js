let btns = document.querySelectorAll('button');

function generateRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

for (const btn of btns) {
    btn.addEventListener('click', function() {
        let randomColor = generateRandomColor();
        this.style.backgroundColor = randomColor;
        console.log('New color generated:', randomColor);
        document.body.style.backgroundColor = randomColor;
        // document.querySelector('p').innerText = `Current Color: ${randomColor}`;
        document.querySelector('h2').style.color = randomColor;

        console.log("Button was clicked");

    });
    
}

// Below is the code for apis

// const API_KEY = "YOUR_API_KEY"; // Replace with your actual API key
// const API_URL = "https://api.api-ninjas.com/v1/randomimage";

// function getRandomImage() {
//   fetch(API_URL, {
//     method: "GET",
//     headers: {
//       "X-Api-Key": API_KEY,
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       const imageUrl = data.image; // Assuming API responds with 'image' key

//       // Now display the image
//       const postImages = document.querySelectorAll(".post-img");
//       postImages.forEach((postImage) => {
//         postImage.src = imageUrl; // Set the random image URL to your post images
//       });
//     })
//     .catch((error) => {
//       console.error("Error fetching image:", error);
//     });
// }

// // Fetch random image when the page loads or on button click
// document.addEventListener("DOMContentLoaded", function () {
//   getRandomImage();
// });
