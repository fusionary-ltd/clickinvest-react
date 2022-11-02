import { connect, styled } from "frontity";
import Image from "@frontity/components/image";


const PostImage = ({ state, media }) => {
  if (!media) return null;

  const srcset =
    Object.values(media.media_details.sizes)
      .map((item) => [item.source_url, item.width])
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;

  return (
    <Container isAmp={state.frontity.mode === "amp"}>
      <StyledImage
        alt={media.title.rendered}
        src={media.source_url}
        srcSet={srcset}
      />
    </Container>
  );
};

export default connect(PostImage);

const Container = styled.div`
  ${({ isAmp }) => isAmp && "position: relative;"};
`;

const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
`;