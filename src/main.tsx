import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { IModel, IParam } from './types/Model';

const params: IParam[] = [
    { id: 1, name: 'Назначение', type: 'text' },
    { id: 2, name: 'Длина', type: 'text' },
];

const model: IModel = {
    paramValues: [
        { paramId: 1, value: 'повседневное' },
        { paramId: 2, value: 'макси' },
    ],
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App params={params} model={model} />
    </React.StrictMode>
);
