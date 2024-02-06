/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
/*
Source: http://www.github.com/GandelXIV/htmx-reset
*/

console.log("Loaded htmx-reset extension");

function resetEventTrigger(event) {
  const element = event.detail.requestConfig.elt;
  switch (element.tagName) {
    case 'FORM':
        element.reset();
        break;
  }
}

htmx.defineExtension("reset-always", {
  onEvent: function(name, event) {
    if (name == "htmx:afterRequest") {
      resetEventTrigger(event);
    }
  }
});

htmx.defineExtension("reset-success", {
  onEvent: function(name, event) {
    if (name == "htmx:afterRequest" && event.detail.successful) {
      resetEventTrigger(event);
    }
  }
})


htmx.defineExtension("reset-failure", {
  onEvent: function(name, event) {
    if (name == "htmx:afterRequest" && !event.detail.successful) {
      resetEventTrigger(event);
    }
  }
})
