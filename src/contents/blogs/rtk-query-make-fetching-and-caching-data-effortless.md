---
title: 'RTK Query: Make fetching and caching data effortless.'
pubDate: 2022-10-04
tags: ['rtk-query', 'redux-toolkit', 'react']
image: 'rtk-query-make-fetching-and-caching-data-effortless.avif'
---

RTK query which is the short form of Redux Toolkit Query is a data fetching and caching library that comes bundled with Redux Toolkit. If you're a person using Redux Toolkit to manage your application global store then this is going to be the best go-to for you.

There are a few alternatives to Redux Toolkit, React-Query and React-Saga are amongst them. These libraries need a bit more configuration to work. Like, React Query wants you to use your choice of data fetching library (e.g Axios or fetch API). But RTK Query handles all of it for you. You just need to create an endpoint module and add the required configurations. After you add the base configurations you're ready to roll. Also, it makes handling loading states, and errors a lot easier. Now let's see how we can implement RTK Query with minimal configuration.

First, we'll see how you can just use the RTK Query without using Redux Toolkit in your project.

**1. Create a store :**

Create a folder named **store** at the root of your project.

Now, create a folder called **reducers** inside of it. To separate our API slices from global state slices let's create a folder called API and we'll create all the API slices inside of it. Now the slice config,

- Slice with a single endpoint. Let's name it to **demo**.

```tsx
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IReturn {
  key[string]: any;
}

interface IParams {
  key[string]: any;
}

export const demo = createApi({
  reducerPath: 'demo',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://baseurl.com'
  }),
  tagTypes: ['tag'],
  endpoints: (builder) => ({
    getSingleData: builder.query<IReturn, IParams>({
      query: ({ slug, id }) => `/${slug}/items/${id}`
    })
  })
});
```

> You need to add reducerPath just like you need to do for reducer slices. Now, there are two types of builder methods. **query** and **mutation**. Queries are used when you're not trying to mutate or change any data. For **Get** requests in short. And **mutations** are used to change,update,delete type actions. Also the tagTypes here are like groups and you'll need it when you make mutations. We'll see it downwards.

- Here you can see there are two interfaces. These are only required for TypeScript projects. You need to specify the types of the parameters and the returns inside the angle brackets.
- Now, you might need more the these like you might need to pass your auth token. You just have to configure it inside the baseQuery property. Here's how to do it.

```tsx
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IReturn {
  key[string]: any;
}

interface IParams {
  key[string]: any;
}

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://baseurl.com',
  prepareHeaders: (headers) => {
  const token = 'token';
    if (token) {
      headers.set('Content-Type', 'application/json');
      headers.set('Authorization', `Bearer ${token}`);
      headers.set('Cookies', token);
    }
    return headers;
  }
});

export const demo = createApi({
  reducerPath: 'demo',
  baseQuery: baseQuery,
  tagTypes: ['tag'],
  endpoints: (builder) => ({
    getSingleData: builder.query<IReturn, IParams>({
      query: ({ slug, id }) => `/${slug}/items/${id}`
    }),
    getAllData: builder.query<IReturn[], IParams>({
      query: ({ slug }) => `/${slug}/items`,
      providesTags: [{ type: 'tag', id: 'LIST' }]
    })
  })
});
```

- We're setting the headers if we find the token. The getAllData seems to be different right? It has an extra configuration **providesTags**. What is it doing here? Well, it is used to cache the fetched data. So, when you send a request using the same endpoint and the cache hasn't been invalidated, it will return the cache instead. Which saves you from some API calls and makes the UI rendering look instant.
- So far we've only seen how we can request queries. Let's configure some methods to make mutations. Create, Update, **Delete** generally.

```tsx
export const demo = createApi({
  reducerPath: 'demo',
  baseQuery: baseQuery,
  tagTypes: ['tag'],
  endpoints: (builder) => ({
    getSingleData: builder.query<IReturn, IParams>({
      query: ({ slug, id }) => `/${slug}/items/${id}`
    }),
    getAllData: builder.query<IReturn[], IParams>({
      query: ({ slug }) => `/${slug}/items`,
      providesTags: [{ type: 'tag', id: 'LIST' }]
    }),
    updateItem: builder.mutation<IReturn, IParam>({
      query: ({ slug, id, body }) => {
        return {
          url: `/${slug}/items/${id}`,
          method: 'PATCH',
          body
        };
      },
      invalidatesTags: [{ type: 'tag', id: 'LIST' }]
    }),
    deleteItem: builder.mutation<IReturn, IParams>({
      query: ({ slug, id }) => {
        return {
          url: `${slug}/items/${id}`,
          method: 'DELETE'
        };
      },
      invalidatesTags: [{ type: 'tag', id: 'LIST' }]
    })
  })
});
```

