/**
 * draggable:
 * Makes an element draggable.
 *
 * @param {HTMLElement} element The element to make draggable.
 */
export const dragElement = (element) => {
  let posX = 0,
    posY = 0,
    posInitX = 0,
    posInitY = 0;

  const dragMouseDown = (e) => {
    e = e || window.event;
    e.preventDefault();

    posInitX = e.clientX;
    posInitY = e.clientY;

    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  };

  const elementDrag = (e) => {
    e = e || window.event;
    e.preventDefault();

    posX = posInitX - e.clientX;
    posY = posInitY - e.clientY;
    posInitX = e.clientX;
    posInitY = e.clientY;

    element.style.top = element.offsetTop - posY + "px";
    element.style.left = element.offsetLeft - posX + "px";
  };

  const closeDragElement = () => {
    document.onmouseup = null;
    document.onmousemove = null;
  };

  element.onmousedown = dragMouseDown;
};
