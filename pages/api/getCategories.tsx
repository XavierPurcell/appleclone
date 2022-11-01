// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";
import { groq } from "next-sanity"; // isnt an issue but...

const query = groq`*[_type == "category"] {
_id,
  ...
}`;

type Data = {
  categories: Category[]; //{Category is the same}
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const categories = await sanityClient.fetch(query);
  console.log(categories);
  res.status(200).json({ categories });
}




/*


const query = groq`*[_type == "products"] {
_id,
  ...
}`;


*/