- For mutations, we're writing a bit more code. In the return statement of the query, you need to specify the **URL, Method, and Body (optional)**. Just like in fetch or Axios you pass the endpoint and method and body here. Now, here's an interesting thing. When you make mutations, you're changing the data. So it means that the cache you have currently is old and stores old/wrong values. You need to update it. But first, you have to invalidate it so it can be updated right! To do that, just add an extra property invalidatesTags and add the tags that it belongs to. Also, you don't have to do it in the shown way. You can just add the tags directly inside the array like so,

```tsx
invalidatesTags: ['tag'];
```

- After including this property, whenever you make changes your cached data will be invalidated. Now you might think as your cache was invalidated you need somehow make another request to fetch new data and cache that again. Don't worry. RTK query handles that for you too. Whenever a cache is invalidated it will automatically fetch new data with the method that provides that tag.
- Now, will it run every one of them to fetch data? And when will it be executed? It will be executed when going to a page where a query method is implemented and you are fetching data. And all the loading and error handling will happen as the initial fetch.

**This far we've only created an API slice.** Now, let's see how we can allow our project to use it. To do so we need to wrap our root element with a provider and pass the **API** slice as a prop. Now here's a thing. RTK suggests you use a single slice for the APIs but you're not bound to do so. If you have a use case where you need to have separate API slices, you can do so. But it requires a bit more configuration. For now, let's just focus on our minimal configuration.

**2. Wrap with the provider :**

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { demo } from 'store/api/demoSlice';
import Index from 'pages/';

function App() {
  return (
    <ApiProvider api={demo}>
      <Index />
    </ApiProvider>
  );
}
```

To provide your slices you just have to import the exported slice from the store and pass it into the **ApiProvider** as the value of the **API** prop. For the sake of minimal setup, assuming that you have only one API slice for your whole project. You're done here. Now let's see how we can consume our API methods. Here comes the interesting part.

**3. Consuming the API methods.**

```tsx
import { demo } from 'store/api/demoSlice';

function Todos = () => {
const { data, isLoading, error } = demo.useGetAllDataQuery()
const [deleteItem, status] = demo.useDeleteItemMutation()

const handleDelete = async (id) => {
  const res = await deleteItem(id);
};

if(isLoading){
  return <div>Loading. Please wait!</div>
}

if(isError){
  return <div>Sorry! Unable to load data.</div>
}

return (
  <div>
    {data.map(item => {
       return <div key={item.id} onClick={handleDelete}>{item.title}</div>
     })}
  </div>)
}

export default Todos;
```

Wait! What? Where do these **useGetAllDataQuery** and **useDeleteItemMutation** methods come from? The methods we created are different!

Looks different but at the same time similar right? Well, you're right. Cause we did not create these methods but they sound familiar cause these are the ones we created with a bit of tweaking. RTK Query prefixed our methods with the keyword use and postfixed with the type of the method, either **Query** or **Mutation**. And to use those methods we need to use them this way.

Now, as you can see I've imported the demo module from demoSlice and used the endpoints. Here, for queries, It returns an object with some props like data, isLoading, isError, error, etc. These props are self-explanatory. To use the data you need to wait until the data is loaded. Till then show a loading message and error message for any kind of error.

For the mutation, you get a tuple in return. The first property is the handler and the second one is the status. You can also show loading states based on the status of the mutation. now you just have to call the handler passing the right param(s). And after the successful execution, the data will get invalidated and fetch new data automatically.

You can also refetch manually. Query methods return a property called refetch. It's a function and you can just call it on a click event may be to refetch. All other methods can be used in the same way.

Now you're ready to jumpstart yourself and go beyond this minimal config.

**Few things you should know :**

- You can make lazy queries. What I mean is that with the way we're consuming the endpoints now, the queries happen on page load automatically. But you might wanna do it only on a certain use case. To do that you can make lazy queries. The code will look like this,

```tsx
const [fetchAllData, { data, isLoading, isError }] =
  demo.useLazyGetAllDataQuery();
```

Now just call the fetchData method as/when you please.

- You need async await only when a method returns a tuple.
- You can cache each element of an array with the same tag type but different IDs like so,

```tsx
providesTags: (result, error, arg) =>
  result ? [...result.map(({ id }) => ({ type: 'tag', id })), 'tag'] : ['tag'];
```

- Invalidating will be similar.

```tsx
invalidatesTags: (result, error, arg) => [{ type: 'tag', id: arg.id }];
```
