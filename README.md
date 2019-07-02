![mashbot](https://user-images.githubusercontent.com/212941/60416044-bb830580-9b91-11e9-91d6-6d48db00c964.png)

# 👋 Meet Mashbot

Mashbot is a very powerful and very mysterious little Noop. Yesterday, Directbot, Hexbot, Polybot, and Vexbot meandered too close to the Mashbot and were sucked into its vortex. The force of Mashbot's core fused the Noops together into a new mega-API.

With the Mashbot API, you can add colors to your polygons, vectors, and directions, and get a mix of object types with your API requests.

## 🍱 What can you do?

Mashbot simplifies working with the graphic APIs (Directbot, Polybot, Vexbot, and Hexbot) by allowing you to request data from any of them via a single API call.

If you'd like 3 objects from Mashbot, request:

`https://api.noopschallenge.com/mashbot?count=3`

Mashbot will give you 3 objects from all four APIs:

```

{
   "hexbot":[
      {
         "value":"#9B963F"
      },
      {
         "value":"#1F33CC"
      },
      {
         "value":"#5AF05D"
      }
   ],
   "directbot":[
      {
         "direction":"down",
         "distance":64,
         "speed":24
      },
      {
         "direction":"down",
         "distance":34,
         "speed":46
      },
      {
         "direction":"up",
         "distance":99,
         "speed":18
      }
   ],
   "polybot":[
      [
         {
            "x":453,
            "y":277
         },
         {
            "x":0,
            "y":406
         },
         {
            "x":531,
            "y":0
         }
      ],
      [
         {
            "x":385,
            "y":106
         },
         {
            "x":388,
            "y":0
         },
         {
            "x":510,
            "y":0
         }
      ],
      [
         {
            "x":748,
            "y":565
         },
         {
            "x":751,
            "y":431
         },
         {
            "x":729,
            "y":0
         }
      ]
   ],
   "vexbot":[
      {
         "a":{
            "x":19,
            "y":574
         },
         "b":{
            "x":626,
            "y":626
         },
         "speed":62
      },
      {
         "a":{
            "x":891,
            "y":119
         },
         "b":{
            "x":898,
            "y":496
         },
         "speed":65
      },
      {
         "a":{
            "x":353,
            "y":139
         },
         "b":{
            "x":601,
            "y":721
         },
         "speed":57
      }
   ]
}
```

You can then render the vectors, polygons, and directions on screen with the color data.

If you'd like to specify which APIs to use, you can do so with the `apis` parameter, which is a comma separated string of `directbot`, `polybot`, and/or `vexbot`.

## ✨ A few ideas
- Enrich your experiments with the visual challenges with randomized color
- Use the combination of shapes in the API to generate patterns or terrain for your game.
- The Mashbot just combined a few of the Noops—but you can use this as inspiration to combine *any* of the Noops. We've suggested combinations throughout the challenge—now's your chance! Add music to the Maze challenge, add drums to your color visualizer, or add random colors to your charts!

## 🤖 API basics

You can request up to 1,000 data points from the [Directbot](../directbot), [Polybot](../polybot), and [Vexbot](../vexbot) APIs. All requests also return colors from the [Hexbot](../hexbot) API.

There's a single endpoint: `api.noopschallenge.com/mashbot`

```
{
  "hexbot": [
    { "value": "#E9B104" }
  ],
  "directbot": [
    { "direction": "right", "distance": 58, "speed": 7 }
  ],
  "polybot": [
    [
      { "x": 823, "y": 349 },
      { "x": 656, "y": 454 },
      { "x": 768, "y": 253 },
      { "x": 820, "y": 291 }
    ]
  ],
  "vexbot": [
    {
      "a": { "x": 65, "y": 197 },
      "b": { "x": 640, "y": 879 },
      "speed": 57
    }
  ]
}
```

The endpoint accepts all of the parameters known to the four combined APIs, and two new parameter:

- **apis** *(optional, string)*: comma separated string with any of the following values: `directbot`, `polybot`, `vexbot`. If `apis` is null, the data set will have `count` of each of the three APIs. If you specify APIs, you will only receive results from those APIs.
- **randomize** *(option, numeric)*: 0 or 1. If `1`, results will be randomly distributed across APIs to add up to `count`. If `0`, you will receive the same number of results for each API.

Common parameters across all APIs:

- **count** *(optional, numeric)*: Between 1 and 1000. Number of objects to return.
- **width** *(optional, numeric)*: Between 10 and 100,000. Maximum width of returned objects.
- **height** *(optional, numeric)*: Between 10 and 100,000. Maximum height of returned objects.

Read the [complete API documentation](./API.md).

For further reference, read the documentation for the [Directbot](../directbot), [Hexbot](../hexbot), [Polybot](../polybot), and [Vexbot](../vexbot) APIs.

More about Mashbot at [noopschallenge.com](https://noopschallenge.com/challenges/mashbot).
