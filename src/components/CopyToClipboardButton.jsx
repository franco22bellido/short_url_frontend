import { useState } from 'react'

const CopyToClipBoardButton = ({shortUrl}) => {
    const [isCopied, setIsCopied]= useState(false)

    const CopyUrlToClipBoard = async (shortUrl) => {
        navigator.clipboard.writeText(`${location.origin}/${shortUrl}`)
        setIsCopied(!isCopied)
    }

    return (
        <button className='w-full sm:w-24 py-2 rounded-full bg-slate-600'
            onClick={() => CopyUrlToClipBoard(shortUrl)}>{isCopied ? 'Copied' : 'Copy'}</button>
    )
}

export default CopyToClipBoardButton
