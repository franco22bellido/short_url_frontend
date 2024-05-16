import { useForm } from "react-hook-form";
import { createUrl } from "../api/url.api";
import { useUrls } from "../context/UrlContext";
import PasteFromClipBoardButton from "./PasteFromClipBoardButton";

const FormUrl = () => {
    const {urls, setUrls} = useUrls();
    const { handleSubmit, reset, register, setValue, getValues } = useForm()

    const onSubmit = handleSubmit(async (values) => {
        const { url } = values;
    
        const data = await createUrl(url)
        setUrls([...urls, data])
        reset()
    })

  return (
        <form onSubmit={onSubmit} className="flex flex-row justify-center flex-wrap my-10 gap-4" action="">
            <input {...register('url', { required: true })} className='w-full sm:w-[343px] px-20 py-1 border rounded' type="text" placeholder='write your url'/>
            <button type='submit' className='w-full sm:w-24 py-2 rounded-full bg-slate-600 hover:scale-105 transition-all'>save url</button>
            <PasteFromClipBoardButton text={()=> getValues('url')} setText={(text)=> setValue('url', text)}/>
        </form>

  )
}

export default FormUrl
