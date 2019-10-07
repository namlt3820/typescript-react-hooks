import React from 'react'

interface IUser {
    username: string;
    email: string;
    password: string;
}

interface IProps {
    initState: IUser
}

export const UseState: React.FC<IProps> = ({ initState }) => {
    const [user, setUser] = React.useState<IUser | null>(initState)

    if (!user) {
        return null
    }

    return <form>
        <input type="text" value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} />
        <input type="text" value={user.username} onChange={e => setUser({ ...user, username: e.target.value })} />
        <input type="text" value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} />
    </form>
}