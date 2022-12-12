export default function Header(props: { title: string; active: string }) {
  return (
    <div>
      <header
        class={"mx-auto max-w-screen-lg flex gap-3 justify-between sticky"}
      >
        {
          <div class="p-3 flex items-center">
            <Logo />
            <Title title={props.title} />
          </div>
        }
      </header>
    </div>
  );
}

function Logo() {
  return (
    <a href="/" class="flex mr-2 items-center">
      <img
        src="/logo.png"
        alt="Chicken Suop logo"
        width={20}
        height={20}
      />
    </a>
  );
}

function Title(props: { title: string }) {
  return (
    <>
      <a
        href="/"
        class="text(1xl text) block flex items-center"
      >
        {props.title}
      </a>
    </>
  );
}
