import { CLASS_LIST } from '../data/classlist';
import { STATE_LIST, COMMON_VAL } from '../data/values';

const spoilerItems = document.querySelectorAll(`.${CLASS_LIST.spoiler.root}`);
const spoilerTriggers = document.querySelectorAll(`.${CLASS_LIST.spoiler.trigger}`);
const prodSpoilerItems = document.querySelectorAll(`.${CLASS_LIST.spoiler.product}`);
const prodSpoilerTriggers = document.querySelectorAll(`.${CLASS_LIST.spoiler.productTrigger}`);


function openAccordion(activeItem, items) {
    const parent = activeItem.parentNode;

    if (parent.classList.contains(STATE_LIST.active)) {
        parent.classList.remove(STATE_LIST.active);
    } else {
        items.forEach((child) => {
            child.classList.remove(STATE_LIST.active);
        });

        parent.classList.add(STATE_LIST.active);
    }
}

if (spoilerItems) {
    spoilerTriggers.forEach((item) => {
        item.addEventListener("click", () => {
            if (document.documentElement.clientWidth < COMMON_VAL.lgCont) {
                openAccordion(item, spoilerItems);
            }
        });
    });
}

if (prodSpoilerItems) {
    prodSpoilerTriggers.forEach((item) => {
        item.addEventListener("click", () => {
            openAccordion(item, prodSpoilerItems);
        });
    });
}