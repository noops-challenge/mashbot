
## Mashbot API


### Get a single vector

`GET https://api.noopschallenge.com/mashbot?apis=vexbot`

`HTTP 200`

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


### Get a single polygon

`GET https://api.noopschallenge.com/mashbot?apis=polybot`

`HTTP 200`

```
{
  "colors": [
    { "value": "#57186F" }
  ],
  "polybot": [
    [
      { "x": 1000, "y": 550 },
      { "x": 1000, "y": 569 },
      { "x": 1000, "y": 611 },
      { "x": 1000, "y": 731 },
      { "x": 960, "y": 703 },
      { "x": 921, "y": 667 },
      { "x": 863, "y": 804 },
      { "x": 778, "y": 649 },
      { "x": 718, "y": 691 },
      { "x": 752, "y": 536 },
      { "x": 724, "y": 481 },
      { "x": 763, "y": 436 },
      { "x": 784, "y": 397 },
      { "x": 783, "y": 327 },
      { "x": 826, "y": 264 },
      { "x": 929, "y": 259 },
      { "x": 1000, "y": 208 },
      { "x": 1000, "y": 327 },
      { "x": 1000, "y": 282 },
      { "x": 1000, "y": 440 },
      { "x": 1000, "y": 482 }
    ]
  ]
}
```


### Get a single direction

`GET https://api.noopschallenge.com/mashbot?apis=directbot`

`HTTP 200`

```
{
  "colors": [
    { "value": "#32A998" }
  ],
  "directbot": [
    { "direction": "right", "distance": 65, "speed": 57 }
  ]
}
```


### Get a set of 10 directions

`GET https://api.noopschallenge.com/mashbot?apis=directbot&count=10`

`HTTP 200`

```
{
  "colors": [
    { "value": "#6AA818" },
    { "value": "#4F4485" },
    { "value": "#7E1960" },
    { "value": "#26C1C5" },
    { "value": "#56B800" },
    { "value": "#C5A059" },
    { "value": "#AA1B40" },
    { "value": "#0AD567" },
    { "value": "#105E6F" },
    { "value": "#5F1A73" }
  ],
  "directbot": [
    { "direction": "right", "distance": 90, "speed": 84 },
    { "direction": "left", "distance": 63, "speed": 62 },
    { "direction": "up", "distance": 97, "speed": 11 },
    { "direction": "left", "distance": 9, "speed": 24 },
    { "direction": "left", "distance": 62, "speed": 44 },
    { "direction": "down", "distance": 14, "speed": 51 },
    { "direction": "down", "distance": 60, "speed": 70 },
    { "direction": "down", "distance": 37, "speed": 89 },
    { "direction": "up", "distance": 50, "speed": 78 },
    { "direction": "up", "distance": 66, "speed": 74 }
  ]
}
```


### Mix return types

`GET https://api.noopschallenge.com/mashbot?apis=directbot,polybot&count=10`

`HTTP 200`

