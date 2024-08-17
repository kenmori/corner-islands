# corner-islands

<img src="https://kenjimorita.jp/wp-content/uploads/2024/08/スクリーンショット-2024-08-17-10.23.19.png" width="600px" />

corner-islands is a lightweight utility for dynamically determining the border-radius and other styles of connected elements in a sequence. By treating groups of elements as \"islands,\" this package allows you to easily style connected corners, apply custom styles, and manage layout logic based on the relationship between elements. Perfect for React and other UI frameworks where flexible, conditional styling is needed.

## install

```bash
npm install corner-islands
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

## Example


`[2, 4, 2, 4]` => Contains two islands

`[2, 3, 3, 4]` => One island composed of four elements

`[2, 3, 4, 1]` => Contains two islands


- [stackblitz](https://stackblitz.com/edit/corner-islands?file=README.md)

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

if you using react

```tsx
const conditions = [{ condition: 'And' as const }];
const landsByOne = new CornerIslands().getIsland(conditions);
.
.
.
<Settings>
  {conditions.map((_, i) => {
    return (
      <Land land={landsByOne[i]}>
        <ConditionText>{i + 1}</ConditionText>
      </Land>
  );
  })}
</Settings>

//// style (ex: styled-components)
const Land = styled.div<{ land: 1 | 2 | 3 | 4 }>`
  padding: 8px 12px;
  font-weight: bold;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: ${({ land }) =>
    land === 1
      ? '6px'
      : land === 2
      ? '6px 0 0 6px'
      : land === 3
      ? '0'
      : land === 4
      ? '0 6px 6px 0'
      : '0'};
  background: ${({ land }) => (land ? '#47cd47' : '#fff')}
`;
```

## License

MIT License

## Contributing

Issues and pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Author

[@kenmori](https://x.com/terrace_tech)
