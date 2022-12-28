# @miq4d/canvas-with-discord-content

A fork of node-canvas-with-twemoji-and-discord-emoji

## Installation
```shell
$ npm install @miq4d/canvas-with-discord-content
```
[npm](https://www.npmjs.com/package/@miq4d/canvas-with-discord-content)

## Quick Example
```javascript
const { createCanvas } = require('canvas');
const { fillTextWithTwemoji } = require('@miq4d/canvas-with-discord-content');

async function main () {
    const canvas = createCanvas(200, 200);
    const context = canvas.getContext('2d');

    context.fillStyle = '#000000';
    context.font = '30px Arial';
    await fillTextWithTwemoji(context, 'emoji 😉 discord emoji <:id:name>', 100, 100);
}

main();
```

## Dependencies

- node-canvas [GitHub](https://github.com/Automattic/node-canvas)
- twemoji-parser [GitHub](https://github.com/twitter/twemoji-parser)

## Licence

### node-canvas-with-twemoji

Copyright (c) 2020-2021 cagpie / Shun Kobayashi <cagpie@gmail.com>

Code licensed under the MIT License: http://opensource.org/licenses/MIT
