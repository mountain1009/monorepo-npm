import { dateFormat } from "@monorepo/dayjs";

async function getData() {
  const res = await fetch("http://localhost:3001/api/hello");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="">
      <div>{data.message}</div>
      <div>{dateFormat(new Date(), "YYYY年MM月DD日 dddd")}</div>
    </div>
  );
}
