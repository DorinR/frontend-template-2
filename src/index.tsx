import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorPage } from './features/ErrorPage/ErrorPage'
import { QueryClientProvider, QueryClient } from 'react-query'
import { GlobalStyle } from './css/GlobalStyle'
import { ApplicationRoutes } from './routes/coreRoutes'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <GlobalStyle />
                <Routes>
                    <Route path="/*" element={<ApplicationRoutes />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
