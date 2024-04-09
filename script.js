// // Get the "About yourself" button element
// const aboutButton = document.getElementById('aboutButton');
// const wymtm = document.getElementById('wymtm');
// // Get the pop-up element
// const popup = document.getElementById('popup');
// const popwymtm = document.getElementById('popwymtm');

// // Add a click event listener to the button
// aboutButton.addEventListener('click', () => {
//     // Show the pop-up
//     let audio = new Audio('song.mp3');

//     if (popup.style.display === 'block') {
//         popup.style.display = 'none';
//         audio.pause();
//         return;
//     }
//     popup.style.display = 'block';
//     popup.style.opacity = 0.8;
//     if (audio.paused) {
//         audio.play();
//     }
//     else if (!audio.paused) {
//         audio.pause();
//     }
//     // Pause the song if it is currently playing
//     // if (!audio.paused) {
//     //     audio.pause();
//     // }
//     // Play the song
// });


// wymtm.addEventListener('click', () => {
//     const audio = new Audio('song2.mp3');
//     audio.play();
//     // Show the pop-up
//     if (popwymtm.style.display === 'block') {
//         popwymtm.style.display = 'none';
//         return;
//     }
//     popwymtm.style.display = 'block';
//     popwymtm.style.opacity = 0.8;
// });


// // Close the pop-up when the user clicks outside of it
// window.addEventListener('click', (event) => {
//     if (event.target === popup) {
//         popup.style.display = 'none';
//     }
// });

// Get the "About yourself" button element
const aboutButton = document.getElementById('aboutButton');
const wymtm = document.getElementById('wymtm');
const hiswiaau = document.getElementById('hiswiaau');
const t_best = document.getElementById('t_best');
const photo_pop = document.getElementById('photo_pop');
// Get the pop-up element
const popup = document.getElementById('popup');
const popwymtm = document.getElementById('popwymtm');
const photos = document.getElementById('photo');

// Initialize audio objects
const audio1 = new Audio('song_p1.mp3');
const audio2 = new Audio('song_p2.mp3');
const audio3 = new Audio('song_p3.mp3');
 const audio4 = new Audio('song_p4.mp3');
 const audio5 = new Audio('song_p5.mp3');

// const gallery = document.querySelectorAll('.gallery');
// Add a click event listener to the "About yourself" button
aboutButton.addEventListener('click', () => {
    // Toggle pop-up display
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
        audio1.pause();
    } else {
        popup.style.display = 'block';
        popup.style.opacity = 0.8;
        if (audio1.paused) {
            audio1.play();
        } else {
            audio1.pause();
        }
    }
});

// Add a click event listener to the "Why you should trust me" button
wymtm.addEventListener('click', () => {
    // Toggle pop-up display
    if (popwymtm.style.display === 'block') {
        popwymtm.style.display = 'none';
        audio2.pause();
    } else {
        popwymtm.style.display = 'block';
        popwymtm.style.opacity = 0.8;
        audio2.play();
    }
});

// Add a click event listener to the "hiswiaau" element
hiswiaau.addEventListener('click', () => {
    // Toggle the display of t_best photo
    if (t_best.style.display === 'block') {
        t_best.style.display = 'none';
        photo_pop.style.display = 'none';
        audio3.pause();
    } else {
        t_best.style.display = 'block';
        photo_pop.style.display = 'block';
        photo_pop.style.opacity = 0.8;
        audio3.play();
    }
});



// Close the pop-up when the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
        audio1.pause();
    }
    if (event.target === popwymtm) {
        popwymtm.style.display = 'none';
        audio2.pause();
    }
});

// function showGallery(galleryId) {
//     // Hide all galleries
//     var galleries = document.getElementsByClassName("gallery");
//     for (var i = 0; i < galleries.length; i++) {
//       galleries[i].style.display = "none";
//     }

//     // Show the selected gallery
//     document.getElementById(galleryId).style.display = (document.getElementById(galleryId).style.display === 'none') ? 'block' : 'none';
//     // document.getElementById(galleryId).style.display = "block";
//   }

// Add a click event listener to the photo gallery element
photos.addEventListener('click', () => {
    // Toggle the display of all images in the gallery
    const images = document.querySelectorAll('.image');
    images.forEach(image => {
        if (image.style.display === 'block') {
            image.style.display = 'none';
            audio4.pause();
        } else {
            image.style.display = 'block';
            audio4.play();
        }
    });
});

// Add a click event listener to the "ILYSSM" element
const ilyssm = document.getElementById('ilyssm');
ilyssm.addEventListener('click', () => {
    // Toggle the display of the three images
    const images = document.querySelectorAll('.s_images');
    images.forEach(image => {
        if (image.style.display === 'block') {
            image.style.display = 'none';
            audio5.pause();
        } else {
            image.style.display = 'block';
            audio5.play();
        }
    });
});