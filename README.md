# Up Your ML Game - PyHEP Talk

A practical guide to the ML landscape for high-energy physics, covering frameworks, tools, and shortcuts to boost productivity.

## 🚀 Setup

```bash
# Install core dependencies
pip install -r requirements.txt

# Optional: Install additional tools as needed
# Uncomment lines in requirements.txt for tools you want to demo
```

## 📊 Running the Talk with RISE

This notebook is **optimized for RISE** - a Jupyter extension that creates beautiful, live-code slideshows!

### Setup RISE:

```bash
# Install dependencies including RISE
pip install -r requirements.txt

# If you get protobuf errors (MessageFactory issue), run:
pip install --upgrade "protobuf>=3.20.3,<4.0.0"

# Launch the notebook
jupyter notebook pyhep-talk.ipynb

# Click the chart icon (📊) in the toolbar to start the slideshow
# Or use Alt+R (Windows/Linux) or Option+R (Mac)
```

### 🔧 How to Use RISE

**Starting the Slideshow:**
1. Open `pyhep-talk.ipynb` in Jupyter Notebook
2. Click the chart icon (📊) in the toolbar, **OR**
3. Press `Alt+R` (Windows/Linux) or `Option+R` (Mac)

**Navigating Slides:**
- **Space / Right Arrow** → Next slide
- **Left Arrow** → Previous slide  
- **Down Arrow** → Next subslide (goes down within a section)
- **Up Arrow** → Previous subslide
- **Home** → First slide
- **End** → Last slide

**Running Code:**
- **Shift+Enter** → Run cell (may auto-advance - see bug notes below)
- **Ctrl+Enter** → Run cell without advancing

**Presentation Tools:**
- **B** → Toggle chalkboard (draw on slides!)
- **C** → Clear chalkboard drawings
- **W** → Overview mode (see all slides at once)
- **Esc** → Exit slideshow

### ⚠️ Known Issues/Bugs

The following bugs exist in the current setup and haven't been fully resolved:

