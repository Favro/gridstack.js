declare module GridStack {
/**
 * touch.ts 7.2.3-dev
 * Copyright (c) 2021 Alain Dumesny - see GridStack root license
 */
/**
 * Detect touch support - Windows Surface devices and other touch devices
 * should we use this instead ? (what we had for always showing resize handles)
 * /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
 */
export const isTouch: boolean;
/**
 * Handle the touchstart events
 * @param {Object} e The widget element's touchstart event
 */
export function touchstart(e: TouchEvent): void;
/**
 * Handle the touchmove events
 * @param {Object} e The document's touchmove event
 */
export function touchmove(e: TouchEvent): void;
/**
 * Handle the touchend events
 * @param {Object} e The document's touchend event
 */
export function touchend(e: TouchEvent): void;
/**
 * Note we don't get touchenter/touchleave (which are deprecated)
 * see https://stackoverflow.com/questions/27908339/js-touch-equivalent-for-mouseenter
 * so instead of PointerEvent to still get enter/leave and send the matching mouse event.
 */
export function pointerdown(e: PointerEvent): void;
export function pointerenter(e: PointerEvent): void;
export function pointerleave(e: PointerEvent): void;

}
