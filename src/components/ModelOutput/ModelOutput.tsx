import { FC } from 'react';
import { IModelOutputProps } from '../../types/Model';

const ModelOutput: FC<IModelOutputProps> = ({ index, item, param }) => {
    return (
        <div className='model_output'>
            <span>{param[index].name} : </span>
            {param[index].id === item.paramId && (
                <p id={item.paramId.toString()}>{item.value}</p>
            )}
        </div>
    );
};

export default ModelOutput;
