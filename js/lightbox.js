$(function () {
    var $galleryImages = $(".cliff-card > img");

    $galleryImages.on("click", function () {
        var $card = $(this).closest(".cliff-card");
        var $clonedImage = $(this).clone();
        var $clonedDetails = $card.find(".cliff-card-content").contents().clone();

        var $backdrop = $("<div>", { class: "backdrop" });
        var $box = $("<div>", {
            class: "box",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": "Cliff image preview"
        });
        var $closeButton = $("<button>", {
            class: "close",
            type: "button",
            "aria-label": "Close lightbox"
        }).html("&times;");

        var $content = $("<div>", { class: "box-content" })
            .append($clonedImage)
            .append($("<div>", { class: "box-text" }).append($clonedDetails));

        $box.append($closeButton).append($content);
        $("body").append($backdrop).append($box);

        requestAnimationFrame(function () {
            $backdrop.addClass("is-open");
            $box.addClass("is-open");
        });

        function closeLightbox() {
            $backdrop.removeClass("is-open");
            $box.removeClass("is-open");
            $(document).off("keydown.lightbox");

            setTimeout(function () {
                $backdrop.remove();
                $box.remove();
            }, 200);
        }

        $closeButton.on("click", closeLightbox);
        $backdrop.on("click", closeLightbox);

        $(document).on("keydown.lightbox", function (event) {
            if (event.key === "Escape") {
                closeLightbox();
            }
        });
    });
});
