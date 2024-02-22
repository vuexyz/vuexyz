---
category: '@Utilities'
---

# useStyleTransform

Takes an input vertex and generates a string that can be bound to `:style` to apply a CSS transformation to an element.

## Configuration

| Property | Default               | Description                               |
|:---------|:----------------------|:------------------------------------------|
| vertex   | `{x: 0, y: 0, z: 0 }` | The vertex to use for the transformation. |

## Usage

```vue
<script setup lang="ts">
  const vertex = ref({ x: 100, y: 200, z: 0 });
  const transformation = useStyleTransform( vertex );
</script>

<template>
    <!-- style becomes "position: absolute; top: 0; left: 0; transform: translate3d(100px, 200px, 0)" -->
    <div :style="transformation"></div>
</template>
```

## Returns

`useStyleTransform` returns a single `ComputedRef<string>` that represents the CSS transformation as a string. On top of a CSS transform tag, it also includes `position: absolute; top: 0; left: 0;` to ensure the element is positioned correctly.
