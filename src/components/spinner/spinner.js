import styled from "styled-components";
import { ImSpinner9 } from "react-icons/im";
import colors from "./../../utils/colors";

const StyledSpinner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  .spinner {
    color: ${colors.blue};
    font-size: ${({ size }) => size}px;
    animation: rotate 3s cubic-bezier(0.79, 0.14, 0.15, 0.86) infinite;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default function Spinner({ size = 40 }) {
  return (
    <StyledSpinner size={size}>
      <ImSpinner9 className="spinner" />
    </StyledSpinner>
  );
}
