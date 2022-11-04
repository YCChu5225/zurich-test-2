import React, { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import styles from "./Homepage.module.css";

const Homepage = () => {
  const [data, setData] = useState(null);
  const [dataList, setDataList] = useState(null);
  const [pageList, setPageList] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isName, setisName] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://reqres.in/api/users?page=" + page);
      const json = await data.json();

      setPageList(json.total_pages);

      setData(json.data);
      setDataList(json.data);
    };

    setisName("");

    setIsLoading(true);
    fetchData().catch(console.error);
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, [page]);

  const filterByName = (pos) => {
    isName === pos ? setisName(null) : setisName(pos);

    const filteredData = data.filter((f) => {
      return (
        f[pos + "_name"].charAt(0).toLowerCase() ===
        (pos === "first" ? "g" : "w")
      );
    });
    pos !== isName ? setDataList(filteredData) : setDataList(data);
    console.log(filteredData);
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.list_container}>
          <div className={styles.list_header}>
            <div>Avatar</div>
            <div>
              <button
                className={isName === "first" ? styles.active : ""}
                onClick={() => filterByName("first")}>
                First Name
              </button>
            </div>
            <div>
              <button
                className={isName === "last" ? styles.active : ""}
                onClick={() => filterByName("last")}>
                Last Name
              </button>
            </div>
            <div>Email</div>
          </div>
          <div className={styles.list_body}>
            {isLoading ? (
              <Loader />
            ) : (
              <ul>
                {dataList?.length > 0 ? (
                  dataList.map((d) => {
                    return (
                      <li key={d.last_name}>
                        <div>
                          <img src={d.avatar} alt="Profile Pic" />
                        </div>
                        <div>{d.first_name}</div>
                        <div>{d.last_name}</div>
                        <div>{d.email}</div>
                      </li>
                    );
                  })
                ) : (
                  <li>
                    <div className={styles.no_data}>Not Found</div>
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      </section>
      <div className={styles.list_pagination}>
        {Array.from(Array(pageList), (_, x) => {
          return (
            <button
              className={page === x + 1 ? styles.active : ""}
              key={x}
              onClick={() => setPage(x + 1)}>
              {x + 1}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Homepage;
