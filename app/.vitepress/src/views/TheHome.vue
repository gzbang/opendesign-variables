<script setup lang="ts">
import { useData } from 'vitepress';

import colorVariables from '@/data/color';
import fontVariables from '@/data/font';
import gapVariables from '@/data/gap';
import iconSizeVariables from '@/data/iconSize';
import radiusVariables from '@/data/radius';
import shadowVariables from '@/data/shadow';
</script>

<template>
  <!-- color -->
  <template v-for="item in colorVariables" :key="item.name">
    <h2>{{ item.name }}</h2>
    <div v-for="info in item.content" :key="info.name" class="o-variable-table">
      <span class="variable-name">{{ `--o-color-${info.name}` }}</span>
      <div class="variable-content">
        <div class="variable-sample" :style="{ background: info.val }"></div>
        <span class="variable-val">{{ info.val }}</span>
      </div>
    </div>
  </template>

  <!-- font -->
  <template v-for="item in fontVariables" :key="item.name">
    <h2>{{ item.name }}</h2>
    <div v-for="info in item.content" :key="info.name" class="o-variable-table">
      <span class="variable-name">{{ `--o-${info.name}` }}</span>
      <div class="variable-content">
        <div class="variable-sample" :style="{ background: info.val }"></div>
        <span class="variable-val">{{ info.val }}</span>
      </div>
    </div>
  </template>

  <!-- gap -->
  <template v-for="item in gapVariables" :key="item.name">
    <h2>{{ item.name }}</h2>
    <div v-for="info in item.content" :key="info.name" class="o-variable-table">
      <span class="variable-name">{{ `--o-${info.name}` }}</span>
      <div class="variable-content">
        <div class="variable-sample" :style="{ background: info.val }"></div>
        <span class="variable-val">{{ info.val }}</span>
      </div>
    </div>
  </template>

  <!-- iconSize -->
  <template v-for="item in iconSizeVariables" :key="item.name">
    <h2>{{ item.name }}</h2>
    <div v-for="info in item.content" :key="info.name" class="o-variable-table">
      <span class="variable-name">{{ `--o-${info.name}` }}</span>
      <div class="variable-content">
        <div class="variable-sample" :style="{ background: info.val }"></div>
        <span class="variable-val">{{ info.val }}</span>
      </div>
    </div>
  </template>

  <!-- radius -->
  <template v-for="item in radiusVariables" :key="item.name">
    <h2>{{ item.name }}</h2>
    <div v-for="info in item.content" :key="info.name" class="o-variable-table">
      <span class="variable-name">{{ `--o-${info.name}` }}</span>
      <div class="variable-content">
        <div class="variable-sample" :style="{ background: info.val }"></div>
        <span class="variable-val">{{ info.val }}</span>
      </div>
    </div>
  </template>

  <!-- shadow -->
  <template v-for="item in shadowVariables" :key="item.name">
    <h2>{{ item.name }}</h2>
    <div v-for="info in item.content" :key="info.name" class="o-variable-table">
      <span class="variable-name">{{ `--o-${info.name}` }}</span>
      <div class="variable-content">
        <div class="variable-sample" :style="{ background: info.val }"></div>
        <span class="variable-val">{{ info.val }}</span>
      </div>
    </div>
  </template>
</template>

<style lang="scss" scoped>
.o-variable-table {
  display: flex;
  align-items: center;
  .variable-name {
    min-width: 300px;
  }

  .variable-content {
    display: inline-flex;
    align-items: center;
    margin-left: 50px;
    .variable-sample {
      width: 20px;
      height: 20px;
      border-radius: 4px;
    }

    .variable-val {
      margin-left: 10px;
    }
  }
}
</style>
