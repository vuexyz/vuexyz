---
category: '@Primitives'
---

<script setup>
    import UseRectangleDemo from '../demo/components/useRectangleDemo.vue';
</script>

# useRectangle

Composable for working with rectangles.

<UseRectangleDemo />

## Configuration

The `useRectangle` function accepts a single configuration object as an argument, where each property has a default
value
if not provided.

| Property | Default | Description                  |
|:---------|:--------|:-----------------------------|
| `width`  | `100`   | The width of the rectangle.  |
| `height` | `50`    | The height of the rectangle. |

<!--@include: ./shared/config.md-->

## Example Usage

```ts
import {useRectangle} from 'vuexyz'

const width: Ref<number> = ref(100)
const height: Ref<number> = ref(50)
const {vertices, edges, faces} = useRectangle({width, height})
```

<!--@include: ./shared/return.md-->
