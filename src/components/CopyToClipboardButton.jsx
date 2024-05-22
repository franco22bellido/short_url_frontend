import { useEffect, useState } from 'react'
import CopyIcon from './icons/CopyIcon'
import CopiedIcon from './icons/CopiedIcon'

const CopyToClipBoardButton = ({ shortUrl, }) => {
    const [isCopied, setIsCopied] = useState(false)

    const CopyUrlToClipBoard = async (shortUrl) => {
        navigator.clipboard.writeText(`${location.origin}/${shortUrl}`)
        setIsCopied(!isCopied)
    }

    useEffect(() => {
        if (isCopied === true) {
            setTimeout(() => {
                setIsCopied(!isCopied)
            }, 2000);
        }
    }, [isCopied])
    return (
        <button
            className='hover:scale-110 transition-all'
            onClick={() => CopyUrlToClipBoard(shortUrl)}>{isCopied ? <CopiedIcon /> : <CopyIcon />}</button>
    )
}

export default CopyToClipBoardButton
