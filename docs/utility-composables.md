# Utility Composables

Getting reactive data from a primitive is just the beginning. VueXYZ also provides a handful of powerful utility composables that you can use to manipulate and transform the data, turning it into something new.

You can find all of these under the _"Utilities"_ section of this documentation, but let's highlight a few of the most useful ones here:

## Interpolate between two vertices

See: [useLerpVertex](/utilities/useLerpVertex)

Let's say you've got an object that you want to position in a complex, dynamic composition. Then, we the user interacts with it, you want to animate it to a known, static position _(like a modal window, or a side panel)_. The utility composable `useLerpVertex` is perfect for this.

It takes two vertices, and a percentage between zero _(0)_ and one _(1)_. It returns a new vertex that is the linear interpolation between the two vertices, at the given percentage. Pass in a static vertex, and some crazy dynamic vertex from a moving primitive, and you can easily animate between the two.

You can see this in action in the [Interpolate Vertex](/demo/lerp-vertex) demo.

## Position a DOM element at a vertex

See: [useStyleTransform](/utilities/useStyleTransform)

The `useStyleTransform` composable is a powerful utility that takes a vertex and returns a CSS transform string that you can use to position a DOM element at that vertex. It's perfect for creating interactive, reactive compositions that are driven by VueXYZ primitives.

You can use this in so many ways, for example, to position team member photos around a rotating circle. Combine that with `useLerpVertex` and you can even smoothly transition between multiple "layouts" for DOM content, such as the circle and a grid. The possibilities are endless.

## Other examples

There are plenty more utilities under the _"Utilities"_ section of this documentation. Each of these utilities is designed to make it easy to manipulate the data from VueXYZ primitives, and to create complex, reactive compositions that are driven by the data. You can also check out the demos to see various utilities in action.
