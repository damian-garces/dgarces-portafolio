import { getPortfolioData } from "@/lib/prismic";

export default async function Home() {

  const { config } = await getPortfolioData();

  return (
    <main>
      <h1>{config.data.title}</h1>
      <p>{config.data.name}</p>
    </main>
  );

}