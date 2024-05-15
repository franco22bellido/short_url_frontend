import { useForm } from "react-hook-form";
import { createUrl } from "../api/url.api";
import { useUrls } from "../context/UrlContext";

const FormUrl = () => {
    const {urls, setUrls} = useUrls();
    const { handleSubmit, reset, register } = useForm()

    const onSubmit = handleSubmit(async (values) => {
        const { url } = values;
    
        const data = await createUrl(url)
        setUrls([...urls, data])
        reset()
    })
  return (
        <form onSubmit={onSubmit} className="flex flex-row justify-center flex-wrap my-10 gap-4" action="">
            <input {...register('url', { required: true })} className='w-full sm:w-[343px] px-20 py-1 border rounded' type="text" placeholder='write your url' />
            <button type='submit' className='w-full sm:w-24 py-2 rounded-full bg-slate-600'>save url</button>
        </form>

  )
}

export default FormUrl
