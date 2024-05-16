const PasteFromClipBoardButton = ({setText, text}) => {

  const paste = async ()=> {
    let newText = text()
    let readText = await navigator.clipboard.readText()
    return setText(newText.concat(readText))
  }
  return (
    <button type="button" className="bg-cyan-900 p-0 w-32 border rounded border-slate-900
    hover:scale-105 transition-all"
    onClick={paste}>Paste</button>
  )
}

export default PasteFromClipBoardButton
