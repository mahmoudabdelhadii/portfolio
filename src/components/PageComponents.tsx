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

interface WrapperProps {
  name: string;
  children: JSX.Element | JSX.Element[];
  showTitle?: boolean;
  ParentClass?: string;
  HeaderClass?: string;
  ChildrenClass?: string;
  SubParentClass?: string;
  disableCenter?: boolean;
}
export const Wrapper: React.FunctionComponent<WrapperProps> = ({
  children,
  name,
  showTitle,
  ParentClass,
  HeaderClass,
  ChildrenClass,
  SubParentClass,
  disableCenter,
}) => {
  return (
    <div className={`${"w-full " + (ParentClass ? ParentClass : "")}`}>
      {showTitle && (
        <div
          className={`${
            "flex flex-row justify-start items-center " +
            (SubParentClass ? SubParentClass : "")
          }`}
        >
          <h1
            className={`${
              "mb-6 leading-12 text-6xl h-fit " +
              (HeaderClass ? HeaderClass : "")
            }`}
          >
            {name}
            <PlusSign>+</PlusSign>
          </h1>
        </div>
      )}
      <div
        className={`${
          "flex flex-row justify-start items-center " +
          (ChildrenClass ? ChildrenClass : "")
        }`}
      >
        {children}
      </div>
    </div>
  );
};
