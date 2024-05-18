import PasteIcon from "./icons/PasteIcon"

const PasteFromClipBoardButton = ({setText, text}) => {

  const paste = async ()=> {
    let newText = text()
    let readText = await navigator.clipboard.readText()
    return setText(newText.concat(readText))
  }
  return (
    <button type="button" className="hover:scale-105 transition-all"
    onClick={paste}>
      <PasteIcon className={'size-8'}/>
    </button>
  )
}

export default PasteFromClipBoardButton