```
{
  "colors": [
    { "value": "#FC1655" },
    { "value": "#C5D1F7" },
    { "value": "#0053FE" },
    { "value": "#C44B7B" },
    { "value": "#8348FC" },
    { "value": "#4DFE9A" },
    { "value": "#A7F320" },
    { "value": "#CC14D3" },
    { "value": "#6EFDBE" },
    { "value": "#BE169A" }
  ],
  "directbot": [
    { "direction": "left", "distance": 49, "speed": 9 },
    { "direction": "right", "distance": 25, "speed": 63 },
    { "direction": "right", "distance": 44, "speed": 46 }
  ],
  "polybot": [
    [
      { "x": 503, "y": 260 },
      { "x": 498, "y": 267 },
      { "x": 489, "y": 273 },
      { "x": 483, "y": 269 },
      { "x": 472, "y": 272 },
      { "x": 470, "y": 259 },
      { "x": 460, "y": 250 },
      { "x": 467, "y": 246 },
      { "x": 474, "y": 236 },
      { "x": 476, "y": 234 },
      { "x": 488, "y": 227 },
      { "x": 500, "y": 240 },
      { "x": 498, "y": 243 }
    ],
    [
      { "x": 1000, "y": 916 },
      { "x": 1000, "y": 1000 },
      { "x": 956, "y": 991 },
      { "x": 885, "y": 929 },
      { "x": 861, "y": 872 },
      { "x": 941, "y": 808 },
      { "x": 1000, "y": 794 },
      { "x": 1000, "y": 836 }
    ],
    [
      { "x": 1000, "y": 306 },
      { "x": 1000, "y": 369 },
      { "x": 956, "y": 411 },
      { "x": 861, "y": 353 },
      { "x": 843, "y": 251 },
      { "x": 858, "y": 232 },
      { "x": 900, "y": 170 },
      { "x": 1000, "y": 196 },
      { "x": 1000, "y": 262 }
    ],
    [
      { "x": 148, "y": 371 },
      { "x": 194, "y": 417 },
      { "x": 130, "y": 436 },
      { "x": 105, "y": 450 },
      { "x": 79, "y": 468 },
      { "x": 60, "y": 479 },
      { "x": 0, "y": 505 },
      { "x": 0, "y": 507 },
      { "x": 0, "y": 480 },
      { "x": 0, "y": 431 },
      { "x": 0, "y": 406 },
      { "x": 0, "y": 346 },
      { "x": 0, "y": 311 },
      { "x": 0, "y": 272 },
      { "x": 0, "y": 223 },
      { "x": 21, "y": 255 },
      { "x": 46, "y": 216 },
      { "x": 75, "y": 229 },
      { "x": 121, "y": 271 },
      { "x": 168, "y": 239 },
      { "x": 155, "y": 318 },
      { "x": 156, "y": 342 }
    ],
    [
      { "x": 472, "y": 715 },
      { "x": 472, "y": 720 },
      { "x": 472, "y": 726 },
      { "x": 465, "y": 723 },
      { "x": 460, "y": 724 },
      { "x": 458, "y": 725 },
      { "x": 450, "y": 725 },
      { "x": 449, "y": 720 },
      { "x": 437, "y": 717 },
      { "x": 438, "y": 711 },
      { "x": 443, "y": 704 },
      { "x": 441, "y": 700 },
      { "x": 445, "y": 695 },
      { "x": 454, "y": 693 },
      { "x": 463, "y": 692 },
      { "x": 466, "y": 700 },
      { "x": 474, "y": 699 },
      { "x": 475, "y": 701 },
      { "x": 474, "y": 711 }
    ],
    [
      { "x": 182, "y": 560 },
      { "x": 185, "y": 576 },
      { "x": 186, "y": 584 },
      { "x": 171, "y": 581 },
      { "x": 170, "y": 592 },
      { "x": 156, "y": 583 },
      { "x": 143, "y": 596 },
      { "x": 140, "y": 583 },
      { "x": 121, "y": 580 },
      { "x": 129, "y": 566 },
      { "x": 129, "y": 558 },
      { "x": 132, "y": 555 },
      { "x": 116, "y": 540 },
      { "x": 140, "y": 541 },
      { "x": 135, "y": 523 },
      { "x": 149, "y": 529 },
      { "x": 158, "y": 522 },
      { "x": 161, "y": 523 },
      { "x": 168, "y": 537 },
      { "x": 186, "y": 526 },
      { "x": 182, "y": 546 },
      { "x": 188, "y": 553 }
    ],
    [
      { "x": 789, "y": 452 },
      { "x": 734, "y": 493 },
      { "x": 688, "y": 523 },
      { "x": 586, "y": 514 },
      { "x": 494, "y": 540 },
      { "x": 427, "y": 441 },
      { "x": 489, "y": 366 },
      { "x": 514, "y": 281 },
      { "x": 563, "y": 239 },
      { "x": 674, "y": 218 },
      { "x": 689, "y": 270 },
      { "x": 783, "y": 361 }
    ]
  ]
}
```


