<script setup>
    import ThreeDemo from './components/threeDemo.vue';
</script>

# Demo: 3D / Tres

The following is a demo that takes VueXYZ data uses the [Tres](https://tresjs.org/) library for Vue to render it in 3D. This is possible because VueXYZ returns `threeShape` and `threeCurvePath` properties for all primitives.

<ThreeDemo />

<<< @/demo/components/threeDemo.vue
