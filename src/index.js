/**
 *
 * @param e {Event}
 * @param perView {number}
 * @returns {number}
 */
export function onScroll(e, perView = 1) {
  if (!e.currentTarget) {
    return 0;
  }

  return Math.round(
    (e.currentTarget.scrollLeft / e.currentTarget.clientWidth) * perView,
  );
}

/**
 *
 * @param container {HTMLElement}
 * @param currentIndex {number}
 * @param targetIndex {number}
 * @param jumpTo {boolean}
 */
export function onChangeSlide(container, currentIndex, targetIndex, jumpTo) {
  if (!container) {
    return;
  }

  const nextSlide = container.querySelector(
    `[data-slide-index="${targetIndex}"]`,
  );

  if (!nextSlide) {
    return;
  }

  const direction = targetIndex > currentIndex ? 1 : -1;
  const { scrollLeft } = container;
  const itemWidth = nextSlide.clientWidth;
  const itemsToScroll = jumpTo ? Math.abs(targetIndex - currentIndex) : 1; // index - currentSlideIndex; //itemWidth * 2.5 < document.documentElement.offsetWidth ? 2 : 1;

  const nextPos =
    direction === 1
      ? Math.floor(scrollLeft / itemWidth) * itemWidth +
      itemWidth * itemsToScroll
      : Math.ceil(scrollLeft / itemWidth) * itemWidth -
      itemWidth * itemsToScroll;

  container.scrollTo({
    left: nextPos,
    behavior: "smooth",
  });
}

/**
 *
 * @param length {number}
 */

export function getDots(length) {
  return Array.from({ length });
}
