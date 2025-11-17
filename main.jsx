import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContactForm from './ContactForm'
//import Form from 'react-bootstrap/Form'


createRoot(document.getElementById('root')).render(
  // empty div must wrap multiple components!
  <> 
  <StrictMode>
    <ContactForm />
  </StrictMode>
  </>
)



/*
for later : 

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
tanstack im port : 

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* The rest of your application *}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
*/