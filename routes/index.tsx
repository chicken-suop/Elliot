import { asset, Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import { PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
import { tw } from "twind";
import { css } from "twind/css";

const TITLE = "Elliot Schep";
const DESCRIPTION = "Software Developer.";
const heroPatternStyles = css`
background-color: #e5e5f7;
opacity: 0.8;
background: radial-gradient(circle, transparent 20%, #e5e5f7 20%, #e5e5f7 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #e5e5f7 20%, #e5e5f7 80%, transparent 80%, transparent) 25px 25px, linear-gradient(#444cf7 2px, transparent 2px) 0 -1px, linear-gradient(90deg, #444cf7 2px, #e5e5f7 2px) -1px 0;
background-size: 50px 50px, 50px 50px, 25px 25px, 25px 25px;
`;

export default function Home(props: PageProps) {
  const ogImageUrl = new URL(asset("/home-og.png"), props.url).href;

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.url.href} />
        <meta property="og:image" content={ogImageUrl} />
      </Head>

      <div class="flex flex-col min-h-screen">
        <div class={"flex flex-col"}>
          <Header title={TITLE} active="/" />
        </div>
        <div class={tw`flex-1 ${heroPatternStyles}`}>
        </div>
      </div>
    </>
  );
}
