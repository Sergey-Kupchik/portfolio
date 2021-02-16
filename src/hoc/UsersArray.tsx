import React from 'react';


export let usersArraay = [
    {
        name: 'Sergey',
        age: 18,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3gmzuZRPmWZTfd2-ROaCoyyA2WVz64QDPKA&usqp=CAU',
    },
    {
        name: 'Ivan',
        age: 3,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt0iBPb_0C9GM8Rg5ZS28RqRokkDZn58UUew&usqp=CAU',
    },
    {
        name: 'KAte',
        age: 17,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnZCIEdzxUBzbT0HzBU2AvzfnUujyGg54O1w&usqp=CAU',
    },
]

type usersArraayType = typeof usersArraay
type UserXPropsType = {
    users: Array<{ name: string, photo: string, age: number }>
}


type UserPropsType = {
    user: { name: string, photo: string, age: number }
}


const UserNew = (props: UserPropsType) => {
    return <>
        <div>Name: {props.user.name}</div>
        <img src={props.user.photo} alt="Photo"/>
        <div>Age: {props.user.age}</div>

    </>
}


export const UsersNew = (props: UserXPropsType) => {
    return <>
        {props.users.map((u, i) => {
            return <SmarUSE user={u} key={i}/>
        })}
    </>
}

interface HideValueInterface {
    hideValue: boolean
}

export class HideValue<T> extends React.Component<T, HideValueInterface> {
    constructor(props: T) {
        super(props);
        this.state = {
            hideValue: true
        }
    }

    onClick = () => {
        this.setState({
            hideValue: !this.state.hideValue
        })

    }

    render() {
        return <div>
            {this.state.hideValue ? (this.props.children) : (<div>Show photo</div>)}
            <div onClick={this.onClick}>CliCK on me</div>
            <div>---------------------------------------</div>
            <div>---------------------------------------</div>
        </div>
    }
}

const WrapHoc = (WrappedHOC:any)=>{
    return (props:UserPropsType)=>{
        return <HideValue>
            <div>I Work</div>
            <WrappedHOC {...props}/>
        </HideValue>
    }

}

export const SmarUSE=WrapHoc(UserNew)