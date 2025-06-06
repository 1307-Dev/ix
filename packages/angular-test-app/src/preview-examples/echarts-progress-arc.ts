/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { getComputedCSSProperty, registerTheme } from '@siemens/ix-echarts';
import { themeSwitcher } from '@siemens/ix';
import * as echarts from 'echarts/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-example',
  templateUrl: './echarts-progress-arc.html',
  styleUrls: ['./echarts-progress-arc.css'],
})
export default class EchartsProgressArc implements OnInit {
  theme = themeSwitcher.getCurrentTheme();

  value = 60;

  options: EChartsOption = {
    series: [
      {
        id: '1',
        type: 'gauge',
        axisLine: {
          show: true,
          lineStyle: {
            width: 15,
            color: [[1, getComputedCSSProperty('color-neutral-40')]],
          },
        },
        axisTick: {
          show: false,
        },
        radius: '100%',
        startAngle: 200,
        endAngle: -20,
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        progress: {
          show: true,
          overlap: false,
          width: 35,
          itemStyle: {
            borderMiterLimit: 16,
            color: getComputedCSSProperty('color-success'),
          },
        },
        pointer: {
          show: false,
        },
        data: [
          {
            value: this.value,
            detail: {
              offsetCenter: [0, 0],
              overflow: 'break',
              fontSize: '2rem',
              fontWeight: 'normal',
              color: getComputedCSSProperty('color-soft-text'),
              width: 250,
              lineHeight: 35,
              formatter: '{value} / 100 \n completed',
            },
            pointer: {
              show: false,
            },
          },
        ],
      },
    ],
  };

  ngOnInit() {
    registerTheme(echarts);

    themeSwitcher.themeChanged.on((theme: string) => {
      this.theme = theme;
    });
  }
}
