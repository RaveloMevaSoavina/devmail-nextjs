import {useState} from 'react'

export const useForm = defaultValue =>{
    const [val, setVal] =  useState(defaultValue);
    
    return [
        val,
        ev=>{
            setVal({
                ...val, 
                [ev.target.name]: ev.target.type === 'file' ? 
                    (()=>{
                        try {
                            return {src: ev.target.value, file: URL.createObjectURL(ev.target.files[0])}
                        } catch (error) {
                            return {src: ev.target.value, file: null}
                        }
                    })() :
                    ev.target.value
            })
        }
    ]

}