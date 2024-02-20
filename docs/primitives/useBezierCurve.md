---
category: '@Primitives'
---

<script setup>
    import UseBezierCurveDemo from '../demo/components/useBezierCurveDemo.vue';
</script>

# useBezierCurve

Composable for working with Bézier curves.

<UseBezierCurveDemo />

## Configuration

The `useBezierCurve` function accepts a single configuration object as an argument, where each property has a default
value if not provided.

| Property | Default              | Description                                            |
|:---------|:---------------------|:-------------------------------------------------------|
| `start`  | `{x: 0, y: 0, z: 0}` | A vertex representing the starting point of the curve. |
| `c1`     | `{x: 0, y: 0, z: 0}` | A vertex representing the first control point.         |
| `c2`     | `{x: 0, y: 0, z: 0}` | A vertex representing the second control point.        |
| `end`    | `{x: 0, y: 0, z: 0}` | A vertex representing the ending point of the curve.   |

<!--@include: ./shared/config.md-->

## Usage

```ts
import {useBezierCurve} from 'vuexyz'

const start: Ref<Vertex> = ref({ x: -100, y: -100 })
const c1: Ref<Vertex> = ref({ x: -250, y: 0 })
const c2: Ref<Vertex> = ref({ x: 250, y: 0 })
const end: Ref<Vertex> = ref({ x: 100, y: 100 })

const {vertices, edges, faces} = useBezierCurve({start, c1, c2, end})
```

<!--@include: ./shared/return.md-->
