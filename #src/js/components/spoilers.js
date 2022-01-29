const spoilerTriggers = document.querySelectorAll(".spoiler__trigger");
const spoilerItems = document.querySelectorAll(".spoiler");
const lgContainer = 980;

function openAccordion(activeItem, items) {
    const parent = activeItem.parentNode;

    if (parent.classList.contains("_spoiler-active")) {
        parent.classList.remove("_spoiler-active");
    } else {
        items.forEach((child) => {
            child.classList.remove("_spoiler-active");
        });

        parent.classList.add("_spoiler-active");
    }
}

if (spoilerItems && document.documentElement.clientWidth < lgContainer) {
    spoilerTriggers.forEach((item) => {
        item.addEventListener("click", () => {
            openAccordion(item, spoilerItems);
        });
    });
}