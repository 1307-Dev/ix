/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component } from '@angular/core';
import { IxMenu, IxMenuItem } from '@siemens/ix-angular/standalone';

@Component({
  standalone: true,
  selector: 'app-example',
  imports: [IxMenu, IxMenuItem],
  template: `
    <ix-menu>
      <ix-menu-item home-tab tab-icon="home"> Home</ix-menu-item>
      <ix-menu-item tab-icon="globe"> Normal Tab</ix-menu-item>
      <ix-menu-item tab-icon="star" disabled> Disabled Tab</ix-menu-item>
      <ix-menu-item tab-icon="star"> With other Icon</ix-menu-item>
      <ix-menu-item tab-icon="globe" style="display: none">
        Should not be visible
      </ix-menu-item>
    </ix-menu>
  `,
  styleUrls: ['./vertical-tabs.css'],
})
export default class VerticalTabs {}
