import fs from 'node:fs/promises'
import { $ } from 'bun'

console.log('🔨 Building React OCR App...')

// Build the React app
const result = await Bun.build({
  entrypoints: ['./src/index.tsx'],
  outdir: './dist',
  target: 'browser',
  sourcemap: 'external',
  minify: false,
})

if (!result.success) {
  console.error('❌ Build failed')
  throw new AggregateError(result.logs, 'Build failed')
}

console.log('✅ Build successful')

// Copy public files to dist
console.log('📁 Copying public files...')
await $`cp -r public/* dist/`

// Copy ONNX runtime WASM files
console.log('📦 Copying ONNX runtime files...')
try {
  await $`cp node_modules/onnxruntime-web/dist/*.wasm dist/`
  console.log('✅ All files copied successfully')
} catch (error) {
  console.warn('⚠️  Warning: Could not copy ONNX WASM files. Run "bun install" first.')
}

console.log('🎉 Build complete! Run "bun serve" to start the dev server.')
