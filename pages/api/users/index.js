export default async function handler(req, res) {
  try {
    // const data = await fetch(process.env.API_URL + "?page=1");
    // const data2 = await fetch(process.env.API_URL + "?page=2");

    // const json = await data.json();
    // const json2 = await data2.json();

    // res.status(200).json([...json.data, ...json2.data]);

    let userLists = [];
    let i = 1;
    let totalPage = 0;

    do {
      const response = await fetch(process.env.API_URL + i);
      const json = await response.json();
      totalPage = json.total_pages;

      if (i <= totalPage) {
        userLists = userLists.concat(json.data);
      }

      i++;
    } while (i <= totalPage);

    res.status(200).json(userLists);
  } catch (error) {
    console.log(error);
  }
}
