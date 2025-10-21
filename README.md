# OCR React App

> [Demo](https://gutenye-ocr.netlify.app/) | Based on [Guten OCR](https://github.com/gutenye/ocr)

**A React-based OCR (Optical Character Recognition) application** 

Powered by [PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) and [ONNX Runtime](https://github.com/microsoft/onnxruntime), supports PP-OCRv4 model

## Features

✨ **React-based UI** - Modern, responsive web interface  
🚀 **Fast & Accurate** - Powered by PaddleOCR v4 model  
🌐 **Browser-native** - Runs entirely in the browser using ONNX Runtime Web  
📱 **Responsive Design** - Works on desktop and mobile devices  

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- Modern web browser with WebAssembly support

### Installation

```bash
# Install dependencies
bun install

# Build the application
bun run build

# Start the development server
bun run dev
```

The app will be available at `http://localhost:3000`

### Usage

1. Open the application in your browser
2. Click "Choose an image" to upload an image file
3. Wait for the OCR processing to complete
4. View the detected text results

## Project Structure

```
.
├── src/                  # React application source
│   ├── App.tsx          # Main React component
│   ├── App.css          # Styles
│   ├── index.tsx        # React entry point
│   └── lib/             # OCR library code
├── public/              # Static assets
│   ├── index.html       # HTML template
│   └── assets/          # OCR model files
├── dist/                # Built output (generated)
├── packages/            # Optional packages
│   └── react-native/    # React Native implementation
├── build.ts             # Build script
└── package.json         # Dependencies and scripts
```

## Available Scripts

- `bun run build` - Build the application for production
- `bun run dev` - Build and start development server
- `bun run serve` - Serve the built application

## React Native

For mobile React Native implementation, see:
> [React Native Package](./packages/react-native/README.md)

### API Reference

```ts
Ocr.create({
  models?: {
    detectionPath: string
    recognitionPath: string
    dictionaryPath: string
  },
  isDebug?: boolean
  debugOutputDir?: string // Node only
  recognitionImageMaxSize?: number // RN only
  detectionThreshold?: number // RN only
  detectionBoxThreshold?: number // RN only
  detectionUnclipRatiop?: number // RN only
  detectionUseDilate?: boolean // RN only
  detectionUsePolygonScore?: boolean // RN only
  useDirectionClassify?: boolean // RN only
  onnxOptions?: {}       // Node only. Pass to ONNX Runtime
}): Promise<Ocr>

ocr.detect(imagePath: string | {data: Uint8Array | Uint8ClampedArray | Buffer, width: number, height: number}, {
  onnxOptions?: {}     // Node only. Pass to ONNX Runtime
}): Promise<{texts: TextLine[], resizedImageWidth: number, resizedImageHeight: number}>

TextLine {
  text: string
  score: number
  frame: { top, left, width, height }
}

```

## Development

- Requires Git LFS to clone the repo

```sh
brew install git-lfs 
git clone git@github.com:gutenye/ocr.git
```

- [Development](docs/Development.md)

## Related Projects

| Name                                                           | Platforms | Note                            |
| -------------------------------------------------------------- | --------- | ------------------------------- |
| [eSearch-OCR](https://github.com/xushengfeng/eSearch-OCR)      | Electron  |                                 |
| [paddleocr-onnx](https://github.com/backrunner/paddleocr-onnx) | Node      | Recogination part is incomplete |
| [ocrjs](https://github.com/SOVLOOKUP/ocrjs)                    | Node      | Recogination part is incomplete |
| [Paddle-Lite-Demo](https://github.com/PaddlePaddle/Paddle-Lite-Demo) | Mobile, C++ | |
