/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

console.log("Loaded htmx-reset extension");

function resetEventTrigger(event) {
      const element = event.detail.requestConfig.elt;
      element.reset();
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
