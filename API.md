
## Mashbot API


### Get a single data set

`GET https://api.noopschallenge.com/mashbot`

`HTTP 200`

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
      { "x": 812, "y": 405 },
      { "x": 775, "y": 406 },
      { "x": 748, "y": 407 },
      { "x": 724, "y": 427 },
      { "x": 673, "y": 484 },
      { "x": 656, "y": 454 },
      { "x": 648, "y": 407 },
      { "x": 546, "y": 419 },
      { "x": 604, "y": 370 },
      { "x": 529, "y": 337 },
      { "x": 533, "y": 322 },
      { "x": 552, "y": 276 },
      { "x": 581, "y": 255 },
      { "x": 614, "y": 240 },
      { "x": 653, "y": 222 },
      { "x": 692, "y": 186 },
      { "x": 732, "y": 176 },
      { "x": 788, "y": 209 },
      { "x": 768, "y": 253 },
      { "x": 824, "y": 286 },
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


### Get a 10 entry data set

`GET https://api.noopschallenge.com/mashbot?count=10`

`HTTP 200`

```
{
  "hexbot": [
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
  ],
  "polybot": [
    [
      { "x": 984, "y": 772 },
      { "x": 984, "y": 772 },
      { "x": 984, "y": 772 },
      { "x": 984, "y": 772 },
      { "x": 984, "y": 772 },
      { "x": 983, "y": 772 },
      { "x": 983, "y": 772 },
      { "x": 983, "y": 772 },
      { "x": 983, "y": 772 },
      { "x": 983, "y": 772 },
      { "x": 983, "y": 771 },
      { "x": 983, "y": 771 },
      { "x": 983, "y": 771 },
      { "x": 983, "y": 771 },
      { "x": 984, "y": 771 },
      { "x": 984, "y": 771 },
      { "x": 984, "y": 771 },
      { "x": 984, "y": 771 },
      { "x": 984, "y": 771 }
    ],
    [
      { "x": 440, "y": 101 },
      { "x": 415, "y": 159 },
      { "x": 336, "y": 158 },
      { "x": 314, "y": 173 },
      { "x": 254, "y": 208 },
      { "x": 232, "y": 250 },
      { "x": 164, "y": 168 },
      { "x": 92, "y": 204 },
      { "x": 124, "y": 102 },
      { "x": 89, "y": 54 },
      { "x": 53, "y": 0 },
      { "x": 155, "y": 0 },
      { "x": 114, "y": 0 },
      { "x": 233, "y": 0 },
      { "x": 252, "y": 0 },
      { "x": 293, "y": 0 },
      { "x": 348, "y": 0 },
      { "x": 413, "y": 0 },
      { "x": 419, "y": 0 }
    ],
    [
      { "x": 438, "y": 825 },
      { "x": 477, "y": 884 },
      { "x": 415, "y": 872 },
      { "x": 381, "y": 886 },
      { "x": 331, "y": 890 },
      { "x": 303, "y": 894 },
      { "x": 245, "y": 894 },
      { "x": 198, "y": 868 },
      { "x": 240, "y": 805 },
      { "x": 255, "y": 776 },
      { "x": 239, "y": 712 },
      { "x": 262, "y": 686 },
      { "x": 324, "y": 714 },
      { "x": 337, "y": 686 },
      { "x": 384, "y": 720 },
      { "x": 391, "y": 721 },
      { "x": 441, "y": 750 },
      { "x": 443, "y": 768 }
    ],
    [
      { "x": 185, "y": 403 },
      { "x": 72, "y": 404 },
      { "x": 92, "y": 323 },
      { "x": 168, "y": 363 }
    ],
    [
      { "x": 894, "y": 311 },
      { "x": 859, "y": 419 },
      { "x": 703, "y": 517 },
      { "x": 494, "y": 569 },
      { "x": 443, "y": 505 },
      { "x": 339, "y": 350 },
      { "x": 184, "y": 279 },
      { "x": 314, "y": 169 },
      { "x": 355, "y": 0 },
      { "x": 431, "y": 0 },
      { "x": 517, "y": 0 },
      { "x": 664, "y": 21 },
      { "x": 859, "y": 17 },
      { "x": 907, "y": 57 }
    ],
    [
      { "x": 553, "y": 612 },
      { "x": 439, "y": 683 },
      { "x": 415, "y": 818 },
      { "x": 270, "y": 811 },
      { "x": 176, "y": 820 },
      { "x": 103, "y": 606 },
      { "x": 82, "y": 495 },
      { "x": 202, "y": 490 },
      { "x": 303, "y": 450 },
      { "x": 401, "y": 438 },
      { "x": 512, "y": 441 },
      { "x": 563, "y": 567 }
    ],
    [
      { "x": 338, "y": 1000 },
      { "x": 146, "y": 1000 },
      { "x": 0, "y": 978 },
      { "x": 0, "y": 725 },
      { "x": 11, "y": 612 },
      { "x": 314, "y": 818 }
    ],
    [
      { "x": 985, "y": 555 },
      { "x": 920, "y": 588 },
      { "x": 818, "y": 401 },
      { "x": 853, "y": 311 },
      { "x": 1000, "y": 450 }
    ],
    [
      { "x": 374, "y": 856 },
      { "x": 283, "y": 940 },
      { "x": 280, "y": 931 },
      { "x": 218, "y": 826 },
      { "x": 230, "y": 788 },
      { "x": 317, "y": 797 },
      { "x": 370, "y": 822 }
    ],
    [
      { "x": 482, "y": 330 },
      { "x": 423, "y": 486 },
      { "x": 321, "y": 556 },
      { "x": 237, "y": 704 },
      { "x": 58, "y": 656 },
      { "x": 0, "y": 552 },
      { "x": 0, "y": 558 },
      { "x": 0, "y": 461 },
      { "x": 0, "y": 316 },
      { "x": 0, "y": 218 },
      { "x": 0, "y": 156 },
      { "x": 0, "y": 62 },
      { "x": 0, "y": 0 },
      { "x": 66, "y": 0 },
      { "x": 168, "y": 0 },
      { "x": 231, "y": 89 },
      { "x": 443, "y": 139 },
      { "x": 378, "y": 226 }
    ]
  ],
  "vexbot": [
    {
      "a": { "x": 387, "y": 621 },
      "b": { "x": 81, "y": 32 },
      "speed": 42
    },
    {
      "a": { "x": 891, "y": 120 },
      "b": { "x": 768, "y": 409 },
      "speed": 31
    },
    {
      "a": { "x": 468, "y": 582 },
      "b": { "x": 993, "y": 246 },
      "speed": 23
    },
    {
      "a": { "x": 308, "y": 614 },
      "b": { "x": 123, "y": 546 },
      "speed": 57
    },
    {
      "a": { "x": 643, "y": 111 },
      "b": { "x": 945, "y": 621 },
      "speed": 36
    },
    {
      "a": { "x": 658, "y": 377 },
      "b": { "x": 222, "y": 964 },
      "speed": 95
    },
    {
      "a": { "x": 365, "y": 337 },
      "b": { "x": 701, "y": 846 },
      "speed": 35
    },
    {
      "a": { "x": 478, "y": 679 },
      "b": { "x": 981, "y": 587 },
      "speed": 98
    },
    {
      "a": { "x": 135, "y": 287 },
      "b": { "x": 810, "y": 414 },
      "speed": 69
    },
    {
      "a": { "x": 357, "y": 650 },
      "b": { "x": 640, "y": 410 },
      "speed": 49
    }
  ]
}
```


