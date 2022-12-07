export interface IParam {
    id: number;
    name: string;
    type: string | 'number';
}

export interface IParamValue {
    paramId: number;
    value: string;
}

export interface IModel {
    paramValues: IParamValue[];
}

export interface IAppProps {
    params: IParam[];
    model: IModel;
}

export interface IModelProps {
    item: IParamValue;
    index: number;
    setParamVal: React.Dispatch<React.SetStateAction<IModel>>;
    param: IParam[];
}

export interface INewParamFormProps {
    newParam: string;
    setNewParam: React.Dispatch<React.SetStateAction<string>>;
    setParam: React.Dispatch<React.SetStateAction<IParam[]>>;
    setParamVal: React.Dispatch<React.SetStateAction<IModel>>;
}

export interface IModelOutputProps {
    item: IParamValue;
    index: number;
    param: IParam[];
}
