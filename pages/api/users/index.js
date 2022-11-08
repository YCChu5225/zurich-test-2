export default async function handler(req, res) {
  try {
    const data = await fetch(process.env.API_URL + "?page=1");
    const data2 = await fetch(process.env.API_URL + "?page=2");
    const json = await data.json();
    const json2 = await data2.json();

    res.status(200).json([...json.data, ...json2.data]);
    // res.status(200).json(json2);
    return json;
  } catch (error) {
    console.log(error);
  }
}
