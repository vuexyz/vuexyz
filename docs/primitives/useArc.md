---
category: '@Primitives'
---

<script setup>
    import UseArcDemo from '../demo/components/useArcDemo.vue';
</script>

# useArc

Composable for working with arcs.

<UseArcDemo />

## Configuration

The `useArc` function accepts a single configuration object as an argument, where each property has a default value
if not provided.

| Property     | Default | Description                             |
|:-------------|:--------|:----------------------------------------|
| `radius`     | `0`     | The radius of the arc.                  |
| `startAngle` | `0`     | The start angle of the arc, in degrees. |
| `endAngle`   | `360`   | The end angle of the arc, in degrees.   |

<!--@include: ./shared/config.md-->

## Example Usage

```ts
import {useArc} from 'vuexyz'

const radius: Ref<number> = ref(50)
const startAngle: Ref<number> = ref(0)
const endAngle: Ref<number> = ref(135)
const {vertices, edges, faces} = useArc({radius, startAngle, endAngle})
```

<!--@include: ./shared/return.md-->
