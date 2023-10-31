import { Footer } from "./app-footer";
import { Header } from "./app-header";

type Props = React.PropsWithChildren;

export const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div
        style={{
          marginTop: "4rem",
        }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};
