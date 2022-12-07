import React, { FC } from 'react';
import { IModelProps } from '../../types/Model';

const ModelInput: FC<IModelProps> = ({ item, index, param, setParamVal }) => {
    const handleChange = (
        paramId: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setParamVal((prev) => {
            const changedElement = prev.paramValues.map((item) => {
                return item.paramId === paramId
                    ? { ...item, value: e.target.value }
                    : item;
            });

            return { ...prev, paramValues: changedElement };
        });
    };

    return (
        <div className='model'>
            <label htmlFor={item.paramId.toString()}>{param[index].name}</label>
            {param[index].id === item.paramId && (
                <input
                    type={param[index].type}
                    onChange={(e) => handleChange(item.paramId, e)}
                    id={item.paramId.toString()}
                    value={item.value}
                />
            )}
        </div>
    );
};

export default ModelInput;
