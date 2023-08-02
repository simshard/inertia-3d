<template>
    <Link
      class="text-black text-xl hover:underline"
      :class="{'font-extrabold underline': active }"
    >
      <slot />
    </Link>
  </template>
  
  <script>
  import { Link } from "@inertiajs/vue3";
  export default {
    components: { Link },
    props: {
      active: Boolean
    }
  };
  </script>