import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

console.log('🔨 Building React OCR App...')
console.log('⚠️  Note: This is a simplified build. For production, consider using Vite, Webpack, or Bun.')
console.log('')

// Create dist directory
await fs.mkdir('./dist', { recursive: true })

// Copy public files
console.log('📁 Copying public files...')
await copyDir('./public', './dist')

// Copy source files (since we don't have a bundler)
console.log('📦 Copying source files...')
await copyDir('./src', './dist/src')

// Copy node_modules for browser
console.log('📦 Copying ONNX runtime files...')
try {
  const wasmFiles = await fs.readdir('./node_modules/onnxruntime-web/dist')
  for (const file of wasmFiles) {
    if (file.endsWith('.wasm') || file.endsWith('.js') || file.endsWith('.mjs')) {
      await fs.copyFile(
        `./node_modules/onnxruntime-web/dist/${file}`,
        `./dist/${file}`
      )
    }
  }
  console.log('✅ ONNX runtime files copied')
} catch (error) {
  console.warn('⚠️  Warning: Could not copy ONNX WASM files:', error.message)
}

// Copy React for browser
console.log('📦 Copying React files...')
try {
  await fs.mkdir('./dist/react', { recursive: true })
  await fs.mkdir('./dist/react-dom', { recursive: true })
  
  // Note: In production, you'd use a bundler instead
  console.log('⚠️  For production builds, use a proper bundler (Vite, Webpack, etc.)')
} catch (error) {
  console.warn('⚠️  Warning:', error.message)
}

console.log('')
console.log('✅ Build complete!')
console.log('📝 Note: To serve the app, run: npx serve dist -p 3000')
console.log('   Or use any static file server.')

async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true })
  const entries = await fs.readdir(src, { withFileTypes: true })

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath)
    } else {
      await fs.copyFile(srcPath, destPath)
    }
  }
}
