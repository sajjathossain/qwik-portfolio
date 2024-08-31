---
title: "RTK Query: Let's go beyond minimal setup"
description: 'This is a short tutorial on how to extend Redux Toolkit Query manage api calls and caching data.'
pubDate: 2022-10-23
tags: ['rtk-query', 'redux-toolkit', 'react']
image: 'rtk-query-lets-go-beyond-minimal-setup.avif'
---

Previously we saw how we can get started with RTK Query with a minimal setup. If haven't read that already, I would suggest you to take a look at it. It would make it easy for you to understand this one. In this setup we will go beyond our minimal setup and would learn some simple tricks. [Click here to read the previous blog](https://dev.to/sajjathossain/rtk-query-make-fetching-and-caching-data-effortless-3m7e)

I assume that you're using Redux Toolkit to manage your global states, and not just RTK Query to manage your APIs. Here's how you have to configure your store to use Redux Toolkit Query in conjunction with your global states.

**Configure Store :**

```tsx
import { configureStore } from '@reduxjs/toolkit';
import { demo } from 'store/api/demoSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    yourStateSlice,
    demo
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([demo.middleware])
});

setupListeners(store.dispatch);
```

> Here, as you can see, it looks different than the usual setup. We're adding the demo api slice as the rest but there are two extra thing (**middleware** and **setupListeners**). Let's learn why we need these two.

The api slices are like other state slices. They hold their own state. But **why do they need their own state?** For the caching purpose that we talked about. Now, **If they are similar, then why we need these extra configurations?** Because, they might be similar but as you may know, when you fetch data from the api, you need to handle it asynchronously. You have to wait for the response. For which you can use them as regular slices. You need to add them to the middleware list so that they interrupt your regular state management and also handle the responses asynchronously. Also you need add the **setupListeners** to listen for the actions being dispatched.

**Multiple api slice :**

Another part of this setup is to show you, how you can configure your store to have multiple api slices. It's pretty simple. You just have to create another slice and add to the **reducer** and **middleware** list as shown blow,

```tsx
import { configureStore } from '@reduxjs/toolkit';
import { demo } from 'store/api/demoSlice';
import { demo2 } from 'store/api/demo2Slice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    yourStateSlice,
    demo,
    demo2
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([demo.middleware, demo2.middleware])
});

setupListeners(store.dispatch);
```

See! really easy right? So, far we've configured the store but there's one thing still remaining. That is to wrapping up the root app with the provider. But wait, did we do that previously? we don't need to do that again. You're right and also wrong at the same time. You're right that we've already wrapped the root with the provider. But you're also wrong cause we wrapped the root with the **ApiProvider**. You can only use api slices with that provider not the state slices.

**Yeah. Right. Then we just wrap the root with provider that we used to use for the state slices right?**

No, we can not just use that. First we have to remove the api provider and wrap the root only with the regular state provider because we're already passing the api slices as/with the rest of the state slices. So we don't need that anymore. The updated code should look like this,

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'store/';
import Index from 'pages/';

function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}
```

> Just pass the store and you're all done.

Now, as you have multiple api slices, please be sure to differentiate the api tags from each api slice. Because they might end up creating some unexpected behaviour.

**Here comes a trick :**

How can you request for multiple api calls that may require the response from the another api?

Ans: You have to skip the next request conditionally. This might sound trick but it's actually easy. Here's how to do it.

```tsx
const {data, ...} = demo.useAnImportantQuery();
const {data: data2, ...} = demo.useAnothereImportantQuery({data.id},{skip: !data})
```

This way the second call will be skipped untill you get successful response from

the first api or the **data** has no value.
