//reference: https://www.w3schools.com/howto/howto_css_modals.asp

const openModalfunction = (id) => {
    // Get the modal
    let modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    //populate with the pic of the kittie
    getOneById(id);
};
    