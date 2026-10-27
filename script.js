/* =====================================
   BLUE PERSONAL WEBSITE
   JavaScript
===================================== */


/* =====================================
   GALLERY LIGHTBOX
===================================== */

let currentImageIndex = 0;

const galleryImages = [
    "IMAGES/gallery1.jpg",
    "IMAGES/gallery2.jpg",
    "IMAGES/gallery3.jpg",
    "IMAGES/gallery4.jpg",
    "IMAGES/1.jpg",
    "IMAGES/2.jpg"
];


function openLightbox(index) {

    currentImageIndex = index;

    const lightbox =
        document.getElementById("lightbox");

    const image =
        document.getElementById("lightboxImage");


    if (!lightbox || !image) {
        return;
    }


    image.src =
        galleryImages[currentImageIndex];

    lightbox.classList.add("show");

}


function closeLightbox() {

    const lightbox =
        document.getElementById("lightbox");


    if (lightbox) {

        lightbox.classList.remove("show");

    }

}


function changeImage(direction) {

    currentImageIndex += direction;


    if (
        currentImageIndex >=
        galleryImages.length
    ) {

        currentImageIndex = 0;

    }


    if (currentImageIndex < 0) {

        currentImageIndex =
            galleryImages.length - 1;

    }


    const image =
        document.getElementById("lightboxImage");


    if (image) {

        image.src =
            galleryImages[currentImageIndex];

    }

}


/* Close lightbox when clicking background */

document.addEventListener("click", function(event) {

    const lightbox =
        document.getElementById("lightbox");


    if (
        lightbox &&
        event.target === lightbox
    ) {

        closeLightbox();

    }

});


/* Keyboard controls */

document.addEventListener("keydown", function(event) {

    const lightbox =
        document.getElementById("lightbox");


    if (
        lightbox &&
        lightbox.classList.contains("show")
    ) {

        if (event.key === "Escape") {

            closeLightbox();

        }

        if (event.key === "ArrowRight") {

            changeImage(1);

        }

        if (event.key === "ArrowLeft") {

            changeImage(-1);

        }

    }

});


/* =====================================
   GOALS
===================================== */

function toggleGoal(id) {

    const selectedGoal =
        document.getElementById(id);


    if (!selectedGoal) {
        return;
    }


    selectedGoal.classList.toggle("active");

}


/* =====================================
   LOGOUT
===================================== */

function confirmLogout() {

    const answer =
        confirm(
            "Are you sure you want to log out?"
        );


    if (answer) {

        localStorage.removeItem("isLoggedIn");

        window.location.href =
            "login.html";

    }

}


/* =====================================
   CONTACT FORM
===================================== */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById("name");

            const email =
                document.getElementById("email");

            const message =
                document.getElementById("message");


            const nameError =
                document.getElementById("nameError");

            const emailError =
                document.getElementById("emailError");

            const messageError =
                document.getElementById("messageError");


            nameError.textContent = "";

            emailError.textContent = "";

            messageError.textContent = "";


            let valid = true;


            if (name.value.trim() === "") {

                nameError.textContent =
                    "Please enter your name.";

                valid = false;

            }


            if (email.value.trim() === "") {

                emailError.textContent =
                    "Please enter your email.";

                valid = false;

            } else if (
                !email.value.includes("@")
            ) {

                emailError.textContent =
                    "Please enter a valid email.";

                valid = false;

            }


            if (message.value.trim() === "") {

                messageError.textContent =
                    "Please enter your message.";

                valid = false;

            }


            if (valid) {

                alert(
                    "Thank you! Your message has been submitted."
                );

                contactForm.reset();

            }

        }
    );

}