### Get a 10 entry random data set

`GET https://api.noopschallenge.com/mashbot?randomize=1&count=10`

`HTTP 200`

```
{
  "hexbot": [
    { "value": "#B0688F" },
    { "value": "#1BF688" },
    { "value": "#6A2D1F" },
    { "value": "#80BE9D" },
    { "value": "#25F0B7" },
    { "value": "#BC71D4" },
    { "value": "#FC3D1D" },
    { "value": "#BECFC5" },
    { "value": "#80D1D7" },
    { "value": "#DDA41E" }
  ],
  "directbot": [
    { "direction": "left", "distance": 68, "speed": 61 },
    { "direction": "up", "distance": 58, "speed": 69 },
    { "direction": "left", "distance": 98, "speed": 16 },
    { "direction": "left", "distance": 37, "speed": 14 },
    { "direction": "down", "distance": 32, "speed": 98 }
  ],
  "polybot": [
    [
      { "x": 400, "y": 540 },
      { "x": 363, "y": 543 },
      { "x": 325, "y": 556 },
      { "x": 312, "y": 620 },
      { "x": 228, "y": 566 },
      { "x": 195, "y": 577 },
      { "x": 171, "y": 515 },
      { "x": 133, "y": 479 },
      { "x": 152, "y": 439 },
      { "x": 213, "y": 400 },
      { "x": 239, "y": 402 },
      { "x": 267, "y": 406 },
      { "x": 326, "y": 388 },
      { "x": 359, "y": 429 },
      { "x": 407, "y": 465 }
    ],
    [
      { "x": 330, "y": 206 },
      { "x": 324, "y": 220 },
      { "x": 310, "y": 218 },
      { "x": 306, "y": 228 },
      { "x": 298, "y": 231 },
      { "x": 295, "y": 221 },
      { "x": 285, "y": 218 },
      { "x": 280, "y": 214 },
      { "x": 287, "y": 204 },
      { "x": 287, "y": 194 },
      { "x": 293, "y": 183 },
      { "x": 301, "y": 186 },
      { "x": 307, "y": 192 },
      { "x": 312, "y": 187 },
      { "x": 321, "y": 191 },
      { "x": 327, "y": 200 }
    ],
    [
      { "x": 1000, "y": 838 },
      { "x": 811, "y": 987 },
      { "x": 668, "y": 878 },
      { "x": 705, "y": 732 },
      { "x": 950, "y": 630 },
      { "x": 1000, "y": 725 }
    ],
    [
      { "x": 899, "y": 143 },
      { "x": 804, "y": 39 },
      { "x": 866, "y": 0 }
    ]
  ],
  "vexbot": [
    {
      "a": { "x": 532, "y": 693 },
      "b": { "x": 229, "y": 677 },
      "speed": 18
    }
  ]
}
```


