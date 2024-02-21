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

> [!NOTE]
> `useArc` works clockwise, and doesn't accept negative numbers. The starting angle of `0` is at the right hand position. If you need to adjust the start position, consider using the rotation property.

The `useArc` function accepts a single configuration object as an argument, where each property has a default value
if not provided.

| Property     | Default | Description                                          |
|:-------------|:--------|:-----------------------------------------------------|
| `radius`     | `100`   | The radius of the arc.                               |
| `startAngle` | `0`     | The start angle of the arc, in degrees _(0 to 360)_. |
| `endAngle`   | `360`   | The end angle of the arc, in degrees _(0 to 360)_.   |

<!--@include: ./shared/config.md-->

## Example Usage

```ts
import {useArc} from 'vuexyz'

const radius: Ref<number> = ref(50)
const startAngle: Ref<number> = ref(0)
const endAngle: Ref<number> = ref(235)
const {vertices, edges, faces} = useArc({radius, startAngle, endAngle})
```

<!--@include: ./shared/return.md-->
