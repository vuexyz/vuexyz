<script setup>
    import MouseDemo from './components/mouseDemo.vue';
</script>

# Demo: Mouse Position

This demo takes the reactive mouse position relative to the viewport and passes it to `useSquare()`. Each vertex of the square is then connected to the closest corner of the SVG demo container with `useLine()`.

<MouseDemo />

<<< @/demo/components/mouseDemo.vue
