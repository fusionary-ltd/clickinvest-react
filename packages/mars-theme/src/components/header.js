import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import { useEffect } from "react";

const Header = ({ state }) => {
  useEffect(() => {
    const rankMathElements = [];

    fetch("https://architects-seattle.com/wp-json/rankmath/v1/getHead?url=" + state.source.url + "/" + state.router.link).then(async (response) => {
      const json = await response.json();
      const { head } = json;
      const tempElement = document.createElement("div");
      tempElement.innerHTML = head;
      for (const child of tempElement.children) {
        document.head.appendChild(child);
        rankMathElements.push(child);
      }
      tempElement.remove();
    });

    return () => {
      for (const child of rankMathElements) {
        document.head.removeChild(child);
        child.remove();
      }
    }
  }, [state.router.link]);

  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description>
        <MobileMenu />
      </Container>
      <Nav />
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