### Get a single vector

`GET https://api.noopschallenge.com/mashbot?apis=vexbot`

`HTTP 200`

```
{
  "hexbot": [
    { "value": "#A6C6BC" }
  ],
  "vexbot": [
    {
      "a": { "x": 588, "y": 387 },
      "b": { "x": 232, "y": 618 },
      "speed": 60
    }
  ]
}
```


### Get a single polygon

`GET https://api.noopschallenge.com/mashbot?apis=polybot`

`HTTP 200`

```
{
  "hexbot": [
    { "value": "#483BF0" }
  ],
  "polybot": [
    [
      { "x": 760, "y": 666 },
      { "x": 759, "y": 671 },
      { "x": 758, "y": 675 },
      { "x": 753, "y": 676 },
      { "x": 751, "y": 680 },
      { "x": 745, "y": 681 },
      { "x": 742, "y": 679 },
      { "x": 743, "y": 674 },
      { "x": 741, "y": 671 },
      { "x": 732, "y": 670 },
      { "x": 733, "y": 667 },
      { "x": 735, "y": 660 },
      { "x": 741, "y": 658 },
      { "x": 737, "y": 654 },
      { "x": 743, "y": 651 },
      { "x": 749, "y": 650 },
      { "x": 750, "y": 652 },
      { "x": 755, "y": 651 },
      { "x": 755, "y": 658 },
      { "x": 761, "y": 658 },
      { "x": 762, "y": 665 }
    ]
  ]
}
```


