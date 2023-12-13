<template>
  <div class="flex flex-col items-center">
    <Axis />
    <span>
      Coming soon!
    </span>
  </div>
</template>

<script>
import { definePageMeta } from '#imports'
import Axis from '@/components/axis'

export default {
  components: {
    Axis,
  },
  setup () {
    definePageMeta({ layout: 'Default' })
  }
}

</script>