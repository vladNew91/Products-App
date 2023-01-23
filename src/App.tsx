import { QueryClient, QueryClientProvider } from "react-query";
import { HomePage } from "./pages";
import { LayoutComponent } from "./components";
import "./App.css";

const queryClient = new QueryClient();

export const App: React.FC = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <LayoutComponent>
        <HomePage />
      </LayoutComponent>
    </QueryClientProvider>
  );
};
