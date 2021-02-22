import React from 'react';


type ProptType = {
    a: string
    b: string
}

const SomeBlock: React.FunctionComponent<ProptType> = (props) => {
    return <div className={'block'}>
        <h2>Hello</h2>
        <p>React Lorem Ipsum is a (TypeScript-supported) React library including components and functions to generate
            placeholder text.</p>
    </div>
}

