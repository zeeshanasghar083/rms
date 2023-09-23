import { useSelector } from 'react-redux'
import ErrorBoundary from './common/errorBoundary/errorBoundary'
import CustomRouter from './routes/CustomRouter'
import './assets/css/style.css'
import { message } from 'antd'

function App() {
  const redux = useSelector((state) => state?.test)
  console.log('==>', redux)

  message.config({ maxCount: 2, duration: 4 })

  return (
    <ErrorBoundary>
      <CustomRouter />
    </ErrorBoundary>
  )
}

export default App
