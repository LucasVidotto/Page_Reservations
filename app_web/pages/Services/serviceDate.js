import Styled from '../../styles/serviceSate.module.css';
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import PhoneInput from 'react-phone-input-2'
import axios from 'axios';
const baseURL = "http://localhost:3333/teste";

export default function ServicesDate(){
    const [last,setLast] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    function handlerteste(){
        axios
        .post(baseURL, {
            name: "Hello World!",
            last: "This is a new post.",
            phone: "321321",
      })
      .then((response) => {
        alert('Feito');
      });
    
    }
    return(
        <>
        <Dialog.Root>
            <Dialog.Trigger asChild>
            <button className = {Styled.Buttonviolet} size="large">
                Edit profile
            </button>
            </Dialog.Trigger>
            <Dialog.Portal>
            <Dialog.Overlay className = {Styled.DialogOverlay} />
            <Dialog.Content className = {Styled.DialogContent}>
                <Dialog.Title className = {Styled.DialogTitle}>Edit profile</Dialog.Title>
                <Dialog.Description className = {Styled.DialogDescription}>
                Make changes to your profile here. Click save when you're done.
                </Dialog.Description>
                <fieldset className = {Styled.Fieldset}>
                <label className = {Styled.Label} htmlFor="name">
                    Name
                </label>
                <input 
                    className = {Styled.Input} 
                    id="name" 
                    /* defaultValue="Pedro Duarte" */ 
                    placeholder="Lucas Vidotto"
                    onChange={(e)=>setName(e.target.value)}/>
                </fieldset>
                <fieldset className = {Styled.Fieldset}>
                <label className = {Styled.Label} htmlFor="username">
                    Username
                </label>
                <input 
                className = {Styled.Input} 
                id="username" 
                /* defaultValue="@peduarte" */ 
                placeholder="Vidotto"
                onChange={(e)=>setLast(e.target.value)}/>
                </fieldset>
                <fieldset className = {Styled.Fieldset}>
                <label className = {Styled.Label} htmlFor="phone">
                    Phone
                </label>
                <PhoneInput
                    className = {Styled.Input} 
                    country={'us'}
                    value={phone}
                    onChange={phone => setPhone(phone)}
                />
                </fieldset>
                <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                <Dialog.Close asChild>
                    <button 
                    type="button"
                    className = {Styled.Buttongreen}
                    onClick={handlerteste}>
                        Save changes
                    </button>
                </Dialog.Close>
                </div>
                <Dialog.Close asChild>
                <button className = {Styled.IconButton} aria-label="Close">
                    <AiOutlineClose size={20}/>    
                </button>
                </Dialog.Close>
            </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
        </>
    )
}