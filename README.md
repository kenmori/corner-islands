# corner-islands

corner-islands is a lightweight utility for dynamically determining the border-radius and other styles of connected elements in a sequence. By treating groups of elements as \"islands,\" this package allows you to easily style connected corners, apply custom styles, and manage layout logic based on the relationship between elements. Perfect for React and other UI frameworks where flexible, conditional styling is needed.

## install

```bash
npm install corner-islands
```

## Usage

```ts
import { CornerIslands } from 'corner-islands';

const cornerIslands = new CornerIslands();

const fields = [
  { condition: 'And' },
  { condition: 'And' },
  { condition: 'Or' },
  { condition: 'And' }
];

const result = cornerIslands.getIsland(fields);
console.log(result); // [2, 3, 4, 1]
```

## API

```js
getIsland(fields: { condition: 'And' | 'Or' }[]): (1 | 2 | 3 | 4)[]
```

Represents connections between elements as "islands" and returns the state of each element as a number.

```text
1: Independent element (only one island)
2: Start of an island
3: Middle of an island
4: End of an island
```

## Examples

`[2, 4, 2, 4]` => Contains two islands

`[2, 3, 3, 4]` => One island composed of four elements

`[2, 3, 4, 1]` => Contains two islands

## License

MIT License

## Contributing

Issues and pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Author

[@kenmori](https://x.com/terrace_tech)
