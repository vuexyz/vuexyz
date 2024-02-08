---
category: '@Primitives'
---

<script setup>
    import UseCircleDemo from '../demo/components/useCircleDemo.vue';
</script>

# useCircle

Composable for working with circles.

<UseCircleDemo />

## Configuration

The `useCircle` function accepts a single configuration object as an argument, where each property has a default value
if not provided.

| Property | Default | Description               |
|:---------|:--------|:--------------------------|
| `radius` | `0`     | The radius of the circle. |

<!--@include: ./shared/config.md-->

## Example Usage

```ts
import {useCircle} from 'vuexyz'

const radius: Ref<number> = ref(50)
const { vertices, edges, faces } = useCircle({radius})
```

<!--@include: ./shared/return.md-->
