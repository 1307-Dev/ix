<!--
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
-->

<script setup lang="ts">
import { IxInput } from '@siemens/ix-vue';
</script>

<template>
  <IxInput
    readonly
    label="Readonly"
    placeholder="Placeholder text..."
    value="Some text"
  ></IxInput>
</template>
