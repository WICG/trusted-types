/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 */

/**
 * Returns an array of all event handlers. Some of the event handlers may be
 * supported only in some browsers.
 *
 * For every event type that the browser supports, SVG supports that as an event
 * attribute, following the same requirements as for HTML event attributes.
 * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/Events
 *
 * @return {!Array<string>}
 */
export function getUnsafeAttributeEventHandlers() {
  // TODO check attributes in safari, edge, IE
  return [
    'onabort',
    'onactivateinvisible',
    'onanimationcancel',
    'onanimationend',
    'onanimationiteration',
    'onanimationstart',
    'onauxclick',
    'onbeforecopy',
    'onbeforecut',
    'onbeforepaste',
    'onblur',
    'oncancel',
    'oncanplay',
    'oncanplaythrough',
    'onchange',
    'onclick',
    'onclose',
    'oncontextmenu',
    'oncopy',
    'oncuechange',
    'oncut',
    'ondblclick',
    'ondrag',
    'ondragend',
    'ondragenter',
    'ondragexit',
    'ondragleave',
    'ondragover',
    'ondragstart',
    'ondrop',
    'ondurationchange',
    'onemptied',
    'onended',
    'onerror',
    'onfocus',
    'onformdata',
    'onfullscreenchange',
    'onfullscreenerror',
    'ongotpointercapture',
    'oninput',
    'oninvalid',
    'onkeydown',
    'onkeypress',
    'onkeyup',
    'onload',
    'onloadeddata',
    'onloadedmetadata',
    'onloadend',
    'onloadstart',
    'onlostpointercapture',
    'onmousedown',
    'onmouseenter',
    'onmouseleave',
    'onmousemove',
    'onmouseout',
    'onmouseover',
    'onmouseup',
    'onmousewheel',
    'onmozfullscreenchange',
    'onmozfullscreenerror',
    'onoverscroll',
    'onpaste',
    'onpause',
    'onplay',
    'onplaying',
    'onpointercancel',
    'onpointerdown',
    'onpointerenter',
    'onpointerleave',
    'onpointermove',
    'onpointerout',
    'onpointerover',
    'onpointerrawupdate',
    'onpointerup',
    'onprogress',
    'onratechange',
    'onrejectionhandled',
    'onreset',
    'onresize',
    'onscroll',
    'onscrollend',
    'onsearch',
    'onseeked',
    'onseeking',
    'onselect',
    'onselectionchange',
    'onselectstart',
    'onshow',
    'onstalled',
    'onsubmit',
    'onsuspend',
    'ontimeupdate',
    'ontoggle',
    'ontransitioncancel',
    'ontransitionend',
    'ontransitionrun',
    'ontransitionstart',
    'onunhandledrejection',
    'onvolumechange',
    'onwaiting',
    'onwebkitanimationend',
    'onwebkitanimationiteration',
    'onwebkitanimationstart',
    'onwebkitfullscreenchange',
    'onwebkitfullscreenerror',
    'onwebkittransitionend',
    'onwheel',
  ];
}
