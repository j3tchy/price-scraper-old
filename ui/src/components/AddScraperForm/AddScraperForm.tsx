import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import TextField from "../TextField";
import formConfig from "./formConfig";
import { SubmitHandler, useForm } from "react-hook-form";

export interface IInputs {
    item: string,
    originalPrice: string,
    url: string,
    img: string,
    latestPrice: string
}

const formValues = (formData) => {
    return Object.keys(formData)
        .map(key => {
            return `${encodeURIComponent(key)}=${encodeURIComponent(formData[key])}`
        }).join("&");
}

async function postData(formData: IInputs) {
    await fetch('http://localhost:9000/api/scrapers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formValues(formData)
    }).then(res => {
        console.log(res);
    })
}

const AddScaperForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit: SubmitHandler<IInputs> = data => {
        postData(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                {formConfig.map(({ label, name }) => (
                    <div className="flex flex-col mb-3">
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