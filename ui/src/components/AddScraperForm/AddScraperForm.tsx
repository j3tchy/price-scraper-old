import formConfig from "./formConfig";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";

export interface IInputs {
    item: string,
    originalPrice: string,
    url: string,
    img: string,
    latestPrice: string
}

async function postData(formData: any) {
    console.log(formData);
    await fetch('http://localhost:9000/api/scrapers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then(res => {
        console.log('RESPONSE');
    })
}

const AddScaperForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit: SubmitHandler<IInputs> = data => {
        postData(data);
        reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                {formConfig.map(({ label, name }) => (
                    <div className="flex flex-col mb-3" key={uuid()}>
                        <label>{label}</label>
                        <input
                            type="text"
                            className="mt-2 p-2 border-solid border border-gray-400 rounded"
                            {...register(name)}
                        />
                    </div>
                ))}
                <div className="flex mt-6 justify-end">
                    <button
                        type="submit"
                        className="bg-green-500 text-white font-bold p-2 rounded"
                    >
                        Save
                    </button>
                </div>
            </form>
        </>
    )
}

export default AddScaperForm;