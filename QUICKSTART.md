# Quick Start Guide

## ✅ Everything is Now Set Up!

The project is fully configured and ready to use. Just run one command to get started!

## 🚀 Start Development Server

```bash
npm run dev
```

That's it! This single command will:
- ✅ Start the Vite development server
- ✅ Enable Hot Module Replacement (HMR)
- ✅ Open the app at `http://localhost:3000`

## 📋 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production (output in `dist/`) |
| `npm run preview` | Preview production build locally |

## 🎯 Using the Application

1. **Open your browser** to `http://localhost:3000`
2. **Click "Choose an image"** to upload an image
3. **Wait for OCR processing** (shows loading state)
4. **View results** - input image and detected text side-by-side

## 📁 Project Structure

```
ocr/
├── src/
│   ├── App.tsx          # Main React component
│   ├── App.css          # Styles
│   ├── index.tsx        # Entry point
│   └── lib/             # OCR library
├── public/
│   └── assets/          # OCR models
├── index.html           # HTML template
└── vite.config.ts       # Build config
```

## 🔧 Troubleshooting

### Port Already in Use
If port 3000 is busy, Vite will automatically use the next available port (e.g., 3001).

### Missing Dependencies
If you see dependency errors:
```bash
npm install
```

### Type Errors
The project uses TypeScript. If you see type errors:
```bash
npm run build
```
This will show detailed type checking.

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

Output will be in the `dist/` folder. Deploy this folder to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

### Test Production Build Locally
```bash
npm run preview
```

## 📦 Dependencies

- **React 18.2** - UI framework
- **Vite 5.1** - Build tool
- **TypeScript 5.0** - Type safety
- **ONNX Runtime Web** - ML inference
- **PaddleOCR v4** - OCR models

## 💡 Tips

1. **Fast Refresh**: Save any file and see changes instantly
2. **TypeScript**: Full IntelliSense support in VS Code
3. **Models**: OCR models are in `public/assets/`
4. **Debugging**: Open browser DevTools (F12) for console logs

## 📞 Need Help?

- Check the main [README.md](./README.md)
- See [REFACTORING_SUMMARY.md](./REFACTORING_SUMMARY.md) for architecture details
- Review the code - it's well-commented!

---

**Ready to go! Just run `npm run dev` and start building! 🎉**
