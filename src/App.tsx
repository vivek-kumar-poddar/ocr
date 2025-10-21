import { useEffect, useState } from 'react'
import Ocr from './lib'
import './App.css'

function App() {
  const [ocr, setOcr] = useState<Ocr | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [imageUrl, setImageUrl] = useState<string>('')
  const [resultText, setResultText] = useState<string>('')
  const [performance, setPerformance] = useState<string>('')

  useEffect(() => {
    const initOcr = async () => {
      try {
        const ocrInstance = await Ocr.create({
          isDebug: true,
          models: {
            detectionPath: '/assets/ch_PP-OCRv4_det_infer.onnx',
            recognitionPath: '/assets/ch_PP-OCRv4_rec_infer.onnx',
            dictionaryPath: '/assets/ppocr_keys_v1.txt',
          },
        })
        setOcr(ocrInstance)
        setIsLoading(false)
      } catch (error) {
        console.error('Failed to initialize OCR:', error)
        setIsLoading(false)
      }
    }

    initOcr()
  }, [])

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file || !ocr) {
      return
    }

    const url = URL.createObjectURL(file)
    setImageUrl(url)
    setResultText('Working in progress...')

    try {
      const startTime = new Date().valueOf()
      const result = await ocr.detect(url)
      const duration = new Date().valueOf() - startTime

      const text = result.texts.map((v) => `${v.mean.toFixed(2)} ${v.text}`).join('\n')
      setResultText(text)
      setPerformance(`Performance: ${duration}ms (Close Chrome DevTools to get accurate result)`)
    } catch (error) {
      console.error('OCR detection failed:', error)
      setResultText('Error during OCR detection')
    }
  }

  return (
    <div className="app">
      <header>
        <h1>{isLoading ? '🔄 OCR is Loading...' : '✅ OCR is Ready'}</h1>
        <div className="github-link">
          <a 
            href="https://github.com/gutenye/ocr" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            ⭐ Star on GitHub
          </a>
        </div>
      </header>

      <main>
        {!isLoading && (
          <div className="upload-section">
            <input 
              type="file" 
              onChange={handleImageChange} 
              accept="image/*"
              id="file-input"
            />
            <label htmlFor="file-input" className="file-label">
              📁 Choose an image
            </label>
            {performance && <div className="performance">{performance}</div>}
          </div>
        )}

        {imageUrl && (
          <div className="result">
            <div className="result-image">
              <h3>Input Image</h3>
              <img src={imageUrl} alt="Selected" />
            </div>
            <div className="result-text">
              <h3>Detected Text</h3>
              <pre>{resultText}</pre>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