### Get a single direction

`GET https://api.noopschallenge.com/mashbot?apis=directbot`

`HTTP 200`

```
{
  "hexbot": [
    { "value": "#814434" }
  ],
  "directbot": [
    { "direction": "left", "distance": 42, "speed": 23 }
  ]
}
```


### Get a set of 10 directions

`GET https://api.noopschallenge.com/mashbot?apis=directbot&count=10`

`HTTP 200`

```
{
  "hexbot": [
    { "value": "#4ADEC3" },
    { "value": "#7C081E" },
    { "value": "#2B322C" },
    { "value": "#F528A2" },
    { "value": "#31C102" },
    { "value": "#3CD4B2" },
    { "value": "#3388E6" },
    { "value": "#E04640" },
    { "value": "#9EA4C6" },
    { "value": "#E1C60C" }
  ],
  "directbot": [
    { "direction": "up", "distance": 85, "speed": 79 },
    { "direction": "up", "distance": 57, "speed": 40 },
    { "direction": "right", "distance": 83, "speed": 21 },
    { "direction": "left", "distance": 8, "speed": 3 },
    { "direction": "up", "distance": 92, "speed": 85 },
    { "direction": "right", "distance": 32, "speed": 61 },
    { "direction": "up", "distance": 33, "speed": 51 },
    { "direction": "up", "distance": 77, "speed": 98 },
    { "direction": "down", "distance": 20, "speed": 18 },
    { "direction": "left", "distance": 43, "speed": 88 }
  ]
}
```


### Mix return types

`GET https://api.noopschallenge.com/mashbot?apis=directbot,polybot&count=10`

`HTTP 200`