### Pass parameters to mashed APIs

`GET https://api.noopschallenge.com/mashbot?apis=vexbot&count=10&width=12&height=12`

`HTTP 200`

```
{
  "colors": [
    {
      "value": "#A85A17", "coordinates": { "x": 0, "y": 8 }
    },
    {
      "value": "#182BA2", "coordinates": { "x": 10, "y": 1 }
    },
    {
      "value": "#F2FD04", "coordinates": { "x": 3, "y": 5 }
    },
    {
      "value": "#4A5E39", "coordinates": { "x": 7, "y": 11 }
    },
    {
      "value": "#F9ADAA", "coordinates": { "x": 4, "y": 6 }
    },
    {
      "value": "#2F1C23", "coordinates": { "x": 3, "y": 0 }
    },
    {
      "value": "#FD691B", "coordinates": { "x": 9, "y": 3 }
    },
    {
      "value": "#54D99E", "coordinates": { "x": 7, "y": 8 }
    },
    {
      "value": "#698DCA", "coordinates": { "x": 6, "y": 10 }
    },
    {
      "value": "#57E30C", "coordinates": { "x": 8, "y": 9 }
    }
  ],
  "vexbot": [
    {
      "a": { "x": 4, "y": 4 },
      "b": { "x": 2, "y": 2 },
      "speed": 6
    },
    {
      "a": { "x": 6, "y": 6 },
      "b": { "x": 8, "y": 5 },
      "speed": 69
    },
    {
      "a": { "x": 11, "y": 3 },
      "b": { "x": 2, "y": 0 },
      "speed": 64
    },
    {
      "a": { "x": 1, "y": 10 },
      "b": { "x": 7, "y": 9 },
      "speed": 97
    },
    {
      "a": { "x": 0, "y": 9 },
      "b": { "x": 8, "y": 7 },
      "speed": 98
    },
    {
      "a": { "x": 4, "y": 4 },
      "b": { "x": 6, "y": 8 },
      "speed": 17
    },
    {
      "a": { "x": 11, "y": 3 },
      "b": { "x": 3, "y": 6 },
      "speed": 55
    },
    {
      "a": { "x": 9, "y": 10 },
      "b": { "x": 6, "y": 6 },
      "speed": 54
    },
    {
      "a": { "x": 0, "y": 0 },
      "b": { "x": 5, "y": 2 },
      "speed": 65
    },
    {
      "a": { "x": 4, "y": 8 },
      "b": { "x": 10, "y": 9 },
      "speed": 60
    }
  ]
}
```


### Specify minimum number of sides of polygons

`GET https://api.noopschallenge.com/mashbot?apis=polybot&count=5&minSides=4`

`HTTP 200`

