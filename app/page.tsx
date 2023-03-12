import React from "react";

const getData = async () => {
  const result = await fetch(
    /** Mock JSON data works */
    // "https://jsonplaceholder.typicode.com/posts",
    "https://cms.crowdbase.eu/wp-json/wp/v2/posts?per_page=2&page=1",
    {
      cache: "no-cache",
      // next: {
      //   revalidate: 20,
      // },
    }
  );

  console.log("Getting JSON from server");

  /** Neither works */
  // const text = await result.text();
  const json = await result.json();

  console.log(json);
  return {
    foo: "bar",
  };
};

export default async function Page() {
  const data = await getData();

  return (
    <h1>
      Welcome to <a href="https://nextjs.org">Next.js!</a>
    </h1>
  );
}
