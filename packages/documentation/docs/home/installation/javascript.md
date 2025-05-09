---
sidebar_position: 3
sidebar_label: Web Components
title: Web Components
doc-type: 'banner'
component-tabs: ['']
no_single_tab: true
description: 'Web Components are a set of web platform APIs that allow you to create reusable and encapsulated custom elements. This section guides you through the steps to install and set up our design system using web components, ensuring a straightforward and flexible integration process.'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

#

## Library installation

Install `@siemens/ix` and `@siemens/ix-icons` using a package manager:

<Tabs>
  <TabItem value="npm" label="NPM" default>
    ```
    npm install @siemens/ix @siemens/ix-icons
    ```
  </TabItem>
  <TabItem value="yarn" label="Yarn">
    ```
    yarn add @siemens/ix @siemens/ix-icons
    ```
  </TabItem>
  <TabItem value="pnpm" label="PNPM">
    ```
    pnpm add @siemens/ix @siemens/ix-icons
    ```
  </TabItem>
</Tabs>

## Build

There are several different possibilities to build and serve web apps with the library.
In the following section we will describe how you can build an application with [vite](https://vitejs.dev/guide/).

`index.html`

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div>
      <ix-button class="m-1" variant="primary">Button</ix-button>
      <ix-button class="m-1" variant="primary" disabled>Button</ix-button>
    </div>
    <script type="module" src="./main.js"></script>
  </body>
</html>
```

`main.js`

```javascript
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import { defineCustomElements } from '@siemens/ix/loader';
import { defineCustomElements as defineIxIconCustomElement } from '@siemens/ix-icons/loader';

(async () => {
  defineIxIconCustomElement();
  defineCustomElements();
})();
```
