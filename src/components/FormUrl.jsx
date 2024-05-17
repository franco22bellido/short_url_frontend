import { useForm } from "react-hook-form";
import { useUrls } from "../context/UrlContext";
import PasteFromClipBoardButton from "./PasteFromClipBoardButton";
import ErrorMessage from "./ErrorMessage";

const FormUrl = () => {
    const {addUrl, errors: errorsUrl} = useUrls();
    const { handleSubmit, reset, register, setValue, getValues, formState: {errors}} = useForm()

    const onSubmit = handleSubmit(async (values) => {
        const { url } = values;
        addUrl(url)
        reset()
    })

  return (
    <>
        <form onSubmit={onSubmit} className="md:w-[700px] flex flex-row justify-center flex-wrap my-10 gap-4" action="">
            <ErrorMessage className="sm:ml-14 text-lg" error={errors.url} message={'the field url cannot be a empty'}/>
            <input {...register('url', { required: true })} className='w-full sm:w-[343px] px-5 py-1 border rounded' type="text" placeholder='write your url'/>
            <button type='submit' className='w-full sm:w-24 py-2 rounded-full bg-slate-600 hover:scale-105 transition-all'>save url</button>
            <PasteFromClipBoardButton text={()=> getValues('url')} setText={(text)=> setValue('url', text)}/>
            {
              errorsUrl &&
              errorsUrl.map((error, i)=> (
                <ErrorMessage className={'text-center text-lg'} key={i} error={error} message={error}/>
              ))
            }
        </form>
    </>

  )
}

export default FormUrl
