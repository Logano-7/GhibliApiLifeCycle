import { Container } from "react-bootstrap";
import TopNav from "../topnav/topnav.component";

export default function MainLayout(props) {
  const { children, className } = props;

  return (
    <>
      <div className={className}>
        <TopNav />
        <Container>
          <div className="my-4">{children}</div>
        </Container>
      </div>
    </>
  );
}
