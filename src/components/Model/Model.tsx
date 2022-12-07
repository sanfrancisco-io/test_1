import React from 'react';
import { IModelProps } from '../../types/Model';
import ModelInput from './ModelInput';

const Model: React.FC<IModelProps> = ({ item, index, param, setParamVal }) => {
    return (
        <>
            <ModelInput
                item={item}
                index={index}
                setParamVal={setParamVal}
                param={param}
            />
        </>
    );
};

export default Model;
