$(document).ready(function() {
    // toggle solicitado con jquery en la consigna.
    $('.card__button').on('click', function() {
        $(this).toggleClass('card__button--active');
    });
});

