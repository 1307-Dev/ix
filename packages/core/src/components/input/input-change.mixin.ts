/*
 * SPDX-FileCopyrightText: 2025 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Event, EventEmitter } from '@stencil/core';

export interface IxChangeComponent<T> {
  ixChange: EventEmitter<T>;
  focusValue: T;
  value: T;
}

/**
 * Mixin factory that adds ixChange event functionality to input components.
 * This tracks focus values and emits change events on form submit and value changes.
 */
export const IxChangeMixin = <TBase extends new (...args: any[]) => any>(
  Base: TBase
) => {
  class IxChangeClass extends Base {
    /**
     * Event emitted when the input value changes and loses focus (committed change).
     */
    @Event() ixChange!: EventEmitter<any>;

    focusValue!: any;

    value!: any;

    _boundOnFormSubmit?: () => void;

    constructor(...args: any[]) {
      super(...args);
      this._boundOnFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputFocus(): void {
      this.focusValue = this.value;
    }

    onFormSubmit(): void {
      if (this.focusValue !== this.value) {
        this.ixChange.emit(this.value);
        this.focusValue = this.value;
      }
    }

    emitChangeIfValueChanged(): void {
      if (this.focusValue !== this.value) {
        this.ixChange.emit(this.value);
        this.focusValue = this.value;
      }
    }

    setupFormEventListener(formInternals: ElementInternals): void {
      const form = formInternals.form;
      if (form) {
        form.addEventListener('submit', this._boundOnFormSubmit!);
      } else {
        // Retry after a short delay if form is not yet available
        setTimeout(() => {
          const retryForm = formInternals.form;
          if (retryForm) {
            retryForm.addEventListener('submit', this._boundOnFormSubmit!);
          }
        }, 0);
      }
    }

    cleanupFormEventListener(formInternals: ElementInternals): void {
      const form = formInternals.form;
      if (form && this._boundOnFormSubmit) {
        form.removeEventListener('submit', this._boundOnFormSubmit);
      }
    }
  }

  return IxChangeClass;
};
