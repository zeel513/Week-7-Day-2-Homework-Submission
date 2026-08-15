(function () {
    var partners = [
        { src: "images/partners/partner-bustour.png", alt: "Partner Bus Tours" },
        { src: "images/partners/partner-cabinrental.png", alt: "Partner Cabin Rental" },
        { src: "images/partners/partner-campingadv.png", alt: "Partner Camping Adventure" },
        { src: "images/partners/partner-collegetours.png", alt: "Partner College Tours" },
        { src: "images/partners/partner-rentalbike.png", alt: "Partner Bike Rentals" },
        { src: "images/partners/partner-tourgroup.png", alt: "Partner Tour Group" }
    ];

    var partnersList = document.getElementById("partners");

    if (!partnersList) {
        return;
    }

    partnersList.classList.add("container", "list-unstyled", "row", "mb-0");

    partners.forEach(function (partner) {
        var li = document.createElement("li");
        li.className = "partner col-12 col-sm-6 col-md-4 col-lg-2";

        var badge = document.createElement("div");
        badge.className = "partner-badge";

        var img = document.createElement("img");
        img.src = partner.src;
        img.alt = partner.alt;

        badge.appendChild(img);
        li.appendChild(badge);
        partnersList.appendChild(li);
    });
})();
