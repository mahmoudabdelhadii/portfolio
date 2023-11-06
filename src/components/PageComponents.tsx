import styled from "styled-components";
export const Title = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 3.75rem;
  line-height: 1rem;
`;

export const Page = styled.div<any>`
  height: ${(props) => (props.size ? props.size + "vh" : "80vh")};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
`;

export const PlusSign = styled.span`
  color: rgb(104 154 248);
  margin-left: 0.5rem;
  margin-top: 1rem;
  font-size: 3rem;
  line-height: 2rem;
  vertical-align: sub;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
interface WrapperProps {
  name: string;
  children: JSX.Element | JSX.Element[];
  showTitle?: boolean;
  size?: "fit-content" | number;
  justify?:
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "center"
    | "space-aroud"
    | "space-evenly";
}
export const Wrapper: React.FunctionComponent<WrapperProps> = ({
  children,
  name,
  showTitle,
  size,
  justify,
}) => {
  return (
    <Page name={name} size={size} justify={justify}>
      <Header>
        {showTitle && (
          <h1 className="mb-6 text-4xl leading-4 md:text-6xl">
            {name}
            <PlusSign>+</PlusSign>
          </h1>
        )}
      </Header>
      <Container>{children}</Container>
    </Page>
  );
};
