import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Todos from "./components/Todos";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  );
}

export default App;
