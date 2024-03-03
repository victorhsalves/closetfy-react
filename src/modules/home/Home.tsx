import { useEffect } from "react";
import { Header, SideFilter, Card, Footer } from "../../components";
import { useCloset } from "./hooks/useCloset";

export default function Home() {

  const { data, handleSearchChange, search } = useCloset();
  useEffect(() => { }, [data])
  const toRender = data?.retrieveClosetById?.product.filter((result) => {
    return result?.nameOfProduct?.toLowerCase().includes(search.toLowerCase());
  }
  );
  const user = data?.retrieveClosetById?.user
  const category = data?.retrieveClosetById?.category
  return (
    <main className={"flex h-screen gap-5 pt-6 flex-wrap max-w-[1280px] min-w-[420px] flex-col px-1 sm:px-3 md:px-7 py-10"}>
      <Header
        search={search}
        handleSearch={handleSearchChange}
      />
      <section className="flex flex-row gap-3 py-1 w-full h-full">
        <SideFilter
          categories={category}
          user={user}
        />
        <div className="flex flex-col w-full p-2 h-full">
          <div className="flex justify-between text-xs items-end">
            <span className="text-xl">Todas</span>
            <div className="flex gap-3">
              <span>Showing: 10-100</span>
              <span>Sort by: Most Popular</span>
            </div>
          </div>
          <div className="flex gap-3 w-full justify-between">
            {toRender?.map((result, index) => (
              <Card clothingInfo={result} key={index} />
            ))}
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}
