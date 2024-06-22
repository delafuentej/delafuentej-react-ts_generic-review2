
import { useForm } from '../hooks/useForm'



interface FormData2 {
    firstName: string;
    secondName: string;
    age:number;
    address:string;
};

export const Form2 = () => {

    const { form, handleChange, firstName, secondName, age, address} = useForm<FormData2>({
        firstName: '',
        secondName: '',
        age:52,
        address:''
    });


  return (
    <div className='mt-5'>
        <form autoComplete='off'>
            <div className="mt-3">
                <label htmlFor='firstName' className='form-label'>First Name </label>
                <input 
                    type='text'
                    className='form-control col-sm-2'
                    name='firstName'
                    id='firstName'
                    onChange={handleChange}
                    value={firstName}
                    />
            </div>

            <div className="mt-3">
                <label htmlFor='secondName' className='form-label'>Second Name</label>
                <input 
                    
                    type='text'
                    className='form-control col-sm-2'
                    name='secondName'
                    id='secondName'
                    onChange={handleChange}
                    value={secondName}
                    />
            </div>

            <div className="mt-3">
                <label htmlFor='address' className='form-label'>Addres</label>
                <input 
                    
                    type='text'
                    className='form-control col-sm-2'
                    name='address'
                    id='address'
                    onChange={handleChange}
                    value={address}
                    />
            </div>

            <div className="mt-3">
                <label htmlFor='age' className='form-label'>Age</label>
                <input 
                    
                    type='number'
                    className='form-control col-sm-2'
                    name='age'
                    id='age'
                    onChange={handleChange}
                    value={age}
                    />
            </div>

        <pre> {JSON.stringify(form, null, 2) }</pre>

        </form>


    </div>
  )
}
