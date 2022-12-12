import { asset, Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
import { theme, tw } from "twind";
import { css } from "twind/css";

const TITLE = "Elliot Schep";
const DESCRIPTION = "Software Developer.";
const heroPatternStyles = css`
opacity: 0.8;
background: radial-gradient(circle, transparent 20%, ${
  theme("colors.background")
} 20%, ${
  theme("colors.background")
} 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, ${
  theme("colors.background")
} 20%, ${
  theme("colors.background")
} 80%, transparent 80%, transparent) 25px 25px, linear-gradient(${
  theme("colors.primary")
} 2px, transparent 2px) 0 -1px, linear-gradient(90deg, ${
  theme("colors.primary")
} 2px, ${theme("colors.background")} 2px) -1px 0;
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

      <div class="flex flex-col min-h-screen bg-background">
        <div class={"flex flex-col"}>
          <Header title={TITLE} active="/" />
        </div>
        <div class={tw`flex-1 ${heroPatternStyles}`}>
        </div>
      </div>
    </>
  );
}
