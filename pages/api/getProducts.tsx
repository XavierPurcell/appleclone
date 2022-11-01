// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";
import { groq } from "next-sanity"; // isnt an issue but...

const query = groq`*[_type == "product"] {
_id,
  ...
} | order(_createdAt asc)`;

type Data = {
  products: Product[]; //{Category is the same}
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const products = await sanityClient.fetch(query);
  console.log(products);
  res.status(200).json({ products });
}