<template>

  <ul>
    <li>
      <NuxtLink>
        <img src="/images/corn-1.png" alt="Corn Type 1" draggable="false" />
      </NuxtLink>
    </li>
    <li>
      <NuxtLink>
        <img src="/images/corn-2.png" alt="Corn Type 2" draggable="false" />
      </NuxtLink>
    </li>
    <li>
      <NuxtLink>
        <img src="/images/corn-3.png" alt="Corn Type 3" draggable="false" />
      </NuxtLink>
    </li>
    <li>
      <NuxtLink>
        <img src="/images/corn-4.png" alt="Corn Type 4" draggable="false" />
      </NuxtLink>
    </li>
    <li>
      <NuxtLink>
        <img src="/images/corn-5.png" alt="Corn Type 5" draggable="false" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 2rem;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 19.4%;
  grid-gap: 0.5rem;

  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-padding: 0 1rem;
  -webkit-overflow-scrolling: touch;

  padding: 0.5rem;
  border-radius: 0.25rem;

  cursor: move;
  cursor: grab;
  user-select: none;

  &:active {
    cursor: grabbing;
  }

  &::-webkit-scrollbar {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  ul {
    grid-auto-columns: 48vw;
  }
}


li {
  display: inline-block;
  background-color: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  scroll-snap-align: start;
}

ul img {
  width: 100%;
  height: auto;
  max-width: none;
  object-fit: contain;
  user-select: none;
}
</style>