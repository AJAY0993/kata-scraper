### Task:

Given a two dimensional array, return the co-ordinates of `x`.

```if-not:c
If `x` is not inside the array, or if `x` appears multiple times, return `[]`.
```

```if:c
If `x` is not inside the array, or if `x` appears multiple times return `{-1, -1}`.
```

The co-ordinates should be zero indexed in row-major order.  
You should assume you will always get an array as input. The array will only contain `'x'`s and `'o'`s.

### Examples

```
Input: []
```
```if-not:c
Return an empty array if input is an empty array => []
```
```if:c
Return {-1, -1} if input is an empty array => {-1, -1}
```

```
Input: [
  ['o', 'o'],
  ['o', 'o']
]
```
```if-not:c
Return an empty array if no x found => []
```
```if:c
Return {-1, -1} if no x found => {-1,-1}
```

```
Input: [
  ['x', 'o'],
  ['o', 'x']
]
```
```if-not:c
Return an empty array if more than one x found => []
```
```if:c
Return {-1, -1} if more than one x found => {-1, -1}
```

```
Input: [
  ['x', 'o'],
  ['o', 'o']
]
Return [0,0] when x at top left => [0, 0]

Input: [
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
]
Return [4,6] for the example above => [4, 6]
```