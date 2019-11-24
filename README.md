# Vuetify 1.5 vs 2.1 Web Component Behavior

## Vuetify 1.5 Application and Web Component

In one terminal window:

    $ cd vuetify-1.5/vuetify-1.5-wc
    $ yarn install
    $ yarn build:wc && yarn serve:wc

In another terminal window:

    $ cd vuetify-1.5/vuetify-1.5-app
    $ yarn install
    $ yarn serve

**Result:** Both the Vuetify app and Vuetify web component controls are rendered correctly.

---

## Vuetify 2.1 Application and Web Component

In one terminal window:

    $ cd vuetify-2.1/vuetify-2.1-wc
    $ yarn install
    $ yarn build:wc && yarn serve:wc

In another terminal window:

    $ cd vuetify-2.1/vuetify-2.1-app
    $ yarn install
    $ yarn serve

**Result:** Only the Vuetify app's controls are rendered correctly. The web component's controls are not rendered, and JS console errors are displayed: `[Vue warn]: Unknown custom element: <v-app>`.

