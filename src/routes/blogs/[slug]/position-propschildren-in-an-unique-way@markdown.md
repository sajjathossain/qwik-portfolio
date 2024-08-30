---
title: 'Position props.children in an unique way'
pubDate: 2022-05-23
tags: ['props', 'children', 'react']
image: 'position-propschildren-in-an-unique-way.avif'
---

Recently I faced an interesting issue. I was asked if there's any way to position each children element passed into a children component via wrapping these elements/components using a component. The syntax of the question is as follows,

Let's assume we have a modal component. So, it will be like,

## Fig: 1

```jsx
<Modal>
  <Header />
  <Body />
  <Footer />
</Modal>
```

Now, the expected output should look similar to this codes' output,
(inside modal component)

## Fig: 2

```jsx
<div>
  <header>
    <Header />
  </header>
  <main>
    <Body />
  </main>
  <footer>
    <Footer />
  </footer>
</div>
```

Now, here's how I solved the issue,
I did not know how to solve it as I had no experience such like this. But I thought that if I could select them via the index, I could do so. So I spun up a Next.js application and tested my theory later on. And voila! I was right. You can achieve the same output (similar to the [Fig: 2](##fig2)) as shown here,

## Fig: 3

```jsx
const Modal = ({ children }) => {
  return (
    <div>
      <header>{children[0]}</header>
      <main>{children[1]}</main>
      <footer>{children[2]}</footer>
    </div>
  );
};
```

similarly:

```jsx
const Modal = ({ children }) => {
  /**
   * @desc assigning each array element to a variable;
   */
  const [header, body, footer] = children;

  return (
    <div>
      <header>{header}</header>
      <main>{body}</main>
      <footer>{footer}</footer>
    </div>
  );
};
```

Maybe, it's not the best way to pass an element or achieve such output. But it's an unique way and you never know, there might be an use-case for this. Here's an working demo: [Click here!](https://replit.com/@SajjatHossain/propschildren#pages/index.jsx)
