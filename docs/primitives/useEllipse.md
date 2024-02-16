---
category: '@Primitives'
---

<script setup>
    import UseEllipseDemo from '../demo/components/useEllipseDemo.vue';
</script>

# useEllipse

Composable for working with ellipses.

<UseEllipseDemo />

## Configuration

The `useEllipse` function accepts a single configuration object as an argument, where each property has a default value
if not provided.

| Property  | Default | Description                           |
|:----------|:--------|:--------------------------------------|
| `xRadius` | `100`   | The horizontal radius of the ellipse. |
| `yRadius` | `100`   | The vertical radius of the ellipse.   |

<!--@include: ./shared/config.md-->

## Example Usage

```ts
import {useEllipse} from 'vuexyz'

const xRadius: Ref<number> = ref(100)
const yRadius: Ref<number> = ref(50)
const { vertices, edges, faces } = useEllipse({xRadius, yRadius})
```

<!--@include: ./shared/return.md-->
