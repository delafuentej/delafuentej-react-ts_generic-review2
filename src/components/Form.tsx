
import { useForm } from '../hooks/useForm'



interface FormData {
    email: string;
    password: string;
};

export const Form = () => {

    const { form, handleChange, email, password} = useForm<FormData>({
        email: '',
        password: ''
    });

    // const {email, password} = form;


    // const [form, setForm ]= useState({
    //     email:'',
    //     password:'',
    // });

    // const handleChange=({target}:ChangeEvent<HTMLInputElement>)=>{
    //    const {name, value}= target;
    //    setForm({
    //     ...form,
    //     [name]: value
    //    })
    // }
  return (
    <div className='mt-5'>
        <form autoComplete='off'>
            <div className="mt-3">
                <label htmlFor='email' className='form-label'>Email: </label>
                <input 
                    type='email'
                    className='form-control col-sm-2'
                    name='email'
                    id='email'
                    onChange={handleChange}
                    value={email}
                    />
            </div>

            <div className="mt-3">
                <label htmlFor='inputPassword' className='form-label'>Password</label>
                <input 
                    
                    type='password'
                    className='form-control col-sm-2'
                    name='password'
                    id='inputPassword'
                    onChange={handleChange}
                    value={password}
                    />
            </div>

        <pre> {JSON.stringify(form, null, 2) }</pre>

        </form>


    </div>
  )
}
