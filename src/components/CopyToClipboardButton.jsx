import { useEffect, useState } from 'react'
import CopyIcon from './icons/CopyIcon'
import CopiedIcon from './icons/CopiedIcon'

const CopyToClipBoardButton = ({shortUrl, }) => {
    const [isCopied, setIsCopied]= useState(false)

    const CopyUrlToClipBoard = async (shortUrl) => {
        navigator.clipboard.writeText(`${location.origin}/${shortUrl}`)
        setIsCopied(!isCopied)
    }

    useEffect(()=>{
        setTimeout(() => {
            setIsCopied(false)
        }, 2000);
    },[isCopied])
    return (
        <button
            onClick={() => CopyUrlToClipBoard(shortUrl)}>{isCopied ? <CopiedIcon/> : <CopyIcon/>}</button>
    )
}

export default CopyToClipBoardButton
