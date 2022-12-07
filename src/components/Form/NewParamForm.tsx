import React, { FC, useState } from 'react';
import { INewParamFormProps } from '../../types/Model';

const optionConfig: string[] = ['string', 'number'];

const NewParamForm: FC<INewParamFormProps> = ({
    newParam,
    setNewParam,
    setParam,
    setParamVal,
}) => {
    const [optionValue, setOptionValue] = useState<string>('string');

    const addParamsHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setParam((prev) => [
            ...prev,
            { id: prev.length + 1, name: newParam, type: optionValue },
        ]);

        setParamVal((prev) => {
            const newParamObj = {
                paramId: prev.paramValues.length + 1,
                value: '',
            };

            return { ...prev, paramValues: [...prev.paramValues, newParamObj] };
        });
    };

    return (
        <form className='add_param' onSubmit={(e) => addParamsHandler(e)}>
            <input
                placeholder='new param'
                value={newParam}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setNewParam(e.target.value)
                }
            />
            <div>
                <select
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setOptionValue(e.target.value)
                    }
                    name='select'
                >
                    {optionConfig.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
                <button type='submit'>add param</button>
            </div>
        </form>
    );
};

export default NewParamForm;
