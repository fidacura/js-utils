/**
 *
 * DOM Manipulation:
 * - getScrollTop: Retrieves the distance of the scroll bar from the top of the page.
 * - offset: Retrieves the position of an element relative to the document.
 * - scrollTo: Smoothly scrolls the window to a specific position within a given duration.
 * - setScrollTop: Sets the scroll bar position from the top of the page.
 * - windowResize: Handles callbacks for when the mobile keyboard is shown or hidden.
 *
 * - animateElement: Animate an element with custom properties like position or opacity.
 * - filterElements: Filter DOM elements based on custom criteria.
 * - lazyLoadImages: Implement lazy loading for images to improve page load performance.
 * - cloneElement: Create a deep clone of a DOM element.
 * - sortChildElements: Sort child elements of a container based on a specified criteria, such as alphabetical, numeric, etc.
 * - findParent: Find the closest parent element matching a given selector.
 *
 * - createElement: Creates and appends an element to the DOM.
 * - removeElement: Removes an element from the DOM.
 *
 */

export { default as getScrollTop } from "./getScrollTop";
export { default as scrollTo } from "./scrollTo";
export { default as setScrollTop } from "./setScrollTop";
export { default as offset } from "./offset";
export { default as windowResize } from "./windowResize";
export { default as animateElement } from "./animateElement";
export { default as filterElements } from "./filterElements";
export { default as lazyLoadImages } from "./lazyLoadImages";
export { default as cloneElement } from "./cloneElement";
export { default as sortChildElements } from "./sortChildElements";
export { default as findParent } from "./findParent";

export { default as createElement } from "./createElement";
export { default as removeElement } from "./removeElement";
