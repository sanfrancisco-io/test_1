import { FC, useState } from 'react';
import NewParamForm from './components/Form/NewParamForm';
import Model from './components/Model/Model';
import ModelOutput from './components/ModelOutput/ModelOutput';
import { IAppProps, IModel, IParam } from './types/Model';

const App: FC<IAppProps> = ({ params, model }) => {
    const [param, setParam] = useState<IParam[]>(params);
    const [paramVal, setParamVal] = useState<IModel>(model);
    const [newParam, setNewParam] = useState<string>('');
    const [outputModel, setOutputModel] = useState<IModel | null>(null);

    const getModel = (): void => {
        setOutputModel(paramVal);
    };

    return (
        <div className='app'>
            <div>
                {paramVal.paramValues.map((item, index) => (
                    <Model
                        key={item.paramId}
                        item={item}
                        index={index}
                        setParamVal={setParamVal}
                        param={param}
                    />
                ))}
            </div>
            <NewParamForm
                newParam={newParam}
                setNewParam={setNewParam}
                setParam={setParam}
                setParamVal={setParamVal}
            />
            <div className='output_block'>
                <button onClick={getModel}>Get model</button>

                {outputModel?.paramValues.map((item, index) => (
                    <ModelOutput
                        key={item.paramId}
                        item={item}
                        index={index}
                        param={param}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
