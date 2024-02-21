<script setup>
    import PointOnPrimitiveDemo from './components/pointOnPrimitiveDemo.vue';
</script>

# Demo: Point On Primitive

This demo shows how to use the `usePointOnPrimitive` composable. We define a percentage of `0`, and then animate it to `1` and back again, moving the point along the entire outline of the pentagon. The pentagon also rotates, just to illustrate the reactivity, so I've also highlighted the "first" vertex for clarity.

<PointOnPrimitiveDemo />

<<< @/demo/components/pointOnPrimitiveDemo.vue
