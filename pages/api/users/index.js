export default async function handler(req, res) {
  try {
    // const data = await fetch(process.env.API_URL + "?page=1");
    // const data2 = await fetch(process.env.API_URL + "?page=2");

    // const json = await data.json();
    // const json2 = await data2.json();

    // res.status(200).json([...json.data, ...json2.data]);

    let userLists = [];
    let i = 1;

    do {
      const response = await fetch(process.env.API_URL + i);
      const json = await response.json();

      if (json.data && json.data.length > 0) {
        userLists = userLists.concat(json.data);
      }

      i++;
    } while (i < 3);

    res.status(200).json(userLists);
  } catch (error) {
    console.log(error);
  }
}
