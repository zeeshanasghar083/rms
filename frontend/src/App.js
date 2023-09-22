import './App.css'
import { useSelector } from 'react-redux'
import ErrorBoundary from './common/errorBoundary/errorBoundary'
import CustomRouter from './routes/CustomRouter'

function App() {
  const redux = useSelector((state) => state?.test)
  console.log('==>', redux)

  return (
    <ErrorBoundary>
      <CustomRouter />
    </ErrorBoundary>
  )
}

export default App
