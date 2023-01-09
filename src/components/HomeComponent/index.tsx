import { UserListRequest } from "../../modules/actions";
import logo from "../../logo.svg";

interface HomeComponentProps {
  handleLoadList: () => UserListRequest;
}

export const HomeComponent: React.FC<HomeComponentProps> = ({
  handleLoadList,
}: HomeComponentProps): JSX.Element => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit
        <code>src/App.tsx</code>
        and save to reload.
      </p>

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>

      <button
        style={{ padding: "5px", margin: "3%" }}
        type="button"
        onClick={handleLoadList}
      >
        Click to load list
      </button>
    </header>
  );
};
