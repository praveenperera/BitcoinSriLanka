import Head from "next/head";
import ReactSearchBox from "react-search-box";

export default function Home() {
  const data = [
    {
      key: "cinnamon-grand",
      value: "Cinnamon Grand",
      attributes: {
        name: "Cinnamon Grand",
        location: "Colombo",
        category: "Hotel",
      },
    },
  ];
  return (
    <div className="container" data-theme="luxury">
      <Head>
        <title>Bitcoins Sri Lanka</title>
      </Head>
      {/* Create Hero with DaisyUI and Tailwind */}
      <div className="hero flex flex-col justify-center items-center mt-20">
        <h1 className="hero__title text-5xl font-bold text-center">
          Bitcoins Sri Lanka
        </h1>
        <p className="hero__subtitle text-2xl text-center mt-10">
          We're bringing Bitcoin to everyone in Sri Lanka. Join us and be part
          of a decentralised economy.
        </p>
      </div>
      {/* Create Search box for companines that accept Bitcoin */}
      <div className="search flex flex-col justify-center items-center mt-20">
        <h2 className="search__title text-3xl font-bold text-center">
          Search for companies that accept Bitcoin
        </h2>
        <div className="search__box flex justify-center items-center mt-10 mb-10">
          <ReactSearchBox
            placeholder="CSBL"
            value="Cinnamon Grand"
            data={data}
            callback={(record) => {
              console.log(record);
            }}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Company Name</th>
                <th>Location</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {/* map over data to display name, */}
              {data.map((item) => {
                return (
                  <tr>
                    <td className="w-1/3">{item.attributes.name}</td>
                    <td className="w-1/3">{item.attributes.location}</td>
                    <td className="w-1/3">{item.attributes.category}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
