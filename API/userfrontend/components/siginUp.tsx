"use client"
import React from 'react';


interface MemberRegisterState {
    name: string;
    email: string;
    password: string;
    //photo: File;
}





const MemberRegister: React.FC = () => {
    const [state, setState] = React.useState<MemberRegisterState>({
        name: '',
        email: '',
        password: '',
        //photo: null,
    });

    const [ placeholder , setPlaceholder ] = React.useState<MemberRegisterState>()

    const handleInputChange = (e) => {
        setPlaceholder(e.target.value);
      };
    
      const handleAddTodo = () => {
        if (placeholder.trim() !== '') {
          setState([...state, placeholder]);
          setInputValue('');
        }
      };
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await fetch('/api/v1/member/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(state),
        });

        const data = await response.json();

        if (response.ok) {
            // Success!
            console.log(data);
        } else {
            // Error!
            console.error(data.error);
        }
    };

    return (
        <div>
            <h1>Member Register</h1>
            <form onSubmit={handleSubmit} className='text-black-400'>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={}

                    onChange={(e) => setState(e.target.value)}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={state.email}
                    onChange={(e) => setState({ ...state, email: e.target.value })}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={(e) => setState({ ...state, password: e.target.value })}
                />
                {/* <input
                    type="file"
                    name="photo"
                    placeholder="Photo"
                    value={state.photo}
                    onChange={(e) => setState({ ...state, photo: e.target.files[0] })}
                /> */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default MemberRegister;