1. **Auto-scrolling when running cells**: Sometimes when you press `Shift+Enter` to run a code cell, the slideshow will auto-advance to the next slide. This is inconsistent - it happens about 50% of the time. 
   - **Workaround**: If it auto-advances, just press Left Arrow to go back. Or use `Ctrl+Enter` instead (though this won't run fragments).

2. **Scroll position carries over between slides**: If you scroll down on a slide, when you navigate to the next slide it will also be scrolled down, and you won't be able to see the top content. 
   - **Workaround**: Always scroll to the top of a slide before navigating to the next one. Use the scroll wheel or click and drag the scrollbar to the top.
   - **Alternative**: You can use browser developer tools and run this in the console to auto-scroll slides to top (must be done each time you start the slideshow):
     ```javascript
     Reveal.addEventListener('slidechanged', () => {
         document.querySelector('.reveal .slides section.present').scrollTop = 0;
     });
     ```

These are RISE configuration limitations that couldn't be fully fixed through CSS or notebook settings.

### 💡 RISE Features Enabled:

✅ **Live code execution** - Run cells during presentation  
✅ **Smooth transitions** - Professional slide animations  
✅ **Chalkboard** - Draw/annotate slides with 'B' key  
✅ **Slide numbers** - Track your progress  
✅ **Progress bar** - Visual indicator at bottom  
✅ **Scrolling** - Long code cells scroll smoothly  
✅ **Dark theme** - Optimized for presentations  
✅ **Readable output** - Dark backgrounds, proper text colors

## 🎯 Talk Structure & Timing (45-60 min)

- **Introduction** (5 min) - Why this matters, what we'll cover
- **ML Frameworks** (10 min) - Live demos of PyTorch, Scikit-learn, JAX
- **Workflow Tools** (8 min) - W&B, Optuna, MLflow
- **Training & Deployment** (7 min) - HTCondor, ONNX, hls4ml
- **HEP-ML Bridge** (10 min) - uproot, awkward (run the interactive demo!)
- **Industry Tools** (5 min) - Testing, CI/CD
- **Fun Shortcuts** (8 min) - LLMs, Hugging Face
- **Summary & Q&A** (7 min) - Key takeaways

## 💡 Presentation Tips

### What to Run Live:
- ✅ Cell 4: Generate fake data
- ✅ Cell 6: PyTorch training (shows the verbose approach)
- ✅ Cell 8: Scikit-learn (shows how simple it can be)
- ✅ Cell 31: Awkward array demo (very impressive for HEP folks!)
- ✅ Cell 43: LLM example (gets laughs)
- ✅ Cell 47: Quick tricks

### What to Skip/Mention:
- ⏭️ PyTorch Lightning (cell 10) - Commented out, just explain
- ⏭️ JAX (cell 12) - Commented out, mention the speed benefits
- ⏭️ W&B/Optuna - Show screenshots instead of running (need accounts)
- ⏭️ Hugging Face - Explain concept, skip running (takes time to download)

### Interactive Moments:
1. **Cell 31 (Awkward Array)**: Ask audience "How many of you have dealt with variable-length jets?" then show how awkward solves it
2. **Framework comparison**: Ask "Who here uses PyTorch? Scikit-learn? JAX?" to gauge the room
3. **LLM discussion**: Ask "Who's using ChatGPT/Copilot for code?" (most hands will go up)

## 🎨 Customization

Before presenting, update:
- Cell 0: Your name and correct date (currently "Liv V 28.10.2025")
- Cell 51: Add your GitHub repo link and contact info

### For Different Audiences:

**Beginner-heavy audience:**
- Spend more time on Scikit-learn and Keras
- Skip or briefly mention JAX and hls4ml
- Focus on W&B and Optuna for workflow

**Advanced audience:**
- Quickly skim frameworks
- Deep dive on hls4ml, JAX, advanced deployment
- Focus on optimization and scaling

**Mixed audience (recommended):**
- Follow the current structure
- Mention "for beginners..." and "for advanced users..." throughout
- Let people self-select what they pay attention to

## 🔧 Troubleshooting

### Common Issues:

**Protobuf error (MessageFactory):**
```bash
# Fix protobuf compatibility issue
pip install --upgrade "protobuf>=3.20.3,<4.0.0"
# Then restart Jupyter kernel
```

**If awkward import fails:**
```bash
pip install awkward --upgrade
```

**If torch import fails:**
```bash
# For CPU-only version
pip install torch --index-url https://download.pytorch.org/whl/cpu

# For CUDA support (if you have GPU)
pip install torch --index-url https://download.pytorch.org/whl/cu118
```

**Custom CSS not loading:**
Make sure `rise.css` is in the same directory as the notebook. The notebook metadata should reference it. If slides don't look right, check that the RISE configuration in the notebook metadata includes:
```json
"custom_css": "rise.css"
```

**If running in a fresh environment:**
Start with just the core packages:
```bash
pip install torch scikit-learn numpy awkward jupyter matplotlib rise
```

## 📚 Additional Resources

Include these links in your talk:
- Scikit-HEP: https://scikit-hep.org/
- PyHEP Working Group: https://hepsoftwarefoundation.org/workinggroups/pyhep.html
- W&B for Academics: https://wandb.ai/site/research
- fast.ai Course: https://course.fast.ai/
- Papers with Code: https://paperswithcode.com/

## 🎤 After the Talk

Consider making available:
- This notebook on GitHub
- A recording (if permitted)
- A blog post summarizing key points
- Links to additional resources

## 📝 Notes

### About the Custom Styling

This notebook includes custom CSS (`rise.css`) to improve the presentation:
- Dark theme with better contrast
- Scrollable slides for long content
- Readable code output (dark backgrounds, proper text colors)
- Larger tables in output
- Proper table styling with borders

The CSS is automatically loaded via RISE configuration.

### Presentation Tips

- Most code examples use fake data to work without external files
- Some cells are intentionally commented out (they'd require accounts, large downloads, etc.)
- The awkward array example is a highlight - make sure to run it!
- Keep the tone light and fun - this should be enjoyable!
- Remember to scroll to top before changing slides (see bug notes)
- If auto-advance happens, just press Left Arrow to go back

---

**Good luck with your talk! 🎉**

Questions or improvements? Feel free to adapt this material for your needs.