```
{
  "hexbot": [
    { "value": "#93F7C3" },
    { "value": "#3A064B" },
    { "value": "#DB69B5" },
    { "value": "#E2B1F2" },
    { "value": "#4381B5" },
    { "value": "#A23B35" },
    { "value": "#B59EA0" },
    { "value": "#7391B6" },
    { "value": "#DDB230" },
    { "value": "#570C80" }
  ],
  "directbot": [
    { "direction": "up", "distance": 16, "speed": 40 },
    { "direction": "left", "distance": 54, "speed": 45 },
    { "direction": "up", "distance": 14, "speed": 1 },
    { "direction": "up", "distance": 25, "speed": 79 },
    { "direction": "up", "distance": 13, "speed": 36 },
    { "direction": "left", "distance": 65, "speed": 80 },
    { "direction": "up", "distance": 26, "speed": 7 },
    { "direction": "up", "distance": 9, "speed": 66 },
    { "direction": "right", "distance": 54, "speed": 75 },
    { "direction": "down", "distance": 63, "speed": 17 }
  ],
  "polybot": [
    [
      { "x": 886, "y": 598 },
      { "x": 915, "y": 705 },
      { "x": 838, "y": 795 },
      { "x": 724, "y": 786 },
      { "x": 717, "y": 795 },
      { "x": 596, "y": 951 },
      { "x": 535, "y": 800 },
      { "x": 420, "y": 737 },
      { "x": 335, "y": 727 },
      { "x": 365, "y": 593 },
      { "x": 256, "y": 484 },
      { "x": 303, "y": 366 },
      { "x": 357, "y": 335 },
      { "x": 527, "y": 212 },
      { "x": 635, "y": 287 },
      { "x": 713, "y": 267 },
      { "x": 873, "y": 177 },
      { "x": 932, "y": 294 },
      { "x": 1000, "y": 363 },
      { "x": 1000, "y": 484 }
    ],
    [
      { "x": 726, "y": 89 },
      { "x": 198, "y": 272 },
      { "x": 82, "y": 68 },
      { "x": 437, "y": 0 },
      { "x": 545, "y": 18 }
    ],
    [
      { "x": 172, "y": 1000 },
      { "x": 0, "y": 880 },
      { "x": 6, "y": 741 },
      { "x": 197, "y": 778 }
    ],
    [
      { "x": 392, "y": 786 },
      { "x": 339, "y": 782 },
      { "x": 281, "y": 788 },
      { "x": 257, "y": 758 },
      { "x": 264, "y": 710 },
      { "x": 351, "y": 665 },
      { "x": 354, "y": 706 }
    ],
    [
      { "x": 284, "y": 42 },
      { "x": 232, "y": 52 },
      { "x": 210, "y": 84 },
      { "x": 185, "y": 85 },
      { "x": 162, "y": 58 },
      { "x": 146, "y": 12 },
      { "x": 153, "y": 0 },
      { "x": 174, "y": 0 },
      { "x": 204, "y": 0 },
      { "x": 240, "y": 0 },
      { "x": 267, "y": 12 }
    ],
    [
      { "x": 897, "y": 966 },
      { "x": 827, "y": 954 },
      { "x": 780, "y": 937 },
      { "x": 806, "y": 913 },
      { "x": 816, "y": 856 },
      { "x": 891, "y": 896 }
    ],
    [
      { "x": 162, "y": 352 },
      { "x": 0, "y": 316 },
      { "x": 13, "y": 297 },
      { "x": 179, "y": 294 }
    ],
    [
      { "x": 482, "y": 323 },
      { "x": 415, "y": 525 },
      { "x": 218, "y": 503 },
      { "x": 0, "y": 464 },
      { "x": 0, "y": 350 },
      { "x": 0, "y": 152 },
      { "x": 0, "y": 107 },
      { "x": 212, "y": 20 },
      { "x": 344, "y": 98 },
      { "x": 476, "y": 288 }
    ],
    [
      { "x": 912, "y": 330 },
      { "x": 745, "y": 455 },
      { "x": 776, "y": 567 },
      { "x": 584, "y": 530 },
      { "x": 562, "y": 584 },
      { "x": 374, "y": 627 },
      { "x": 368, "y": 482 },
      { "x": 265, "y": 479 },
      { "x": 160, "y": 394 },
      { "x": 142, "y": 201 },
      { "x": 169, "y": 101 },
      { "x": 306, "y": 0 },
      { "x": 413, "y": 0 },
      { "x": 576, "y": 21 },
      { "x": 586, "y": 20 },
      { "x": 740, "y": 124 },
      { "x": 881, "y": 169 },
      { "x": 889, "y": 285 }
    ],
    [
      { "x": 589, "y": 130 },
      { "x": 562, "y": 201 },
      { "x": 657, "y": 328 },
      { "x": 566, "y": 324 },
      { "x": 453, "y": 366 },
      { "x": 442, "y": 426 },
      { "x": 357, "y": 408 },
      { "x": 247, "y": 381 },
      { "x": 149, "y": 343 },
      { "x": 131, "y": 309 },
      { "x": 152, "y": 223 },
      { "x": 142, "y": 142 },
      { "x": 79, "y": 48 },
      { "x": 76, "y": 0 },
      { "x": 220, "y": 0 },
      { "x": 285, "y": 0 },
      { "x": 347, "y": 0 },
      { "x": 401, "y": 0 },
      { "x": 479, "y": 0 },
      { "x": 555, "y": 0 },
      { "x": 597, "y": 0 },
      { "x": 608, "y": 11 },
      { "x": 573, "y": 98 }
    ]
  ]
}
```


### Pass parameters to mashed APIs

`GET https://api.noopschallenge.com/mashbot?apis=vexbot&count=10&width=12&height=12`

`HTTP 200`

