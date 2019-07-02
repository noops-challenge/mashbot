![mashbot](https://user-images.githubusercontent.com/212941/60416044-bb830580-9b91-11e9-91d6-6d48db00c964.png)

# 👋 Meet Mashbot

Mashbot is a very powerful and very mysterious little Noop. Yesterday, Directbot, Hexbot, Polybot, and Vexbot meandered too close to the Mashbot and were sucked into its vortex. The force of Mashbot's core fused the Noops together into a new mega-API.

With the Mashbot API, you can add colors to your polygons, vectors, and directions, and get a mix of object types with your API requests.

## 🍱 What can you do?

Mashbot simplifies working with the graphic APIs (Directbot, Polybot, Vexbot, and Hexbot) by allowing you to request data from any of them via a single API call.

If you'd like 10 objects from Mashbot, request:

`https://api.noopschallenge.com/mashbot?count=10`

Mashbot will randomly allocate the 10 objects across the three data APIs, and provide 10 colors:

```

{
   "colors":[
      {
         "value":"#9B963F"
      },
      {
         "value":"#1F33CC"
      },
      ...
      {
         "value":"#5AF05D"
      }
   ],
   "directbot":[
      {
         "direction":"right",
         "distance":4,
         "speed":3
      },
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

`GET https://api.noopschallenge.com/mashbot`

```
{
  "colors": [
    { "value": "#E9B104" }
  ],
  "vexbot": [
    {
      "a": { "x": 567, "y": 993 },
      "b": { "x": 66, "y": 686 },
      "speed": 33
    }
  ]
}
```

The endpoint accepts all of the parameters known to the four combined APIs, and one new parameter:

- **apis** *(optional, string)*: comma separated string with any of the following values: `directbot`, `polybot`, `vexbot`. If `apis` is null, the data set will be a random distribution of all three APIs. If you specify APIs, the data set will be distributed randomly between them. If you specify a single API, you will only receive results from that API.

Common parameters:

- **count** *(optional, numeric)*: Between 1 and 1000. Number of objects to return.
- **width** *(optional, numeric)*: Between 10 and 100,000. Maximum width of returned objects.
- **height** *(optional, numeric)*: Between 10 and 100,000. Maximum height of returned objects.

Read the [complete API documentation](./API.md).

For further reference, read the documentation for the [Directbot](../directbot), [Hexbot](../hexbot), [Polybot](../polybot), and [Vexbot](../vexbot) APIs.

More about Mashbot at [noopschallenge.com](https://noopschallenge.com/challenges/mashbot).