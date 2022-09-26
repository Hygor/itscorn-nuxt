<script lang="ts" setup>
import { availableLocales } from '~/utils/lang'

// state
const localeSetting = useState<string>('locale.setting')
</script>

<template>
  <div>
    <select v-model="localeSetting">
      <option v-for="lang in availableLocales" :key="lang.iso" :value="lang.iso">
        {{ lang.flag }} {{ lang.name }} ({{ lang.iso }})
      </option>
    </select>
  </div>
</template>


<style lang="scss" scoped>
div {
  position: relative;
  margin-top: 1rem;
  cursor: pointer;

  &:after {
    content: '▾';
    position: absolute;
    right: 0.1rem;
    top: 50%;
    width: 1rem;
    height: 1rem;
    padding-right: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    transform: translateY(-50%);
  }

  &:has(select:active) {

    &::after {
      content: '▴';
    }
  }
}

select {
  padding: .5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
}
</style>