```
{
  "hexbot": [
    {
      "value": "#D57722", "coordinates": { "x": 0, "y": 6 }
    },
    {
      "value": "#CBD19F", "coordinates": { "x": 11, "y": 11 }
    },
    {
      "value": "#354218", "coordinates": { "x": 6, "y": 6 }
    },
    {
      "value": "#2571CE", "coordinates": { "x": 9, "y": 11 }
    },
    {
      "value": "#617C09", "coordinates": { "x": 3, "y": 6 }
    },
    {
      "value": "#14E845", "coordinates": { "x": 5, "y": 4 }
    },
    {
      "value": "#A64ADA", "coordinates": { "x": 8, "y": 7 }
    },
    {
      "value": "#FB145A", "coordinates": { "x": 7, "y": 10 }
    },
    {
      "value": "#3C1798", "coordinates": { "x": 5, "y": 11 }
    },
    {
      "value": "#6D61BE", "coordinates": { "x": 5, "y": 0 }
    }
  ],
  "vexbot": [
    {
      "a": { "x": 0, "y": 5 },
      "b": { "x": 4, "y": 11 },
      "speed": 56
    },
    {
      "a": { "x": 9, "y": 0 },
      "b": { "x": 1, "y": 10 },
      "speed": 39
    },
    {
      "a": { "x": 2, "y": 9 },
      "b": { "x": 7, "y": 8 },
      "speed": 29
    },
    {
      "a": { "x": 5, "y": 4 },
      "b": { "x": 10, "y": 11 },
      "speed": 17
    },
    {
      "a": { "x": 6, "y": 7 },
      "b": { "x": 10, "y": 2 },
      "speed": 46
    },
    {
      "a": { "x": 2, "y": 9 },
      "b": { "x": 9, "y": 10 },
      "speed": 29
    },
    {
      "a": { "x": 8, "y": 1 },
      "b": { "x": 2, "y": 7 },
      "speed": 91
    },
    {
      "a": { "x": 4, "y": 1 },
      "b": { "x": 10, "y": 8 },
      "speed": 14
    },
    {
      "a": { "x": 9, "y": 0 },
      "b": { "x": 11, "y": 9 },
      "speed": 23
    },
    {
      "a": { "x": 1, "y": 2 },
      "b": { "x": 2, "y": 5 },
      "speed": 19
    }
  ]
}
```


### Specify minimum number of sides of polygons

`GET https://api.noopschallenge.com/mashbot?apis=polybot&count=5&minSides=4`

`HTTP 200`

