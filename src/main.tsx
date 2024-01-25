import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes/Routes.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '../src/scss/index.scss';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Routes />
            <ReactQueryDevtools />
        </QueryClientProvider>
    </React.StrictMode>,
);
