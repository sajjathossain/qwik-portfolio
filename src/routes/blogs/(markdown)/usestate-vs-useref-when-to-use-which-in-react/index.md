---
title: 'Choosing Between useState and useRef in React'
description: 'Understand the differences between useState and useRef in React to make informed decisions on which to use based on your component’s needs and performance considerations.'
pubDate: 2022-01-20
tags: ['react', 'usestate', 'useref']
image: 'should-you-use-usestate-or-useref.avif'
---

**_useState_** and **_useRef_** both are used to store component state in React. But there is a fundamental difference between them. They work differently.

**_useState_** copies the data and returns that data as state. On the other hand **_useRef_** stores the reference to that data. For better understanding let's see a simple example of what happens when we assign data to a variable in JavaScript. I found out that these two work exactly the same way (from my experience).

- Example 1:

```js
const value1 = [1, 2, 3, 4];
const value2 = value1;

console.log(value1); // [1, 2, 3, 4]
console.log(value2); // [1, 2, 3, 4]
console.log(value1 === value2); // true
```

- Example 2:

```js
const value1 = [1, 2, 3, 4];
const value2 = [1, 2, 3, 4];

console.log(value1); // [1, 2, 3, 4]
console.log(value2); // [1, 2, 3, 4]
console.log(value1 === value2); // false
```

Take a look at these examples. Two variables output same values but when comparing with each other, the output is different. Why does this happen?

It happens, because in the first case by declaring `value1 = value2` we're assigning it a reference to `value1`. As the `value2` is referencing to `value1`, it's like comparing `value1 ===  value1` which is true cause the memory location is the same. Also in any given point of time, if you change the value of `value2` then `value1` will be changed too.
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7el5o89vgfy3nr8at4rn.png)

But in the second case, we're not referencing any variable to another. Their values are stored in their own memory location.
![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/axxlcqne90vjftfvyzhi.png)

And while comparing, compilers aren't comparing values, instead comparing memory location. As the location is different, we're getting `false` as the output.

And this same situation occurs for the `useState` and the `useRef` hook.
So, if you need to store data then use `useState` hook and if you need to store reference to anything in the component, use `useRef` hook.