```
{
  "hexbot": [
    { "value": "#ED8241" },
    { "value": "#C8CFFE" },
    { "value": "#C2AEEC" },
    { "value": "#AE0940" },
    { "value": "#52AB2F" }
  ],
  "polybot": [
    [
      { "x": 742, "y": 647 },
      { "x": 681, "y": 649 },
      { "x": 673, "y": 704 },
      { "x": 633, "y": 690 },
      { "x": 586, "y": 692 },
      { "x": 514, "y": 688 },
      { "x": 470, "y": 660 },
      { "x": 515, "y": 632 },
      { "x": 466, "y": 547 },
      { "x": 512, "y": 545 },
      { "x": 513, "y": 452 },
      { "x": 563, "y": 495 },
      { "x": 625, "y": 449 },
      { "x": 658, "y": 462 },
      { "x": 726, "y": 494 },
      { "x": 715, "y": 571 }
    ],
    [
      { "x": 894, "y": 722 },
      { "x": 808, "y": 789 },
      { "x": 769, "y": 841 },
      { "x": 829, "y": 978 },
      { "x": 708, "y": 896 },
      { "x": 660, "y": 1000 },
      { "x": 551, "y": 1000 },
      { "x": 479, "y": 874 },
      { "x": 370, "y": 896 },
      { "x": 408, "y": 812 },
      { "x": 195, "y": 739 },
      { "x": 194, "y": 699 },
      { "x": 323, "y": 559 },
      { "x": 402, "y": 524 },
      { "x": 401, "y": 475 },
      { "x": 397, "y": 362 },
      { "x": 513, "y": 341 },
      { "x": 588, "y": 342 },
      { "x": 701, "y": 428 },
      { "x": 795, "y": 362 },
      { "x": 865, "y": 387 },
      { "x": 839, "y": 571 },
      { "x": 846, "y": 605 }
    ],
    [
      { "x": 79, "y": 1000 },
      { "x": 60, "y": 1000 },
      { "x": 45, "y": 1000 },
      { "x": 0, "y": 1000 },
      { "x": 5, "y": 1000 },
      { "x": 0, "y": 993 },
      { "x": 0, "y": 958 },
      { "x": 1, "y": 952 },
      { "x": 33, "y": 956 },
      { "x": 72, "y": 966 },
      { "x": 81, "y": 987 }
    ],
    [
      { "x": 476, "y": 211 },
      { "x": 429, "y": 198 },
      { "x": 336, "y": 231 },
      { "x": 255, "y": 226 },
      { "x": 228, "y": 168 },
      { "x": 323, "y": 66 },
      { "x": 355, "y": 1 },
      { "x": 406, "y": 49 },
      { "x": 451, "y": 113 }
    ],
    [
      { "x": 1000, "y": 816 },
      { "x": 445, "y": 647 },
      { "x": 465, "y": 555 },
      { "x": 1000, "y": 638 }
    ]
  ]
}
```


### Require vectors to connect

`GET https://api.noopschallenge.com/mashbot?apis=vexbot&count=4&connected=1`

`HTTP 200`

```
{
  "hexbot": [
    { "value": "#6EF614" },
    { "value": "#2B904E" },
    { "value": "#08DABD" },
    { "value": "#E84099" }
  ],
  "vexbot": [
    {
      "a": { "x": 62, "y": 949 },
      "b": { "x": 762, "y": 390 },
      "speed": 48
    },
    {
      "a": { "x": 762, "y": 390 },
      "b": { "x": 123, "y": 68 },
      "speed": 55
    },
    {
      "a": { "x": 123, "y": 68 },
      "b": { "x": 245, "y": 545 },
      "speed": 95
    },
    {
      "a": { "x": 245, "y": 545 },
      "b": { "x": 910, "y": 753 },
      "speed": 97
    }
  ]
}
```


### Require directions to be connected

`GET https://api.noopschallenge.com/mashbot?apis=directbot&count=5&connected=1`

`HTTP 200`

```
{
  "hexbot": [
    { "value": "#72179E" },
    { "value": "#DC2A35" },
    { "value": "#DF0743" },
    { "value": "#1743B6" },
    { "value": "#B0FA34" }
  ],
  "directbot": [
    {
      "coordinates": {
        "a": { "x": 956, "y": 529 },
        "b": { "x": 956, "y": 454 }
      },
      "direction": "up",
      "distance": 75,
      "speed": 60
    },
    {
      "coordinates": {
        "a": { "x": 956, "y": 454 },
        "b": { "x": 992, "y": 454 }
      },
      "direction": "right",
      "distance": 36,
      "speed": 54
    },
    {
      "coordinates": {
        "a": { "x": 992, "y": 454 },
        "b": { "x": 992, "y": 528 }
      },
      "direction": "down",
      "distance": 74,
      "speed": 25
    },
    {
      "coordinates": {
        "a": { "x": 992, "y": 528 },
        "b": { "x": 905, "y": 528 }
      },
      "direction": "left",
      "distance": 87,
      "speed": 29
    },
    {
      "coordinates": {
        "a": { "x": 905, "y": 528 },
        "b": { "x": 905, "y": 536 }
      },
      "direction": "down",
      "distance": 8,
      "speed": 17
    }
  ]
}
```