```
{
  "colors": [
    { "value": "#2BD454" },
    { "value": "#4AABCD" },
    { "value": "#06F66F" },
    { "value": "#E90C67" },
    { "value": "#6FC3FA" }
  ],
  "polybot": [
    [
      { "x": 731, "y": 689 },
      { "x": 722, "y": 752 },
      { "x": 653, "y": 730 },
      { "x": 636, "y": 725 },
      { "x": 590, "y": 695 },
      { "x": 586, "y": 646 },
      { "x": 593, "y": 626 },
      { "x": 637, "y": 571 },
      { "x": 688, "y": 573 },
      { "x": 740, "y": 562 },
      { "x": 781, "y": 638 }
    ],
    [
      { "x": 971, "y": 825 },
      { "x": 964, "y": 906 },
      { "x": 867, "y": 928 },
      { "x": 825, "y": 911 },
      { "x": 793, "y": 902 },
      { "x": 646, "y": 906 },
      { "x": 675, "y": 804 },
      { "x": 639, "y": 781 },
      { "x": 663, "y": 698 },
      { "x": 735, "y": 655 },
      { "x": 807, "y": 644 },
      { "x": 916, "y": 594 },
      { "x": 919, "y": 723 },
      { "x": 1000, "y": 777 }
    ],
    [
      { "x": 576, "y": 106 },
      { "x": 573, "y": 129 },
      { "x": 532, "y": 142 },
      { "x": 518, "y": 196 },
      { "x": 484, "y": 179 },
      { "x": 472, "y": 154 },
      { "x": 456, "y": 151 },
      { "x": 427, "y": 152 },
      { "x": 413, "y": 121 },
      { "x": 385, "y": 90 },
      { "x": 403, "y": 73 },
      { "x": 439, "y": 49 },
      { "x": 453, "y": 37 },
      { "x": 483, "y": 34 },
      { "x": 505, "y": 2 },
      { "x": 529, "y": 32 },
      { "x": 549, "y": 43 },
      { "x": 580, "y": 35 },
      { "x": 598, "y": 66 }
    ],
    [
      { "x": 862, "y": 995 },
      { "x": 835, "y": 1000 },
      { "x": 833, "y": 1000 },
      { "x": 789, "y": 1000 },
      { "x": 765, "y": 1000 },
      { "x": 744, "y": 991 },
      { "x": 734, "y": 957 },
      { "x": 732, "y": 945 },
      { "x": 752, "y": 906 },
      { "x": 796, "y": 896 },
      { "x": 834, "y": 910 },
      { "x": 840, "y": 913 },
      { "x": 866, "y": 948 }
    ],
    [
      { "x": 504, "y": 872 },
      { "x": 424, "y": 883 },
      { "x": 323, "y": 924 },
      { "x": 313, "y": 843 },
      { "x": 310, "y": 682 },
      { "x": 442, "y": 673 },
      { "x": 472, "y": 773 }
    ]
  ]
}
```


### Require vectors to connect

`GET https://api.noopschallenge.com/mashbot?apis=vexbot&count=4&connected=1`

`HTTP 200`

```
{
  "colors": [
    { "value": "#71B2E9" },
    { "value": "#2ABF90" },
    { "value": "#17D5CF" },
    { "value": "#5163EA" }
  ],
  "vexbot": [
    {
      "a": { "x": 190, "y": 810 },
      "b": { "x": 234, "y": 795 },
      "speed": 29
    },
    {
      "a": { "x": 234, "y": 795 },
      "b": { "x": 448, "y": 532 },
      "speed": 70
    },
    {
      "a": { "x": 448, "y": 532 },
      "b": { "x": 830, "y": 976 },
      "speed": 29
    },
    {
      "a": { "x": 830, "y": 976 },
      "b": { "x": 237, "y": 537 },
      "speed": 59
    }
  ]
}
```


### Require directions to be connected

`GET https://api.noopschallenge.com/mashbot?apis=directbot&count=5&connected=1`

`HTTP 200`

```
{
  "colors": [
    { "value": "#0FC713" },
    { "value": "#499114" },
    { "value": "#FAB96A" },
    { "value": "#544873" },
    { "value": "#F30E67" }
  ],
  "directbot": [
    {
      "coordinates": {
        "a": { "x": 315, "y": 484 },
        "b": { "x": 315, "y": 415 }
      },
      "direction": "up",
      "distance": 69,
      "speed": 73
    },
    {
      "coordinates": {
        "a": { "x": 315, "y": 415 },
        "b": { "x": 315, "y": 342 }
      },
      "direction": "up",
      "distance": 73,
      "speed": 74
    },
    {
      "coordinates": {
        "a": { "x": 315, "y": 342 },
        "b": { "x": 347, "y": 342 }
      },
      "direction": "right",
      "distance": 32,
      "speed": 98
    },
    {
      "coordinates": {
        "a": { "x": 347, "y": 342 },
        "b": { "x": 444, "y": 342 }
      },
      "direction": "right",
      "distance": 97,
      "speed": 9
    },
    {
      "coordinates": {
        "a": { "x": 444, "y": 342 },
        "b": { "x": 383, "y": 342 }
      },
      "direction": "left",
      "distance": 61,
      "speed": 69
    }
  ]
}
```

